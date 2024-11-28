import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: {
        class: 'selection:bg-black selection:text-white',
      },
    },
  },

  css: ['~/assets/fonts/geomanist.css'],

  modules: [
    '@unocss/nuxt',
    '@nuxt/content',
    '@nuxt/image-edge',
    '@nuxtjs/eslint-module',
    '@nuxt/image',
    'nuxt-graphql-request',
    '@vueuse/nuxt',
    '@vueuse/motion/nuxt',
    '@nuxt/eslint',
  ],

  // alias: {
  //   'cross-fetch': 'cross-fetch/dist/browser-ponyfill.js',
  // },

  // Custom modules
  unocss: {
    rules: [['font-theme', { 'font-family': 'Geomanist, sans-serif' }]],
    content: { filesystem: ['./content/**/*.md'] },
    safelist: [
      ...Array.from({ length: 4 }, (_, i) => `md:grid-cols-${i + 1}`),
      'selection:bg-black selection:text-white',
    ],
  },

  eslint: {
    fix: true,
  },

  experimental: {
    componentIslands: true,
    viewTransition: true,
  },

  typescript: {
    strict: true,
    typeCheck: true,
    // tsConfig: {},
  },

  // Nuxt Image
  image: {
    // },
    provider: 'cloudinary',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dn7nbwivo/image/upload/',
      modifiers: {
        format: 'auto',
        // quality: 'auto',
      },
    },
  },

  // GraphQL
  graphql: {
    clients: {
      default: {
        endpoint: 'https://api.github.com/graphql',
        options: {
          headers: {
            Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          },
        },
      },
    },
    includeNodeModules: true,
  },

  content: {
    database: {
      type: 'd1',
      binding: 'NETLIFY_D1_BINDING',
    },
  },

  compatibilityDate: '2024-11-22',
})
