import Footer from "@/components/templates/Footer";
import { FInter, FDisplay, FMono } from "@/config/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import MagneticCursor from "@/components/modules/MagneticCursor";
import AnimatedBackground from "@/components/modules/AnimatedBackground";

export const metadata: Metadata = {
  title: "Mersad Habibi — Software Engineer",
  description: "Software engineer building web applications across the front end and back end and designing products.",
  icons: {
    icon: "/svg/avatar.svg",
    href: "/svg/avatar.svg",
  },
  openGraph: {
    title: "Mersad Habibi — Software Engineer",
    description: "Software engineer building web applications and designing products",
    images: ["/images/me.jpg"],
  },
  keywords: [
    "mersad habibi",
    "software engineer",
    "react developer",
    "nextjs developer",
    "مرصاد حبیبی",
  ],
  authors: [{ name: "Mersad Habibi" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={cn(FInter.variable, FDisplay.variable, FMono.variable)}>
      <body className="overflow-x-hidden bg-ink-900 font-sans text-gray-100 antialiased">
        <AnimatedBackground />
        <MagneticCursor />
        {children}
        <Footer />
        <Toaster
          position="bottom-right"
          toastOptions={{
            style: {
              background: "rgba(17, 17, 25, 0.95)",
              color: "#e6e6ee",
              border: "1px solid rgba(124, 92, 255, 0.3)",
              backdropFilter: "blur(12px)",
            },
          }}
        />
      </body>
    </html>
  );
}
