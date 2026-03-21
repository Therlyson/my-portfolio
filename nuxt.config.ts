// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  nitro: {
    compressPublicAssets: true,
  },

  app: {
    layoutTransition: { name: 'slide', mode: 'out-in' },
    head: {
      titleTemplate: `%pageTitle %separator %siteName`,
      templateParams: {
        siteName: process.env.NUXT_PUBLIC_SITE_NAME ?? '',
        separator: '|',
      },
      link: [
        {
          rel: 'apple-touch-icon',
          type: 'image/svg+xml',
          href: '/favicon.svg?v=2',
        },
        {
          rel: 'icon',
          type: 'image/svg+xml',
          href: '/favicon.svg?v=2',
        },
        {
          rel: 'shortcut icon',
          type: 'image/svg+xml',
          href: '/favicon.svg?v=2',
        },
        {
          rel: 'manifest',
          href: '/site.webmanifest',
        },
      ],
    },
  },

  site: {
    url: process.env.NUXT_PUBLIC_SITE_URL ?? '',
    name: process.env.NUXT_PUBLIC_SITE_NAME ?? '',
    ogImage: process.env.NUXT_PUBLIC_META_OG_IMAGE ?? '',
  },

  ogImage: {
    fonts: ['Raleway:700', 'Raleway:400'],
  },

  devtools: { enabled: false },

  modules: [
    '@nuxt/eslint',
    '@nuxtjs/tailwindcss',
    '@vueuse/nuxt',
    '@nuxt/image',
    '@nuxtjs/google-fonts',
    '@nuxtjs/i18n',
    'nuxt-swiper',
    'nuxt-icon',
    'floating-vue/nuxt',
    '@formkit/nuxt',
    'dayjs-nuxt',
    'nuxt-gtag',
    'nuxt-og-image',
  ],

  tailwindcss: {
    cssPath: '@/assets/scss/tailwind.scss',
  },

  css: ['@/assets/scss/app.scss'],

  googleFonts: {
    families: {
      Raleway: {
        wght: [200, 300, 400, 500, 600, 700, 800],
        ital: [200, 300, 400, 500, 600, 700, 800],
      },
    },
    display: 'swap',
  },

  i18n: {
    baseUrl:
      process.env.NODE_ENV === 'production'
        ? process.env.NUXT_PUBLIC_SITE_URL
        : '',
    strategy: 'prefix_except_default',
    defaultLocale: 'pt',
    lazy: true,
    langDir: 'i18n/locales',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
    },
    locales: [
      {
        code: 'pt',
        language: 'pt-PT',
        file: 'pt-PT.json',
        name: 'Português',
        isCatchallLocale: true,
      },
      {
        code: 'en',
        language: 'en-US',
        file: 'en-US.json',
        name: 'English',
      },
      {
        code: 'es',
        language: 'es-ES',
        file: 'es-ES.json',
        name: 'Español',
      },
    ],
  },

  swiper: {
    styleLang: 'scss',
  },

  runtimeConfig: {
    smtpHost: process.env.SMTP_HOST ?? '',
    smtpPort: process.env.SMTP_PORT ?? '',
    smtpUser: process.env.SMTP_USER ?? '',
    smtpPass: process.env.SMTP_PASS ?? '',
    smtpFrom: process.env.SMTP_FROM ?? '',
    contactToEmail: process.env.CONTACT_TO_EMAIL ?? '',
    public: {
      siteUrl: process.env.NUXT_PUBLIC_SITE_URL ?? '',
      siteName: process.env.NUXT_PUBLIC_SITE_NAME ?? '',
      sitePrimaryColor: process.env.NUXT_PUBLIC_SITE_PRIMARY_COLOR ?? '',
      apiBase: process.env.NUXT_PUBLIC_API_BASE ?? '',
      iconLetter: process.env.NUXT_PUBLIC_ICON_LETTER ?? '',
      ownerName: process.env.NUXT_PUBLIC_OWNER_NAME ?? '',
      ownerLastName: process.env.NUXT_PUBLIC_OWNER_LAST_NAME ?? '',
    },
  },

  image: {
    dir: 'public',
    domains: ['cdn.jsdelivr.net'],
    alias: {
      unsplash: `https://images.unsplash.com`,
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          silenceDeprecations: ['import', 'global-builtin'],
        },
      },
    },
  },

  compatibilityDate: '2024-10-13',
})
