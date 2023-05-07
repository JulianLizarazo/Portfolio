/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors:{
      'dark-black': '#151414',
      'dark-gray': '#3E3636',
      'dark-red': '#D72323',
      'dark-white': '#F5EDED',
      'light-white': '#FBF8F1',
      'light-gray': '#F7ECDE',
      'light-brown': '#E9DAC1',
      'light-blue': '#54BAB9',
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
