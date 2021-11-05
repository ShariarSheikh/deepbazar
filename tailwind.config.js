module.exports = {
  mode: "jit",
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./utils/**/*.{js,ts,jsx,tsx}",
    "./home-pages-ui/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }
      "2xl": "1366px",
      // => @media (min-width: 1366px) { ... }
      "3xl": "1440px",
      // => @media (min-width: 1440px) { ... }
      "4xl": "1536px",
      // => @media (min-width: 1536px) { ... }
      "5xl": "1920px",
      // => @media (min-width: 1920px) { ... }
    },
  },
  variants: {
    extend: {},
    transitionDuration: ["hover", "focus"],
  },
  plugins: [
    //...
    require("@tailwindcss/line-clamp"),
  ],
};
