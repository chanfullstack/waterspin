/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    screens: {
      sm: '376px',
      mobl: '425px',
      tab: '768px',
      md: '900px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1440px',
      '3xl': '1920px',
      '4xl': '2560px',
    },

    extend: {
      gridTemplateColumns: {
        14: "repeat(14,1fr)", // 14 equal fractions of screen width.
      },
      gridTemplateRows: {
        4: "repeat(4,1fr)",// 4 equal fractions of screen height.
        14: "repeat(14,1fr)", // 14 equal fraction of screen height
      },
      gridRowStart: {
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
      },
      gridRowEnd: {
        8: '8',
        9: '9',
        10: '10',
        11: '11',
        12: '12',
        13: '13',
        14: '14',
        15: '15',
      },
      gridColumnStart: {
        13: '13',
        14: '14',
        15: '15',
      },
      gridColumnEnd: {
        13: '13',
        14: '14',
        15: '15',
      },
      gridColumn: {
        'span-14': 'span 14/ span 14',
        'span-15': 'span 15/ span 15',
        'span-16': 'span 16/ span 16',
        'span-17': 'span 17/ span 17',
        'span-18': 'span 18/ span 18',
        'span-19': 'span 19/ span 19',
        'span-20': 'span 20/ span 20',
        'span-21': 'span 21/ span 21',
        'span-22': 'span 22/ span 22',
      },
      dropShadow: {
        '2xl': '0 25px 25px rgba(0,0,0,1)'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(black,transparent)',
      }
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio'),],
}

