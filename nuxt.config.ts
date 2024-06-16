// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  /*
  ** Headers of the page
  */
  app: {
    head: {
      title: 'Центр событий',
      meta: [
        {charset: 'utf-8'},
        {name: 'viewport', content: 'width=device-width, initial-scale=1, shrink-to-fit=no'},
        {name: 'theme-color', content: '#ffffff'},
      ],
  
      link: [
        {rel: 'apple-touch-icon', sizes: '180x180', href: '/_nuxt/static/apple-touch-icon.png'},
        {rel: 'icon', type: 'image/png', sizes: '32x32', href: '/_nuxt/static/favicon-32x32.png'},
        {rel: 'icon', type: 'image/png', sizes: '16x16', href: '/_nuxt/static/favicon-16x16.png'},
        {rel: 'manifest', href: '_nuxt/static/manifest.json'},
        {rel: 'mask-icon', color: '#5bbad5', href: '_nuxt/static/safari-pinned-tab.svg'},
  
        {rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Poppins:100,200,400,300,500,600,700'},
        {rel: 'stylesheet', href: '/_nuxt/static/css/linearicons.css'},
        {rel: 'stylesheet', href: '/_nuxt/static/css/font-awesome.min.css'},
        {rel: 'stylesheet', href: '/_nuxt/static/css/bootstrap.css'},
        {rel: 'stylesheet', href: '/_nuxt/static/css/magnific-popup.css'},
        {rel: 'stylesheet', href: '/_nuxt/static/css/nice-select.css'},
        {rel: 'stylesheet', href: '/_nuxt/static/css/animate.min.css'},
        {rel: 'stylesheet', href: '/_nuxt/static/css/owl.carousel.css'},
        {rel: 'stylesheet', href: '/_nuxt/static/css/jquery-ui.css'},
        {rel: 'stylesheet', href: '/_nuxt/static/css/main.css'},
      ],
  
      script: [
        {crossorigin: 'anonymous', tagPosition: 'head', src: 'https://kit.fontawesome.com/77b427ccd5.js'},
        {tagPosition: 'bodyClose', src: '/_nuxt/static/js/vendor/jquery-2.2.4.min.js'},
        {crossorigin: 'anonymous', integrity: 'sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q', tagPosition: 'bodyClose', src: 'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js'},
        {tagPosition: 'bodyClose', src: '/_nuxt/static/js/vendor/bootstrap.min.js'},
        {tagPosition: 'bodyClose', src: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyBhOdIF3Y9382fqJYt5I_sswSrEw5eihAA&loading=async&callback=Function.prototype'},
        {tagPosition: 'bodyClose', src: '/_nuxt/static/js/easing.min.js'},
        {tagPosition: 'bodyClose', src: '/_nuxt/static/js/hoverIntent.js'},
        {tagPosition: 'bodyClose', src: '/_nuxt/static/js/superfish.min.js'},
        {tagPosition: 'bodyClose', src: '/_nuxt/static/js/jquery.ajaxchimp.min.js'},
        {tagPosition: 'bodyClose', src: '/_nuxt/static/js/jquery.magnific-popup.min.js'},
        {tagPosition: 'bodyClose', src: '/_nuxt/static/js/jquery.tabs.min.js'},
        {tagPosition: 'bodyClose', src: '/_nuxt/static/js/jquery.nice-select.min.js'},
        {tagPosition: 'bodyClose', src: '/_nuxt/static/js/owl.carousel.min.js'},
        {tagPosition: 'bodyClose', src: '/_nuxt/static/js/mail-script.js'},
        {tagPosition: 'bodyClose', src: '/_nuxt/static/js/main.js'},
      ]
    },
  },

  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
})
