<script setup lang="ts">
import { de } from '../content/de'
import SiteFooter from './SiteFooter.vue'
import SiteHeader from './SiteHeader.vue'

// Frame for the German legal pages. EN visitors land here from the EN footer.
defineProps<{ title: string }>()
</script>

<template>
    <SiteHeader :nav="de.nav" locale="de" anchor-base="/de/" :languages="false" />
    <main id="main" tabindex="-1" class="wrap py-16 focus:outline-none lg:py-24">
        <p class="label kicker">QRnomad</p>
        <h1 class="headline mt-6 text-h2">{{ title }}</h1>
        <div class="mt-12 max-w-measure">
            <slot />
        </div>
        <RouterLink to="/de/" class="link mt-16 inline-block">Zurück zur Startseite</RouterLink>
    </main>
    <SiteFooter :t="de.footer" :nav="de.nav" home="/de/" anchor-base="/de/" />
</template>
