<template>
  <div>
    <div class="mx-auto grid max-w-7xl grid-cols-6 gap-6">
      <div class="peer relative col-span-6 overflow-hidden rounded bg-gray-800">
        <img
          class="block w-full hover:brightness-150 hover:contrast-150"
          src="~/assets/images/image-removebg.png"
          alt=""
        />

        <HeroText class="absolute z-10">
          "I make cool shit!"
          <span class="block">Fullstack developer region Ghent & Kortrijk</span>
        </HeroText>
      </div>

      <NuxtLink
        v-for="project of projects.data"
        :key="project.slug"
        class="focus-visible:outline-none relative col-span-2 overflow-hidden rounded-lg bg-white ring-gray-800 focus-visible:ring dark:bg-gray-800"
        :to="`/projects/${project.slug}`"
      >
        <span
          class="inline-block rounded bg-white px-2 py-1 font-theme text-sm font-black leading-none tracking-wide dark:bg-black"
        >
          Project
        </span>

        <!-- /images/ -->
        <img
          class="top-0 left-0 block w-full"
          :src="`${project.logo}`"
          :alt="`Logo for ${project.title}`"
        />

        <h3 class="mt-6 font-theme text-3xl font-bold">
          {{ project.title }}
        </h3>
      </NuxtLink>
    </div>

    <div class="mx-auto flex max-w-7xl items-center"></div>

    <!-- <div class="mx-auto mb-24 max-w-7xl">
      <NuxtLink
        class="
          focus-visible:outline-none
          rounded-lg
          font-theme
          text-4xl
          font-bold
          ring-gray-800
          hover:opacity-50
          focus-visible:ring
        "
        to="/projects"
      >
        What I do
      </NuxtLink>

      <div class="my-6 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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
    </div> -->

    <div class="my-24">
      <div class="mx-auto max-w-7xl lg:pl-12">
        <h1 class="mb-4 font-theme text-4xl font-bold">
          Freelance webdeveloper
        </h1>
        <div class="mb-12 max-w-3xl text-xl">
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
          font-theme font-bold
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
            <h3 class="font-theme font-bold text-xl">
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
