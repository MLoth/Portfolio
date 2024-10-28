<template>
  <div class="mx-auto max-w-3xl">
    <div class="pb-24 pt-6 font-bold leading-relaxed">
      <slot name="before" />

      <h1
        class="font-theme @dark:text-neutral-200 mb-3 text-5xl leading-none tracking-wide md:text-6xl"
      >
        {{ title }}
      </h1>
      <h2
        v-if="subtitle"
        class="@dark:text-neutral-500 text-xl tracking-wide text-neutral-300 md:text-3xl"
      >
        {{ subtitle }}
      </h2>

      <slot />
    </div>
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
})
</script>
