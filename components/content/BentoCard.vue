<template>
  <div
    class="@dark:border-neutral-800 overflow-hidden rounded-2xl border-2 border-neutral-200"
  >
    <slot />

    <slot name="content" />
  </div>
</template>

<script lang="ts" setup></script>
