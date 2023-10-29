// nuxt.config.ts
// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: ["nuxt-microcms-module", "@nuxtjs/google-fonts"],
  
    microCMS: {
      serviceDomain: process.env.MICROCMS_SERVICE_DOMAIN,
      apiKey: process.env.MICROCMS_API_KEY,
    },

    googleFonts: {
      families: {
        "Noto+Sans+JP": true,
        "Dela+Gothic+One": true,
      },
    },
});

