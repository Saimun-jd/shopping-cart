
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        libre: ['Inter', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        ...colors,
      }
    },
  },
  plugins: [],
}