import { defineConfig } from 'vite'
import { copyFileSync, existsSync, mkdirSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { PAGES } from './src/pages.js'
import { llmsTxt, pageMarkdown, MARKDOWN_PAGES } from './src/lib/llms'

export default defineConfig({
    plugins: [vue(), tailwindcss()],
    // vite-ssg reads this block.
    ssgOptions: {
        includedRoutes: () => PAGES,
        // GitHub Pages serves 404.html for unknown paths; it boots the SPA,
        // whose catch-all route redirects to the homepage.
        onFinished() {
            const dist = resolve(process.cwd(), 'dist')
            const index = resolve(dist, 'index.html')
            if (!existsSync(index)) throw new Error('onFinished(): dist/index.html missing — cannot create 404.html.')
            copyFileSync(index, resolve(dist, '404.html'))
            // For LLMs and AI agents: /llms.txt plus a Markdown copy next to each landing page.
            writeFileSync(resolve(dist, 'llms.txt'), llmsTxt())
            for (const { file, t } of MARKDOWN_PAGES) {
                const out = resolve(dist, file)
                mkdirSync(dirname(out), { recursive: true })
                writeFileSync(out, pageMarkdown(t))
            }
        },
    },
})
