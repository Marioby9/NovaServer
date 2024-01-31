/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'transparent': 'transparent',
      'darkBlack': '#0a0a0a',
      'black': '#222',
      'overlayBlack': 'rgba(0, 0, 0, 0.8)',
      'coal':  '#2b2b2b',
      'gray': '#393E46',
      'white': '#fff',
      'lightWhite':'#e0e0e0',
      'bone' : '#aeaeae',
      'darkBlue':'#0F1C2E',
      'semiDarkBlue':'#1f2b3e',
      'blue':'#1F3A5F',
      'grayBlue':'#374357',
      'lightBlue':'#4d648d',
      'lightBlue2':'#3D5A80',
      'orange': '#ff8800',
      'lightOrange': '#ffa640',
      '--primary-300':'#acc2ef',
      '--accent-200':'#cee8ff',  
      'overlayBlue':'#081321cc',
    }
  },
  plugins: [],
}

