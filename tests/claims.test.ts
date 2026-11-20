import { describe, it, expect, afterEach } from 'vitest'
import { enableAutoUnmount } from '@vue/test-utils'
import { renderSSRHead } from '@unhead/vue/server'
import { mountRoute } from './helpers'

enableAutoUnmount(afterEach)

// The competitor price comparison in the copy is unverified, and the copy
// still carries [TODO] notes. Neither may reach a rendered page.
const FORBIDDEN = ['35 €', '35 €', '$35', '[TODO', 'TODO']

describe.each(['/', '/de/', '/impressum/', '/datenschutz/', '/agb/'])('page %s', path => {
    it('has no unverified competitor claim and no placeholder', async () => {
        const { wrapper, head } = await mountRoute(path)
        const html = wrapper.html() + JSON.stringify(await renderSSRHead(head))
        for (const s of FORBIDDEN) expect(html).not.toContain(s)
    })
})
