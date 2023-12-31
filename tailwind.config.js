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
      screens: {
        'mlg': '896px'
      },
      colors: {
        // 'light': '#f0f0ff',
        'light': '#fffff0',
        // 'dark': '#50305F',
        'dark': '#6F6320',
        'dark3': '#300132',
        'action': '#FF23AE',
        'action2': '#783F61',
        'gold': '#FFD700',
      }
    },
  },
  plugins: [],
}
//todo space theme with stars colors
