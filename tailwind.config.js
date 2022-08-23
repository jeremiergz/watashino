const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./gatsby-ssr.js', './src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      boxShadow: {
        'material-sm': 'rgb(0 0 0 / 10%) 0px 1px 1px, rgb(0 0 0 / 30%) 0px 2px 4px',
        'material-lg': '0 2px 4px rgb(0 0 0 / 10%), 0 4px 8px rgb(0 0 0 / 30%)',
        'material-xl': '0 10px 20px rgb(0 0 0 / 19%), 0 6px 6px rgb(0 0 0 / 23%)',
      },
      colors: {
        accent: colors.teal[400],
        primary: '#1c1c29',
        'primary-dark': '#141320',
        'primary-light': '#9c9cb4',
        text: colors.teal[100],
      },
      fontFamily: {
        sans: ['Open Sans', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '2xs': ['10px', '14px'],
      },
    },
    screens: {
      '2xs': '320px',
      xs: '375px',
      sm: '425px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
};
