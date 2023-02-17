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
    dir: 'assets/images',
    // staticDir: 'assets/images',
    staticFilename: '[publicPath]/[name]-[hash][ext]',
    // internalUrl: 'https://martijn-loth.netlify.app',

    provider: 'netlify',
    netlify: {
      baseURL: 'https://martijnloth.be/.netlify/large-media',
    },
  },
})
