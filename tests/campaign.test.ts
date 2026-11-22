import { describe, it, expect, afterEach } from 'vitest'
import { enableAutoUnmount } from '@vue/test-utils'
import { mountRoute } from './helpers'
import { campaign } from '../src/lib/campaign'
import { signupUrl } from '../src/config'

enableAutoUnmount(afterEach)
afterEach(() => {
    campaign.value = undefined
    history.replaceState(null, '', '/')
})

const ctaHref = async (search: string) => {
    history.replaceState(null, '', `/de/${search}`)
    const { wrapper } = await mountRoute('/de/')
    return wrapper.findAll('a').find(a => a.text() === 'Codes änderbar machen')!.attributes('href')
}

describe('ad campaign attribution', () => {
    it('passes utm_campaign from the landing URL to checkout as src', async () => {
        expect(await ctaHref('?utm_source=google&utm_campaign=search-de-paid')).toBe(
            'https://app.qrnomad.com/signup?lang=de&src=search-de-paid')
    })

    it.each(['', '?utm_campaign=Search%20DE', '?utm_campaign=' + 'a'.repeat(41), '?utm_campaign=%3Cx%3E'])(
        'adds no src for %j', async search => {
            expect(await ctaHref(search)).toBe('https://app.qrnomad.com/signup?lang=de')
        })

    it('keeps the campaign when the visitor moves to another page', () => {
        campaign.value = 'search-de-head'
        expect(signupUrl('de', 'https://example.com')).toBe(
            'https://app.qrnomad.com/signup?lang=de&url=https%3A%2F%2Fexample.com&src=search-de-head')
    })
})
