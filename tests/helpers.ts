import { mount, flushPromises } from '@vue/test-utils'
import { createRouter, createMemoryHistory } from 'vue-router'
import { createHead } from '@unhead/vue/server'
import App from '../src/App.vue'
import { routes } from '../src/routes'

/** Mount the whole app at a route, the way vite-ssg prerenders it. */
export async function mountRoute(path: string) {
    const router = createRouter({ history: createMemoryHistory(), routes })
    const head = createHead()
    router.push(path)
    await router.isReady()
    const wrapper = mount(App, { global: { plugins: [router, head] }, attachTo: document.body })
    await flushPromises()
    return { wrapper, head }
}

/** Read a line like `- **Title:** …` from a copy file. */
export function copyField(md: string, pattern: RegExp): string {
    const match = md.match(pattern)
    if (!match) throw new Error(`copy field ${pattern} not found`)
    return match[1].trim()
}
