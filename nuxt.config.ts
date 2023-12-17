// https://nuxt.com/docs/api/configuration/nuxt-config

import { aliases, mdi } from "vuetify/iconsets/mdi";

export default defineNuxtConfig({
  devtools: { enabled: true },
  app: {
    head: {
      title: "Jason's Cloud Games",
      meta: [
        {
          name: "description",
          content: "本地生活数字化专家，让社区开店更容易，有效链接商家和消费者",
        },
      ],
    },
  },
  modules: [
    "@invictus.codes/nuxt-vuetify", //荷兰人开发的 vuetify 模块
    [
      "@nuxtjs/google-fonts",
      {
        families: {
          Roboto: true,
          Inter: [400, 700],
          "Josefin+Sans": true,
          Lato: [100, 300],
          Raleway: {
            wght: [100, 400],
            ital: [100],
          },
        },
      },
    ],
  ],
  vuetify: {
    /* vuetify options */
    vuetifyOptions: {
      // @TODO: list all vuetify options
      theme: {
        themes: {
          light: {
            colors: {
              primary: "#1565C0", //blue-darken-3
              // primary: "#1867C0",
              secondary: "#5CBBF6",
            },
          },
        },
      },
      icons: {
        defaultSet: "mdi",
        aliases,
        sets: {
          mdi,
        },
      },
    },
  },
  ssr: true,
});
