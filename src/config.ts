/** Public origin of this site. Canonicals, hreflang and og:url build on it. */
export const SITE_URL = 'https://qrnomad.com'

/** Every paid CTA ("Code änderbar machen", pricing button) points here. */
export const APP_URL = 'https://app.qrnomad.com/signup'

/** Checkout link. The app turns `url` (the generator's link) into the buyer's first code. */
export function signupUrl(lang: string, url?: string): string {
    const q = new URLSearchParams({ lang })
    if (url) q.set('url', url)
    return `${APP_URL}?${q}`
}
