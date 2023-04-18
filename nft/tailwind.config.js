/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    gridTemplateColumns: {
      'gd2': '1fr',
      'gd1': '1fr 1fr',
      'gd3': '1fr 1fr 1fr',
      'gd4': '1fr 1fr 1fr 1fr',
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
      'max1': {'max': '600px'},
      'max2': {'max': '800px'},
      'max3': {'max': '1024px'},
    },
    backgroundImage: {
      'hero-timer': "url('/img/Home_image_2.png')",
    },
  },
  plugins: [],
}