import QRCode, { type QRCodeErrorCorrectionLevel } from 'qrcode'

export type QrFormat = 'png' | 'svg'
export type UrlError = 'empty' | 'invalid'
export type UrlResult = { ok: true; url: string } | { ok: false; error: UrlError }

// Level M survives a scuffed print; margin 4 is the quiet zone the spec asks for.
const OPTIONS = {
    errorCorrectionLevel: 'M' as QRCodeErrorCorrectionLevel,
    margin: 4,
    color: { dark: '#000000ff', light: '#ffffffff' },
}

const HTTP = /^https?:\/\//i
// A scheme such as "ftp:" or "javascript:" — but not "host:8080".
const OTHER_SCHEME = /^[a-z][a-z\d+.-]*:(?!\d)/i

/** Turn what a visitor typed into a link we are willing to encode. */
export function normalizeUrl(input: string): UrlResult {
    const text = input.trim()
    if (!text) return { ok: false, error: 'empty' }
    if (!HTTP.test(text) && OTHER_SCHEME.test(text)) return { ok: false, error: 'invalid' }
    const url = HTTP.test(text) ? text : `https://${text}`
    try {
        const { hostname } = new URL(url)
        const tld = hostname.split('.').pop() ?? ''
        if (/\s/.test(url) || !hostname.includes('.') || tld.length < 2) throw new Error()
        return { ok: true, url }
    } catch {
        return { ok: false, error: 'invalid' }
    }
}

const CAPTION = 'qrnomad.com'

/**
 * Free codes carry a small qrnomad.com caption under the code. It sits below
 * the quiet zone, so it never touches what the scanner reads.
 */
function withCaption(qrSvg: string, total: number): { svg: string; width: number; height: number } {
    const font = +(total * 0.06).toFixed(2)
    const height = +(total + font * 1.8).toFixed(2)
    const inner = qrSvg.replace('<svg ', `<svg x="0" y="0" width="${total}" height="${total}" `)
    const svg =
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${total} ${height}">` +
        `<rect width="${total}" height="${height}" fill="#ffffff"/>${inner}` +
        `<text x="${total / 2}" y="${+(total + font * 1.1).toFixed(2)}" text-anchor="middle" ` +
        `font-family="Arial, Helvetica, sans-serif" font-size="${font}" fill="#5A5A55">${CAPTION}</text></svg>`
    return { svg, width: total, height }
}

/** Captioned SVG markup plus the module count (without quiet zone). */
export async function renderSvg(text: string): Promise<{ svg: string; size: number; width: number; height: number }> {
    const qrSvg = await QRCode.toString(text, { ...OPTIONS, type: 'svg' })
    const size = QRCode.create(text, OPTIONS).modules.size
    return { ...withCaption(qrSvg, size + OPTIONS.margin * 2), size }
}

/** 1024 px wide PNG as data URL. Browser only: draws the captioned SVG on a canvas. */
export async function renderPng(text: string): Promise<string> {
    const { svg, width, height } = await renderSvg(text)
    const w = 1024
    const h = Math.round((w * height) / width)
    const img = new Image()
    img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg.replace('<svg ', `<svg width="${w}" height="${h}" `))}`
    await img.decode()
    const canvas = Object.assign(document.createElement('canvas'), { width: w, height: h })
    canvas.getContext('2d')!.drawImage(img, 0, 0, w, h)
    return canvas.toDataURL('image/png')
}
