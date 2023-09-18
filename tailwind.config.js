/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./login.html"],
  theme: {
    extend: {
      colors: {
        brand: {
          100: "#c542f5",
          200: "#9e35c4",
          300: "#6d2487",
          400: "#380a49",
        },
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
};
