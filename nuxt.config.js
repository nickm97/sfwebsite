// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: "https://fonts.googleapis.com/css2?family=Meow+Script&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Quicksand:wght@300..700&family=Send+Flowers&family=Waterfall&display=swap",
        },
      ],
    },
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: [
    '@nuxt/image'
  ],
  image: {
    // Configuratie voor @nuxt/image
    // screens: {
    //   // Standaardafmetingen voor responsieve afbeeldingen
    //   sm: 2000,
    //   md: 1024,
    //   lg: 2048,
    //   xl: 4096,
    // },
    format: ['webp', 'jpg', 'png'], // Ondersteunde afbeeldingsformaten
  
  }
})

