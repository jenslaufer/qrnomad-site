<script setup lang="ts">
import type { Copy, Locale } from '../content'
import BrandMark from './BrandMark.vue'

// `anchorBase` is '' on a landing page and '/de/' on pages without sections.
const props = defineProps<{ nav: Copy['nav']; locale: Locale; anchorBase: string; languages: boolean }>()

const home = props.locale === 'de' ? '/de/' : '/'
const switcher = [
    { locale: 'en', to: '/', short: 'EN', name: 'English' },
    { locale: 'de', to: '/de/', short: 'DE', name: 'Deutsch' },
] as const
</script>

<template>
    <a href="#main" class="btn btn-signal absolute top-2 left-2 z-10 -translate-y-24 focus-visible:translate-y-0">{{ nav.skip }}</a>
    <header class="border-b-2 border-ink">
        <div class="wrap flex min-h-18 items-center justify-between gap-4">
            <RouterLink :to="home" :aria-label="nav.home" class="flex items-center gap-2 text-lead font-extrabold tracking-tight">
                <BrandMark class="size-6" />
                QRnomad
            </RouterLink>
            <nav :aria-label="nav.label" class="flex items-center gap-6">
                <a :href="`${anchorBase}#pricing`" class="hidden border-b-2 border-transparent py-1 font-semibold transition-colors duration-150 ease-press hover:border-ink md:inline">{{ nav.pricing }}</a>
                <a :href="`${anchorBase}#faq`" class="hidden border-b-2 border-transparent py-1 font-semibold transition-colors duration-150 ease-press hover:border-ink md:inline">{{ nav.faq }}</a>
                <ul v-if="languages" :aria-label="nav.language" class="flex border-2 border-ink">
                    <li v-for="l in switcher" :key="l.locale">
                        <RouterLink
                            :to="l.to"
                            :hreflang="l.locale"
                            :lang="l.locale"
                            :aria-label="l.name"
                            :aria-current="l.locale === locale ? 'page' : undefined"
                            class="label grid size-10 place-items-center transition-colors duration-150 ease-press"
                            :class="l.locale === locale ? 'bg-ink text-paper' : 'hover:bg-signal'"
                        >{{ l.short }}</RouterLink>
                    </li>
                </ul>
                <a :href="`${anchorBase}#generator`" class="btn btn-line hidden min-h-10 px-4 sm:inline-flex">{{ nav.cta }}</a>
            </nav>
        </div>
    </header>
</template>
