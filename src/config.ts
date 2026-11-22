import { campaign } from './lib/campaign'

/** Public origin of this site. Canonicals, hreflang and og:url build on it. */
export const SITE_URL = 'https://qrnomad.com'

/** Every paid CTA ("Code änderbar machen", pricing button) points here. */
export const APP_URL = 'https://app.qrnomad.com/signup'

/** Checkout link. The app turns `url` (the generator's link) into the buyer's first code;
 *  `src` (the ad campaign) lands in the Stripe metadata for attribution. */
export function signupUrl(lang: string, url?: string): string {
    const q = new URLSearchParams({ lang })
    if (url) q.set('url', url)
    if (campaign.value) q.set('src', campaign.value)
    return `${APP_URL}?${q}`
}

/** Launch Kit lead capture for the e-mail list (tenant qrnomad, double opt-in on both segments). */
export const LEAD_CAPTURE_URL = 'https://auth.solytics.de/t/qrnomad/marketing/public/lead-capture'

/** Segment per page language: the confirm mail and the welcome mails follow it. */
export const leadSegment = (lang: string) => `free-${lang}`
