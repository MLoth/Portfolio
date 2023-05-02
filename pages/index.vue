<template>
  <GenericContainer>
    <HeroText front="Fullstack developer" back="Photographer" />
    <p class="-mt-20 mb-24 text-center opacity-30">
      Also a teacher, who loves design & photography.
    </p>

    <div class="grid gap-6 align-baseline md:grid-cols-12 md:gap-12">
      <div
        class="pointer-events-none z-10 text-center leading-none tracking-widest md:col-span-12 md:mt-12"
      >
        <!-- <p class="-mt-20 mb-24 text-center opacity-30"></p> -->
        <h2 class="font-theme text-4xl font-semibold tracking-wide">
          &lt;Projects&sol;&gt;
        </h2>
      </div>

      <!-- PROJECT ITEMS -->
      <ContentList :query="projects" v-slot="{ list }">
        <ContentLink
          class="md:col-span-6"
          v-for="(blog, index) in list"
          :item="blog"
          :index="index"
          :cols="2"
        />
      </ContentList>

      <div class="my-12 flex justify-center md:col-span-12">
        <RouterLink
          to="/projects"
          class="@dark:hover:bg-neutral-800 rounded-lg py-2 px-4 text-center text-sm font-bold opacity-20 hover:bg-neutral-100 hover:opacity-100"
        >
          All projects >
        </RouterLink>
      </div>

      <div
        class="pointer-events-none z-10 text-center leading-none tracking-widest md:col-span-12 md:mt-12"
      >
        <!-- <p class="-mt-20 mb-24 text-center opacity-30"></p> -->
        <h2 class="font-theme text-4xl font-semibold tracking-wide">Blog</h2>
      </div>

      <!-- BLOG ITEMS -->
      <ContentList :query="blog" v-slot="{ list }">
        <ContentLink
          class="md:col-span-6"
          v-for="(blog, index) in list"
          :item="blog"
          :index="index"
          :cols="2"
        />
      </ContentList>

      <div class="my-12 flex justify-center md:col-span-12">
        <RouterLink
          to="/blog"
          class="@dark:hover:bg-neutral-800 rounded-lg py-2 px-4 text-center text-sm font-bold opacity-20 hover:bg-neutral-100 hover:opacity-100"
        >
          All blog posts >
        </RouterLink>
      </div>
    </div>
  </GenericContainer>
</template>

<script lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

export default {
  components: {},

  setup() {
    useHead({
      title: 'Home',
    })

    const blog: QueryBuilderParams = {
      path: '/blog',
      limit: 2,
      sort: { createdAt: -1 },
    }

    const projects: QueryBuilderParams = {
      path: '/project',
      limit: 2,
      sort: { createdAt: -1 },
    }

    return {
      blog,
      projects,
    }
  },
}
</script>
