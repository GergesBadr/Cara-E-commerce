/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: "'Poppins', sans-serif",
      },
      colors: {
        "dark-bg": "#18212f",
      },
    },
  },
  plugins: [],
};
