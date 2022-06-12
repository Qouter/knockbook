const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "true",
  content: [],
  theme: {
    extend: {
      colors: {
        primary: "#fbd38d",
        secondary: "#335145",
        tertiary: "#3C1518",
        quaternary: "#69140E",
        quinary: "#A44200",
      },
    },
  },
  plugins: [
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/forms"),
  ],
};
