// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,
  devtools: { enabled: true },
  typescript: {
    strict: true,
    typeCheck: true
  },
  vite: {
    build: {
      emptyOutDir: true
    },
  },
  builder: 'vite',
  modules: ['@bootstrap-vue-next/nuxt'],
  css: ['bootstrap/dist/css/bootstrap.min.css'],
  components: [
    {
      path: '~/components',
      pathPrefix: false,
      extensions: ['.vue']
    }
  ]
})
