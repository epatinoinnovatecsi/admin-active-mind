/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4D6978",
        secondary: "#E7E7E7",
        "alternative-primary": "#20749B",
        "alternative-secondary": "#FF0022",
        dark: "#0F0326"
      },
    },
  },
  plugins: [],
};
