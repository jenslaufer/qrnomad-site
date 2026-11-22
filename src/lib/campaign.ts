import { ref } from 'vue'

/** Ad campaign of this visit (utm_campaign), in memory only: no cookie, no storage. */
export const campaign = ref<string>()

/** Read once after mount; prerendered HTML has no query string, so checkout links update then. */
export function readCampaign(search: string) {
    const c = new URLSearchParams(search).get('utm_campaign') ?? ''
    if (/^[a-z0-9-]{1,40}$/.test(c)) campaign.value = c
}
