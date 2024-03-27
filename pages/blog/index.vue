<template>
  <GenericContainer>
    <HeroText front="Wildlife & tech" back="Blog" />
    <p class="-mt-20 mb-24 text-center opacity-30 text-lg">Blog</p>

    <div class="mb-24 grid gap-3 align-baseline md:grid-cols-12">
      <ContentList v-slot="{ list }" :query="blog">
        <ContentLink
          v-for="(blogItem, index) in list"
          :key="blogItem.slug"
          class="md:col-span-4"
          :item="blogItem"
          :index="index"
          :cols="3"
        />
      </ContentList>
    </div>
  </GenericContainer>
</template>

<script lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

export default {
  setup() {
    useHead({
      title: 'Blog',
    })

    const blog: QueryBuilderParams = {
      path: '/blog',
      sort: [{ createdAt: -1 }],
      order: 'desc',
    }

    return {
      blog,
    }
  },
}
</script>
