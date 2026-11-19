import { describe, it, expect } from 'vitest'
import { readFileSync } from 'node:fs'
import { createRouter, createMemoryHistory } from 'vue-router'
import { routes } from '../src/routes'
import { PAGES } from '../src/pages.js'

// Prerender list, router and sitemap must name the same pages.
describe('page list', () => {
    const sitemap = readFileSync('public/sitemap.xml', 'utf-8')
    const locs = [...sitemap.matchAll(/<loc>https:\/\/qrnomad\.com(.+?)<\/loc>/g)].map(m => m[1])

    it('sitemap lists exactly the prerendered pages', () => {
        expect(locs.sort()).toEqual([...PAGES].sort())
    })

    it.each(PAGES)('%s resolves to a real route, not the catch-all', path => {
        const router = createRouter({ history: createMemoryHistory(), routes })
        expect(router.resolve(path).matched[0].redirect).toBeUndefined()
    })
})
