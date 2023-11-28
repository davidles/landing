/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['system-ui']
    }
  },
  plugins: [
    require('tailwindcss-animated')
  ],
}