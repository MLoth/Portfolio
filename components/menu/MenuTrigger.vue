<template>
  <button
    v-show="menuAvailable"
    :class="`relative z-40 rounded-full p-4 ring-neutral-800 focus-visible:outline-none focus-visible:ring ${open ? 'text-white' : '@dark:text-white text-neutral-900 hover:bg-neutral-50'}`"
    @click="emits('toggleMenu')"
  >
    <X v-if="open" />
    <MenuIcon v-else class="fill-current stroke-current stroke-2" />
  </button>
</template>

<script lang="ts" setup>
import { MenuIcon, X } from 'lucide-vue-next'

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
