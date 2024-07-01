/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        customRed:'#CE1260',
        customBlue:'#2C2C54'
      },
      backgroundImage: {
        'hero-pattern': "url('/img/hero-pattern.svg')",
      }
    },
  },
  plugins: [],
}

