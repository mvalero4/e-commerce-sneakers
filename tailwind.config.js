/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Kumbh Sans', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'OrangePrimary': 'hsl(26, 100%, 55%)',
        'PaleOrange': 'hsl(25, 100%, 94%)',
        'VeryDarkBlue': 'hsl(220, 13%, 13%)',
        'DarkGrayishBlue': 'hsl(219, 9%, 45%)',
        'GrayishBlue': 'hsl(220, 14%, 75%)',
        'LightGrayishBlue': 'hsl(223, 64%, 98%)',
        'White': 'hsl(0, 0%, 100%)',
        'Black': 'hsl(0, 0%, 0%)'
      },
    },
  },
  plugins: [],
}

