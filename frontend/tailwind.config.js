/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      // colors: {
      //   'primary-blue' : ''
      //   'primary-white' : ''
      // }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
