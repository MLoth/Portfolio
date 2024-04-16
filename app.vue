<template>
  <NuxtLayout>
    <NuxtPage @keydown.esc="toggle(false)" />
  </NuxtLayout>
</template>

<script lang="ts">
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
      titleTemplate(title) {
        return title ? `${title} - Martijn Loth` : 'Martijn Loth'
      },
      meta: [
        { charset: 'utf-8' },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon/favicon.png',
          media: 'prefers-color-scheme: light',
        },
        {
          rel: 'icon',
          type: 'image/png',
          href: '/favicon/favicon-dark.png',
          media: 'prefers-color-scheme: dark',
        },
      ],
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
