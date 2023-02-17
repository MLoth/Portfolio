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
  },

  // Nuxt Image
  image: {
    provider: 'netlify',
    staticDir: '/assets/images',
    dir: 'assets/images',
  },
})
