/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      gridTemplateRows: {
        7: 'repeat(7, minmax(0, 1fr))',
        8: 'repeat(8, minmax(0, 1fr))',
        9: 'repeat(9, minmax(0, 1fr))',
        10: 'repeat(10, minmax(0, 1fr))',
      },
      animation: {
        fadein: 'fadeIn 5s ease-in-out',
      },
      dropShadow: {
        xs: '0 1px 1px rgba(0, 0, 0, 0.02)',
      },
      fontFamily: {
        montserrat: ['Montserrat'],
        damion: ['Damion'],
        opensans: ['Open Sans'],
      },
      colors: {
        accent: ({ opacityVariable }) =>
          `rgba(var(--accent) / var(${opacityVariable}))`,
        content: ({ opacityVariable }) =>
          `rgba(var(--content) / var(${opacityVariable}))`,
        foreground: ({ opacityVariable }) =>
          `rgba(var(--foreground) / var(${opacityVariable}))`,
        background: ({ opacityVariable }) =>
          `rgba(var(--background) / var(${opacityVariable}))`,
        edge: ({ opacityVariable }) =>
          `rgba(var(--edge) / var(${opacityVariable}))`,
      },
    },
  },
  plugins: [require('tailwind-scrollbar-hide')],
};
