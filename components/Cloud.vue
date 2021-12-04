<template>
  <div
    class="
      max-w-7xl
      mx-auto
      bg-white
      text-gray-900
      dark:bg-gray-800 dark:text-gray-50
      rounded-lg
      p-12
    "
  >
    <h2 class="font-geomanist font-bold text-4xl">{{ title }}</h2>
    <ul
      class="
        font-geomanist font-semibold
        tracking-wide
        flex flex-wrap
        -mx-3
        mt-6
        text-xl
      "
    >
      <li
        v-for="tech of tagCopy.sort((a, b) => 0.5 - Math.random())"
        :key="tech"
        class="mx-3 mb-1"
      >
        {{ tech }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api';

export default defineComponent({
  name: 'Cloud',

  props: {
    tags: {
      type: Array,
      required: true,
    },

    title: {
      type: String,
      default: 'Made with:',
    },
  },

  setup(props) {
    const tagCopy: string[] = props.tags as string[];

    return {
      tagCopy,
    };
  },
});
</script>
