// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@vueuse/nuxt'],
  css: ['~/assets/css/style.css'],
  nitro: {
    experimental: {
      websocket: true
    }
  }
})
