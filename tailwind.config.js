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
          dark: '#1a1a1a',
        },
        'icon': {
          light: '#092F63',
          dark: '#E0E0E0',
        },
        'icon-bg': {
          light: '#F5F5F5',
          dark: '#333333',
        },
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeOut: {
          '0%': { opacity: '1', transform: 'translateY(0)' },
          '100%': { opacity: '0', transform: 'translateY(-10px)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease-out',
        fadeOut: 'fadeOut 0.3s ease-out',
      },
    },
  },
  plugins: [],
}

