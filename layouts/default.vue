<template>
  <div class="flex flex-col min-h-screen">
    <AppHeader />

    <div class="px-6">
      <Nuxt />
    </div>

    <AppFooter />
  </div>
</template>

<script lang="ts">
import AppHeader from '../components/AppHeader.vue';
import AppFooter from '../components/AppFooter.vue';

export default {
  components: {
    AppHeader,
    AppFooter,
  },
};
</script>

<style>
body,
html {
  @apply bg-gray-100;
}

::selection {
  @apply bg-gray-800 text-gray-50;
}
</style>
