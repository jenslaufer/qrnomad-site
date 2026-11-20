import type { RouteRecordRaw } from 'vue-router'

// Kept apart from main.ts so tests can build a router without booting the app.
// Trailing slashes: vite-ssg writes '/de/' to dist/de/index.html, which
// GitHub Pages serves at /de/ (and redirects /de there).
export const routes: RouteRecordRaw[] = [
    { path: '/', component: () => import('./pages/LandingPage.vue'), props: { locale: 'en' } },
    { path: '/de/', component: () => import('./pages/LandingPage.vue'), props: { locale: 'de' } },
    { path: '/impressum/', component: () => import('./pages/ImpressumPage.vue') },
    { path: '/datenschutz/', component: () => import('./pages/DatenschutzPage.vue') },
    { path: '/agb/', component: () => import('./pages/AgbPage.vue') },
    { path: '/:pathMatch(.*)*', redirect: '/' },
]
