<script setup lang="ts">
import { onBeforeUnmount, ref, watch } from 'vue'
import type { Copy } from '../content'
import ArrowIcon from './ArrowIcon.vue'

// Modal shown between "download" and the file. Native <dialog>: showModal()
// makes the page inert (focus stays inside) and Esc closes it.
const props = defineProps<{ open: boolean; t: Copy['upsell']; appUrl: string }>()
const emit = defineEmits<{ close: []; download: [] }>()

const dialog = ref<HTMLDialogElement>()
let opener: HTMLElement | null = null

function show(d: HTMLDialogElement) {
    opener = document.activeElement as HTMLElement | null
    if (typeof d.showModal === 'function') d.showModal()
    else d.setAttribute('open', '')
}

function hide(d: HTMLDialogElement) {
    if (typeof d.close === 'function') d.close()
    else d.removeAttribute('open')
    opener?.focus()
    opener = null
}

watch(() => props.open, open => {
    if (dialog.value) (open ? show : hide)(dialog.value)
})

// Esc or form-less close: tell the parent so its state follows.
function onNativeClose() {
    if (props.open) emit('close')
}

onBeforeUnmount(() => { if (dialog.value?.hasAttribute('open')) hide(dialog.value) })
</script>

<template>
    <dialog
        ref="dialog"
        aria-labelledby="upsell-title"
        class="on-ink mx-4 my-auto max-w-2xl bg-ink p-0 text-paper backdrop:bg-ink/80 sm:mx-auto"
        @close="onNativeClose"
    >
        <div class="relative px-6 py-12 sm:px-12">
            <button
                type="button"
                :aria-label="t.close"
                class="absolute top-4 right-4 grid size-10 cursor-pointer place-items-center border border-graphite transition-colors duration-150 ease-press hover:border-paper hover:bg-paper hover:text-ink"
                @click="emit('close')"
            >
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                    <path d="M1 1l12 12M13 1L1 13" stroke="currentColor" stroke-width="2" />
                </svg>
            </button>
            <h2 id="upsell-title" class="headline mb-6 max-w-title pr-12 text-h3">{{ t.title }}</h2>
            <div class="max-w-measure space-y-4 text-ash">
                <p v-for="p in t.body" :key="p">{{ p }}</p>
            </div>
            <p class="mt-6 max-w-measure border-t border-graphite pt-6">
                <strong class="font-extrabold text-signal">{{ t.offer }}</strong>
                {{ t.offerRest }}
            </p>
            <div class="mt-8 flex flex-col items-stretch gap-6 sm:flex-row sm:items-center">
                <a :href="appUrl" class="btn btn-signal">{{ t.primary }} <ArrowIcon /></a>
                <button type="button" class="link text-paper" @click="emit('download')">{{ t.free }}</button>
            </div>
        </div>
    </dialog>
</template>
