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
      padding: {
        DEFAULT: "1.25rem",
        sm: "2rem",
        lg: "3rem",
        xl: "4rem",
      },
      screens: {
        "2xl": "1360px",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "var(--font-inter)", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      colors: {
        // Dark surface scale
        ink: {
          950: "#050507",
          900: "#0a0a0f",
          800: "#111119",
          700: "#181822",
          600: "#22222e",
          500: "#2e2e3d",
        },
        // Neon accents
        accent: {
          DEFAULT: "#7c5cff",
          soft: "#a78bfa",
          glow: "#8b5cf6",
        },
        cyan: {
          neon: "#22d3ee",
        },
        pink: {
          neon: "#f472b6",
        },
        // Legacy palette (kept so existing utilities compile)
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
        "grid-lines":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(124,92,255,0.5)",
        "glow-lg": "0 0 80px -20px rgba(124,92,255,0.55)",
        "glow-cyan": "0 0 40px -10px rgba(34,211,238,0.5)",
        card: "0 10px 40px -12px rgba(0,0,0,0.6)",
      },
      keyframes: {
        shine: {
          "0%": { "background-position": "100%" },
          "100%": { "background-position": "-100%" },
        },
        "gradient-move": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-24px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.9" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "spin-slow": {
          to: { transform: "rotate(360deg)" },
        },
      },
      animation: {
        shine: "shine 5s linear infinite",
        "gradient-move": "gradient-move 8s ease infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float-slow 9s ease-in-out infinite",
        "pulse-glow": "pulse-glow 4s ease-in-out infinite",
        marquee: "marquee 40s linear infinite",
        blink: "blink 1.1s step-end infinite",
        "spin-slow": "spin-slow 18s linear infinite",
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
