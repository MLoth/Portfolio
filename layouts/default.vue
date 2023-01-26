<template>
  <div
    class="relative min-h-screen bg-white @dark:bg-neutral-900 text-neutral-900 @dark:text-white"
  >
    <AppHeader />

    <slot />

    <AppFooter />
  </div>
</template>

<script lang="ts">
export default {}
</script>
