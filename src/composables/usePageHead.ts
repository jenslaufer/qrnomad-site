import { useHead } from '@unhead/vue'
import { SITE_URL } from '../config'

interface PageHead {
    title: string
    description: string
    path: string
    lang: string
    ogLocale: string
    /** Landing pages exist in en + de; legal pages only in German. */
    alternates?: boolean
}

export function usePageHead({ title, description, path, lang, ogLocale, alternates = false }: PageHead) {
    const url = `${SITE_URL}${path}`
    useHead({
        htmlAttrs: { lang },
        title,
        meta: [
            { name: 'description', content: description },
            { property: 'og:type', content: 'website' },
            { property: 'og:site_name', content: 'QRnomad' },
            { property: 'og:title', content: title },
            { property: 'og:description', content: description },
            { property: 'og:url', content: url },
            { property: 'og:locale', content: ogLocale },
            { name: 'twitter:card', content: 'summary' },
        ],
        link: [
            { rel: 'canonical', href: url },
            ...(alternates
                ? [
                    { rel: 'alternate', hreflang: 'en', href: `${SITE_URL}/` },
                    { rel: 'alternate', hreflang: 'de', href: `${SITE_URL}/de/` },
                    { rel: 'alternate', hreflang: 'x-default', href: `${SITE_URL}/` },
                ]
                : []),
        ],
    })
}
