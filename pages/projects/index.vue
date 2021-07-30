<template>
  <div>
    <div class="max-w-7xl mx-auto mt-6 mb-12">
      <HeroText>
        "My work is a combination of a simple to-the-point design<br />with a
        fitting, fast technology.<a
          class="rounded-lg focus:outline-none focus:ring ring-gray-800"
          href=""
          >*</a
        >"
      </HeroText>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-12">
        <NuxtLink
          v-for="project of projects.data"
          :key="project.slug"
          class="
            flex flex-col
            bg-white
            p-6
            overflow-hidden
            rounded-lg
            focus:outline-none focus:ring
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
            class="-mb-6 transform translate-x-6"
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
