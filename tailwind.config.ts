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
        negro: "#000814",
        "azul-noche": "#001d3d",
        "azul-claro": "#003566",
        amarillo: "#ffc300",
        gris: "#e5e5e5",
      },
    },
  },
  plugins: [],
};

export default config;
