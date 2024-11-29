/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    screens: {
      "max-xs": { max: "440px" },
      "tablet": {min: "440px", max: "750px"}
    },
  },
  plugins: [],
};
