import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  typescript: {
    strict: true,
  },

  app: {
    head: {
      bodyAttrs: {
        class: 'selection:bg-black selection:text-white',
      },
    },
  },

  css: ['~/assets/fonts/geomanist.css'],

  modules: ['@unocss/nuxt', '@nuxt/content', '@nuxt/image-edge'],

  content: {},

  // Custom modules
  unocss: {
    rules: [['font-theme', { 'font-family': 'Geomanist, sans-serif' }]],
    extraContent: { filesystem: ['./content/**/*.md'] },
    safelist: [
      ...Array.from({ length: 4 }, (_, i) => `md:grid-cols-${i + 1}`),
      'selection:bg-black selection:text-white',
    ],
  },

  // Nuxt Image
  image: {
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dn7nbwivo/image/upload/',
    },
  },
})
