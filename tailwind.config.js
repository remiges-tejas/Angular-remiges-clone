/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      fontFamily: {
        bebas: ["Bebas Neue", "sans - serif"],
        pop: ["Poppins", "serif"],
        poppins: ["Poppins", "sans-serif"],
        figtree: ["Figtree", "sans-serif"],
      },
      colors: {
        rblue: "#223F99",
        rpink: "#EF5BA1",
        rcyan: "#00BDF2",
        rgray: "#404040",
      },
      boxShadow: {
        rshadow:
          "rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px",
      },
    },
  },
  plugins: [],
};
