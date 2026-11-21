export type Locale = 'en' | 'de'

export interface Step { title: string; steps: string[] }
export interface Plan { name: string; price: string; per: string; items: string[]; cta: string }

/** Everything a landing page says, per locale. Source: copy/landing-*.md. */
export interface Copy {
    locale: Locale
    path: string
    seo: { title: string; description: string; ogLocale: string }
    nav: { skip: string; home: string; label: string; pricing: string; faq: string; cta: string; language: string }
    hero: {
        eyebrow: string; headline: string; subline: string
        label: string; placeholder: string; submit: string; help: string
        downloadPng: string; downloadSvg: string
        trustLead: string; trust: string
        preview: (host: string) => string; sample: string; staticLabel: string
        created: (host: string) => string
        errors: { empty: string; invalid: string }
    }
    upsell: {
        title: string; body: string[]; offer: string; offerRest: string; primary: string; free: string; close: string
        optin: { label: string; consent: string; privacy: string; sent: string; invalid: string }
    }
    problem: { title: string; cases: { key: string; text: string }[]; verdict: [string, string, string] }
    how: {
        title: string
        static: Step & { label: string; body: string; catch: string }
        dynamic: Step & { label: string }
        closing: [string, string]
    }
    pricing: {
        kicker: string; title: string
        free: Plan & { limit: string }
        paid: Plan & { tag: string; note: string }
    }
    faq: { kicker: string; title: string; items: { q: string; a: string[] }[] }
    final: { title: string; body: string; cta: string }
    footer: {
        tagline: string; product: string; legal: string
        generator: string; imprint: string; privacy: string; terms: string; base: string
    }
}
