<template>
  <GenericContainer>
    <HeroText
      :title="title"
      :subtitle="type === 'blog' ? 'Blog' : 'Projects'"
    />

    <div class="mb-24 grid gap-6 align-baseline md:grid-cols-12">
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
