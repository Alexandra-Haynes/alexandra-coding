/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "375px", //mobile M
        md: "768px", //tablet
        lg: "1024px", //laptop
        xl: "1280px", //laptop L
        "2xl": "2560px", //4k
      },
      fontSize: {
        sm: "1rem",
        md: "1.2rem",
        lg: "1.5rem",
        xl: "2.5rem",
        "2xl": "4rem",
      },
      colors: {
        "gradient-purple": "#8C6DFF",
        "gradient-blue": "#36D1DC",
        "gradient-green": "#00E573",
        "gradient-yellow": "#FDBB39",
        bgCyan: "rgb(194, 222, 220)",
      },
      backgroundImage: {
        gradientBg:
          "linear-gradient(60deg, white, rgb(194, 222, 220), rgb(237, 228, 255))",
        underlinedText1: "linear-gradient(90deg, #85c1e9, #76d7c4)",
        underlinedText2: "linear-gradient(90deg, #f8c471, #f9e79f)",
        underlinedText3: "linear-gradient(90deg, #c39bd3, #f1948a)",
      },
      backgroundSize: {
        hugeBg: "600% 600%",
        underlinedBg: "100% 40%",
      },

      fontFamily: {
        abril: "Abril Fatface",
        poppins: "Poppins",
      },
      keyframes: {
        float: {
          "0%, 100%": {
            transform: "translateY(-4%)",
            animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
          },
          "50%": {
            transform: "translateY(0)",
            animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
          },
        },
        bgAnimation: {
          "0%": { backgroundPosition: "0 85%" },
          "50%": { backgroundPosition: "100% 20%" },
          "100%": { backgroundPosition: "0 65%" },
        },
      },
      animation: {
        float: "float 5s ease-in-out infinite",
        bgAnimation: "bgAnimation 18s infinite linear",
      },
      gridTemplateColumns: {
        projectsCard: "4px, 2fr, 1fr",
        projectsCardReversed: "1fr, 2fr, 4px",
      },
      boxShadow: {
        customShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
        customShadow2: "rgba(38, 57, 77,.5) 0px 20px 20px -10px",
      },
    },
  },
  plugins: [],
};
