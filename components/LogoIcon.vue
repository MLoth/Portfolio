<template>
  <svg
    class="logo-animated fill-none stroke-current stroke-[76.5px]"
    viewBox="0 0 846.77 207.75"
    :style="`stroke-linecap:round;stroke-linejoin:round;`"
  >
    <!-- vector-effect="non-scaling-stroke" -->
    <path
      ref="path"
      d="m786.38,38.25c29.44,29.44,29.52,77.14.19,106.69h0c-29.48,29.69-77.48,29.77-107.06.19l-83.25-82.75c-29.61-29.47-77.5-29.33-106.94.31l-.12.13c-29.34,29.54-29.25,77.25.19,106.69l-107.63-107.12c-29.61-29.47-77.5-29.33-106.94.31l-.12.13c-29.34,29.54-29.25,77.25.19,106.69l-107.62-107.12c-29.61-29.47-77.5-29.33-106.94.31l-.12.13c-29.34,29.54-29.25,77.25.19,106.69"
    />
    <path
      d="m786.38,38.25c29.44,29.44,29.52,77.14.19,106.69h0c-29.48,29.69-77.48,29.77-107.06.19l-83.25-82.75c-29.61-29.47-77.5-29.33-106.94.31l-.12.13c-29.34,29.54-29.25,77.25.19,106.69l-107.63-107.12c-29.61-29.47-77.5-29.33-106.94.31l-.12.13c-29.34,29.54-29.25,77.25.19,106.69l-107.62-107.12c-29.61-29.47-77.5-29.33-106.94.31l-.12.13c-29.34,29.54-29.25,77.25.19,106.69"
    />
  </svg>
</template>

<script lang="ts" setup>
const pathLength = ref()
const path = ref<SVGPathElement | null>(null)

onMounted(() => {
  if (path.value) pathLength.value = path.value.getTotalLength()
})
</script>

<style scoped>
.logo-animated {
  stroke-dasharray: 1370.8946533203125;
  stroke-dashoffset: -1370.8946533203125;
  animation: dash 1s cubic-bezier(0.68, -0.55, 0.265, 1.2) forwards;
}

@keyframes dash {
  to {
    stroke-dashoffset: 0;
  }
}
</style>
