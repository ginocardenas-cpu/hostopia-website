import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Raleway", "sans-serif"]
      },
      colors: {
        brand: {
          teal: "#2CADB2",
          yellow: "#F8CF41",
          dark: "#24282B"
        }
      }
    }
  },
  plugins: []
};

export default config;

