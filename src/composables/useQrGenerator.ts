import { computed, onMounted, ref, shallowRef, watch } from 'vue'
import { normalizeUrl, renderSvg } from '../lib/qr'

/**
 * Live QR preview for a typed link. Until the link is valid the preview shows
 * `sampleUrl` (or the last valid code) dimmed. Errors stay quiet until the
 * visitor submits or tries to download, then follow every keystroke.
 */
export function useQrGenerator(sampleUrl: string) {
    const input = ref('')
    const result = computed(() => normalizeUrl(input.value))
    const touched = ref(false)
    const svg = shallowRef('')
    const size = ref(0)
    const encoded = ref(sampleUrl)
    const isSample = computed(() => !result.value.ok)
    const error = computed(() => (touched.value && !result.value.ok ? result.value.error : null))
    const host = computed(() => new URL(encoded.value).hostname)

    let run = 0
    async function render(url: string) {
        const ticket = ++run
        const out = await renderSvg(url)
        if (ticket !== run) return
        svg.value = out.svg
        size.value = out.size
        encoded.value = url
    }

    // Client only: the prerendered HTML carries an empty, fixed-size frame.
    onMounted(() => render(sampleUrl))
    watch(result, r => {
        if (r.ok) render(r.url)
        else if (r.error === 'empty') render(sampleUrl)
    })

    /** Show errors from now on; return the link to encode, or null. */
    function validate(): string | null {
        touched.value = true
        return result.value.ok ? result.value.url : null
    }

    return { input, error, svg, size, host, isSample, validate }
}
