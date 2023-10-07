/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "woocommerce": "#7F54B3",
        "wc-green": "#7ad03a",
        "wc-red": "#a00",
        "wc-orange": "#ffba00",
        "wc-blue": "#2ea2cc",
        "wc-primary": "#7F54B3",
        "wc-primary-text": "white",
        "wc-secondary": "#e9e6ed",
        "wc-secondary-text": " #515151",
        "wc-highlight": "#b3af54",
        "wc-highligh-text": " white",
        "wc-white": "#fff",
        "wc-subtext": "#767676",
      }
    },
  },
  plugins: [],
}

