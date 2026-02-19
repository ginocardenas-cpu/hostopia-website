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
          navy: "#060d2e",
          indigo: "#4338ca",
          violet: "#6d28d9",
          cyan: "#06b6d4",
          orange: "#f97316",
          "orange-light": "#fb923c",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, #060d2e 0%, #1e1b4b 40%, #312e81 70%, #4c1d95 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(67,56,202,0.1) 0%, rgba(109,40,217,0.1) 100%)",
        "orange-gradient":
          "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
        "cyan-gradient":
          "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
      },
      animation: {
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "fade-in": "fadeIn 0.8s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
