/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-purple': '#2f27ce',
        'custom-green': '#8a2be2',
        'custom-green-hover': '#443dff',
        'custom-black': '#040316'
      },
      fontFamily: {
        aprila: ['Aprila', 'sans-serif'], 
      },
      boxShadow: {
        'custom-heavy': 'rgba(17, 12, 46, 0.15) 0px 48px 100px 0px',
      },
    },
  },
  plugins: [],
}

