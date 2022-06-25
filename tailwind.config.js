/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'white':'#FFF',
      'primary':'hsl(25, 97%, 53%)',
      'light-gray':'hsl(217, 12%, 63%)',
      'medium-gray':'hsl(216, 12%, 54%)',
      'dark-blue':'hsl(213, 19%, 18%)',
      'very-dark-blue':'hsl(216, 12%, 8%)',
      'my-gray':'#1e252f',
      'my-light-gray':'#262f38'
    },
    extend: {
    },
  },
  plugins: [],
}
