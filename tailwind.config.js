/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerbg: "#00000033",
        opWhite: "rgba(255, 255, 255, 0.35)",
        button: "#6C63FF",
        text: "rgba(47, 46, 65, 1)",
        subText: "rgba(165, 165, 165, 1)",
      },
    },
  },
  plugins: [],
};
