<script setup lang="ts">
defineProps<{ title: string }>()
</script>

<template>
    <section class="mt-10 border-t-2 border-ink pt-6 first:mt-0">
        <h2 class="headline text-h4">{{ title }}</h2>
        <div class="mt-4 space-y-3">
            <slot />
        </div>
    </section>
</template>
