/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/renderer/src/**/*.{html,js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'main-bg': {
          light: '#FFFFFF',
          dark: '#121212',
        },
        'navbar-bg': {
          light: '	#092F63',
          dark: '#',
        },
        'popup-bg': {
          light: '#F1F1EC',
          dark: '#',
        },
      }
    },
  },
  plugins: [],
}

