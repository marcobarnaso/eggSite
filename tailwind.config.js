module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],

  theme: {
    extend: {
      spacing: {
        '2/3': '66.666667%'
      }
    },
  },
}
