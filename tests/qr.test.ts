import { describe, it, expect } from 'vitest'
import { normalizeUrl, renderSvg } from '../src/lib/qr'

describe('normalizeUrl', () => {
    it('keeps a full https URL', () => {
        expect(normalizeUrl('https://example.com/menu.pdf')).toEqual({ ok: true, url: 'https://example.com/menu.pdf' })
    })

    it('keeps http://', () => {
        expect(normalizeUrl('http://example.com')).toEqual({ ok: true, url: 'http://example.com' })
    })

    it('prefixes https:// when the scheme is missing', () => {
        expect(normalizeUrl('example.com/menu')).toEqual({ ok: true, url: 'https://example.com/menu' })
        expect(normalizeUrl('www.example.de')).toEqual({ ok: true, url: 'https://www.example.de' })
    })

    it('trims surrounding whitespace', () => {
        expect(normalizeUrl('  example.com  ')).toEqual({ ok: true, url: 'https://example.com' })
    })

    it.each(['', '   '])('rejects empty input %j', input => {
        expect(normalizeUrl(input)).toEqual({ ok: false, error: 'empty' })
    })

    it.each([
        'not a url',
        'hello',
        'https://',
        'exa mple.com',
        'localhost:3000',
        'javascript:alert(1)',
        'ftp://example.com',
    ])('rejects %j as invalid', input => {
        expect(normalizeUrl(input)).toEqual({ ok: false, error: 'invalid' })
    })
})

describe('renderSvg', () => {
    it('returns an SVG string with a path', async () => {
        const { svg } = await renderSvg('https://example.com')
        expect(svg.trim()).toMatch(/^<svg/)
        expect(svg).toContain('<path')
    })

    it('includes a 4-module quiet zone', async () => {
        const { svg, size } = await renderSvg('https://example.com')
        expect(svg).toContain(`viewBox="0 0 ${size + 8} ${size + 8}"`)
    })

    it('uses error correction level M', async () => {
        // 15 bytes fit version 1 (21 modules) at level L but need version 2
        // (25 modules) at level M, so the size reveals the level.
        const { size } = await renderSvg('https://abcd.de')
        expect(size).toBe(25)
    })
})
