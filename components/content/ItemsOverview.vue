<template>
  <GenericContainer>
    <HeroText
      :title="title"
      :subtitle="type === 'blog' ? 'Blog' : 'Projects'"
    />

    <div class="mb-24 grid gap-6 align-baseline md:grid-cols-12">
      <!-- <ContentList v-slot="{ list }" :query="query"> -->
      <!-- <div v-for=""> -->
      <ContentLink
        v-for="(item, index) in data"
        :key="item.slug"
        class="md:col-span-4"
        :item="item"
        :index="index"
        :cols="3"
      />
      <!-- </ContentList> -->
      <!-- </div> -->
    </div>
  </GenericContainer>
</template>

<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

const props = defineProps<{
  title: string
  query: QueryBuilderParams
  type: 'blog' | 'projects'
}>()

console.log('Props are', props)

const { data } = await useAsyncData(props.type, () =>
  queryContent(props.type).find(),
)

console.log('Data is', data)
</script>
