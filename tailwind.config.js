/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#0A0A0A',
          surface: '#1A1A1A',
          text: '#F5F0E8',
          accent: '#C8A96E',
        },
        light: {
          bg: '#FAF6EF',
          surface: '#FFFFFF',
          text: '#111111',
          accent: '#A8813E',
        }
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        sans: ['"Barlow"', 'sans-serif'],
        condensed: ['"Barlow Condensed"', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
