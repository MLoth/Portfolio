<template>
  <RouterLink
    :key="item.id"
    :to="item.path"
    :class="`@dark:ring-black relative block ${
      cols === 2 ? (index % 2 === 0 ? '' : 'mt-12') : ''
    }`"
  >
    <NuxtImg
      v-if="item.cover"
      :alt="item.title"
      :src="item.cover"
      :loading="lazy ? 'lazy' : 'eager'"
      :style="{ 'view-transition-name': item.stem.split('/')[1] }"
      placeholder
      class="@dark:bg-neutral-600 block aspect-[3/2] w-full rounded-xl bg-neutral-100"
    />

    <div class="font-theme mt-3">
      <h3 class="text-2xl font-bold tracking-wide">
        {{ item.title }}
      </h3>
      <p class="text-sm tracking-wide text-neutral-400">
        <template v-if="item.path.includes('blog')">
          {{
            new Date(item.createdAt).toLocaleDateString('en', {
              year: 'numeric',
              month: 'long',
            })
          }}
        </template>
        <template v-else>
          {{ item.categories.join(', ') }}
        </template>
      </p>
    </div>
  </RouterLink>
</template>

<script lang="ts" setup>
import type { BlogCollectionItem, ProjectsCollectionItem } from '@nuxt/content'

defineProps({
  item: {
    type: Object as PropType<BlogCollectionItem | ProjectsCollectionItem>,
    required: true,
  },

  index: {
    type: Number as PropType<number>,
    required: true,
  },

  cols: {
    type: Number as PropType<number>,
    required: true,
  },

  lazy: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
})
</script>
