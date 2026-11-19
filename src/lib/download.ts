import { renderPng, renderSvg, type QrFormat } from './qr'

/** Save the code for `text` as a file, e.g. qr-code-example.com.png. */
export async function downloadQr(text: string, format: QrFormat): Promise<void> {
    const name = `qr-code-${new URL(text).hostname}.${format}`
    const href = format === 'png'
        ? await renderPng(text)
        : URL.createObjectURL(new Blob([(await renderSvg(text)).svg], { type: 'image/svg+xml' }))
    const a = Object.assign(document.createElement('a'), { href, download: name })
    document.body.append(a)
    a.click()
    a.remove()
    if (format === 'svg') setTimeout(() => URL.revokeObjectURL(href), 1000)
}
