<template>
  <GenericContainer>
    <HeroText front="I make cool stuff." back="Martijn Loth" />

    <!-- <StaticMap /> -->

    <div class="grid gap-6 align-baseline md:grid-cols-12 md:gap-12">
      <div
        class="z-10 text-center text-5xl font-bold leading-none tracking-widest text-neutral-200 md:col-span-12 md:my-10 md:-mb-24 md:text-9xl"
      >
        <RouterLink to="/blog" class="">
          <h2 class="inline-block">&lt;Projects&sol;&gt;</h2>
        </RouterLink>
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

      <div class="my-12 text-center text-sm font-bold md:col-span-12">
        <RouterLink to="/projects"> All projects > </RouterLink>
      </div>

      <div
        class="pointer-events-none z-10 text-center text-5xl font-bold leading-none tracking-widest text-neutral-200 md:col-span-12 md:my-10 md:-mb-24 md:text-9xl"
      >
        <h2 class="inline-block">Blog</h2>
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

      <div class="my-12 text-center text-sm font-bold md:col-span-12">
        <RouterLink to="/blog"> All blog posts > </RouterLink>
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
