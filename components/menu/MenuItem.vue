<template>
  <Motion is="li" preset="slideVisibleLeft" :duration="100" :delay="delay">
    <NuxtLink
      :class="`@dark:hover:text-white block w-full rounded-2xl px-6 py-3 ring-neutral-800 focus-visible:outline-none focus-visible:ring ${
        blogActive ? 'opacity-20' : ''
      }`"
      :to="link"
    >
      {{ text }}
    </NuxtLink>
  </Motion>
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
  delay: {
    type: Number as () => number,
    default: 0,
  },
})
</script>

<style scoped>
.router-link-active {
  opacity: 0.3;
}
</style>
