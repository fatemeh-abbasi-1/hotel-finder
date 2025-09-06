/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        my_pink: "#fa47cd",
      },
      backgroundImage: {
        primary:
          "linear-gradient(155deg,rgba(224, 166, 224, 1) 0%, rgba(255, 255, 255, 1) 68%);",
        secondary:
          "linear-gradient(155deg,rgba(224, 166, 224, 1) 0%, rgba(0, 0, 0, 1) 68%);",
      },
    },
  },
  plugins: [],
};
