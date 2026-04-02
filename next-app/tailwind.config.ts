import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          "blue-900": "#1f3a5f",
          "blue-700": "#163047",
          "blue-500": "#5fa8d3",
          "blue-200": "#eaf4fb",
          "teal-500": "#3ba99c",
        },
        text: {
          900: "#1a1a1a",
          700: "#4a4a4a",
          500: "#6f7c8a",
        },
        border: "#e2e8f0",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        display: ["Playfair Display", "serif"],
      },
      maxWidth: {
        container: "1120px",
        narrow: "780px",
      },
    },
  },
  plugins: [],
};

export default config;
