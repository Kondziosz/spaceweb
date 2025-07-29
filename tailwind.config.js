/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        /*  Figma token   px    rem  */
        25: "0.125rem", //  2  px
        50: "0.25rem", //  4  px
        100: "0.5rem", //  8  px
        150: "0.75rem", // 12  px
        200: "1rem", // 16  px
        300: "1.5rem", // 24  px
        400: "2rem", // 32  px
        500: "2.5rem", // 40  px
        600: "3rem", // 48  px
        800: "4rem", // 64  px
        1000: "5rem", // 80  px
        1200: "6rem", // 96  px
        1600: "8rem", // 128 px
      },
    },
  },
  plugins: [],
};
