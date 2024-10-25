/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: {
          1: "#FDFDFE",
          2: "#F7F9FF",
          3: "#EDF2FE",
          4: "#E1E9FF",
          5: "#D2DEFF",
          6: "#C1D0FF",
          7: "#ABBDF9",
          8: "#8DA4EF",
          9: "#3E63DD",
          10: "#3358D4",
          11: "#3A5BC7",
          12: "#1F2D5C",
        },
        fontFamily: {
          fira: ["Fira Code", "sans-serif"],
          roboto: ["Roboto", "sans-serif"],
        },
      },
    },
  },
  plugins: [],
};
