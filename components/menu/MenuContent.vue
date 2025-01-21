<template>
  <nav class="flex">
    <ul
      class="items-between flex flex-col font-semibold tracking-wide md:flex-row md:justify-between md:gap-6 md:text-base"
    >
      <MotionGroup preset="slideVisibleLeft" :duration="60">
        <slot />
      </MotionGroup>
    </ul>
  </nav>
</template>
