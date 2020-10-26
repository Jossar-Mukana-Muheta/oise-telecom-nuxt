
module.exports = {
  ssr: false,
  rootDir: __dirname,
  buildDir: '.nuxt',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - oise-telecom',
    title: 'oise-telecom',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    // Load a Node.js module directly (here it's a Sass file)
    '@/assets/variables.scss',
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    [
      '@nuxtjs/firebase',
      {
        config: {
          apiKey: 'AIzaSyCaeRtOBXYzUxxSz6L4MgFLLZExdn7HUTg',
          authDomain: 'oise-telecom.firebaseapp.com',
          databaseURL: 'https://oise-telecom.firebaseio.com',
          projectId: 'oise-telecom',
          storageBucket: 'oise-telecom.appspot.com',
          messagingSenderId: '671673063608',
          appId: '1:671673063608:web:4f05cac91df7fbd96a7c4d',
          measurementId: 'G-Q0S8D41EF8',
        },
        services: {
          auth: true, // Just as example. Can be any other service.
          storage: true,
          performance: true,
          analytics: true,
        },
      },
    ],
    '@nuxtjs/style-resources',
  ],

  styleResources: {
    scss: [
        '~/assets/variables.scss',
    ]
},

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
  },

  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  }

  
}
