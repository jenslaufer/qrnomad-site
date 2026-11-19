<script setup lang="ts">
import type { QrFormat } from '../lib/qr'

defineProps<{
    svg: string
    size: number
    host: string
    sample: boolean
    label: string
    staticLabel: string
    downloadPng: string
    downloadSvg: string
}>()
const emit = defineEmits<{ download: [format: QrFormat] }>()

// Crop marks, as on a print proof.
const corners = [
    'top-0 left-0 border-t-2 border-l-2',
    'top-0 right-0 border-t-2 border-r-2',
    'bottom-0 left-0 border-b-2 border-l-2',
    'bottom-0 right-0 border-b-2 border-r-2',
]
</script>

<template>
    <div class="w-full max-w-md lg:max-w-none">
        <div class="relative bg-paper p-6 sm:p-8">
            <span v-for="c in corners" :key="c" aria-hidden="true" class="absolute size-4 border-ink" :class="c" />
            <div
                role="img"
                :aria-label="label"
                class="transition-opacity duration-300 ease-glide [&_svg]:block [&_svg]:h-auto [&_svg]:w-full"
                :class="sample ? 'opacity-20' : 'opacity-100'"
                v-html="svg"
            />
        </div>
        <p class="label mt-4 flex justify-between gap-4 text-graphite">
            <span class="min-w-0 truncate normal-case">{{ host }}</span>
            <span v-if="size" class="flex-none tabular-nums">{{ staticLabel }} · {{ size }} × {{ size }}</span>
        </p>
        <div class="mt-4 grid grid-cols-1 gap-2 xs:grid-cols-2">
            <button type="button" class="btn btn-ink min-h-12 px-2" @click="emit('download', 'png')">{{ downloadPng }}</button>
            <button type="button" class="btn btn-line min-h-12 px-2" @click="emit('download', 'svg')">{{ downloadSvg }}</button>
        </div>
    </div>
</template>
