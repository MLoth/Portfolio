import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@nuxt/content', '@nuxt/image-edge'],

  content: {},

  // Custom modules
  unocss: {
    rules: [
      // ['font-theme', { 'font-family': 'Geomanist, sans-serif' }]
    ],
    extraContent: { filesystem: ['./content/**/*.md'] },
    safelist: [...Array.from({ length: 4 }, (_, i) => `md:grid-cols-${i + 1}`)],
  },

  // Nuxt Image
  image: {
    // dir: 'public',

    provider: 'netlify',
    netlify: {
      baseURL: 'https://martijnloth.be',
    },
  },
})
