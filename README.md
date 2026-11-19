# qrnomad-site

Marketing site for [QRnomad](https://qrnomad.com): a free QR code generator whose static codes never expire, plus a paid plan (199 €/year, $199/year) for dynamic codes whose destination can change after printing.

## What the site does

- **`/` (English) and `/de/` (German)** — one landing page per locale: hero with a working generator, problem, how it works, pricing, FAQ, final CTA. Language switch in the header; `hreflang` en/de/x-default on both.
- **Generator** — runs entirely in the browser via the [`qrcode`](https://www.npmjs.com/package/qrcode) package. Error correction M, 4-module quiet zone. Missing `https://` is added; empty or invalid input shows an inline error.
- **Download flow** — "Download PNG/SVG" opens a dialog that offers the editable plan. The free download is one click away in the same dialog (PNG 1024 px, SVG).
- **Legal** — `/impressum/` and `/datenschutz/` (German; the English footer links to them).

The paid app at `app.qrnomad.com` does not exist yet; every paid CTA points to `APP_URL` in `src/config.ts`.

## Stack

Vue 3 (`<script setup lang="ts">`), Vite, vite-ssg (static prerender), Tailwind CSS v4 (`@tailwindcss/vite`), @unhead/vue, vitest + @vue/test-utils + jsdom. Same setup as `fingrab-site`.

## Develop

```sh
npm install
npm run dev      # http://localhost:5173
npm test         # vitest
npm run build    # prerendered site in dist/
```

## Layout

```
copy/                 source copy (EN + DE), incl. open TODOs and ad texts
src/config.ts         SITE_URL, APP_URL
src/content/          typed page copy per locale
src/lib/qr.ts         URL validation + SVG/PNG rendering
src/lib/download.ts   file download in the browser
src/composables/      useQrGenerator, usePageHead
src/components/       sections, header, footer, dialog
src/pages/            LandingPage, ImpressumPage, DatenschutzPage
src/pages.js          prerendered page list
public/               favicon, robots.txt, sitemap.xml
tests/                vitest suites
```

## Design: "Signal"

Print-shop black and white with one yellow.

- **Type:** Archivo variable (self-hosted via `@fontsource-variable/archivo`), condensed heavy cuts for headlines, regular width for body. Perfect Fourth scale (1.333) from 16 px, fluid `clamp()` for h2 and display.
- **Colour:** Ink `#0B0B0B`, Paper `#FFFFFF`, Signal `#FFD400`, Stock `#F1F0EA`, Graphite `#5A5A55`, Ash `#B4B2AA`. Free lives on white, paid on black panels, yellow only on primary CTAs and the paid-plan highlight. Body text pairs: Ink/Paper 19.7:1, Graphite/Paper 6.9:1, Ash/Ink 9.3:1, Ink/Signal 13.8:1.
- **Space:** 8 px base, 4 px for fine detail, section padding 96–128 px, content max 1320 px.

## Deploy

Push to `main` → GitHub Actions (`.github/workflows/deploy.yml`) runs tests, builds, writes `CNAME` (`qrnomad.com`) and publishes `dist/` to the `site` branch, which GitHub Pages serves.

## Open before launch

- German price display: say whether 199 € includes VAT (PAngV requires the final price for consumers).
- Refund / withdrawal policy, fair-use terms, renewal reminder lead time, scan-location accuracy: the copy has TODOs for these; the site leaves them out until decided.
- Competitor price comparison: only after checking official pricing pages.
- `og:image` is not set yet.
