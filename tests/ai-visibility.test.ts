import { describe, it, expect, afterEach } from 'vitest'
import { enableAutoUnmount } from '@vue/test-utils'
import { renderSSRHead } from '@unhead/vue/server'
import { readFileSync, readdirSync } from 'node:fs'
import { mountRoute } from './helpers'
import { copy } from '../src/content'
import { llmsTxt, pageMarkdown, MARKDOWN_PAGES } from '../src/lib/llms'

enableAutoUnmount(afterEach)

describe('robots.txt', () => {
    const robots = readFileSync('public/robots.txt', 'utf-8')
    const bots = [
        'OAI-SearchBot', 'ChatGPT-User', 'Claude-SearchBot', 'Claude-User', 'PerplexityBot', 'Perplexity-User',
        'Bingbot', 'Googlebot', 'GPTBot', 'ClaudeBot', 'Google-Extended', 'CCBot',
    ]

    it.each(bots)('names %s explicitly', bot => {
        expect(robots).toMatch(new RegExp(`^User-agent: ${bot}$`, 'm'))
    })

    it('disallows nothing and keeps the catch-all and the sitemap', () => {
        expect(robots).not.toMatch(/^Disallow:\s*\S/m)
        expect(robots).toMatch(/^User-agent: \*\nAllow: \/$/m)
        expect(robots).toContain('Sitemap: https://qrnomad.com/sitemap.xml')
    })
})

describe('IndexNow key', () => {
    it('public/<key>.txt holds its own 32-hex key', () => {
        const keys = readdirSync('public').filter(f => /^[0-9a-f]{32}\.txt$/.test(f))
        expect(keys).toHaveLength(1)
        expect(readFileSync(`public/${keys[0]}`, 'utf-8').trim()).toBe(keys[0].replace('.txt', ''))
    })
})

describe('llms.txt', () => {
    const txt = llmsTxt()

    it('starts with the name and a one-line blockquote summary', () => {
        const [h1, , quote] = txt.split('\n')
        expect(h1).toBe('# QRnomad')
        expect(quote).toMatch(/^> \S.+/)
    })

    it('links every Markdown copy', () => {
        expect(MARKDOWN_PAGES.map(p => p.file)).toEqual(['index.md', 'de/index.md'])
        for (const { file } of MARKDOWN_PAGES) expect(txt).toContain(`(https://qrnomad.com/${file})`)
    })
})

describe.each(['en', 'de'] as const)('Markdown copy (%s)', locale => {
    const t = copy[locale]
    const md = pageMarkdown(t)

    it('carries headline, prices and every FAQ question', () => {
        expect(md.split('\n')[0]).toBe(`# ${t.hero.headline.replace(/­/g, '')}`)
        expect(md).toContain(t.pricing.free.price)
        expect(md).toContain(t.pricing.paid.price)
        for (const { q } of t.faq.items) expect(md).toContain(`### ${q}`)
        expect(md).not.toMatch(/TODO/)
    })

    it('opens with one quotable sentence: what QRnomad does and for whom', () => {
        expect(t.hero.subline).toMatch(/^QRnomad .+QR[- ]code.+\./i)
    })
})

describe.each([
    { path: '/', locale: 'en', currency: 'USD' },
    { path: '/de/', locale: 'de', currency: 'EUR' },
] as const)('JSON-LD on $path', ({ path, locale, currency }) => {
    async function graph() {
        const { head } = await mountRoute(path)
        const { headTags } = await renderSSRHead(head)
        const m = headTags.match(/<script type="application\/ld\+json"[^>]*>([\s\S]+?)<\/script>/)
        expect(m).not.toBeNull()
        return JSON.parse(m![1])['@graph'] as Record<string, any>[]
    }
    const byType = (g: Record<string, any>[], type: string) => g.find(n => n['@type'] === type)!

    it('describes the app with its real prices in the page language', async () => {
        const app = byType(await graph(), 'WebApplication')
        expect(app.applicationCategory).toBe('UtilitiesApplication')
        expect(app.inLanguage).toBe(locale)
        expect(app.offers.map((o: any) => [o.price, o.priceCurrency])).toEqual([['0', currency], ['199', currency]])
    })

    it('names the organization without invented profiles', async () => {
        const org = byType(await graph(), 'Organization')
        expect(org.name).toBe('QRnomad')
        expect(org.url).toBe('https://qrnomad.com/')
        expect(org.sameAs).toBeUndefined()
    })

    it('mirrors the FAQ', async () => {
        const faq = byType(await graph(), 'FAQPage')
        expect(faq.inLanguage).toBe(locale)
        expect(faq.mainEntity.map((q: any) => q.name)).toEqual(copy[locale].faq.items.map(i => i.q))
        expect(faq.mainEntity[0].acceptedAnswer.text).toBe(copy[locale].faq.items[0].a.join(' '))
    })
})

describe('legal pages', () => {
    it('carry no product JSON-LD', async () => {
        const { head } = await mountRoute('/impressum/')
        const { headTags } = await renderSSRHead(head)
        expect(headTags).not.toContain('application/ld+json')
    })
})
