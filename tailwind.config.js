/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
      colors: {
        blue: {
          primary: "#575DFB",
          dark: "#403F63",
        },
        primary: "#575DFB",
        content: "#F9FAFB",
        dark: "#0F172B",
        contentDark: "#091126",
        cardDark: "#1D2A3C",
        red: "#FF6363",
        text: "#403F63",
        textDark: "#94A4B8",
        purple1: "#575DFB",
        purple2: "#EFF0FF",
        purple2Dark: "#232564",
        red1: "#FF6363",
        red2: "#FFF2F2",
        gray1: "#AEB6D3",
        gray2: "#F2F8FF",
        blue1: "#56CCF2",
        blue2: "#F1F7FF",
        green1: "#37CB58",
        green2: "#E5FFEB",
      },
      boxShadow: {
        type1: "0px 30px 80px rgba(230, 234, 243, 0.4)",
        type2: "0px 4px 10px rgba(81, 175, 216, 0.14)",
      },
      fontFamily: {
        Inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
