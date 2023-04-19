/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alpha: ["Inter"],
      },
      colors: {
        alpha: {
          50: "#f2f6f9",
          100: "#dfe8ee",
          200: "#c2d3df",
          300: "#98b3c8",
          400: "#668caa",
          500: "#4b708f",
          600: "#415d79",
          700: "#3a4e64",
          800: "#344253",
          900: "#303a49",
          950: "#1c2430",
        },
        beta: {
          50: "#ecf3ff",
          100: "#dde8ff",
          200: "#c2d4ff",
          300: "#9cb6ff",
          400: "#758dff",
          500: "#6575ff",
          600: "#363bf5",
          700: "#2a2bd8",
          800: "#2528ae",
          900: "#262b89",
          950: "#161750",
        },
      },
    },
  },
  plugins: [],
};
