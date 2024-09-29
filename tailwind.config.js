// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        nav: " #EFF8FF",
        main: " #025595",
        lwhite: "#F5F5F5",
        active: "#D7E6EA",
        Gray: "#22222280",
      },
      spacing: {
        "70px": "70px",
        7.5: "30px",
      },
    },
  },
  plugins: [],
};
