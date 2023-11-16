/**@type {import('tailwindcss').Config}*/
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./index.html"],
  theme: {
    extend: {
      colors: {
        "gray-v-200": "#CCCCCC",
        "gray-v-100": "#E6E6E6",
        "gray-v-300": "#B3B3B3",
        "blue-bg": "#2F54E9",
        "blue-v-100": "#2F54E9",
        "black-v-dark": "#101110",
        "black-v-800": "#282928",
        "black-v-700": "#404140",
        "black-v-500": "#707070"
      }

    },
  },
  plugins: [],
}

