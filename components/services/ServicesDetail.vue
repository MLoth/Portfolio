<template>
  <div class="md:col-span-4">
    <div class="mb-2 text-neutral-500">
      <slot name="icon" />
    </div>
    <h3 class="font-theme mb-2 text-lg font-semibold">{{ title }}</h3>
    <p>{{ service }}</p>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    required: true,
  },

  service: {
    type: String,
    required: true,
  },
})
</script>
