/** @type {import("tailwindcss").Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"
  ],
  theme: {
    extend: {
      fontFamily: {
        kranky: ["Kranky", "serif"],
        poppins: ["Poppins", "serif"]
      },
      colors: {
        "darkslategray": "#223E2D",
        "burlywood": "#CF9F69",
        "gainsboro": "#D9D9D9"
      }
    },
  },
  plugins: [],
}

