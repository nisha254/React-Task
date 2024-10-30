/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        green:'#00732F',
        orange:'#E7760D',
        blue:'#072F57',
        darkOrange:'#EB7150',
        acqua:"#E8FBFF",
        gray:"#FFFFFF33",


      },
      backgroundImage:{
        'bg':"url('src/assets/Rectangle.png')"   
        }
    },
  },
  plugins: [],
}