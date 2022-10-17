<template>
  <div>
    <div class="mx-auto mb-12 max-w-7xl items-center md:flex md:space-x-3">
      <HeroText>
        "I'm Martijn Loth, a
        <a
          class="
            focus-visible:outline-none
            rounded-lg
            underline
            ring-gray-800
            focus-visible:ring
          "
          href="https://mct.be/"
          >teacher</a
        >, designer & developer"
      </HeroText>

      <div class="max-w-3xl shadow-sm">
        <img
          class="rounded-lg bg-white dark:bg-gray-800"
          src="~/assets/images/image-removebg.png"
          alt=""
        />
      </div>
    </div>

    <div class="mx-auto my-24 max-w-7xl">
      <div class="mr-auto max-w-3xl sm:pl-12 sm:pr-3">
        <p class="text-xl">
          "From a young age on, I had a curiousity for the web. It soon became
          clear that this would become my career. I love to tackle web-projects
          with both good design and a good technical approach."
        </p>

        <p class="mt-3 text-xl">
          I love to work on creating web projects and to pass that web knowledge
          to my students. Than I start learning from them afterwards, while
          coaching them in the start of their career and the new technologies
          they research.
        </p>
      </div>
      <!-- <HeroText>
        Work together? contact me at
        <a class="underline" href="mailto:martijn.loth@icloud.com"
          >martijn.loth[@]icloud.com</a
        >
      </HeroText> -->
    </div>

    <Cloud title="I love to work with" :tags="coolShit" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from '@nuxtjs/composition-api';

import Cloud from '../components/Cloud.vue';

export default defineComponent({
  components: {
    Cloud,
  },

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
      Cloud,
    };
  },
});
</script>
