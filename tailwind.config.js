/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

        primary: "#0075FF",
        secondary: "#FF005B",
        txtColor: "#ffffff",
        bgColor: "#F3F3FD",
        

      },
    },
  },
  plugins: [],
}