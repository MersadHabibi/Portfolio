import { Inter, JetBrains_Mono, Space_Grotesk, Handlee } from "next/font/google";

export const FInter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
  variable: "--font-inter",
});

export const FMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-mono",
});

export const FDisplay = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-display",
});

// Kept for backwards compatibility with any legacy usage.
export const FHandlee = Handlee({
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});
