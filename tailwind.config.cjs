/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        fontSize: {
            xxs: ['10px', '14px'],
        }
    },
  },
  plugins: [],
}
