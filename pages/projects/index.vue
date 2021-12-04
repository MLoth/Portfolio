<template>
  <div>
    <div class="max-w-7xl mx-auto mb-12">
      <HeroText>
        "My work strives for a combination of to-the-point design<br />with fast
        technology."
      </HeroText>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
        <NuxtLink
          v-for="project of projects.data"
          :key="project.slug"
          class="
            flex flex-col
            bg-white
            dark:bg-gray-800
            p-6
            overflow-hidden
            rounded-lg
            focus-visible:outline-none focus-visible:ring
            ring-gray-800
          "
          :to="`/projects/${project.slug}`"
        >
          <div class="flex text-sm text-gray-400 my-1">
            <span
              v-for="(category, index) of project.categories"
              :key="category"
              :class="`${index > 0 ? 'ml-2' : ''}`"
              >{{ category }}</span
            >
          </div>
          <h3 class="font-geomanist font-bold text-xl">
            {{ project.title }}
          </h3>

          <img
            class="mt-12 -mb-6 transform translate-x-6"
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
