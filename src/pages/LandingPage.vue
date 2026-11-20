<script setup lang="ts">
import { copy, type Locale } from '../content'
import { usePageHead } from '../composables/usePageHead'
import FaqSection from '../components/FaqSection.vue'
import FinalCta from '../components/FinalCta.vue'
import HeroSection from '../components/HeroSection.vue'
import HowItWorks from '../components/HowItWorks.vue'
import PricingSection from '../components/PricingSection.vue'
import ProblemSection from '../components/ProblemSection.vue'
import SiteFooter from '../components/SiteFooter.vue'
import SiteHeader from '../components/SiteHeader.vue'

const props = defineProps<{ locale: Locale }>()
const t = copy[props.locale]

usePageHead({ ...t.seo, path: t.path, lang: t.locale, alternates: true })
</script>

<template>
    <SiteHeader :nav="t.nav" :locale="t.locale" anchor-base="" languages />
    <main id="main" tabindex="-1" class="focus:outline-none">
        <HeroSection :t="t.hero" :upsell="t.upsell" :locale="t.locale" />
        <ProblemSection :t="t.problem" />
        <HowItWorks :t="t.how" />
        <PricingSection :t="t.pricing" :locale="t.locale" />
        <FaqSection :t="t.faq" />
        <FinalCta :t="t.final" />
    </main>
    <SiteFooter :t="t.footer" :nav="t.nav" :home="t.path" anchor-base="" />
</template>
