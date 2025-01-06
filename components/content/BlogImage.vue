<template>
  <div>
    <div
      :class="`grid grid-cols-1 md:grid-cols-${
        images.length
      } mb-6 h-full items-end gap-6 ${
        images.length === 1 ? '-mx-6 sm:mx-0' : ''
      }`"
    >
      <div v-for="{ url, alt, caption } in images" :key="url">
        <NuxtImg
          :src="url"
          :alt="alt ? alt : caption"
          :caption="caption"
          :class="`@dark:bg-neutral-600 block aspect-auto w-full bg-neutral-100 ${
            images.length === 1 ? 'rounded-none sm:rounded-lg' : 'rounded-lg'
          }`"
          :width="getWidth()"
          placeholder
          loading="lazy"
        />
        <p
          v-if="caption"
          :class="`py-3 text-center text-sm text-neutral-400 ${
            images.length === 1 ? 'mx-6 sm:mx-0' : ''
          }`"
        >
          {{ caption }}
        </p>
      </div>
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
