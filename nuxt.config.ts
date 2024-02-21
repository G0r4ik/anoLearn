// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },

  modules: [
    // '@storybook-vue/nuxt-storybook',
    '@nuxtjs/tailwindcss',
    'shadcn-nuxt',
  ],
  css: ['@/assets/css/base.css'],

  shadcn: {
    prefix: '',
    componentDir: './components/ui',
  },
})
