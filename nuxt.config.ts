import { defineNuxtConfig } from 'nuxt/config'
import svgLoader from 'vite-svg-loader'

export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@twicpics/components/nuxt3',
    'magic-regexp/nuxt',
    '@nuxtjs/algolia',
    'nuxt-icon',
    '@pinia/nuxt',
    '@nuxt/image-edge',
  ],
  app: {
    head: {
      meta: [
        {
          charset: 'utf-8',
        },
      ],
      link: [
        { hid: 'apple-touch-icon', rel: 'apple-touch-icon', href: '/icon-192x192.png' },
        { rel: 'manifest', href: '/manifest.json' },
      ],
    },
  },
  ssr: true,
  css: ['@/assets/scss/index.scss'],
  image: {
    presets: {},
  },

  vite: {
    plugins: [svgLoader({})],
  },
  twicpics: {
    domain: `https://<your-domain>.twic.pics`,
    anticipation: 0.5,
    step: 50,
  },
  algolia: {
    apiKey: 'MY_API_KEY',
    applicationId: 'MY_APPLICATION_ID',
  },
})
