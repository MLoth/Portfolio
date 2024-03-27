<template>
  <div
    class="border-2 border-neutral-200 @dark:border-neutral-800 rounded-2xl overflow-hidden"
  >
    <slot />

    <slot name="content" />
  </div>
</template>

<script lang="ts" setup></script>
