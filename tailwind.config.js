/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,css}","./build/**/*.{html,js,css}"],
  theme: {
    screens: {
      'xs': { max: '575px' }, // Mobile (iPhone 3 - iPhone XS Max).
      'sm': { min: '576px', max: '897px' }, // Mobile (matches max: iPhone 11 Pro Max landscape @ 896px).
      'md': { min: '898px', max: '1199px' }, // Tablet (matches max: iPad Pro @ 1112px).
      'lg': { min: '1200px' }, // Desktop smallest.
      'xl': { min: '1159px' }, // Desktop wide.
      '2xl': { min: '1359px' } // Desktop widescreen.
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
