export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'nuxt-starter - %s',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
    '~/components/common',
    { path: '~/components/home', prefix: 'home' },
  ],

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/device',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    'nuxt-gsap-module'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    [
      'nuxt-social-meta',
      {
        url: 'Site url',
        title: 'Title',
        site_name: 'Site name',
        description: 'Site description',
        img: 'Link to image in static folder',
        img_size: { width: 'Image width in px', height: 'Image height in px' },
        locale: 'en_US',
        twitter: '@user',
        twitter_card: 'summary_large_image',
        theme_color: '#theme-color',
      }
    ],
    [
      '@nuxtjs/i18n',
      {
        defaultLocale: 'nl',
        noPrefixDefaultLocale: true,
        vueI18nLoader: true,
        locales: [
          {
            code: 'nl',
            iso: 'nl-NL',
            name: 'Nederlands',
          },
          {
            code: 'en',
            iso: 'en-EN',
            name: 'English',
          },
        ],
      },
    ],
    // Always set sitemap as last item in modules array
    '@nuxtjs/sitemap'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {},

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        'postcss-nested': {}
      }
    },
  },

  gsap: {
    extraPlugins: {
      scrollTrigger: true
    },

    registerEffect: [
      {
        name: 'scrollAnimation',
        effect: (targets, config) => {
          // eslint-disable-next-line no-undef
          return gsap.to(targets, {
            duration: 1.75, 
            autoAlpha: 1, 
            ease: 'expo',
            scrollTrigger: {
              trigger: targets,
              start: 'top 50%',
              markers: config.markers
            }
          });
        }
      }
    ]
  }
}
