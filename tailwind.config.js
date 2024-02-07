
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Poppins", "sans-serif"]
      }
    },

    container: {
      center: true,
      screens: {  
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },

  plugins: [],
}
