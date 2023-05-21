/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/html/*.html'],
  theme: {
    screens: {
      'xs': {'min': '300px', 'max': '640px'},
      'sm': {'min': '641px', 'max': '767px'},
      'md': {'min': '768px', 'max': '1023px'},
      'lg': {'min': '1024px', 'max': '1279px'},
      'xl': {'min': '1280px'},
    },
    extend: {
      colors: {
        'SpectrumOrange': '#E87725',
        'SpectrumDark': 'rgb(26, 26, 26)'
      }
    },
    plugins: []
  }
}
