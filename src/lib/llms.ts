import { copy, type Copy } from '../content'
import { SITE_URL } from '../config'

// llms.txt and Markdown copies of the landing pages, built from the same copy
// as the HTML. vite.config.js writes them to dist/ after prerendering.

/** Markdown copy per landing page, served next to its index.html. */
export const MARKDOWN_PAGES = [
    { file: 'index.md', t: copy.en, title: 'QRnomad (English)' },
    { file: 'de/index.md', t: copy.de, title: 'QRnomad (Deutsch)' },
]

const plain = (s: string) => s.replace(/­/g, '')
const list = (items: string[]) => items.map(i => `- ${i}`).join('\n')
const steps = (items: string[]) => items.map((s, i) => `${i + 1}. ${s}`).join('\n')

export function pageMarkdown(t: Copy): string {
    const { hero, how, pricing, faq } = t
    const plan = (p: Copy['pricing']['free']) => `### ${p.name}: ${p.price} ${p.per}\n\n${list(p.items)}`
    return [
        `# ${plain(hero.headline)}`,
        `> ${hero.subline}`,
        `${hero.trustLead} ${hero.trust}`,
        `Source: ${SITE_URL}${t.path}`,
        `## ${how.title}`,
        `### ${how.static.title}`, steps(how.static.steps), how.static.body, how.static.catch,
        `### ${how.dynamic.title}`, steps(how.dynamic.steps),
        how.closing.join(' '),
        `## ${t.nav.pricing}: ${pricing.title}`,
        plan(pricing.free), `${pricing.free.limit}.`,
        plan(pricing.paid), pricing.paid.note,
        `## ${t.nav.faq}`,
        ...faq.items.map(({ q, a }) => `### ${q}\n\n${a.join('\n\n')}`),
    ].join('\n\n') + '\n'
}

export function llmsTxt(): string {
    return [
        '# QRnomad',
        '> Free QR code generator: no signup, no expiry. Static codes are free forever; editable (dynamic) codes cost one yearly price.',
        'Static codes hold the link inside the pattern, so scans never touch QRnomad servers. The site exists in English and German.',
        '## Pages',
        MARKDOWN_PAGES.map(p => `- [${p.title}](${SITE_URL}/${p.file}): ${p.t.seo.description}`).join('\n'),
    ].join('\n\n') + '\n'
}
