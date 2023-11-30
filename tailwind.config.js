/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '10px', // Define your custom 375px breakpoint
        'sm': '360px',
        'md': '860px',
        '2xl': '1300px',
      },
    },
  },
  plugins: [],
}

