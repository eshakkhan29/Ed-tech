/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {

          "primary": "#0054A6",

          "secondary": "#F47920",

          "accent": "#1abf90",

          "neutral": "#000000",

          "base-100": "#ffffff",

          "info": "#4671E7",

          "success": "#1B795B",

          "warning": "#EB9E24",

          "error": "#F96E62",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}