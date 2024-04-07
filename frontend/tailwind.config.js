/** @type {import('tailwindcss').Config} */
export default {
  // content: [],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"

  ],
  theme: {
    extend: {},
  },
  // plugins: [],
  plugins: [require("daisyui") , require('flowbite/plugin')],
  
}

