/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.hbs"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1240px',
    },
    container: {
      padding: '1.25rem',
    },
    extend: {
      aspectRatio: {
        post: '3 / 2',
        mpost: '7 / 3',
        shop: '16 / 10',
      },
      colors: {
        core: {
          blue: '#00ceff',
          tag: '#6B86E2'
        },
        bluedot: {
          blue: '#3C72FF',
          'white-blue': '#c8d1ea',
          'light-blue': '#869fdf',
          'dark-blue': '#0039CE',
          'blue-hover': '#e4efff',
          black: '#000',
          green: '#03BC90',
        },
        gray: {
          o7: '#777',
          o9: '#999',
          '4a': '#4a4a4a',
          '5a': '#5a5a5a',
          b2: '#b2b2b2',
          b3: '#b3b3b3',
          b4: '#b4b4b4',
          b5: '#b5b5b5',
          b6: '#b6b6b6',
          b7: '#b7b7b7',
          b8: '#b8b8b8',
          b9: '#b9b9b9',
          c1: '#c1c1c1',
          c2: '#c2c2c2',
          c3: '#c3c3c3',
          c4: '#c4c4c4',
          c5: '#c5c5c5',
          c7: '#c7c7c7',
          cd: '#cdcdcd',
          d9: '#d9d9d9',
          e0: '#e0e0e0',
          e5: '#e5e5e5',
          e6: '#e6e6e6',
          eb: '#ebebeb',
          f4: '#f4f4f4',
        }
      },
      dropShadow: {
        postcard: '0 2px 20px rgba(0, 0, 0, 0.1)'
      },
      fontFamily: {
        spoqa: [
          '"Spoqa Han Sans Neo"',
          'sans-serif',
        ],
        noto: [
          '"Noto Sans KR"',
          'sans-serif',
        ],
        swash: [
          '"Berkshire Swash"',
          'sans-serif',
        ],
        roboto: [
          '"Roboto"',
          'sans-serif',
        ],
        garamond: [
          '"Cormorant Garamond"',
          'serif',
        ],
        tinos: [
          '"Tinos"',
          'serif',
        ],
        anton: [
          '"Anton"',
          'sans-serif',
        ]
      },
      fontSize: {
        '5xs': ['0.5rem'], //8px
        '4xs': ['0.5625rem'], //9px
        '3xs': ['0.625rem'], //10px
        '2xs': ['0.6875rem'], //11px
        'lxs': ['0.8125rem'], //13px
        'lsm': ['0.9375rem'], //15px
      },
      spacing: {
        '4.5': '1.125rem', //18
        '6.5': '1.625rem', //26
        '7.5': '1.875rem', //30
        '9.5': '2.375rem', //38
        '11.5': '2.875rem', //46
        '14.5': '3.625rem', //58
        '15': '3.75rem', //60
        '17': '4.25rem', //68
        '17.5': '4.375rem', //70
        '21': '5.25rem', //84
        '22': '5.5rem', //88
        '22.5': '5.625rem', //90
        '23': '5.75rem', //92
        '25': '6.25rem', //100
        '29': '7.25rem', //116
        '29.5': '7.375rem', //116
        '30': '7.5rem', //120
        '37': '9.25rem', //148
        '37.5': '9.375rem', //150
        '45': '11.25rem'
      }
    }
  },
  plugins: [
  ],
}
