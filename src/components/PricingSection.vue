<script setup lang="ts">
import { signupUrl } from '../config'
import type { Copy } from '../content'
import ArrowIcon from './ArrowIcon.vue'

defineProps<{ t: Copy['pricing']; locale: string }>()
</script>

<template>
    <section id="pricing" class="border-y-2 border-ink bg-stock py-24 lg:py-32" aria-labelledby="pricing-title">
        <div class="wrap grid grid-cols-1 gap-4 lg:grid-cols-12 lg:gap-x-8">
            <div class="mb-8 lg:col-span-7 lg:mb-16">
                <p class="label kicker">{{ t.kicker }}</p>
                <h2 id="pricing-title" class="headline mt-6 text-h2">{{ t.title }}</h2>
            </div>

            <article class="flex flex-col border-2 border-ink bg-paper px-6 py-10 sm:px-8 lg:col-span-5 lg:col-start-1 lg:row-start-2 lg:self-end" aria-labelledby="plan-free">
                <h3 id="plan-free" class="label">{{ t.free.name }}</h3>
                <p class="mt-4 flex flex-wrap items-baseline gap-2">
                    <span class="headline text-h2 tabular-nums">{{ t.free.price }}</span>
                    <span class="text-lead font-semibold">{{ t.free.per }}</span>
                </p>
                <ul class="checks mt-8 mb-10 border-t border-ink [&>li]:border-b [&>li]:border-ash">
                    <li v-for="item in t.free.items" :key="item">{{ item }}</li>
                    <li class="is-limit text-graphite">{{ t.free.limit }}</li>
                </ul>
                <a href="#generator" class="btn btn-ink mt-auto w-full sm:w-auto sm:self-start">{{ t.free.cta }}</a>
            </article>

            <article class="on-ink relative flex flex-col border-2 border-ink bg-ink px-6 py-10 text-paper sm:px-8 lg:col-span-7 lg:row-start-2" aria-labelledby="plan-paid">
                <p class="label absolute -top-0.5 -right-0.5 border-2 border-ink bg-signal px-4 py-2 text-ink">{{ t.paid.tag }}</p>
                <h3 id="plan-paid" class="label text-ash">{{ t.paid.name }}</h3>
                <p class="mt-4 flex flex-wrap items-baseline gap-2">
                    <span class="headline text-display tabular-nums">{{ t.paid.price }}</span>
                    <span class="text-lead font-semibold">{{ t.paid.per }}</span>
                </p>
                <p class="mt-2 text-ash">{{ t.paid.note }}</p>
                <ul class="checks mt-8 mb-10 border-t border-paper [&>li]:border-b [&>li]:border-graphite">
                    <li v-for="item in t.paid.items" :key="item">{{ item }}</li>
                </ul>
                <a :href="signupUrl(locale)" class="btn btn-signal mt-auto w-full sm:w-auto sm:self-start">{{ t.paid.cta }} <ArrowIcon /></a>
            </article>
        </div>
    </section>
</template>
