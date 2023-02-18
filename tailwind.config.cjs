/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontSize: {
            xxs: ['10px', '14px'],
        },
        colors: {
            primary: colors.emerald,
        }
    },
  },
  plugins: [],
}
