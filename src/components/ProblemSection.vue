<script setup lang="ts">
import type { Copy } from '../content'

defineProps<{ t: Copy['problem'] }>()
</script>

<template>
    <section class="border-y-2 border-ink bg-stock py-24 lg:py-32" aria-labelledby="problem-title">
        <div class="wrap grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-12">
            <div class="lg:col-span-4">
                <h2 id="problem-title" class="headline text-h2 lg:sticky lg:top-8">{{ t.title }}</h2>
            </div>
            <div class="lg:col-span-7 lg:col-start-6">
                <div v-for="c in t.cases" :key="c.key" class="grid gap-2 border-t-2 border-ink py-8 first:pt-4">
                    <p class="headline text-h3">{{ c.key }}</p>
                    <p class="max-w-case text-lead">{{ c.text }}</p>
                </div>
                <p class="mt-6 max-w-case border-t-6 border-ink pt-8 text-lead">
                    {{ t.verdict[0] }} <mark>{{ t.verdict[1] }}</mark> {{ t.verdict[2] }}
                </p>
            </div>
        </div>
    </section>
</template>
