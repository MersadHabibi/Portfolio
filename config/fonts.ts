import { Inter } from "next/font/google";
import { Handlee } from "next/font/google";

export const FHandlee = Handlee({
  subsets: ["latin"],
  weight: "400",
  // display: "swap",
});

export const FInter = Inter({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});
