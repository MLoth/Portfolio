<template>
  <div class="grid grid-cols-12">
    <div
      class="grid items-baseline col-span-12 pt-6 pb-24 text-center leading-none"
    >
      <p
        class="row-start-1 col-start-1 font-bold text-center text-neutral-100 @dark:text-neutral-800 text-7xl md:text-9xl tracking-widest"
      >
        {{ back }}
      </p>
      <h1
        class="relative row-start-1 col-start-1 text-5xl md:text-7xl font-bold tracking-wide @dark:text-neutral-200"
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
