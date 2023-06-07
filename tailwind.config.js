/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./index.html',
		'./src/**/*.{vue,js,ts,jsx,tsx}'
	],
	theme: {
		extend: {
      screens: {
        'xl': '1328px',
        '2xl': '1600px'
      },
			colors: {
        primary: {
          50: '#FAFAFA',
          100: '#DDDDE3',
          200: '#BFBFC9',
          300: '#A3A3AD',
          400: '#8A8A96',
          500: '#6E6E7A',
          600: '#565661',
          700: '#404047',
          800: '#28282E',
          900: '#151517',
        },
				secondary: {
          50: '#F6F5FF',
          100: '#E3DEFC',
          200: '#CCC3FA',
          300: '#B9AAFA',
          400: '#907CF7',
          500: '#7655F7',
          600: '#6C39F7',
          700: '#6A1CFB',
          800: '#5316CC',
          900: '#4014A6',
        },
				tertiary: {
          50: '#F0F5FF',
          100: '#E0EBFF',
          200: '#C7DAFF',
          300: '#ADC9FF',
          400: '#7AA7FF',
          500: '#5C92FE',
          600: '#5685F5',
          700: '#5177EB',
          800: '#4365E0',
          900: '#355ACC',
        },
				accent: {
          50: '#FFE0EC',
          100: '#FFCCDF',
          200: '#FFB8D5',
          300: '#FFA3C9',
          400: '#FF8ABB',
          500: '#FF7AB8',
        },
				warning: {
          50: '#FFF2CC',
          100: '#FFE8A3',
          200: '#FFDD75',
          300: '#FFD144',
          400: '#FFC43B',
          500: '#FFB929',
        },
				negative: {
          50: '#FFE1DE',
          100: '#FFC5BD',
          200: '#FFADA1',
          300: '#FF9585',
          400: '#FA786A',
          500: '#FF5754',
        },
      }
		}
	},
	plugins: [
		require('@tailwindcss/typography'),
		require('@tailwindcss/forms'),
		require('@tailwindcss/aspect-ratio')
	]
};
