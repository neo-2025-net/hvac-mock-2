/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        cairo: ['Cairo', 'sans-serif'],
        tajawal: ['Tajawal', 'sans-serif'],
      },
      colors: {
        navy: {
          50: '#e8edf8',
          100: '#c5d0ec',
          200: '#9fb0df',
          300: '#7890d1',
          400: '#5a76c8',
          500: '#3c5cbf',
          600: '#2e4aab',
          700: '#1e3590',
          800: '#112175',
          900: '#0a1654',
          950: '#060e38',
        },
        lime: {
          50: '#f4fce8',
          100: '#e5f7c5',
          200: '#c9ee8d',
          300: '#a8e14d',
          400: '#7fd020',
          500: '#65b810',
          600: '#4d920b',
          700: '#3c7010',
          800: '#325914',
          900: '#2b4c16',
        },
        sky: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          200: '#bae6fd',
          300: '#7dd3fc',
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
          700: '#0369a1',
        },
      },
    },
  },
  plugins: [],
};
