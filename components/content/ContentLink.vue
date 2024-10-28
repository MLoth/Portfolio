<template>
  <!-- ${getHeightOffset()} -->
  <RouterLink
    :key="item._path"
    :to="item._path"
    :class="`@dark:bg-neutral-800 @dark:ring-black relative block w-4/5 ${
      cols === 1 ? (index % 2 === 0 ? '' : 'ml-auto') : ''
    }`"
  >
    <!-- :modifiers="{
        ar: `${imageRatio.width}:${imageRatio.height}`,
        gravity: 'subject',
        c: 'fill',
      }" -->
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

    <div class="mt-3">
      <h3 class="font-theme text-right tracking-wide">
        <span class="font-bold">
          {{ item.title }}
        </span>
        {{ ' ' }}
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
      </h3>
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

<style>
.clip {
  clip-path: path('m6,0H0v6h0C0,2.69,2.69,0,6,0Z');
}
</style>
