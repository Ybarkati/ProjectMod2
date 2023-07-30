/** @type {import('tailwindcss').Config} */
export default {
  mode: "jit",
  content: ["./src/components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "rgb(0, 0, 0,0.9)",
        "light-white": "rgba(255,255,255,0.17)",
      },
    },
  },
  plugins: [],
}

