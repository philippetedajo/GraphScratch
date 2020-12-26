module.exports = {
  purge: ["./pages/**/*.js", "./components/**/*.js"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      primary: "black",
      secondary: "#fff",
      third: "#3e6ae1",
    },
    fontFamily: {
      ddin: ["ddin", "serif"],
      ddinbold: ["ddinbold", "serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
