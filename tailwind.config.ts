import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "warm-beige": "#F4EDE5",
        "warm-cream": "#EFE7DD",
        "warm-sand": "#FDF8F3",
        "warm-brown": "#3A2F2F",
        "warm-taupe": "#6A5C56",
        "warm-sage": "#8A9C72",
        "warm-terra": "#D57A54",
      },
      fontFamily: {
        heading: ["Playfair Display", "Georgia", "serif"],
        body: ["Inter", "Helvetica Neue", "Arial", "sans-serif"],
      },
      boxShadow: {
        "warm-card": "0 20px 45px rgba(116, 88, 67, 0.18)",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(135deg, #E8D2C0, #C9A88A)",
      },
    },
  },
  plugins: [],
};

export default config;
