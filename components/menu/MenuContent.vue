<template>
  <nav class="flex w-full md:items-center">
    <ul
      class="items-between font-theme @dark:text-white flex w-full flex-col font-semibold tracking-wide text-neutral-900 md:flex-row md:justify-between md:gap-6 md:text-base"
    >
      <slot />
    </ul>
  </nav>
</template>
