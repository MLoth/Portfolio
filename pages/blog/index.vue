<template>
  <GenericContainer>
    <HeroText front="Wildlife & tech" back="Blog" />

    <div class="grid md:grid-cols-12 gap-6 md:gap-12 align-baseline">
      <div
        class="md:col-span-12 md:my-10 font-bold text-center text-neutral-200 text-5xl md:text-9xl tracking-widest md:-mb-24 leading-none z-10 pointer-events-none"
      >
        <h2 class="inline-block">Blog</h2>
      </div>
      <!-- BLOG ITEMS -->
      <ContentList :query="blog" v-slot="{ list }">
        <RouterLink
          v-for="(blog, index) in list"
          :to="blog._path"
          :key="blog._path"
          class="md:col-span-4 @dark:bg-neutral-800 bg-white rounded-lg border-2 border-neutral-100 @dark:border-neutral-500 @dark:ring-black"
        >
          <!-- :class="index % 2 === 0 ? '' : 'translate-y-12'" -->
          <!-- placeholder -->
          <NuxtPicture
            v-if="blog.cover"
            :src="blog.cover"
            class="w-full rounded-tl-lg rounded-tr-lg"
            loading="lazy"
            :imgAttrs="{
              class: 'block w-full',
              alt: 'Blog',
            }"
          />

          <div class="p-6">
            <h3 class="tracking-wide font-theme font-bold">{{ blog.title }}</h3>
            <p
              class="font-mono text-neutral-500 @dark:text-neutral-300 text-sm"
            >
              {{ new Date(blog.createdAt).toLocaleDateString() }}
            </p>
          </div>
        </RouterLink>
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
