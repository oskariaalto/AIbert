/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';
import daisyui from 'daisyui'
import tailwindScrollbar from 'tailwind-scrollbar'
const colorTheme = {
  brownVanilla : {
    colors: {
    'background': '#2E1004' //dark brown
    ,
    'primary': '#E7D79F' // vanilla
    ,
    'secondary': '#D05A05' // light-brown
    ,
    'site': '#E7D79F' // vanilla
    }
  },
  redBlue: {
    colors: {
      'background': '#0C042E' //dark blue
      ,
      'primary': '#A80C28' // crimson
      ,
      'secondary': '#E7E6E8' // white
      ,
      'site': '#312C66' // light-blue
      }
  }
}

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: { 
      colors:
        colorTheme.brownVanilla.colors
    },
    textShadow: {
      sm: '0 1px 2px var(--tw-shadow-color)',
      DEFAULT: '0 2px 4px var(--tw-shadow-color)',
      lg: '0 8px 16px var(--tw-shadow-color)',
    },
  },
  plugins: [daisyui, tailwindScrollbar({ nocompatible: true }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      )
    }),],
  daisyui: {
    themes: false
  }
}