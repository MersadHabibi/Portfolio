import { FInter } from "@/config/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import "./globals.css";

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
          "font-sans font-medium text-first-text-color",
          FInter.className,
        )}>
        <div className="sm:px-2">
          <div className="container border-black px-3 xs:border-l-[3px] xs:px-0">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
