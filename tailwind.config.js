const R = require('ramda');
const defaultConfig = require('tailwindcss/defaultTheme');

/** 
 * @type { import('tailwindcss').Config }
 *  */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,ts}'],

  plugins: [
    'tailwindcss',
    'autoprefixer',
  ],

  theme: {
    container: {
      screens: {
        ...R.omit(['xl', '2xl'], defaultConfig.screens),
      },
    },

    screens: {
      'xs': '475px',
      ...defaultConfig.screens,
    },

    extend: {
      colors: {
        ...mirrorHexColors([
          '#191919',
          '#ffffff',
        ]),
      },

      fontSize: {
        '13': ['calc(13 * 1rem / 16)', { 'lineHeight': '1rem' }],
        '14': ['calc(14 * 1rem / 16)', { 'lineHeight': '1rem' }],
        '16': ['calc(16 * 1rem / 16)', { 'lineHeight': '1.2rem' }],
        '18': ['calc(18 * 1rem / 16)', { 'lineHeight': '1.2rem' }],
        '20': ['calc(20 * 1rem / 16)', { 'lineHeight': '1.5rem' }],
        '22': ['calc(22 * 1rem / 16)', { 'lineHeight': '1.5rem' }],
        '32': ['calc(32 * 1rem / 16)', { 'lineHeight': '2.5rem' }],
      },

      gridTemplateRows: {
        'auto/1fr/auto': 'auto 1fr auto',
      },

      zIndex: {
        '-1': '-1',
      },
    },
  },
}

function mirrorHexColors(colors) {
  return R.compose(
    R.reduce((accumulator, current) => ({...accumulator, [current.replace('#', '')]: current}), {}),
  
    R.ifElse(
      R.equals(colors),
      R.identity,
      () => {throw new Error('Colors should be unique')},
    ),
  
    R.uniq,
  
    R.ifElse(
      R.equals(colors),
      R.identity,
      () => {throw new Error('Colors should be sorted alphabeticaly')},
    ),
  
    R.sortBy(R.identity),
  
    R.map(color => {
      const lowercaseColor = color.toLowerCase()
  
      if(lowercaseColor === color) {
        return lowercaseColor
      }
  
      throw new Error('All colors should be lowercase')
    }),
  )(colors);
}