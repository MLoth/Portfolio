import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  css: ['~/assets/fonts/geomanist.css'],

  modules: ['@unocss/nuxt', '@nuxt/content', '@nuxt/image-edge'],

  content: {},

  // Custom modules
  unocss: {
    rules: [['font-theme', { 'font-family': 'Geomanist, sans-serif' }]],
    extraContent: { filesystem: ['./content/**/*.md'] },
    safelist: [...Array.from({ length: 4 }, (_, i) => `md:grid-cols-${i + 1}`)],
  },

  // Nuxt Image
  image: {
    provider: 'netlify',
    // internalUrl: 'https://8e329548-006d-49b1-86b9-4353b947f0e3.netlify.app/.netlify/large-media',

    netlify: {
      baseURL: 'https://martijnloth.be',
    },
  },
})
