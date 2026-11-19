<script setup lang="ts">
import type { Copy } from '../content'
import ArrowIcon from './ArrowIcon.vue'

defineProps<{ t: Copy['final'] }>()
</script>

<template>
    <section class="border-t-8 border-ink pt-20 pb-24 lg:pb-32" aria-labelledby="final-title">
        <div class="wrap grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-x-8">
            <h2 id="final-title" class="headline text-display lg:col-span-8">{{ t.title }}</h2>
            <div class="lg:col-span-4 lg:self-end">
                <p class="max-w-measure">{{ t.body }}</p>
                <a href="#generator" class="btn btn-signal mt-6 w-full sm:w-auto">{{ t.cta }} <ArrowIcon /></a>
            </div>
        </div>
    </section>
</template>
