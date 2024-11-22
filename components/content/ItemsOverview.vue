<template>
  <GenericContainer>
    <HeroText
      :title="title"
      :subtitle="type === 'blog' ? 'Blog' : 'Projects'"
    />

    <div class="mb-24 grid gap-6 align-baseline md:grid-cols-12">
      <ContentLink
        v-for="(item, index) in data"
        :key="item.id"
        :item="item"
        :index="index"
        :cols="3"
        class="md:col-span-4"
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

const { data } = await useAsyncData(props.type, () =>
  queryCollection(props.type).order('createdAt', 'DESC').all(),
)
</script>
