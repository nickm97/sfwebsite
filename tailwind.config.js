/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      height: {
        'calc-100vh-50px': 'calc(100vh - 50px)',
      },
      colors: {
        naturalBeige: "#decab9",
        darkBrown: "#6a4c2d",
        buttonColor: "#3d3935",
        lightBeige: "#eee5de",
        offWhite: '#f8f8f5', // Voeg hier jouw gewenste kleur toe
        formButton: '#c49131'
      },
      fontFamily: {
        standard: ['"Arial"', 'sans-serif'], // Voeg hier jouw gewenste lettertype toe
        theSeasons: ['"The Seasons"', 'san-serif'],
        textNav: ["Times New Roman", 'serif'], // Lettertype voor de navigatie
        fancy: ['"Waterfall"', 'serif'], // Correcte naam en stijl
      },
      fontSize: {
        sizeNavText: '16px', // Voeg de gewenste grootte toe voor navigatietekst
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  plugins: [],
}

