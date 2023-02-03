<template>
  <GenericContainer>
    <HeroText front="I make cool stuff." back="Martijn Loth" />

    <!-- <StaticMap /> -->

    <div class="grid md:grid-cols-12 gap-6 md:gap-12 align-baseline">
      <div
        class="md:col-span-12 md:my-10 font-bold text-center text-neutral-200 text-5xl md:text-9xl tracking-widest md:-mb-24 leading-none z-10"
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

      <div class="md:col-span-12 text-center my-12 font-bold text-sm">
        <RouterLink to="/projects"> All projects > </RouterLink>
      </div>

      <div
        class="md:col-span-12 md:my-10 font-bold text-center text-neutral-200 text-5xl md:text-9xl tracking-widest md:-mb-24 leading-none z-10 pointer-events-none"
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

      <div class="md:col-span-12 text-center my-12 font-bold text-sm">
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
