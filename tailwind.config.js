/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{html,js,jsx}",
    "./components/**/*.{html,js,jsx}",
    "./sections/**/*.{html,js,jsx}",
    "./styles/**/*.{js,jsx}",
  ],
 
  theme: {
    extend: {
      colors: {
        "primary-black": "#1A232E",
        "secondary-white": "#c7c7c7",
      },
      
    },
  },
  plugins: [],
};
