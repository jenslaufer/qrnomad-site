import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { enableAutoUnmount, flushPromises, type VueWrapper } from '@vue/test-utils'
import { mountRoute } from './helpers'
import { downloadQr } from '../src/lib/download'
import { LEAD_CAPTURE_URL } from '../src/config'

vi.mock('../src/lib/download', () => ({ downloadQr: vi.fn() }))

const fetchMock = vi.fn()
enableAutoUnmount(afterEach)
beforeEach(() => {
    vi.mocked(downloadQr).mockClear()
    fetchMock.mockReset().mockResolvedValue(new Response('{"status":"ok"}'))
    vi.stubGlobal('fetch', fetchMock)
})
afterEach(() => vi.unstubAllGlobals())

const LINK = 'https://example.de/karte.pdf'
const FREE = { de: 'Kostenlos herunterladen (Link bleibt fest)', en: 'Download free code (link stays fixed)' }
const PNG = { de: 'PNG herunterladen', en: 'Download PNG' }

const byText = (w: VueWrapper, tag: string, text: string) => {
    const el = w.findAll(tag).find(e => e.text() === text)
    if (!el) throw new Error(`no <${tag}> with text "${text}"`)
    return el
}

/** Open the download dialog on the page for `lang`, fill the opt-in fields, click the free download. */
async function freeDownload(lang: 'de' | 'en', email: string, hp = '') {
    const { wrapper } = await mountRoute(lang === 'de' ? '/de/' : '/')
    await wrapper.find('input#qr-url').setValue(LINK)
    await flushPromises()
    await byText(wrapper, 'button', PNG[lang]).trigger('click')
    await wrapper.find('input#optin-email').setValue(email)
    await wrapper.find('input[name="website_url"]').setValue(hp)
    await byText(wrapper, 'button', FREE[lang]).trigger('click')
    await flushPromises()
    return wrapper
}

const sentBody = () => JSON.parse(fetchMock.mock.calls[0][1].body as string)

describe('e-mail opt-in in the download dialog', () => {
    it('downloads without any request when the field is empty', async () => {
        await freeDownload('de', '')
        expect(downloadQr).toHaveBeenCalledExactlyOnceWith(LINK, 'png')
        expect(fetchMock).not.toHaveBeenCalled()
    })

    it('sends the address to the German segment and never the QR link', async () => {
        const w = await freeDownload('de', ' kunde@example.de ')
        expect(downloadQr).toHaveBeenCalledExactlyOnceWith(LINK, 'png')
        expect(fetchMock).toHaveBeenCalledOnce()
        const [url, init] = fetchMock.mock.calls[0]
        expect(url).toBe(LEAD_CAPTURE_URL)
        expect(init).toMatchObject({ method: 'POST' })
        expect(sentBody()).toEqual({ email: 'kunde@example.de', segment: 'free-de', hp: '' })
        expect(init.body).not.toContain('example.de/karte')
        expect(w.text()).toContain('Fast geschafft: Bitte bestätige den Link in deinem Postfach.')
    })

    it('sends English sign-ups to the English segment', async () => {
        await freeDownload('en', 'buyer@example.com')
        expect(sentBody().segment).toBe('free-en')
    })

    it('passes the honeypot on so Launch Kit drops bots', async () => {
        await freeDownload('en', 'bot@example.com', 'filled')
        expect(sentBody().hp).toBe('filled')
    })

    it.each([
        ['the network fails', () => fetchMock.mockRejectedValue(new TypeError('network down'))],
        ['Launch Kit refuses', () => fetchMock.mockResolvedValue(new Response('{}', { status: 429 }))],
    ])('still downloads and says the sign-up failed when %s', async (_, arrange) => {
        arrange()
        const w = await freeDownload('de', 'kunde@example.de')
        expect(downloadQr).toHaveBeenCalledOnce()
        expect(w.find('dialog').attributes('open')).toBeUndefined()
        expect(w.text()).toContain('Das Eintragen hat nicht geklappt. Dein Download läuft trotzdem.')
        expect(w.text()).not.toContain('Fast geschafft')
    })

    it('clears the note on the next download without an address', async () => {
        const w = await freeDownload('de', 'kunde@example.de')
        expect(w.text()).toContain('Fast geschafft')
        await byText(w, 'button', PNG.de).trigger('click')
        await byText(w, 'button', FREE.de).trigger('click')
        await flushPromises()
        expect(w.text()).not.toContain('Fast geschafft')
    })

    it('downloads and hints, without a request, for an incomplete address', async () => {
        const w = await freeDownload('de', 'kunde@example')
        expect(downloadQr).toHaveBeenCalledOnce()
        expect(fetchMock).not.toHaveBeenCalled()
        expect(w.text()).toContain('Diese Adresse sieht unvollständig aus. Dein Download läuft trotzdem.')
    })

    it.each([
        ['/de/', 'PNG herunterladen', 'E-Mail (freiwillig)', 'Datenschutz'],
        ['/', 'Download PNG', 'Email (optional)', 'Privacy'],
    ])('labels the optional field and links the privacy policy on %s', async (path, png, label, privacy) => {
        const { wrapper } = await mountRoute(path)
        await wrapper.find('input#qr-url').setValue(LINK)
        await byText(wrapper, 'button', png).trigger('click')
        expect(wrapper.find('label[for="optin-email"]').text()).toBe(label)
        expect(wrapper.find('input#optin-email').attributes('required')).toBeUndefined()
        const link = byText(wrapper, 'a', privacy)
        expect(link.attributes('href')).toBe('/datenschutz/')
        // A new tab keeps the dialog, the typed address and the pending download.
        expect(link.attributes('target')).toBe('_blank')
    })

    it('downloads and signs up on Enter in the e-mail field', async () => {
        const { wrapper } = await mountRoute('/de/')
        await wrapper.find('input#qr-url').setValue(LINK)
        await byText(wrapper, 'button', PNG.de).trigger('click')
        const field = wrapper.find('input#optin-email')
        await field.setValue('kunde@example.de')
        await field.trigger('keydown', { key: 'Enter' })
        await flushPromises()
        expect(downloadQr).toHaveBeenCalledExactlyOnceWith(LINK, 'png')
        expect(sentBody().segment).toBe('free-de')
    })

    it('keeps autofill out of the honeypot', async () => {
        const { wrapper } = await mountRoute('/de/')
        expect(wrapper.find('input[name="website_url"]').attributes('autocomplete')).toBe('off')
    })
})

describe('privacy policy for the e-mail list', () => {
    it('names the list, double opt-in, Launch Kit, SES, revocation and the 7-day deletion', async () => {
        const { wrapper } = await mountRoute('/datenschutz/')
        const text = wrapper.text()
        for (const s of ['4. E-Mails von QRnomad', 'Double-Opt-in', 'Launch Kit', 'Amazon SES', 'widerrufen', 'nach 7 Tagen', 'nicht den Link deines QR-Codes', 'bis du dich abmeldest', 'Sperrvermerk', 'kein Zugriffsprotokoll'])
            expect(text).toContain(s)
    })
})
