/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'main-color':'#d3ad7f',
        'black':'#13131a',
        'bg':'#010113',
      },
      borderColor:{
        'custom':'rgba(255,255,255,0.3)',
      },
    },
  },
  variants:{
    extends:{},
  },
  plugins: [],
}

