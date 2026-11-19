import { ViteSSG } from 'vite-ssg'
import App from './App.vue'
import { routes } from './routes'
import './style.css'

// vite-ssg owns the router: HTML5 history on the client, memory history
// while prerendering. Pages to prerender: ssgOptions in vite.config.js.
export const createApp = ViteSSG(App, {
    routes,
    scrollBehavior: (to, _from, saved) => saved ?? (to.hash ? { el: to.hash } : { top: 0 }),
})
