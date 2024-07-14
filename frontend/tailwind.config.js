/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'primary-white': 'var(--primary-white)',
        'primary-blue': 'var(--primary-blue)',
        'primary-blue-light': 'var(--primary-blue-light)',
        'second-background': 'var(--second-background)',
      },
      fontFamily: {
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
