<template>
  <svg
    ref="logo"
    class="logo-animated-start fill-none stroke-current stroke-[76.5px]"
    viewBox="0 0 852 207.75"
    :style="`stroke-linecap:round;stroke-linejoin:round;`"
  >
    <path
      ref="path"
      d="m786.38,38.25c29.44,29.44,29.52,77.14.19,106.69h0c-29.48,29.69-77.48,29.77-107.06.19l-83.25-82.75c-29.61-29.47-77.5-29.33-106.94.31l-.12.13c-29.34,29.54-29.25,77.25.19,106.69l-107.63-107.12c-29.61-29.47-77.5-29.33-106.94.31l-.12.13c-29.34,29.54-29.25,77.25.19,106.69l-107.62-107.12c-29.61-29.47-77.5-29.33-106.94.31l-.12.13c-29.34,29.54-29.25,77.25.19,106.69"
    />
  </svg>
</template>

<style scoped>
.logo-animated-start {
  animation: dash 1s cubic-bezier(0.68, -0.55, 0.265, 1.2) forwards;
  stroke-dasharray: 1370.8946533203125;
  stroke-dashoffset: 1370.8946533203125;
}

@keyframes dash {
  from {
    stroke-dashoffset: 1370.8946533203125;
  }

  to {
    stroke-dashoffset: 2741.789306640625;
  }
}
</style>
