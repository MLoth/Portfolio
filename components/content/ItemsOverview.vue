<template>
  <GenericContainer>
    <HeroText
      :title="title"
      :subtitle="type === 'blog' ? 'Blog' : 'Projects'"
    />

    <div class="mb-24 grid gap-3 align-baseline md:grid-cols-12">
      <ContentList v-slot="{ list }" :query="query">
        <ContentLink
          v-for="(item, index) in list"
          :key="item.slug"
          v-motion
          :initial="{
            opacity: 0,
            y: 100,
          }"
          :visible="{
            opacity: 1,
            y: 0,
          }"
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
