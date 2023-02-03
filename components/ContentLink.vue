<template>
  <RouterLink
    :to="item._path"
    :key="item._path"
    :class="`@dark:bg-neutral-800 bg-white rounded-lg border-2 border-neutral-100 @dark:border-neutral-500 @dark:ring-black ${getHeightOffset()}`"
  >
    <nuxt-picture
      v-if="item.cover"
      :src="`/${item._path}/${item.cover}`"
      fit="cover"
      width="100%"
      height="100%"
      class="w-full rounded-tl-lg rounded-tr-lg"
      loading="lazy"
      :imgAttrs="{
        class: 'block w-full rounded-tl-lg rounded-tr-lg',
        alt: item.title,
      }"
    />

    <div class="p-6">
      <h3 class="tracking-wide font-bold">{{ item.title }}</h3>
      <p class="font-mono text-neutral-400 @dark:text-neutral-300 text-sm">
        {{ new Date(item.createdAt).toLocaleDateString() }}
      </p>
      <div v-if="item.categories">
        <p
          class="font-mono text-neutral-300 mt-3 @dark:text-neutral-300 text-xs"
        >
          {{ item.categories.join(', ') }}
        </p>
      </div>
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

    // TODO: use cols to use the grid-span
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
