<template>
  <button
    v-show="menuAvailable"
    class="z-30 rounded-full p-4 ring-neutral-800 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring"
    @click="emits('toggleMenu')"
  >
    <MenuIcon
      class="@dark:text-neutral-50 @dark:text-white h-10 w-10 fill-current stroke-current stroke-2 text-neutral-900"
    />
  </button>
</template>

<script lang="ts" setup>
import { MenuIcon } from 'lucide-vue-next'

defineProps({
  menuAvailable: {
    type: Boolean,
    required: true,
  },
})

const emits = defineEmits({
  toggleMenu: () => true,
})
</script>
