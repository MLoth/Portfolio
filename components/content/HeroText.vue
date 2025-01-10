<template>
  <div class="mx-auto max-w-3xl pb-24 pt-6 font-bold leading-relaxed">
    <slot name="before" />

    <h1
      class="font-theme @dark:text-neutral-200 mb-3 text-5xl leading-none tracking-wide md:text-6xl"
      :style="`view-transition-name: main-header${viewTransitionId ? `-${viewTransitionId}` : ''}`"
    >
      {{ title }}
    </h1>
    <h2
      v-if="subtitle"
      class="@dark:text-neutral-500 text-xl tracking-wide text-neutral-300 md:text-3xl"
      :style="`view-transition-name: main-subheader${viewTransitionId ? `-${viewTransitionId}` : ''}`"
    >
      {{ subtitle }}
    </h2>

    <slot />
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: {
    type: String as () => string,
    required: true,
  },

  subtitle: {
    type: String as () => string,
    required: false,
    default: '',
  },

  viewTransitionId: {
    type: String as () => string,
    required: false,
    default: '',
  },
})
</script>
