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
      'montserrat': ['Montserrat', "sans-serif"],
    },
    extend: {
      fontFamily: {
        burtons: "burtons",
        montserrat: ['Montserrat', "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
