import { describe, it, expect, afterEach } from 'vitest'
import { enableAutoUnmount } from '@vue/test-utils'
import { renderSSRHead } from '@unhead/vue/server'
import { readFileSync } from 'node:fs'
import { mountRoute, copyField } from './helpers'

enableAutoUnmount(afterEach)

const locales = [
    { path: '/', lang: 'en', file: 'copy/landing-en.md', canonical: 'https://qrnomad.com/' },
    { path: '/de/', lang: 'de', file: 'copy/landing-de.md', canonical: 'https://qrnomad.com/de/' },
]

describe.each(locales)('locale $lang at $path', ({ path, lang, file, canonical }) => {
    const md = readFileSync(file, 'utf-8')

    it('renders the hero headline from the copy', async () => {
        const { wrapper } = await mountRoute(path)
        const hero = md.split(/^## 1\. Hero/m)[1]
        const headline = copyField(hero, /^# (.+)$/m)
        expect(wrapper.find('h1').text().replace(/­/g, '')).toBe(headline)
    })

    it('sets lang, title, description, canonical and hreflang', async () => {
        const { head } = await mountRoute(path)
        const { htmlAttrs, headTags } = await renderSSRHead(head)
        expect(htmlAttrs).toContain(`lang="${lang}"`)
        expect(headTags).toContain(`<title>${copyField(md, /\*\*Title:\*\* (.+)/)}</title>`)
        expect(headTags).toContain(copyField(md, /\*\*Meta[- ]description:\*\* (.+)/i))
        expect(headTags).toMatch(new RegExp(`rel="canonical" href="${canonical}"`))
        expect(headTags).toContain('hreflang="en" href="https://qrnomad.com/"')
        expect(headTags).toContain('hreflang="de" href="https://qrnomad.com/de/"')
        expect(headTags).toContain('hreflang="x-default" href="https://qrnomad.com/"')
        expect(headTags).toContain(`property="og:url" content="${canonical}"`)
    })
})

describe('legal pages', () => {
    it.each(['/impressum/', '/datenschutz/'])('%s is German and names the operator', async path => {
        const { wrapper, head } = await mountRoute(path)
        const { htmlAttrs } = await renderSSRHead(head)
        expect(htmlAttrs).toContain('lang="de"')
        expect(wrapper.text()).toContain('Solytics GmbH')
    })
})
