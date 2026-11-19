import { describe, it, expect } from 'vitest'
import { de } from '../src/content/de'
import { en } from '../src/content/en'

describe('free-code branding is disclosed before download', () => {
    it.each([['de', de], ['en', en]])('%s pricing names the caption on free codes and its absence on paid ones', (_, c) => {
        expect(c.pricing.free.items.join(' ')).toContain('qrnomad.com')
        expect(c.pricing.paid.items.join(' ')).toContain('qrnomad.com')
    })
})
