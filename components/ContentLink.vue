<template>
  <RouterLink
    :to="item._path"
    :key="item._path"
    :class="`@dark:bg-neutral-800 @dark:border-neutral-500 @dark:ring-black rounded-lg border-2 border-neutral-100 bg-white ${getHeightOffset()}`"
  >
    <nuxt-picture
      v-if="item.cover"
      :src="`assets/images${item._path}/${item.cover}`"
      fit="cover"
      width="548"
      height="365"
      class="w-full rounded-tl-lg rounded-tr-lg"
      loading="lazy"
      :imgAttrs="{
        class: 'block w-full rounded-tl-lg rounded-tr-lg',
        alt: item.title,
      }"
    />

    <div class="p-6">
      <h3 class="font-bold tracking-wide">{{ item.title }}</h3>
      <p class="@dark:text-neutral-300 font-mono text-xs text-neutral-400">
        {{
          new Date(item.createdAt).toLocaleDateString('en', {
            year: 'numeric',
            month: 'long',
          })
        }}
      </p>
      <div v-if="item.categories">
        <p
          class="@dark:text-neutral-300 mt-3 font-mono text-xs text-neutral-300"
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
