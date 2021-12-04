<template>
  <div>
    <div class="flex items-center max-w-7xl mx-auto">
      <HeroText
        >"I make cool shit!"<span class="block"
          >Fullstack developer region Ghent & Kortrijk</span
        ></HeroText
      >
    </div>

    <div class="mx-auto max-w-7xl mb-24">
      <NuxtLink
        class="
          font-geomanist font-bold
          text-4xl
          hover:opacity-50
          rounded-lg
          focus-visible:outline-none focus-visible:ring
          ring-gray-800
        "
        to="/projects"
        >What I do</NuxtLink
      >

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
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
            <!-- <span
              v-for="(category, index) of project.categories"
              :key="category"
              :class="`${index > 0 ? 'ml-2' : ''}`"
              >{{ category }}</span
            > -->
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

    <div class="my-24">
      <div class="max-w-7xl mx-auto lg:pl-12">
        <h1 class="font-geomanist font-bold text-4xl mb-4">
          Freelance webdeveloper
        </h1>
        <div class="max-w-3xl mb-12 text-xl">
          <p class="">
            As <strong>a freelance web consultant</strong>, I can help with a
            multitude of full-stack projects. After an early career in design
            and marketing, the last couple of years I work with a lot of passion
            on all sort of web projects.
          </p>
          <p class="mt-4">
            The key to a good project is a good vision on the needs of the
            customer and also <strong>good communication</strong> with the
            client. Besides that, I also bring my personal network into every
            project. For specific needs in a project, I can always count on a
            couple of experts in that field.
          </p>
          <p class="mt-4">
            Do you need <strong>a partnership like this</strong>? Let's see if
            we like each other and what is needed for your project.
          </p>
        </div>
      </div>
    </div>

    <!-- <div class="mx-auto max-w-7xl mb-24">
      <NuxtLink
        class="
          font-geomanist font-bold
          text-4xl
          hover:opacity-50
          rounded-lg
          focus-visible:outline-none focus-visible:ring
          ring-gray-800
        "
        to="/blog"
        >Blog</NuxtLink
      >

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 my-6">
        <NuxtLink
          v-for="blogPost of blogPosts.data"
          :key="blogPost.slug"
          class="
            flex flex-col
            bg-gray-900
            dark:bg-white
            text-gray-50
            overflow-hidden
            rounded-lg
            focus-visible:outline-none focus-visible:ring
            ring-gray-800
          "
          :to="`/blog/${blogPost.slug}`"
        >
          <div class="p-6">
            <div class="flex text-sm text-gray-400 my-1">
              <span
                v-for="(category, index) of blogPost.categories"
                :key="category"
                :class="`${index > 0 ? 'ml-2' : ''}`"
                >{{ category }}</span
              >
            </div>
            <h3 class="font-geomanist font-bold text-xl">
              {{ blogPost.title }}
            </h3>
          </div>

          <img
            class="block h-auto w-full filter sm:grayscale hover:grayscale-0"
            :src="`/images/blog/${blogPost.header}`"
            :alt="`Logo for ${blogPost.title}`"
          />
        </NuxtLink>
      </div>
    </div> -->
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, useContext } from '@nuxtjs/composition-api';

export default defineComponent({
  setup() {
    const { $content } = useContext();
    const projects = reactive<any>({ data: null });
    const blogPosts = reactive<any>({ data: null });

    const getProjects = async () => {
      projects.data = await $content('projects')
        .sortBy('createdAt')
        .limit(4)
        .fetch();
    };

    const getBlogPosts = async () => {
      blogPosts.data = await $content('blog')
        .sortBy('createdAt')
        .limit(4)
        .fetch();
    };

    getProjects();
    getBlogPosts();

    return {
      projects,
      blogPosts,
    };
  },
});
</script>
