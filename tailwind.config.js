/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        greyDark: "#333",
        greyLight: "#a5a5a5",
        orange: "#ff9e0b",
      },
    },
  },
  plugins: [],
};
