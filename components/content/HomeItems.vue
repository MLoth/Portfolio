<template>
  <div
    class="pointer-events-none z-10 text-center leading-none tracking-widest md:col-span-12 md:mt-12"
  >
    <h2 class="font-theme mb-6 text-5xl font-semibold tracking-wide">
      {{ title }}
    </h2>
  </div>

  <ContentList v-slot="{ list }" :query="query">
    <ContentLink
      v-for="(item, index) in list"
      :key="item.slug"
      class="md:col-span-12"
      :item="item"
      :index="index"
      :cols="1"
      :lazy="false"
    />
  </ContentList>

  <div class="my-12 flex justify-center md:col-span-12">
    <RouterLink
      :to="moreLink"
      class="@dark:hover:bg-neutral-800 rounded-lg px-4 py-2 text-center text-sm font-bold opacity-20 hover:bg-neutral-100 hover:opacity-100"
    >
      {{ moreText }}
    </RouterLink>
  </div>
</template>

<script lang="ts" setup>
import type { QueryBuilderParams } from '@nuxt/content/dist/runtime/types'

defineProps<{
  title: string
  query: QueryBuilderParams
  moreText: string
  moreLink: string
}>()
</script>
