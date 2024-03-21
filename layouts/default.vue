<template>
  <div
    class="@dark:bg-neutral-900 @dark:text-white relative min-h-screen bg-white text-neutral-900 flex flex-col"
  >
    <AppHeader />

    <slot />

    <AppFooter />
  </div>
</template>

<script lang="ts">
export default {}
</script>
