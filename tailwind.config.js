/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "gradient-purple": "#8C6DFF",
        "gradient-blue": "#36D1DC",
        "gradient-green": "#00E573",
        "gradient-yellow": "#FDBB39",
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
      },
      animation: {
        float: "float 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
