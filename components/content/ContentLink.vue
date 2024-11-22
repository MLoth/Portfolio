<template>
  <RouterLink
    :key="item.id"
    :to="item.path"
    :class="`@dark:ring-black relative block w-4/5 ${
      cols === 1 ? (index % 2 === 0 ? '' : 'ml-auto') : ''
    }`"
  >
    <div :style="viewTransitionName">
      <NuxtImg
        v-if="item.cover"
        :alt="item.title"
        :src="item.cover"
        :loading="lazy ? 'lazy' : 'eager'"
        placeholder
        class="@dark:bg-neutral-600 block aspect-[4/3] w-full rounded-lg bg-neutral-100"
      />
    </div>

    <div class="font-theme mb-12 mt-3">
      <h3
        class="text-2xl font-bold tracking-wide"
        :style="`view-transition-name: main-header-${item.path}`"
      >
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
const props = defineProps({
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

const viewTransitionName = computed(
  () => `view-transition-name: '${props.item.path}'`,
)
</script>
