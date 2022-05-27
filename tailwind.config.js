module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        dmsans: ["DM_SANS-regular", "sans-serif"],
        dnsansItal: ["DM_SANS-Italic", "sans-serif"],
        poppins: ["poppins", "sans-serif"],
        montserrat: ["montserrat", "sans-serif"],
        roboto: ["roboto", "sans-serif"],
        abel: ["abel", "sans-serif"],
      },
      screens: {
        sm: "640px",

        md: "768px",

        lg: "1024px",

        xl: "1280px",

        "2xl": "1630px",
      },
    },
  },
  plugins: [],
};
