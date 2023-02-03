<template>
  <nuxt-img
    :src="`blog/${url}`"
    :alt="alt"
    :caption="caption"
    class="rounded-lg w-full"
    loading="lazy"
  />
</template>

<script lang="ts">
export default {
  props: {
    gridItems: {
      type: Number as () => number,
      required: false,
      default: 3,
    },

    url: {
      type: String as () => string,
      required: true,
    },

    alt: {
      type: String as () => string,
      required: false,
    },

    caption: {
      type: String as () => string,
      required: false,
    },
  },

  setup() {},
}
</script>
