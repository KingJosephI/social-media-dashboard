/** @type {import('tailwindcss').Config} */
/**
 * @type {import('@types/tailwindcss/tailwind-config').TailwindConfig}
 */
module.exports = {
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./stories/*.stories.{js,ts,jsx,tsx}",
    "./stories/**/*.stories.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        customGradiant: "linear-gradient(225deg, #40DB82 0%, #388FE7 98.02%)",
      },
      fontSize: {
        tiny: "1px",
      },
      colors: {
        black: "#1D1F29",
        gray: "#F1F3FA",
        darkGray: "#63687D",
        green: "#1EB589",
        blue: "#178FF5",
        darkBlue: "#252B42",
        twitterBlue: "#1DA1F2",
        hoverGray: "#E1E4F0",
        red: "#DC414C",
        darkModeHover: "#333A55",
        blueIsh: "#8C98C6",
      },
      screens: {
        sm: "480px",
        md: "768px",
        lg: "1024px",
        xl: "1440px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
