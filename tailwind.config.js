/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#1E3A5F',
          coral: '#E85D4A',
          orange: '#F7941D',
          teal: '#2B7A9B',
          green: '#4CAF50',
        },
        luxury: {
          darkBlue: '#0A1F3D',
          slate: '#334155',
          silver: '#E2E8F0',
          pearl: '#F8FAFC',
          /** Site-wide soft white (minimal dull vs pure #fff) */
          canvas: '#F5F6F8',
        },
        accent: {
          coral: '#FF6B5A',
          gold: '#FFA726',
          teal: '#26A69A',
          emerald: '#66BB6A',
        },
        neutrals: {
          white: '#FFFFFF',
          warmGrey: '#FAFAFA',
          charcoal: '#1F2937',
        },
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'serif'],
        subheading: ['"Montserrat"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        accent: ['"Bebas Neue"', 'sans-serif'],
        oswald: ['"Oswald"', 'sans-serif'],
        outfit: ['"Outfit"', 'sans-serif'],
        'roboto-condensed': ['"Roboto Condensed"', 'sans-serif'],
        'roboto-slab': ['"Roboto Slab"', 'serif'],
      },
      fontSize: {
        'h1-desktop': '3.75rem',
        'h1-mobile': '2.5rem',
        'h2-desktop': '2.625rem',
        'h2-mobile': '2rem',
        'h3-desktop': '1.875rem',
        'h3-mobile': '1.5rem',
        'h4-desktop': '1.5rem',
        'h4-mobile': '1.25rem',
      },
      lineHeight: {
        'tight': '1.2',
        'normal': '1.6',
        'relaxed': '1.8',
      },
    },
  },
  plugins: [],
};
