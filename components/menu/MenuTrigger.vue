<template>
  <button
    v-show="menuAvailable"
    :class="`relative z-50 rounded-full p-4 ring-neutral-800 focus-visible:outline-none focus-visible:ring ${open ? '@dark:text-white text-black' : '@dark:text-white @dark:hover:bg-neutral-800 text-neutral-900 hover:bg-neutral-50'}`"
    aria-label="Toggle menu"
    @click="emits('toggleMenu')"
  >
    <X v-if="open" class="size-7 fill-current stroke-current" />
    <Text v-else class="size-7 fill-current stroke-current" />
  </button>
</template>

<script lang="ts" setup>
import { Text, X } from 'lucide-vue-next'

defineProps({
  menuAvailable: {
    type: Boolean,
    required: true,
  },
})

const emits = defineEmits({
  toggleMenu: () => true,
})

const { width } = useWindowSize()
const { open } = useHamburgerMenu(width)
</script>
