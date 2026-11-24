# qrnomad-site

Landing site for qrnomad.com: free client-side QR generator, upsell to dynamic codes. Overview for humans: [README.md](README.md).

## Commands

- `npm test` — vitest (jsdom). Must pass before every push; CI runs it too.
- `npm run build` — vite-ssg prerender to `dist/` (`/`, `/de/`, `/impressum/`, `/datenschutz/`, plus `404.html`).
- `npm run dev` — dev server.

## Where things live

- Paid CTAs link to `APP_URL` in `src/config.ts`. Change it there only.
- Page copy: `src/content/en.ts`, `src/content/de.ts`, derived from `copy/landing-*.md`. Tests read the hero headline, title and description straight from the `.md` files, so edit both together.
- Page list: `src/pages.js`. Keep `public/sitemap.xml` in step; `tests/pages.test.ts` fails otherwise.
- `llms.txt`, `index.md`, `de/index.md`: built from the page copy by `src/lib/llms.ts` (written in `onFinished`, `vite.config.js`). JSON-LD: `src/lib/jsonLd.ts`. Prices come from the copy; never hard-code them.
- `public/<32 hex>.txt`: IndexNow key. Public by design; keep the file.
- Design tokens: `@theme` in `src/style.css`. No raw hex or arbitrary sizes in templates.

## Rules

- No unverified competitor claims (prices, limits, "X charges Y"). Why: the copy's "35 € und mehr im Monat" was never checked against official pricing pages; a false comparison is an unfair-competition risk under UWG. `tests/claims.test.ts` blocks "35 €", "$35" and any "TODO" on rendered pages.
- No `[TODO]` text from the copy files on the site. Open items stay in the `.md` files until decided.
- The free download stays one click behind the upsell dialog. Why: the trust angle ("free stays free") collapses if the free path is hidden or gated.
- German copy uses "du".
- Adding tracking, cookies, forms or third-party requests requires updating `src/pages/DatenschutzPage.vue` first.
