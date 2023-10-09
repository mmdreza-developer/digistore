/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true
      },
      colors: {
        "gray-text": "#c1c1c1",
        "gray-bg": "#f5f5f5",
        "gray-500": "#666",
        "orange": "#fe6000",
        "white": "#fff",
        "blue": "#2D416F",
        "primary": "#6EC1E4",
        "dark-bg": "#00000085"
      }
    },
  },
  plugins: [],
}

