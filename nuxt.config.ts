import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  modules: ['@unocss/nuxt', '@nuxt/content'],

  content: {},

  // Custom modules
  unocss: {
    rules: [['font-theme', { 'font-family': 'Inter, sans-serif' }]],
    extraContent: { filesystem: ['./content/**/*.md'] },
  },
})
