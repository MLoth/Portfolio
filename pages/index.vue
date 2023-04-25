<template>
  <GenericContainer>
    <HeroText
      front="Fullstack developer & teacher, hobby photographer"
      back="Photographer"
    />

    <div class="grid gap-6 align-baseline md:grid-cols-12 md:gap-12">
      <div
        class="pointer-events-none z-10 text-center text-5xl font-bold leading-none tracking-widest text-neutral-200 md:col-span-12 md:my-10 md:-mb-24 md:text-8xl"
      >
        <h2 class="font-theme text-shadow inline-block">
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
          class="@dark:hover:bg-neutral-800 rounded-lg py-2 px-4 text-center text-sm font-bold hover:bg-neutral-100"
        >
          All projects >
        </RouterLink>
      </div>

      <div
        class="pointer-events-none z-10 text-center text-5xl font-bold leading-none tracking-widest text-neutral-200 md:col-span-12 md:my-10 md:-mb-24 md:text-8xl"
      >
        <h2 class="font-theme text-shadow inline-block">Blog</h2>
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
          class="@dark:hover:bg-neutral-800 rounded-lg py-2 px-4 text-center text-sm font-bold hover:bg-neutral-100"
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
