import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  app: {
    head: {
      bodyAttrs: {
        class: 'selection:bg-black selection:text-white',
      },
    },
  },

  nitro: {
    routeRules: {
      '/**': {
        headers: {
          'Cross-Origin-Embedder-Policy': 'credentialless',
          // 'Cross-Origin-Embedder-Policy': 'require-corp',
          'Cross-Origin-Opener-Policy': 'same-origin',
          'Strict-Transport-Security':
            'max-age=63072000; includeSubDomains; preload',
          //           'Content-Security-Policy': "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'"
          // 'Content-Security-Policy':
          //   "default-src 'self'; script-src 'self'; style-src 'self'; img-src 'self' https://*.cloudinary.com/*",
          'X-Frame-Options': 'DENY',
          'X-Content-Type-Options': 'nosniff',
          'Referrer-Policy': 'no-referrer-when-downgrade',
          'Permissions-Policy':
            'geolocation=(), camera=(), microphone=(), payment=()',
          'img-src': 'https://res.cloudinary.com https://images.cloudinary.com',
        },
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
    typeCheck: process.env.NODE_ENV === 'development',
    shim: true, // This might fix a old default import, but it's maybe not the best idea to use it
  },

  // Nuxt Image
  image: {
    provider: 'cloudinary',
    cloudinary: {
      baseURL: 'https://res.cloudinary.com/dn7nbwivo/image/upload/',
      modifiers: {
        format: 'auto',
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
