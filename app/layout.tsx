import type { Metadata } from "next";
import "./globals.css";
import { cn } from "@/lib/utils";
import { FInter } from "@/config/fonts";
import Navbar from "@/components/templates/Navbar/Navbart";

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
      <body className={cn("font-sans font-medium", FInter.className)}>
        <div className="xs:border-l-[3px] xs:px-0 container border-black px-3">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
