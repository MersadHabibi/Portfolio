import Footer from "@/components/templates/Footer";
import { FInter } from "@/config/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Head from "next/head";

export const metadata: Metadata = {
  title: "Portfolio | Mersad Habibi",
  description: "Mersad Habibi portfolio",
  icons: {
    icon: "/svg/avatar.svg",
    href: "/svg/avatar.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>Portfolio | Mersad Habibi</title>
        <meta
          name="description"
          content="mersad habibi portfolio | مرصاد حبیبی"
        />
        <meta property="og:title" content="mersad habibi portfolio" />
        <meta property="og:description" content="mersad habibi portfolio" />
        <meta property="og:image" content="/images/me.jpg" />

        <meta
          name="keywords"
          content="mersad, habibi, mersadhabibi, mersad habibi, مرصاد حبیبی, مرصاد, حبیبی"
        />
        <meta name="author" content="مرصاد حبیبی" />

        <script type="application/ld+json">
          {JSON.stringify({
            "@type": "Portfolio",
            headline: "mersad habibi",
            author: {
              "@type": "Person",
              name: "mersad habibi",
            },
            // Additional structured data properties...
          })}
        </script>
      </Head>
      <body
        className={cn(
          "overflow-x-hidden font-sans font-medium text-first-text-color",
          FInter.className,
        )}>
        <div className="container border-black px-3 xs:border-l-[3px] xs:px-3">
          {children}
        </div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
