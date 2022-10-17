<template>
  <div>
    <div class="mx-auto mb-12 max-w-7xl">
      <HeroText>
        "My work strives for a combination of to-the-point design<br />with fast
        technology."
      </HeroText>

      <div class="my-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <NuxtLink
          v-for="project of projects.data"
          :key="project.slug"
          class="
            focus-visible:outline-none
            flex flex-col
            overflow-hidden
            rounded-lg
            bg-white
            p-6
            ring-gray-800
            focus-visible:ring
            dark:bg-gray-800
          "
          :to="`/projects/${project.slug}`"
        >
          <div class="my-1 flex text-sm text-gray-400">
            <span
              v-for="(category, index) of project.categories"
              :key="category"
              :class="`${index > 0 ? 'ml-2' : ''}`"
              >{{ category }}</span
            >
          </div>
          <h3 class="font-theme text-xl font-bold">
            {{ project.title }}
          </h3>

          <img
            class="mt-12 -mb-6 translate-x-6 transform"
            :src="`/images/${project.logo}`"
            :alt="`Logo for ${project.title}`"
          />
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, useContext } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const { $content } = useContext();
    const projects = reactive<any>({ data: null });

    const getProjects = async () => {
      projects.data = await $content('projects').sortBy('createdAt').fetch();
    };

    getProjects();

    return {
      projects,
    };
  },
});
</script>
