/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#133952',
        pink: '#9D457B',
        pinkBright: '#E0BDD3',
        green: '#7B9D45',
        greenBright: '#B7CF91',
        slate: '#444444',
        dark: '#292929',
        red: '#8D0A0A',
      },
    },
  },
  plugins: [],
};
