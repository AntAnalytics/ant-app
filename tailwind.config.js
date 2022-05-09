const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./pages/**/*.tsx', './components/**/*.tsx', './layouts/**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'blue-gray': colors.blueGray,
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
  ],
};
