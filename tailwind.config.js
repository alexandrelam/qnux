const colors = require('tailwindcss/colors')

module.exports = {
  separator: '_',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Cabin', 'sans-serif'],
    },
    colors:{
      blue:{
        DEFAULT: '#0B60B0',
        bg: '#FCFCFC'
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}