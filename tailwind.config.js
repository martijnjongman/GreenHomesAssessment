/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary-green': '#234F37',
      'primary-green-hover': '#0B1B12',
      'secondary-green': '#38B671',
      'light-green': '#B9DFCA',
      'grey': '#E8E8E8',
      'grey-hover': '#B7B7B7',
      'dark-grey': '#303030',
      'accent-purple': '#AB2857',
      'accent-purple-hover': '#6C1C39',
      'destructive-red': '#B20A14',
      'white': '#ffffff'
    },
    fontFamily: {
      title: ['Montserrat', 'sans-serif'],
      text: ['Nunito', 'sans-serif'],
    },
    extend: {
      maxWidth: {
        'desktop': '1920px',
      },
      fontSize: {
        full: '9vw',
      }
    },
  },
  plugins: [],
}

