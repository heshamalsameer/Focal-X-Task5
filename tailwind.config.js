/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // original tokens (kept for compatibility)
        nav: "#EFF8FF",
        main: "#025595",
        lwhite: "#F5F5F5",
        active: "#D7E6EA",
        Gray: "#22222280",
        // Flora editorial palette
        ink: "#0E1726",
        paper: "#FBF9F4",
        cream: "#F3EEE4",
        sand: "#E6DDCC",
        brand: { DEFAULT: "#025595", 600: "#01467B", 300: "#5A8FC4", 100: "#DCE8F4" },
        coral: "#F26B4A",
        muted: "#6B7280",
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Manrope"', "system-ui", "sans-serif"],
      },
      spacing: {
        "70px": "70px",
        7.5: "30px",
      },
      maxWidth: {
        site: "1280px",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
