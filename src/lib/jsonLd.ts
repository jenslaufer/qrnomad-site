import type { Copy } from '../content'
import { SITE_URL } from '../config'

const CURRENCY: Record<string, string> = { '$': 'USD', '€': 'EUR' }

/** '$199' or '199 €' → schema.org price and currency. */
function offer(name: string, shown: string, description?: string) {
    const symbol = shown.match(/[$€]/)?.[0] ?? ''
    return { '@type': 'Offer', name, price: shown.replace(/[^\d.]/g, ''), priceCurrency: CURRENCY[symbol], ...(description && { description }) }
}

/** schema.org graph for a landing page: organization, the app with its prices, the FAQ. */
export function landingJsonLd(t: Copy) {
    const url = `${SITE_URL}${t.path}`
    const org = { '@type': 'Organization', '@id': `${SITE_URL}/#org`, name: 'QRnomad', url: `${SITE_URL}/`, logo: `${SITE_URL}/favicon.svg` }
    return {
        '@context': 'https://schema.org',
        '@graph': [
            org,
            {
                '@type': 'WebApplication',
                name: 'QRnomad',
                url,
                description: t.seo.description,
                inLanguage: t.locale,
                applicationCategory: 'UtilitiesApplication',
                operatingSystem: 'Any (web browser)',
                publisher: { '@id': org['@id'] },
                offers: [
                    offer(t.pricing.free.name, t.pricing.free.price),
                    offer(t.pricing.paid.name, t.pricing.paid.price, `${t.pricing.paid.price} ${t.pricing.paid.per}. ${t.pricing.paid.note}`),
                ],
            },
            {
                '@type': 'FAQPage',
                url: `${url}#faq`,
                inLanguage: t.locale,
                mainEntity: t.faq.items.map(({ q, a }) => ({
                    '@type': 'Question',
                    name: q,
                    acceptedAnswer: { '@type': 'Answer', text: a.join(' ') },
                })),
            },
        ],
    }
}
