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
      animation: {
        gradient: 'gradient 5s linear infinite', // Adjust duration here
      },
      keyframes: {
        gradient: {
          '0%': { backgroundPosition: '0%' },
          '50%': { backgroundPosition: '100%' },
          '100%': { backgroundPosition: '0%' },
        },
      },
    },
  },
  plugins: [],
}