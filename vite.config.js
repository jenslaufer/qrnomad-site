import { defineConfig } from 'vite'
import { copyFileSync, existsSync } from 'node:fs'
import { resolve } from 'node:path'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { PAGES } from './src/pages.js'

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
        },
    },
})
