<template>
  <div
    class="pointer-events-none text-center leading-none tracking-widest md:col-span-12 md:mt-12"
  >
    <h2 class="font-theme mb-3 text-5xl font-semibold tracking-wide">
      {{ title }}
    </h2>
  </div>

  <ContentLink
    v-for="(item, index) in data"
    :key="item.stem"
    class="md:col-span-6"
    :item="item"
    :index="index"
    :cols="2"
    :lazy="false"
  />

  <div class="mb-6 flex justify-center md:col-span-12">
    <RouterLink
      :to="moreLink"
      class="@dark:hover:bg-neutral-800 rounded-lg px-4 py-2 text-center text-sm font-bold opacity-20 hover:bg-neutral-100 hover:opacity-100"
    >
      {{ moreText }}
    </RouterLink>
  </div>
</template>

<script lang="ts" setup>
import type { Collections } from '@nuxt/content'

const props = defineProps<{
  title: string
  query: keyof Collections
  moreText: string
  moreLink: string
}>()

const { data } = await useAsyncData(`home-${props.query}`, () =>
  queryCollection<keyof Collections>(props.query)
    .order('createdAt', 'DESC')
    .limit(2)
    .all(),
)
</script>
