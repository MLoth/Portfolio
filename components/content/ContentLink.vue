<template>
  <!-- ${getHeightOffset()} -->
  <RouterLink
    :key="item._path"
    :to="item._path"
    :class="`@dark:ring-black relative block w-4/5 ${
      cols === 1 ? (index % 2 === 0 ? '' : 'ml-auto') : ''
    }`"
  >
    <NuxtPicture
      v-if="item.cover"
      :alt="item.title"
      :src="item.cover"
      :loading="lazy ? 'lazy' : 'eager'"
      placeholder
      :img-attrs="{
        class: `block bg-neutral-100 w-full rounded-lg @dark:bg-neutral-600`,
      }"
      :style="`view-transition-name: '${item._path}'`"
    />

    <div class="font-theme mb-12 mt-3">
      <h3 class="text-2xl font-bold tracking-wide">
        {{ item.title }}
      </h3>
      <p class="text-sm tracking-wide text-neutral-400">
        <template v-if="item._dir === 'blog'">
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
defineProps({
  item: {
    type: Object,
    required: true,
  },

  index: {
    type: Number,
    required: true,
  },

  cols: {
    type: Number,
    required: true,
  },

  lazy: {
    type: Boolean as PropType<boolean>,
    default: true,
  },
})
</script>
