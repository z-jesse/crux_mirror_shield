/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#e0c56e',
        'defwhite': '#f5f5f5',
        'defgray': '#1c1c1c',
        'custom_purple': '#9b80ff',
        'custom_gold': '#ffe680',
      },
      fontFamily: {
        condensed: ['var(--font-barlow-condensed)'],
        mono: ['var(--font-space-mono)'],
      }
    },
  },
  plugins: [],
}

