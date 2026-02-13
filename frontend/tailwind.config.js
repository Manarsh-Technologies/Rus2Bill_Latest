/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'buildsphere-green': '#4CAF50',
        'buildsphere-dark': '#1a1a1a',
      },
    },
  },
  plugins: [],
}
