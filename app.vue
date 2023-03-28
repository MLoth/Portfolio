<template>
  <NuxtLayout>
    <!-- <div :class="`${open && menuAvailable ? 'fixed' : 'relative'}`"> -->
    <NuxtPage @keydown.esc="toggle(false)" />
    <!-- </div> -->
  </NuxtLayout>
</template>

<script lang="ts">
import '@unocss/reset/tailwind.css'

import useHamburgerMenu from './composables/useHamburgerMenu'
import useWindowSize from './composables/useWindowSize'

export default {
  setup() {
    const { width } = useWindowSize() // Start listening to window size with the app's 'document reference'.
    const { open, menuAvailable, toggle } = useHamburgerMenu(width)

    const listenToEscapeKey = () => {
      document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
          toggle(false)
        }
      })
    }

    onMounted(() => {
      listenToEscapeKey()
    })

    useHead({
      title: 'Martijn Loth',
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ],
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon/favicon.png' }],
      htmlAttrs: {
        lang: 'en',
      },
    })

    return {
      open,
      menuAvailable,

      toggle,
    }
  },
}
</script>
