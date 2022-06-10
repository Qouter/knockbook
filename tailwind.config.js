module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "true",
  content: [],
  theme: {
    extend: {},
    colors: {
      primary: "#fbd38d",
      secondary: "#335145",
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
