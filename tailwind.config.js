/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  darkMode: false,
  content: ["./index.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#c542f5",
          200: "#9e35c4",
          300: "#6d2487",
        },
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
