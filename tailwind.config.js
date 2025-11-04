/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      '17xl': {
        min: '1999px',
      },
      '4xl': {
        max: '1799px',
      },
      '3xl': {
        max: '1599px',
      },

      '2xl': {
        max: '1499px',
      },
      '1xl': {
        max: '1399px',
      },
      'xl': {
        max: '1299px',
      },
      'lg': {
        max: '1023px',
      },
      'md': {
        max: '767px',
      },
      'sm': {
        max: '566px',
      },
      'xs': {
        max: '480px',
      },
    },
  },
  plugins: [],
}