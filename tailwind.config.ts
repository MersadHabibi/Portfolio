import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    screens: {
      "2xl": "1440px",
      xl: "1280px",
      lg: "1024px",
      md: "768px",
      sm: "640px",
      xs: "480px",
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        "first-color": {
          100: "#FFC9F0",
          200: "#F384D4",
          300: "#DB4A90",
        },
        "second-color": {
          100: "#9DDCFF",
          200: "#5AB5E8",
          300: "#1C6AB1",
        },
        "third-color": {
          100: "#FFE68C",
          200: "#EECD56",
          300: "#BB9C2A",
        },
        "fourth-color": {
          100: "#CFFFC2",
          200: "#7CF072",
          300: "#4ED543",
        },
        "first-text-color": "#0c0c0c",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
      },
      animation: {
        shine: "shine 5s linear infinite",
      },
      textStrokeWidth: {
        sm: "1px",
        DEFAULT: "2px",
        lg: "4px",
      },
      textStrokeColor: {
        black: "#000",
        white: "#fff",
      },
    },
  },
  plugins: [
    function ({ addUtilities, theme }: { addUtilities: any; theme: any }) {
      const widths: Record<string, string> = theme("textStrokeWidth");
      const colors: Record<string, string> = theme("textStrokeColor");
      const newUtilities: Record<string, Record<string, string>> = {};

      Object.entries(widths).forEach(([name, width]) => {
        Object.entries(colors).forEach(([colorName, colorValue]) => {
          newUtilities[`.text-stroke-${name}-${colorName}` as string] = {
            "-webkit-text-stroke-width": width,
            "-webkit-text-stroke-color": colorValue,
          };
        });
      });

      addUtilities(newUtilities);
    },
  ],
} satisfies Config;

export default config;
