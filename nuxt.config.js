export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "NUXTJS Website Designing from Scratch",
    htmlAttrs: {
      lang: "en",
    },

    meta: [
      {
        charset: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      {
        hid: "description",
        name: "description",
        content: "NUXTJS Website Designing from Scratch",
      },
      {
        name: "format-detection",
        content: "telephone=no",
      },
    ],

    link: [
      {
        rel: "icon",
        type: "image/x-icon",
        href: "/favicon.ico",
      },
      {
        rel: "stylesheet",
        href: "/css/bootstrap.min.css",
      },
      {
        rel: "stylesheet",
        href: "/css/custom.css",
      },
    ],

    script: [
      {
        type: "text/javascript",
        src: "https://code.jquery.com/jquery-3.6.1.min.js",
      },
      {
        type: "text/javascript",
        src: "/js/bootstrap.bundle.min.js",
      },
      {
        type: "text/javascript",
        src: "/js/popper.min.js",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // Progress Bar
  loading: {
    color: "red",
    height: "5px",
    duration: 1000,
    rtl: true,
    continuous: true,
  },
};
