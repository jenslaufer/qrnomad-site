<script setup lang="ts">
import { ref } from 'vue'
import ArrowIcon from './ArrowIcon.vue'

defineProps<{
    label: string
    placeholder: string
    submit: string
    help: string
    error: string | null
}>()
const emit = defineEmits<{ submit: [] }>()
const url = defineModel<string>({ required: true })

const field = ref<HTMLInputElement>()
defineExpose({ focus: () => field.value?.focus() })
</script>

<template>
    <form id="generator" class="max-w-2xl" novalidate @submit.prevent="emit('submit')">
        <label for="qr-url" class="label mb-2 block">{{ label }}</label>
        <div class="flex flex-col border-2 border-ink sm:flex-row">
            <input
                id="qr-url"
                ref="field"
                v-model="url"
                type="url"
                inputmode="url"
                autocomplete="url"
                autocapitalize="off"
                spellcheck="false"
                :placeholder="placeholder"
                :aria-invalid="error ? 'true' : 'false'"
                aria-describedby="qr-url-error qr-url-help"
                class="h-15 w-full min-w-0 flex-none bg-paper sm:flex-1 px-4 text-lead text-ink transition-colors duration-150 ease-press placeholder:text-graphite hover:bg-stock focus-visible:bg-paper focus-visible:outline-none focus-visible:inset-ring-4 focus-visible:inset-ring-ink"
            >
            <button
                type="submit"
                class="btn btn-signal min-h-15 border-0 border-t-2 border-ink sm:border-t-0 sm:border-l-2"
            >
                {{ submit }}
                <ArrowIcon />
            </button>
        </div>
        <p id="qr-url-error" role="alert" class="flex gap-2 font-bold" :class="error && 'mt-2'">
            <template v-if="error">
                <span aria-hidden="true" class="mt-1 grid size-4 flex-none place-items-center bg-ink text-label text-signal">!</span>
                {{ error }}
            </template>
        </p>
        <p id="qr-url-help" class="mt-2 text-label tracking-normal text-graphite">{{ help }}</p>
    </form>
</template>
