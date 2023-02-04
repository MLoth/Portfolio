<template>
  <GenericContainer>
    <HeroText front="Happy people" back="<Projects/>" />

    <div class="grid gap-6 align-baseline md:grid-cols-12 md:gap-12">
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
