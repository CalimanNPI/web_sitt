/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        azul: {
          50: "#ffffff",
          100: "#d2e7fa",
          200: "#a5cff5",
          300: "#78b8ef",
          400: "#4ba0ea",
          500: "#1E88E5",
          600: "#156dba",
          700: "#10528b",
          800: "#0b365d",
          900: "#051b2e",
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
