/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    screens: {
      "2xl": { max: "1535px" },
      // => @media (max-width: 1535px) { ... }

      xl: { max: "1904px" },
      // => @media (max-width: 1279px) { ... }

      lg: { max: "1264px" },
      // => @media (max-width: 1023px) { ... }

      md: { max: "960px" },
      // => @media (max-width: 767px) { ... }

      sm: { max: "600px" },
      // => @media (max-width: 639px) { ... }
    },
    extend: {
      colors: {
        "border-gray": "#e3e3e3 !important",
        "dashbord-gray": "#ccc !important",
        primary: "#4D77FF",
        txtOnPrimary: "#fff",
      },
    },
  },
  plugins: [],
};
