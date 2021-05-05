const colors = require("tailwindcss/colors");
module.exports = {
  // darkMode: 'class', // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "100%",
        md: "100%",
        lg: "1024px",
        xl: "1180px",
      },
    },
    colors: {
      primary: {
        light: "#1aaaed",
        DEFAULT: "#4493e7",
        dark: "#244f8c",
      },
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.blueGray,
      red: colors.red,
      yellow: colors.amber,
      indigo: colors.indigo,
      blue: colors.blue,
      pink: colors.pink,
      green: colors.green,
    },
    extend: {
      fontFamily: {
        sans: ["Work Sans"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
  purge: {
    enabled: process.env.NODE_ENV === "production",
    content: ["./src/**/*.{vue,js,ts,jsx,tsx}"],
  },
};
