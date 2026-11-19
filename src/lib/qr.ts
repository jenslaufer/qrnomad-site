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

/** SVG markup plus the module count (without quiet zone). */
export async function renderSvg(text: string): Promise<{ svg: string; size: number }> {
    const svg = await QRCode.toString(text, { ...OPTIONS, type: 'svg' })
    const size = QRCode.create(text, OPTIONS).modules.size
    return { svg, size }
}

/** 1024 px PNG as data URL. Browser only: the browser build draws on a canvas. */
export function renderPng(text: string): Promise<string> {
    return QRCode.toDataURL(text, { ...OPTIONS, type: 'image/png', width: 1024 })
}
