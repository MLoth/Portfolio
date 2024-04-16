import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  experimental: {
    componentIslands: true,
    viewTransition: true,
  },

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

  modules: [
    '@unocss/nuxt',
    '@nuxt/content',
    '@nuxt/image-edge',
    '@nuxtjs/eslint-module',
    '@nuxt/image',
    'nuxt-graphql-request',
    '@vueuse/nuxt',
  ],

  alias: {
    'cross-fetch': 'cross-fetch/dist/browser-ponyfill.js',
  },

  content: {
    highlight: {
      // Theme used in all color schemes.
      theme: {
        default: 'github-light',
        dark: 'github-dark',
      },
    },
  },

  // Custom modules
  unocss: {
    rules: [['font-theme', { 'font-family': 'Geomanist, sans-serif' }]],
    content: { filesystem: ['./content/**/*.md'] },
    safelist: [
      ...Array.from({ length: 4 }, (_, i) => `md:grid-cols-${i + 1}`),
      'selection:bg-black selection:text-white',
    ],
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

    useFetchPolyfill: true,
    includeNodeModules: true,
  },

  eslint: {
    fix: true,
  },
})
