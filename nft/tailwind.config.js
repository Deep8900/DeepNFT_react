/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    gridTemplateColumns: {
      'gd2': '1fr',
      'gd1': '1fr 1fr',
      'gd3': '1fr 1fr 1fr',
      'gd4': '1fr 1fr 1fr 1fr',
      'gd5': '4fr 3fr',
      'gd6': '1fr 9fr 3fr 3fr 4fr',
      'gd7': '1fr 8fr 3fr 3fr',
    },
    fontFamily: {
      'mono': ['Monospace'],
      'Proxima': ['Proxima Nova'],
      'math': ['math'],
      'Libre': ['Libre Baskerville'],
      'cursive': ['cursive'],
    },
    dropShadow: {
      glow: [
        "0 0px 20px rgba(255,255, 255, 0.35)",
        "0 0px 65px rgba(255, 255,255, 0.2)",
      ],
    },
    screens: {
      'sm': '600px',
      'md': '800px',
      'lg': '1024px',
      'xl': '1280px',
      'max1': {'max': '599px'},
      'max2': {'max': '799px'},
      'max3': {'max': '1023px'},
    },
    backgroundImage: {
      'hero_timer': "url('/public/img/Home_image_2.png')",
      'gr1': 'linear-gradient(to right, rgba(0,0,0,0.9), rgba(0,0,0,0.75))',
      'gr2': 'linear-gradient(to bottom left, rgba(128,128,128,0.6), rgba(0, 0, 0, 0.4))',
      'gr3': 'linear-gradient(to top, rgba(160,32,240,0.6), rgba(160,32,240,0.1))',
      'gr4': 'linear-gradient(to right, rgba(10,10,10,0.9), rgba(10,10,10,0.75))',
      'gr5': 'linear-gradient(100.92deg, #A259FF 13.57%, #FF6250 97.65%)',
    },
  },
  plugins: [],
}