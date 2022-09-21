/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['index.html', 'router.html'],
  theme: {
    container: {
      center: true,
      // padding: '16px',
    },

    extend: {
      colors: {
        'putih': '#f8fafc',
        'link': ' #6d28d9 ',
        'slatee': ' #0f172a ',
        'secondary': '#64748b',

      },
      fontFamily: {
        'font1': 'Kanit',
        'font2': 'Alumni Sans Pinstripe',
        'font3': 'Nunito',
        'primary': 'Varela Round',
      },
      screens: {
        '2xl': '1320px',
      },
    },
  },
  plugins: [],
}
