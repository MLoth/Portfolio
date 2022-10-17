<template>
  <div
    class="
      mx-auto
      max-w-7xl
      rounded-lg
      bg-white
      p-12
      text-gray-900
      dark:bg-gray-800 dark:text-gray-50
    "
  >
    <h2 class="font-theme text-4xl font-bold">{{ title }}</h2>
    <ul
      class="
        -mx-3
        mt-6
        flex flex-wrap
        font-theme
        text-xl
        font-semibold
        tracking-wide
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
