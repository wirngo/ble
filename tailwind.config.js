/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1B3D8C',
        gold: '#FAB937',
        'earth-red': '#C75D4B',
        'deep-green': '#2A5A3B',
        'warm-sand': '#E6DCCC',
        terracotta: '#9B4B3D',
        ivory: '#F7F3E8',
        'deep-brown': '#4A3427',
        'bright-orange': '#FF7F41',
        'soft-gold': '#DFC598',
        'forest-green': '#1E453E',
        'ocean-blue': '#476C9B',
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
        'playfair': ['Playfair Display', 'serif'],
      },
      fontSize: {
        'h1': ['48px', '60px'],
        'h2': ['36px', '44px'],
        'h3': ['24px', '32px'],
        'body': ['16px', '24px'],
        'small': ['14px', '20px'],
      },
    },
  },
  plugins: [],
}
