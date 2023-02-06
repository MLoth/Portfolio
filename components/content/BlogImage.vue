<template>
  <div
    :class="`grid grid-cols-1 grid-cols-${images.length} mb-12 items-baseline gap-6`"
  >
    <div v-for="({ url, alt, caption }, index) in images">
      <nuxt-img
        :src="`blog/${url}`"
        :alt="alt"
        :caption="caption"
        class="w-full rounded-md"
        loading="lazy"
      />
      <p v-if="caption" class="py-3 text-sm text-neutral-400">{{ caption }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export interface BlogImage {
  url: string
  alt: string
  caption: string
}

export default {
  props: {
    images: {
      type: Array as () => BlogImage[],
      required: true,
    },
  },

  setup() {
    return {}
  },
}
</script>
