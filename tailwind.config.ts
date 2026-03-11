import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          charcoal: "#24282B",
          teal: "#2CADB2",
          "teal-dark": "#1d8f93",
          "teal-light": "#e8f7f7",
          gold: "#F8CF41",
          "gold-dark": "#e0b82a",
          "gold-light": "#fef9e6",
          cream: "#f7f6f2",
          "gray-light": "#f2f2f0",
        },
      },
      fontFamily: {
        heading: ["Montserrat", "sans-serif"],
        body: ["Raleway", "sans-serif"],
      },
      fontSize: {
        "10xl": ["10rem", { lineHeight: "1" }],
        "11xl": ["12rem", { lineHeight: "1" }],
      },
      backgroundImage: {
        "teal-gradient": "linear-gradient(135deg, #2CADB2 0%, #1d8f93 100%)",
        "gold-gradient": "linear-gradient(135deg, #F8CF41 0%, #e0b82a 100%)",
        "charcoal-gradient": "linear-gradient(135deg, #24282B 0%, #1a1d20 100%)",
        "hero-blob": "radial-gradient(ellipse at 70% 50%, rgba(44,173,178,0.15) 0%, rgba(248,207,65,0.08) 50%, transparent 70%)",
      },
      animation: {
        "fade-up": "fadeUp 0.7s ease-out forwards",
        "fade-in": "fadeIn 0.7s ease-out forwards",
        "slide-right": "slideRight 0.7s ease-out forwards",
        "float": "float 8s ease-in-out infinite",
        "typewriter-reveal": "typewriter-reveal 33s steps(36) infinite",
        "typewriter-cursor": "typewriter-cursor 0.8s step-end infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-30px) rotate(3deg)" },
        },
        "typewriter-reveal": {
          "0%": { maxWidth: "0ch" },
          "38%": { maxWidth: "18ch" },
          "48%": { maxWidth: "18ch" },
          "86%": { maxWidth: "0ch" },
          "100%": { maxWidth: "0ch" },
        },
        "typewriter-cursor": {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
