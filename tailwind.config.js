/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        background : {
            100 : '#0D1117',
            500 : '#151515',
            900 : '#010409'
        },
        tiktok : {
            100 : '#0077cc',
            500 : '#B9C4AE',
            900 : '#E72217'
        }
      },
      spacing : {
        '-5' : '-25px',
        '45' : '48%',
        '88' : '22rem',
        '100' : '720px',
        '70' : '265px',
        '98' : '430px'
      }
    }
  },
  plugins: [],
}

