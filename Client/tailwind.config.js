/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'magenta': '#E10075',
      },
      fontFamily: {
        'telecom': ['TELECOM', 'sans-serif']
      },
    },
  },
  plugins: [],
}

