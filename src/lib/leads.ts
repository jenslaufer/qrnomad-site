import { LEAD_CAPTURE_URL, leadSegment } from '../config'

/** Loose check: something@domain.tld. Launch Kit validates again. */
export const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)

/**
 * Put `email` on the list for `lang`. Launch Kit mails a confirmation link first.
 * Resolves to whether Launch Kit accepted it; never throws, so the download
 * never depends on this request. Sends no QR link.
 */
export async function subscribe(email: string, lang: string, hp: string): Promise<boolean> {
    try {
        const res = await fetch(LEAD_CAPTURE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, segment: leadSegment(lang), hp }),
        })
        return res.ok
    } catch {
        // Offline or blocked: the visitor still has the file.
        return false
    }
}
