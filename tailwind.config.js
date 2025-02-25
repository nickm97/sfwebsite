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
        buttonColor: "#281c14", // black
        buttonColor_2: "#e3dad3", // beige 
        lightBeige: "#eee5de",
        offWhite: '#f8f8f5', // Voeg hier jouw gewenste kleur toe
        formButton: '#c49131',
        background_1: '#f3f4f6', // gray
        footerColor: '#ffff',
        background_2: '#d3c9bf', // beige
        page_title: '#9b775c', //bruinig
        background_3: '#41371d', // groenig
        background_4: '#f7f0ec', //licht beige
        textBeige: '#b6a89f'
      },
      fontFamily: {
        standard: ['"Quicksand"', 'serif'], // Voeg hier jouw gewenste lettertype toe
        playFair: ['"Playfair Display"', 'serif'], // Voeg hier jouw gewenste lettertype toe
        theSeasons: ['"The Seasons"', 'san-serif'],
        textNav: ["Times New Roman", 'serif'], // Lettertype voor de navigatie
        fancy: ['"Meow"', 'serif'], // Correcte naam en stijl
      },
      fontSize: {
        sizeNavText: '14px', // Voeg de gewenste grootte toe voor navigatietekst
      },
    },
    screens: {
      xs: '700px',
      sm: '1400px',
      lg: '1400px',
      xl: '1800px',
    },
  },
  plugins: [],
}

