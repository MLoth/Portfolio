<template>
  <div class="mx-auto grid max-w-3xl grid-cols-12">
    <div
      class="font-theme col-span-12 grid items-baseline pb-24 pt-6 text-center leading-none"
    >
      <h1
        class="@dark:text-neutral-200 relative col-start-1 row-start-1 text-5xl font-bold tracking-wide md:text-7xl"
      >
        {{ text }}
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    text: {
      type: String as () => string,
      required: true,
    },
  },
}
</script>
