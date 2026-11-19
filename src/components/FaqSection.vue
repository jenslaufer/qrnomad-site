<script setup lang="ts">
import type { Copy } from '../content'

defineProps<{ t: Copy['faq'] }>()
</script>

<template>
    <section id="faq" class="py-24 lg:py-32" aria-labelledby="faq-title">
        <div class="wrap grid grid-cols-1 gap-8 lg:grid-cols-12">
            <div class="lg:col-span-4">
                <p class="label kicker">{{ t.kicker }}</p>
                <h2 id="faq-title" class="headline mt-6 text-h2">{{ t.title }}</h2>
            </div>
            <div class="border-b-2 border-ink lg:col-span-7 lg:col-start-6">
                <details v-for="(item, i) in t.items" :key="item.q" class="group border-t-2 border-ink" :open="i === 0">
                    <summary class="group/q flex cursor-pointer items-start justify-between gap-6 py-6 text-lead leading-snug font-bold">
                        {{ item.q }}
                        <span aria-hidden="true" class="relative size-8 flex-none border-2 border-ink transition-colors duration-150 ease-press group-hover/q:bg-signal">
                            <span class="absolute inset-0 m-auto h-0.5 w-3 bg-ink" />
                            <span class="absolute inset-0 m-auto h-3 w-0.5 bg-ink transition-transform duration-200 ease-glide group-open:scale-y-0" />
                        </span>
                    </summary>
                    <div class="max-w-measure space-y-2 pb-8">
                        <p v-for="p in item.a" :key="p">{{ p }}</p>
                    </div>
                </details>
            </div>
        </div>
    </section>
</template>
