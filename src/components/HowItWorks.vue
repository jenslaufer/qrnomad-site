<script setup lang="ts">
import type { Copy } from '../content'

defineProps<{ t: Copy['how'] }>()
</script>

<template>
    <section id="how" class="py-24 lg:py-32" aria-labelledby="how-title">
        <div class="wrap grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-x-8">
            <h2 id="how-title" class="headline mb-8 max-w-3xl text-h2 lg:col-span-8 lg:mb-12">{{ t.title }}</h2>

            <!-- Free lives on white. -->
            <article class="border-2 border-ink bg-paper px-6 py-10 sm:px-8 lg:col-span-5 lg:col-start-1" aria-labelledby="how-static">
                <p class="label text-graphite">{{ t.static.label }}</p>
                <h3 id="how-static" class="headline mt-4 text-h4">{{ t.static.title }}</h3>
                <ol class="mt-8 border-t border-ink">
                    <li v-for="(step, i) in t.static.steps" :key="step" class="flex gap-4 border-b border-ash py-3">
                        <span aria-hidden="true" class="w-6 flex-none font-extrabold tabular-nums">{{ i + 1 }}</span>
                        {{ step }}
                    </li>
                </ol>
                <p class="mt-8 max-w-measure">{{ t.static.body }}</p>
                <p class="mt-4 max-w-measure font-bold">{{ t.static.catch }}</p>
            </article>

            <!-- Paid lives on black. -->
            <article class="on-ink bg-ink px-6 py-10 text-paper sm:px-8 lg:col-span-7 lg:self-start" aria-labelledby="how-dynamic">
                <p class="label text-ash">{{ t.dynamic.label }}</p>
                <h3 id="how-dynamic" class="headline mt-4 text-h4">{{ t.dynamic.title }}</h3>
                <ol class="mt-8 border-t border-paper">
                    <li v-for="(step, i) in t.dynamic.steps" :key="step" class="flex gap-4 border-b border-graphite py-4 text-lead">
                        <span aria-hidden="true" class="w-6 flex-none font-extrabold tabular-nums">{{ i + 1 }}</span>
                        {{ step }}
                    </li>
                </ol>
            </article>

            <p class="mt-8 lg:col-span-7 lg:col-start-6 lg:mt-12">
                <span class="headline block text-h3">{{ t.closing[0] }}</span>
                <span class="mt-4 block text-lead">{{ t.closing[1] }}</span>
            </p>
        </div>
    </section>
</template>
