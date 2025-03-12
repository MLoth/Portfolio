<template>
  <div class="grid grid-cols-4 items-center gap-6 md:gap-12">
    <h3
      class="font-theme col-span-2 mb-2 shrink-0 text-2xl font-semibold md:col-span-1"
    >
      {{ title }}
    </h3>

    <NuxtImg
      class="col-span-2 row-start-2 aspect-[3/2] shrink-0 overflow-hidden rounded-2xl md:col-span-1 md:row-start-auto"
      :src="imageLocation"
    />

    <p class="max-w-128 col-span-2 row-span-2 text-lg md:row-span-1">
      {{ service }}
    </p>
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

  imageLocation: {
    type: String,
    required: true,
  },
})
</script>
