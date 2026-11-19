import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { enableAutoUnmount, flushPromises, type VueWrapper } from '@vue/test-utils'
import { mountRoute } from './helpers'
import { downloadQr } from '../src/lib/download'
import { APP_URL } from '../src/config'

vi.mock('../src/lib/download', () => ({ downloadQr: vi.fn() }))

enableAutoUnmount(afterEach)
beforeEach(() => vi.mocked(downloadQr).mockClear())

const byText = (w: VueWrapper, tag: string, text: string) => {
    const el = w.findAll(tag).find(e => e.text() === text)
    if (!el) throw new Error(`no <${tag}> with text "${text}"`)
    return el
}

async function pageWithLink(path: string, link: string) {
    const { wrapper } = await mountRoute(path)
    await wrapper.find('input#qr-url').setValue(link)
    await flushPromises()
    return wrapper
}

const isOpen = (w: VueWrapper) => w.find('dialog').attributes('open') !== undefined

describe('download flow', () => {
    it('opens the upsell dialog on download and does not download yet', async () => {
        const w = await pageWithLink('/', 'example.com')
        expect(isOpen(w)).toBe(false)
        await byText(w, 'button', 'Download PNG').trigger('click')
        expect(isOpen(w)).toBe(true)
        expect(downloadQr).not.toHaveBeenCalled()
    })

    it('downloads the PNG from the free link and closes the dialog', async () => {
        const w = await pageWithLink('/', 'example.com')
        await byText(w, 'button', 'Download PNG').trigger('click')
        await byText(w, 'button', 'Download free code (link stays fixed)').trigger('click')
        await flushPromises()
        expect(downloadQr).toHaveBeenCalledExactlyOnceWith('https://example.com', 'png')
        expect(isOpen(w)).toBe(false)
    })

    it('downloads the SVG from the German free link', async () => {
        const w = await pageWithLink('/de/', 'https://example.de/karte.pdf')
        await byText(w, 'button', 'SVG herunterladen').trigger('click')
        expect(isOpen(w)).toBe(true)
        await byText(w, 'button', 'Kostenlos herunterladen (Link bleibt fest)').trigger('click')
        expect(downloadQr).toHaveBeenCalledExactlyOnceWith('https://example.de/karte.pdf', 'svg')
    })

    it('shows an inline error instead of the dialog for an invalid link', async () => {
        const w = await pageWithLink('/', 'not a url')
        await byText(w, 'button', 'Download PNG').trigger('click')
        expect(isOpen(w)).toBe(false)
        expect(w.find('#qr-url-error').text()).not.toBe('')
        expect(w.find('input#qr-url').attributes('aria-invalid')).toBe('true')
        expect(downloadQr).not.toHaveBeenCalled()
    })

    it('shows an inline error when the empty form is submitted', async () => {
        const { wrapper } = await mountRoute('/de/')
        await wrapper.find('form').trigger('submit')
        expect(wrapper.find('#qr-url-error').text()).toContain('Link')
    })

    it('sends every paid CTA to APP_URL', async () => {
        const { wrapper } = await mountRoute('/de/')
        expect(byText(wrapper, 'a', 'Code änderbar machen').attributes('href')).toBe(APP_URL)
        expect(byText(wrapper, 'a', 'Codes änderbar machen').attributes('href')).toBe(APP_URL)
    })
})
