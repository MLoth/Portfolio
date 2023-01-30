<template>
  <RouterLink
    :to="item._path"
    :key="item._path"
    :class="`@dark:bg-neutral-800 bg-white rounded-lg border-2 border-neutral-100 @dark:border-neutral-500 @dark:ring-black ${getHeightOffset()}`"
  >
    <nuxt-picture
      v-if="item.cover"
      :src="item.cover"
      class="w-full rounded-tl-lg rounded-tr-lg"
      loading="lazy"
      placeholder
      :imgAttrs="{
        class: 'block w-full',
        alt: item.title,
      }"
    />

    <div class="p-6">
      <h3 class="tracking-wide font-theme font-bold">{{ item.title }}</h3>
      <p class="font-mono text-neutral-500 @dark:text-neutral-300 text-sm">
        {{ new Date(item.createdAt).toLocaleDateString() }}
      </p>
      <!-- <div v-if="item.categories">
        <p
          v-for="category of item.categories"
          class="font-mono text-neutral-500 @dark:text-neutral-300 text-xs"
        >
          {{ category }}
        </p>
      </div> -->
    </div>
  </RouterLink>
</template>

<script lang="ts">
export default {
  props: {
    item: {
      type: Object,
      required: true,
    },

    index: {
      type: Number,
      required: true,
    },

    cols: {
      type: Number,
      required: true,
    },
  },

  setup(props) {
    const getHeightOffset = () => {
      let offset = props.index + 1
      if (offset > props.cols) {
        offset = props.index - props.cols + 1
      }

      if (props.cols >= 2 && offset % 2 === 0) {
        return 'translate-y-12'
      }

      if (props.cols >= 3 && offset % 3 === 0) {
        return 'translate-y-24'
      }

      return 'translate-y-0'
    }

    return {
      getHeightOffset,
    }
  },
}
</script>
