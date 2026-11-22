<template>
    <RouterView v-slot="{ Component, route }">
        <!-- Remount per path so EN <-> DE swaps copy and head cleanly. -->
        <component :is="Component" :key="route.path" />
    </RouterView>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { readCampaign } from './lib/campaign'

onMounted(() => readCampaign(location.search))
</script>
