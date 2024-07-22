import { FInter } from "@/config/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/templates/Footer";

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
      <body
        className={cn(
          "!w-svw overflow-x-hidden font-sans font-medium text-first-text-color",
          FInter.className,
        )}>
        <div className="container border-black px-3 xs:border-l-[3px] xs:px-3">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
