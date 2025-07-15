/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/renderer/src/**/*.{html,js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // Enable dark mode support
  theme: {
    extend: {
      colors: {
        'main-bg': {
          light: '#FFFFFF',
          dark: '#121212',
        },
        'navbar-bg': {
          light: '#092F63',
          dark: '#1a1a1a',
        },
        'popup-bg': {
          light: '#F1F1EC',
          dark: '#2d2d2d',
        },
        'icon': {
          light: '#092F63',
          dark: '#E0E0E0',
        },
        'icon-bg': {
          light: '#F5F5F5',
          dark: '#333333',
        },
      }
    },
  },
  plugins: [],
}

