import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],

  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "809px",
      // => @media (min-width: 768px) { ... }

      lg: "1439px",
      // => @media (min-width: 1024px) { ... }

      xl: "1749px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
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
          500: "#05BE53",
          600: "#049A43",
        },
        black: {
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

        // colores:
        "bg-general": "#191919",
      },
      animation: {
        "background-shine": "background-shine 1s linear infinite",
        fadeIn1: "fadeIn 3s ease-in 0s  infinite",
        fadeIn2: "fadeIn 3s ease-in 3s  infinite",
        fadeIn3: "fadeIn 3s ease-in 6s  infinite",
        fadeIn4: "fadeIn 3s ease-in 9s  infinite",
        fadeIn5: "fadeIn 3s ease-in 12s  infinite",
        fadeIn6: "fadeIn 3s ease-in 15s  infinite",
        fadeIn7: "fadeIn 3s ease-in 18s  infinite",

        // magicui
        marquee: "marquee var(--duration) linear infinite",
        "marquee-vertical": "marquee-vertical var(--duration) linear infinite",

        // circle
      },
      keyframes: {
        fadeIn: {
          "50%, 100%": { opacity: "0" },
          "0%, 50%": { opacity: "1" },
        },
        "background-shine": {
          from: {
            backgroundPosition: "0 0",
          },
          to: {
            backgroundPosition: "-200% 0",
          },
        },
        wave: {},
        //magicui
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
        "marquee-vertical": {
          from: { transform: "translateY(0)" },
          to: { transform: "translateY(calc(-100% - var(--gap)))" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
