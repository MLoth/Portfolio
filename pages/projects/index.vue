<template>
  <ItemsOverview title="Happy people" :query="projects" type="projects" />
</template>

<script lang="ts">
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

export default {
  setup() {
    useHead({
      title: 'Projects',
    })

    const projects: QueryBuilderParams = {
      path: '/projects',
      // limit: 2,
      sort: [{ createdAt: -1 }],
      order: 'desc',
    }

    return {
      projects,
    }
  },
}
</script>
