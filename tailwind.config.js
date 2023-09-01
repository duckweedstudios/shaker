/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['sans-serif'],
        'papyrus': ['Papyrus'],
        'baskerville': ['Baskerville'],
      }
    },
  },
  plugins: ["nativewind/babel"],
}