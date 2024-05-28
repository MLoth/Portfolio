<template>
  <div class="mx-auto max-w-3xl">
    <div class="font-theme pb-24 pt-6 text-center font-bold leading-relaxed">
      <h1
        class="@dark:text-neutral-200 mb-3 text-5xl leading-none tracking-wide md:text-8xl"
      >
        {{ title }}
      </h1>
      <h2
        v-if="subtitle"
        class="@dark:text-neutral-500 text-2xl tracking-wide text-neutral-200 md:text-3xl"
      >
        {{ subtitle }}
      </h2>
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
