export default {
  ssr: false,

  head: {
    title: 'nuxt-qr-reader',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  css: [],

  plugins: ['~/plugins/qr'],

  components: true,

  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],

  modules: [
    'bootstrap-vue/nuxt',
    '@nuxtjs/axios'
  ],

  axios: {},

  build: {},
  router: {
    middleware: ['authentication']
  }
}
