<script setup lang="ts">
import { computed, ref } from 'vue'
import { signupUrl } from '../config'
import type { Copy } from '../content'
import { useQrGenerator } from '../composables/useQrGenerator'
import { downloadQr } from '../lib/download'
import { isEmail, subscribe } from '../lib/leads'
import type { QrFormat } from '../lib/qr'
import QrForm from './QrForm.vue'
import QrPreview from './QrPreview.vue'
import UpsellDialog from './UpsellDialog.vue'

// Hero with the free generator. Owns the download flow:
// download button -> upsell dialog -> free link -> file.
const props = defineProps<{ t: Copy['hero']; upsell: Copy['upsell']; locale: string }>()

const { input, error, svg, size, host, isSample, validate } = useQrGenerator(props.t.placeholder)
const errorText = computed(() => (error.value ? props.t.errors[error.value] : null))
const form = ref<InstanceType<typeof QrForm>>()
const status = ref('')
const pending = ref<{ url: string; format: QrFormat } | null>(null)
const optinNote = ref('')

function onSubmit() {
    status.value = validate() ? props.t.created(host.value) : ''
    if (!status.value) form.value?.focus()
}

function onDownload(format: QrFormat) {
    const url = validate()
    if (url) pending.value = { url, format }
    else form.value?.focus()
}

// The file comes first; the opt-in runs beside it and can never block it.
async function onFreeDownload(optin: { email: string; hp: string }) {
    const job = pending.value
    pending.value = null
    if (!job) return
    const file = downloadQr(job.url, job.format)
    if (optin.email) {
        const ok = isEmail(optin.email)
        optinNote.value = ok ? props.upsell.optin.sent : props.upsell.optin.invalid
        if (ok) void subscribe(optin.email, props.locale, optin.hp)
    }
    await file
}
</script>

<template>
    <section class="pt-12 pb-20 lg:pt-16 lg:pb-24" aria-labelledby="hero-title">
        <div class="wrap grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-12 lg:gap-y-0">
            <div class="lg:col-span-7">
                <p class="label kicker">{{ t.eyebrow }}</p>
                <h1 id="hero-title" class="headline mt-6 text-display">{{ t.headline }}</h1>
                <p class="mt-6 max-w-lead text-lead">{{ t.subline }}</p>
            </div>

            <QrForm
                ref="form"
                v-model="input"
                class="lg:col-span-7 lg:mt-12"
                :label="t.label"
                :placeholder="t.placeholder"
                :submit="t.submit"
                :help="t.help"
                :error="errorText"
                @submit="onSubmit"
            />

            <div class="lg:col-span-5 lg:col-start-8 lg:row-span-3 lg:row-start-1">
                <QrPreview
                    :svg="svg"
                    :size="size"
                    :host="host"
                    :sample="isSample"
                    :label="t.preview(host)"
                    :static-label="t.staticLabel"
                    :download-png="t.downloadPng"
                    :download-svg="t.downloadSvg"
                    @download="onDownload"
                />
                <p role="status" class="sr-only">{{ status }}</p>
                <p v-if="optinNote" role="status" class="mt-4 font-bold">{{ optinNote }}</p>
            </div>

            <div class="flex max-w-2xl gap-4 border-t border-ink pt-4 lg:col-span-7 lg:mt-8 lg:self-start">
                <svg class="mt-0.5 size-6 flex-none" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M3 3h7v7H3zM14 3h7v7h-7zM3 14h7v7H3z" fill="none" stroke="currentColor" stroke-width="2" />
                    <path d="M14 14h3v3h-3zM18 18h3v3h-3z" fill="currentColor" />
                </svg>
                <p class="leading-normal"><strong class="font-bold">{{ t.trustLead }}</strong> {{ t.trust }}</p>
            </div>
        </div>

        <UpsellDialog
            :open="pending !== null"
            :t="upsell"
            :app-url="signupUrl(locale, pending?.url)"
            @close="pending = null"
            @download="onFreeDownload"
        />
    </section>
</template>
