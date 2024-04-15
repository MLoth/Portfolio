<template>
  <div
    class="@dark:bg-neutral-900 @dark:text-white relative flex min-h-screen flex-col bg-white text-neutral-900"
  >
    <AppHeader />

    <slot />

    <AppFooter />
  </div>
</template>

<script lang="ts">
export default {}
</script>
