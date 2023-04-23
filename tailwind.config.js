/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./components/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '12-cols':
          'calc(((12 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (12 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
        '8-cols':
          'calc(((8 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (8 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
        '6-cols':
          'calc(((6 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (6 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
        '5-cols':
          'calc(((5 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (5 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
        '4-cols':
          'calc(((4 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (4 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
        '3-cols':
          'calc(((3 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (3 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
        '2-cols':
          'calc(((2 / var(--container-grid-columns, var(--grid-columns))) * (100% - var(--inner-gutter))) - (var(--inner-gutter) - (2 / var(--container-grid-columns, var(--grid-columns)) * var(--inner-gutter))))',
      },
    },
  },
  plugins: [],
};
