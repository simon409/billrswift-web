/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#F7F7F7',
        backgroundSecondary: '#F0F0DD',
        buttonRed: '#E42E45',
        buttonOrange: '#EC9850',
        Orange: '#E76936',
        borderColor: '#7D7D7D',
        isActive: '#E76936',
        isSelected: '#ECEDC0',
        grey: '#F7F7F7',
        green: '84C857',
        red: '8CCB62',
        lightGreen: '#8CCB62',
      },
      padding: {
        mainPaddingTop: '60px',
        mainPaddingLeft: '50px',
        menuPaddingTop: '60px',
        secondaryPadding: '23px'
      },

      borderRadius: {
        'xl': '5px',
        '2xl': '10px',
        '3xl': '15px',
        '4xl': '20px'
      },
      fontSize: {
        xlarge: '34px',
        large: '22px',
        medium: '18px',
        mediumSmall: '14px',
        small: '12px',
        xsmall: '10px',
      }
    },
  },
  plugins: [],
}

