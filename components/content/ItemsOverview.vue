<template>
  <GenericContainer>
    <HeroText :text="title" />
    <p class="-mt-20 mb-24 text-center opacity-30 text-lg">
      {{ type === 'blog' ? 'Blog' : 'Projects' }}
    </p>

    <div class="mb-24 grid gap-3 align-baseline md:grid-cols-12">
      <ContentList v-slot="{ list }" :query="query">
        <ContentLink
          v-for="(item, index) in list"
          :key="item.slug"
          class="md:col-span-4"
          :item="item"
          :index="index"
          :cols="3"
        />
      </ContentList>
    </div>
  </GenericContainer>
</template>

<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

defineProps<{
  title: string
  query: QueryBuilderParams
  type: 'blog' | 'projects'
}>()
</script>
