<template>
  <div :class="`grid grid-cols-1 grid-cols-${images.length} gap-6 mb-12`">
    <div v-for="({ url, alt, caption }, index) in images">
      <nuxt-img
        :src="`blog/${url}`"
        :alt="alt"
        :caption="caption"
        class="rounded-lg w-full"
        loading="lazy"
      />
      <p v-if="caption" class="text-sm text-neutral-400 py-3">{{ caption }}</p>
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
