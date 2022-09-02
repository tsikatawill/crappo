/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0D0D2B",
        accent: "#252540",
        secondary: "rgb(43, 7, 118)",
      },
    },
  },
  plugins: [],
};
