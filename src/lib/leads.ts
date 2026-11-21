import { LEAD_CAPTURE_URL, leadSegment } from '../config'

/** Loose check: something@domain.tld. Launch Kit validates again. */
export const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s)

/**
 * Put `email` on the list for `lang`. Launch Kit mails a confirmation link first.
 * Never throws: the download must not depend on this request. Sends no QR link.
 */
export async function subscribe(email: string, lang: string, hp: string): Promise<void> {
    try {
        await fetch(LEAD_CAPTURE_URL, {
            method: 'POST',
            keepalive: true,
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, segment: leadSegment(lang), hp }),
        })
    } catch {
        // Offline or blocked: the visitor still has the file.
    }
}
