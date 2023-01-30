<template>
  <GenericContainer>
    <HeroText front="Happy people" back="<Projects/>" />

    <div class="bg-red-300">
      <p>I love to create things. I love to create things that help people.</p>
    </div>

    <div class="grid md:grid-cols-12 gap-6 md:gap-12 align-baseline">
      <div
        class="md:col-span-12 md:my-10 font-bold text-center text-neutral-200 text-5xl md:text-9xl tracking-widest md:-mb-24 leading-none z-10 pointer-events-none"
      >
        <h2 class="inline-block">Projects</h2>
      </div>
      <!-- BLOG ITEMS -->
      <ContentList :query="blog" v-slot="{ list }">
        <ContentLink
          class="md:col-span-4"
          v-for="(blog, index) in list"
          :item="blog"
          :index="index"
          :cols="3"
        />
      </ContentList>
    </div>
  </GenericContainer>
</template>

<script lang="ts">
import { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

export default {
  setup() {
    useHead({
      title: 'Blog',
    })

    const blog: QueryBuilderParams = {
      path: '/projects',
      // limit: 2,
      sort: { createdAt: -1 },
      order: 'desc',
    }

    return {
      blog,
    }
  },
}
</script>
