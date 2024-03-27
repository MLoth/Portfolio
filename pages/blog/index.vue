<template>
  <ItemsOverview title="Wildlife & Tech" :query="blog" type="blog" />
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
