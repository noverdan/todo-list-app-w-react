/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'my-color-text': '#2F2F2F',
        'my-color-grey': { 1: '#D8D8D8', 2: '#A8A8A8' },
        'my-color-red': { 1: '#E89494', 2: '#D22A2A' },
        'my-color-green': '#3BAB46'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

