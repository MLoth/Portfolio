<template>
  <GenericContainer>
    <HeroText front="Fullstack developer" back="Photographer" />
    <p class="-mt-20 mb-24 text-center opacity-30 text-lg">
      Also a teacher, who loves design & photography.
    </p>

    <div class="grid gap-6 align-baseline md:grid-cols-12 md:gap-12">
      <HomeItems
        title="Blog"
        :query="blog"
        more-text="All blog posts >"
        more-link="/blog"
      />

      <HomeItems
        title="&lt;Projects&sol;&gt;"
        :query="projects"
        more-text="All projects >"
        more-link="/projects"
      />
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
      sort: [{ createdAt: -1 }],
    }

    const projects: QueryBuilderParams = {
      path: '/project',
      limit: 2,
      sort: [{ createdAt: -1 }],
    }

    return {
      blog,
      projects,
    }
  },
}
</script>
