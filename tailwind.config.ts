import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      md: "768px",
      lg: "920px",
      xl: "1440px",
    },
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        roboto: ["var(--font-roboto)"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        gray: {
          50: "#F7FAFC",
          100: "#EDF2F7",
          200: "#E2E8F0",
          300: "#CBD5E0",
          400: "#A0AEC0",
          500: "#718096",
          600: "#4A5568",
          700: "#414141",
          800: "#2C2C2C",
          900: "#171923",
        },
        green: {
          50: "#F0FFF4",
          100: "#C6F6D5",
          200: "#80FFD1",
          300: "#00E5B0",
          400: "#48BB78",
          500: "#38A169",
          600: "#25855A",
          700: "#276749",
          800: "#006146",
          900: "#004F38",
        },
      },
    },
  },
  plugins: [],
};
export default config;
