<template>
  <div
    :class="`grid grid-cols-1 md:grid-cols-${
      images.length
    } mb-12 items-baseline gap-6 ${images.length === 1 ? '-mx-6 sm:mx-0' : ''}`"
  >
    <div v-for="{ url, alt, caption } in images">
      <nuxt-img
        :src="`blog/${url}`"
        :alt="alt ? alt : caption"
        :caption="caption"
        :class="`w-full ${
          images.length === 1 ? 'rounded-none sm:rounded-md' : 'rounded-md'
        }`"
        loading="lazy"
        :width="getWidth()"
      />
      <p
        v-if="caption"
        :class="`py-3 text-sm text-neutral-400 ${
          images.length === 1 ? 'mx-6 sm:mx-0' : ''
        }`"
      >
        {{ caption }}
      </p>
    </div>
  </div>
</template>

<script lang="ts">
export interface BlogImage {
  url: string
  caption: string
  alt?: string
}

export default {
  props: {
    images: {
      type: Array as () => BlogImage[],
      required: true,
    },
  },

  setup(props) {
    const getWidth = (): number => {
      const columns: number = props.images.length
      if (columns === 2) {
        return 564
      }
      if (columns === 3) {
        return 368
      }

      // Default to 1 column
      return 1152
    }

    return {
      getWidth,
    }
  },
}
</script>
