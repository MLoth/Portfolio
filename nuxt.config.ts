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
    'nuxt-security',
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

  security: {
    headers: {
      crossOriginEmbedderPolicy: 'credentialless',
      crossOriginOpenerPolicy: 'same-origin',
      strictTransportSecurity: {
        maxAge: 63072000,
        includeSubdomains: true,
      },
      contentSecurityPolicy: {
        'img-src': ["'self'", 'data:', 'https://res.cloudinary.com'],
        'script-src': ["'self'", "'unsafe-eval'", "'unsafe-inline'"],
      },
      xFrameOptions: 'DENY',
      xContentTypeOptions: 'nosniff',
      referrerPolicy: 'no-referrer-when-downgrade',
      permissionsPolicy: {
        geolocation: 'none',
        camera: 'none',
        microphone: 'none',
        payment: 'none',
      },
    },
    hidePoweredBy: true,
    removeLoggers: process.env.DEVELOPMENT === 'false',
    nonce: true,
  },

  compatibilityDate: '2024-11-22',
})
