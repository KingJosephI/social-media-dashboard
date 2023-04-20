/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./stories/*.stories.{js,ts,jsx,tsx}",
    "./stories/**/*.stories.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: "#F1F3FA",
        darkGray: "#63687D",
        green: "#1EB589",
        blue: "#178FF5",
        twitterBlue: "#1DA1F2",
        hoverGray: "#E1E4F0",
        red: "#DC414C",
      },
    },
  },
  plugins: [],
};
