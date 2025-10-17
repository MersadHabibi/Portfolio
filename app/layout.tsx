import Footer from "@/components/templates/Footer";
import { FInter } from "@/config/fonts";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Head from "next/head";
import DotGrid from "@/components/modules/animation/DotGrid";

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
        {/* <div className="sticky top-0 -z-10 h-0">
          <div className="-z-10 h-dvh w-full md:container">
            <DotGrid
              dotSize={2}
              gap={12}
              baseColor="#cccccc"
              activeColor="#cccccc"
              proximity={120}
              shockRadius={250}
              shockStrength={5}
              resistance={750}
              returnDuration={1.5}
            />
          </div>
        </div> */}
        <div className="container">
          <div className="border-black xs:border-l-[3px]">{children}</div>
        </div>
        <Footer />
        <Toaster />
      </body>
    </html>
  );
}
