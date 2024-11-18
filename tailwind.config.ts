/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}', // Para el enrutamiento de app
    './src/components/**/*.{js,jsx,ts,tsx}', // Si tienes componentes en src/components
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
