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
            500 : '#121212',
            900 : '#010409'
        },
        tiktok : {
            100 : '#4BE1EC',
            900 : '#E72217'
        }
      },
      spacing : {
        '-5' : '-25px'
      }
    }
  },
  plugins: [],
}

