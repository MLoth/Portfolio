<template>
  <GenericContainer>
    <HeroText
      :title="title"
      :subtitle="type === 'blog' ? 'Blog' : 'Projects'"
    />

    <!-- <div class="mb-24 grid auto-cols-max grid-flow-row-dense gap-24"> -->
    <div
      class="grid grid-flow-dense auto-rows-auto gap-12 md:grid-cols-2 lg:grid-cols-3"
    >
      <ContentLink
        v-for="(item, index) in data"
        :key="item.id"
        :item="item"
        :index="index"
        :cols="3"
        class="w-full"
      />
    </div>
  </GenericContainer>
</template>

<script lang="ts" setup>
import type { Collections } from '@nuxt/content'

const props = defineProps<{
  title: string
  type: keyof Collections
}>()

const { data } = await useAsyncData(`overview-${props.type}`, () =>
  queryCollection(props.type).order('createdAt', 'DESC').all(),
)
console.log(`overview-${props.type}`)
</script>
