/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        richblack: {
          800: '#0A0F21',  // ← You can change this HEX to your desired shade
        },
      },
    },
  },
  plugins: [],
}