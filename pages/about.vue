<template>
  <div>
    <div class="max-w-7xl mx-auto mt-6 mb-12">
      <HeroText>
        "I'm Martijn Loth, a
        <a
          class="
            underline
            rounded-lg
            focus:outline-none focus:ring
            ring-gray-800
          "
          href="https://mct.be/"
          >teacher</a
        >, designer & developer"
      </HeroText>
    </div>

    <div class="max-w-7xl mx-auto bg-gray-900 text-gray-50 rounded-lg p-12">
      <h2 class="font-geomanist font-bold text-4xl">I love to work with</h2>
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
          v-for="tech of coolShit.sort((a, b) => 0.5 - Math.random())"
          :key="tech"
          class="mx-3 mb-1"
        >
          {{ tech }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const coolShit: string[] = [
      'Javascript',
      'Vue ♥️',
      'a11y ♥️',
      'You',
      'NuxtJS ♥️',
      'CSS',
      'HTML',
      'TailwindCSS ♥️',
      'NodeJS',
      'GraphQL ♥️',
      'MongoDB',
      'Express ♥️',
      'React',
      'LightHouse',
      'NextJS',
      'Angular',
    ];

    return {
      coolShit,
    };
  },
});
</script>
