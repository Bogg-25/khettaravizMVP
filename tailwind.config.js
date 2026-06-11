/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        earth: {
          50: '#f6f5f0',
          100: '#e8e5d6',
          200: '#d4ceb0',
          500: '#8B7D5B',
          700: '#5C5037',
          900: '#2D281B',
        },
        water: {
          500: '#2563eb',
          700: '#1d4ed8',
        },
      },
    },
  },
  plugins: [],
}
