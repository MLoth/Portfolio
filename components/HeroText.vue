<template>
  <div class="grid grid-cols-12">
    <div
      class="font-theme col-span-12 grid items-baseline pt-6 pb-24 text-center leading-none"
    >
      <!-- <p
        class="@dark:text-neutral-800 col-start-1 row-start-1 text-center font-mono text-5xl font-bold text-neutral-100 md:text-7xl"
      >
        {{ back }}
      </p> -->
      <h1
        class="@dark:text-neutral-200 relative col-start-1 row-start-1 text-5xl font-bold tracking-wide md:text-7xl"
      >
        {{ front }}
      </h1>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  props: {
    front: {
      type: String as () => string,
      required: true,
    },

    back: {
      type: String as () => string,
      required: true,
    },
  },
}
</script>
