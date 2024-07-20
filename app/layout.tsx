import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { FInter } from "@/config/fonts";

export const metadata: Metadata = {
  title: "Portfolio | Mersad Habibi",
  description: "Mersad Habibi portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("font-sans", FInter.className)}>{children}</body>
    </html>
  );
}
