// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  // modules: [
  //   ['nuxt-mail', {
  //     message: {
  //       to: 'mijnemail@voorbeeld.com', // E-mailadres waarnaar de berichten moeten worden gestuurd
  //     },
  //     smtp: {
  //       host: 'smtp.mailtrap.io', // Gebruik de SMTP-host van je provider
  //       port: 2525,              // Poortnummer (bijv. 587, 465 of 2525)
  //       auth: {
  //         user: 'jouw_smtp_user', // Gebruikersnaam van je SMTP-server
  //         pass: 'jouw_smtp_pass', // Wachtwoord van je SMTP-server
  //       },
  //     },
  //   }],
  // ],
  modules: [
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
})
