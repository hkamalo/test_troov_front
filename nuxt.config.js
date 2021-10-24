export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "troov_front",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "stylesheet",
        type: "image/x-icon",
        href: "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900|Material+Icons",
      },
      { rel: "preconnect", type: "font", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", type: "font", href: "https://fonts.gstatic.com" },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/css2?family=Dosis&family=Fredoka+One&display=swap",
      },
      {
        rel: "stylesheet",
        type: "text/css",
        href: "https://fonts.googleapis.com/css2?family=Maven+Pro&display=swap",
      },
    ],
  },

  //Runtime Config

  publicRuntimeConfig: {
    axios: {
      baseURL: "http://localhost:5000",
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ["@nuxtjs/vuetify"],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    "bootstrap-vue/nuxt",
    "@nuxtjs/axios",
    "@nuxtjs/auth-next",
  ],

  axios: {
    baseURL: "http://localchost:5000",
  },

  auth: {
    redirect: {
      login: "/login",
      logout: "/login", 
      home: "/"
    },
    strategies: {
      local: {
        token: {
          required: false,
          type: false,
        },
        endpoints: {
          login: { url: "/authentification/login", method: "post" },
          logout: { url: "/api/auth/logout", method: "post" },
          user: false,
        },
        
      },
    },
  },

  middleware: ["auth-redirect"],
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
