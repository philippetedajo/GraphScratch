module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      ddin: ["ddin", "serif"],
      ddinbold: ["ddinbold", "serif"],
    },
    textColor: {
      primary: "#000000",
      secondary: "#ffffff",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
