<template>
  <GenericContainer>
    <HeroText front="Wildlife & tech" back="Blog" />
    <p class="-mt-20 mb-24 text-center opacity-30">Blog</p>

    <div class="mb-24 grid gap-6 align-baseline md:grid-cols-12 md:gap-12">
      <ContentList :query="blog" v-slot="{ list }">
        <ContentLink
          v-for="(blog, index) in list"
          class="md:col-span-4"
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
      path: '/blog',
      sort: { createdAt: -1 },
      order: 'desc',
    }

    return {
      blog,
    }
  },
}
</script>
