<script setup lang="ts">
import type { Copy } from '../content'
import BrandMark from './BrandMark.vue'

const props = defineProps<{ t: Copy['footer']; nav: Copy['nav']; home: string; anchorBase: string }>()

const linkClass = 'transition-colors duration-150 ease-press underline-offset-4 hover:text-signal hover:underline'
const product = [
    { href: `${props.anchorBase}#generator`, label: props.t.generator },
    { href: `${props.anchorBase}#pricing`, label: props.nav.pricing },
    { href: `${props.anchorBase}#faq`, label: props.nav.faq },
]
</script>

<template>
    <footer class="on-ink bg-ink pt-16 pb-8 text-paper">
        <div class="wrap grid grid-cols-1 gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-12">
            <div class="sm:col-span-2 lg:col-span-6">
                <RouterLink :to="home" :aria-label="nav.home" class="inline-flex items-center gap-2 text-lead font-extrabold tracking-tight">
                    <BrandMark class="size-6 text-signal" />
                    QRnomad
                </RouterLink>
                <p class="mt-4 max-w-lead text-ash">{{ t.tagline }}</p>
            </div>
            <nav :aria-label="t.product" class="lg:col-span-3">
                <p class="label text-ash">{{ t.product }}</p>
                <ul class="mt-4 space-y-2">
                    <li v-for="l in product" :key="l.href"><a :href="l.href" :class="linkClass">{{ l.label }}</a></li>
                </ul>
            </nav>
            <nav :aria-label="t.legal" class="lg:col-span-3">
                <p class="label text-ash">{{ t.legal }}</p>
                <ul class="mt-4 space-y-2">
                    <li><RouterLink to="/impressum/" hreflang="de" :class="linkClass">{{ t.imprint }}</RouterLink></li>
                    <li><RouterLink to="/datenschutz/" hreflang="de" :class="linkClass">{{ t.privacy }}</RouterLink></li>
                </ul>
            </nav>
            <div class="flex flex-wrap justify-between gap-2 border-t border-graphite pt-4 text-label tracking-normal text-ash sm:col-span-2 lg:col-span-12 lg:mt-6">
                <span>© 2026 Solytics GmbH</span>
                <span>{{ t.base }}</span>
            </div>
        </div>
    </footer>
</template>
