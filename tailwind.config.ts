import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        about: "url('/profile.png')",
      },
      maxWidth: {
        "8xl": "90rem", // 1440px
        "9xl": "100rem", // 1600px
      },
      colors: {
        green: {
          50: "#E1FEED",
          100: "#C3FDDC",
          200: "#83FCB5",
          300: "#47FA92",
          400: "#0BF96E",
          500: "#05BE53",
          600: "#049A43",
          700: "#037231",
          800: "#024B20",
          900: "#012811",
          950: "#011409",
        },
        black: {
          50: "#E6E6E6",
          100: "#CCCCCC",
          200: "#999999",
          300: "#666666",
          400: "#333333",
        },
        gray: {
          100: "#f5f5f5",
          200: "#e5e5e5",
          300: "#d4d4d4",
          400: "#a3a3a3",
          500: "#737373",
          600: "#525252",
          700: "#404040",
          800: "#262626",
          900: "#171717",
        },
        "color-card": "#191919",
        "color-card-container": "#16171a",
        "color-border": "#232528",
        negro: "#000814",
        "azul-noche": "#001d3d",
        "azul-claro": "#003566",
        amarillo: "#ffc300",
        gris: "#e5e5e5",
      },
      animation: {
        "background-shine": "background-shine 1s linear infinite",
      },
      keyframes: {
        "background-shine": {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
      },
    },
  },
  plugins: [],
};

export default config;
