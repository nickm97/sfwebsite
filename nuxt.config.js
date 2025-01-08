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
    '@nuxt/image', // Voeg de module hier toe
    ['nuxt-mail', {
      message: {
        to: 'nm.nickmichiels@gmail.com', // Het e-mailadres waar je berichten naartoe wilt sturen
      },
      smtp: {
        host: 'smtp.gmail.com', // Gmail SMTP-host
        port: 587,              // Gebruik poort 587 voor TLS
        auth: {
          user: 'nm.nickmichiels@gmail.com', // Je Gmail-adres
          pass: 'frhk ixhy lqmz flyw', // Het app-specifieke wachtwoord dat je hebt gegenereerd
        },
      },
    }],
  ],
  image: {
    // Configuratie voor @nuxt/image
    screens: {
      // Standaardafmetingen voor responsieve afbeeldingen
      sm: 320,
      md: 640,
      lg: 1024,
      xl: 1280,
    },
    format: ['webp', 'jpg'], // Ondersteunde afbeeldingsformaten
  
  }
})

