/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
   
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      screens:{
        'mlg': '896px'
      },
      colors: {
        'light': '#FFFFF0',
        'light2': '#F0F0FF',
        'dark': '#6F6320',
        'dark2': '#181B0E',
        'dark3': '#300132',
        'action': '#FF23AE',
        'action2': '#783F61',
      }
    },
  },
  plugins: [],
}

