// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        sm: "30px",
        lg: "40px",
        xl: "60px",
      },
      screens: {
        "2xl": "1560px",
      },
    },
    extend: {
      screens: {
        lg: "1025px",
        md: "880px",
        sm: "740px",
      },
      colors: {
        black: "#000000",
        white: "#FFFFFF",
        gray: "#B6BCC6",
        red: "#FF0000",
        body: "#F5F5F5",
        highlight: "#E8E7EF",
        border: "#DFDFDF",
      },
      fontFamily: {
        // Use the variable names defined in your layout
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
