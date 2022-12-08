const { SERVER_FILES_MANIFEST } = require('next/dist/shared/lib/constants')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'satoshi': ['Satoshi', "sans-serif"],
    },
    extend: {
      fontFamily: {
        burtons: "burtons",
        montserrat: ['Montserrat', "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        satoshi: ['Satoshi', "sans-serif"],
        aeonik: ["Aeonik", "sans-serif"],
      },
    },
  },
  plugins: [],
};
