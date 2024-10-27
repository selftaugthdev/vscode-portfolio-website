module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}"  // Added this line
  ],
  darkMode: 'media', // Added quotes around 'media'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}