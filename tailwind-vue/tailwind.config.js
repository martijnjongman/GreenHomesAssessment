/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'primary-green': '#234F37',
      'secondary-green': '#38B671',
      'light-green': '#B9DFCA',
      'grey': '#E8E8E8',
      'dark-grey': '#303030',
      'accent-purple': '#AB2857',
      'destructive-red': '#B20A14',
    },
    fontFamily: {
      title: ['Montserrat', 'sans-serif'],
      text: ['Nunito', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

