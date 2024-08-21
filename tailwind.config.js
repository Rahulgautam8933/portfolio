/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: '#191919',
        secondary: '#41b362',
        third: "#2C2A1E",
        customColor: '#f66d9b',
        button: "#373737",
        nav: "#131313",
        orange: "#ffe600",
        white: "#fff",

      },
    },
  },
  plugins: [daisyui],
}