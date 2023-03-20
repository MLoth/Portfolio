<template>
  <RouterLink
    :to="item._path"
    :key="item._path"
    :class="`@dark:bg-neutral-800 @dark:border-neutral-500 @dark:ring-black rounded-lg border-2 border-neutral-100 bg-white ${getHeightOffset()}`"
  >
    <nuxt-img
      v-if="item.cover"
      :alt="item.title"
      :src="`${item._path}/${item.cover}`"
      :width="548"
      :height="365"
      :fit="`fit`"
      loading="lazy"
      placeholder
      class="block w-full rounded-tl-lg rounded-tr-lg"
    />

    <div class="p-6">
      <h3 class="text-md mb-1 font-bold tracking-wide">{{ item.title }}</h3>

      <p class="@dark:text-neutral-300 text-xs tracking-wide text-neutral-400">
        <template v-if="item._dir === 'blog'">
          {{
            new Date(item.createdAt).toLocaleDateString('en', {
              year: 'numeric',
              month: 'long',
            })
          }}
        </template>
        <template v-else>
          {{ item.categories.join(', ') }}
        </template>
      </p>
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
