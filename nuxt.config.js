module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'dart-score-manager-vuetify',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: 'Nuxt.js + Vuetify.js project'
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  svgLoader: {
    svgoConfig: false
  },
  modules: [
    '@nuxtjs/axios',
    'nuxt-svg-loader',
    '@nuxtjs/pwa',
    [
      '@nuxtjs/vuetify',
      {
        treeshake: true
      }
    ]
  ]
}
