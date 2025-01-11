<template>
  <li>
    <NuxtLink
      :class="`@dark:hover:text-white block w-full rounded-full px-6 py-3 ring-neutral-800 focus-visible:outline-none focus-visible:ring ${
        blogActive ? 'opacity-20' : ''
      }`"
      :to="link"
    >
      {{ text }}
    </NuxtLink>
  </li>
</template>

<script lang="ts" setup>
defineProps({
  link: {
    type: String as () => string,
    required: true,
  },
  text: {
    type: String as () => string,
    required: true,
  },
  blogActive: {
    type: Boolean as () => boolean,
    default: false,
  },
})
</script>

<style scoped>
.router-link-active {
  opacity: 0.3;
}
</style>
