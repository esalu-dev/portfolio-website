/** @type {import('tailwindcss').Config} */
export default {
  content: [
    '.index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      fontFamily: {
        Nunito : ['Nunito', 'sans-serif'],
        Raleway : ['Raleway', 'sans-serif'],
      },
      colors: {
        'navy-blue': {  DEFAULT: '#205072',  50: '#72ADD7',  100: '#62A4D3',  200: '#4292CA',  300: '#327DB2',  400: '#296692',  500: '#205072',  600: '#143146',  700: '#07131A',  800: '#000000',  900: '#000000',  950: '#000000'},
        'aqua-green': {  DEFAULT: '#329D9C',  50: '#A4E2E2',  100: '#95DDDD',  200: '#76D3D3',  300: '#57CAC8',  400: '#3CBCBB',  500: '#329D9C',  600: '#247272',  700: '#174847',  800: '#091D1D',  900: '#000000',  950: '#000000'},
        'emerald': {  DEFAULT: '#56C596',  50: '#DFF4EB',  100: '#D0EFE1',  200: '#B1E4CF',  300: '#93DABC',  400: '#74CFA9',  500: '#56C596',  600: '#3AA97A',  700: '#2C7F5C',  800: '#1D553E',  900: '#0F2C1F',  950: '#081710'},
        'pastel-green': {  DEFAULT: '#7BE495',  50: '#FFFFFF',  100: '#F2FCF4',  200: '#D4F6DC',  300: '#B6F0C5',  400: '#99EAAD',  500: '#7BE495',  600: '#4CDA70',  700: '#29C650',  800: '#1F983D',  900: '#15692A',  950: '#115221'},
        'light-green': {  DEFAULT: '#CFF4D2',  50: '#F4FDF5',  100: '#F0FCF1',  200: '#E8FAE9',  300: '#E0F8E2',  400: '#D7F6DA',  500: '#CFF4D2',  600: '#A1EAA7',  700: '#74DF7C',  800: '#46D552',  900: '#2AB836',  950: '#25A22F'},
      }
    },
  },
  plugins: [
    require('tailwindcss-animated')
  ],
  darkMode: 'class'
}

