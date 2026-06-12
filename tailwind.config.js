/** @type {import('tailwindcss').Config} */
// basic_04 — Hell & Frisch: yumuşak krem zemin, adaçayı yeşili vurgu
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#fbfaf6",
        sand: "#e9f0e4",
        coffee: "#2f3e2e",
        terra: "#7c9070",
        terradark: "#5f7355",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
