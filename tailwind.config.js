const colors = require('tailwindcss/colors')

module.exports = {
  separator: '_',
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors:{
      blue:{
        DEFAULT: '#0B60B0',
        bg: '#FCFCFC',
        link: '#3B82F6'
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.trueGray,
      indigo: colors.indigo,
      red: colors.rose,
      yellow: colors.amber,
      green: colors.emerald
    },
    boxShadow: {
      DEFAULT: '0px 0px 4px 4px rgba(0, 0, 0, 0.05);',
    },
    maxWidth: {
      'card': '50rem'
    },
    extend: {
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}