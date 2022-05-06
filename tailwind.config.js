module.exports = {
  content: [
    './layouts/*.html',
    // './layout/*.js'
  ],
  darkMode:'class', //false, class, media
  theme: {
    extend: {
      fontFamily: {
        'crete-round': ['"Crete Round"', 'serif']
      },
      boxShadow: {
      'tool': '0 5px 10px rgba(0, 0 , 0, 0.3)',
      }

    },
  },
  plugins: [],
}
