/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      './app/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
      extend: {
          colors: {
              darkPurple: '#413C58', // Dark pastel purple
              grayPurple: '#D9D0DE', // Gray pastel purple
          },
      },
  },
  plugins: [],
};
