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
        sm_max: { max: "640px" },

        md: "768px",
        md_max: { max: "768px" },

        lg: "1024px",
        lg_max: { max: "1024px" },

        xl: "1280px",
        xl_max: { max: "1280px" },

        "2xl": "1630px",
        "2xl_max": { max: "1630px" },
      },
    },
  },
  plugins: [],
};
