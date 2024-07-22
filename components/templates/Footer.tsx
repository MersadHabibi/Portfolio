import { FHandlee } from "@/config/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

const Links = [
  {
    value: "Github",
    href: "https://github.com/MersadHabibi",
  },
  {
    value: "Instagram",
    href: "https://www.instagram.com/mersadhabibii?igsh=MTgzMnFmcndlNzZpdw%3D%3D",
  },
  {
    value: "LinkedIn",
    href: "https://www.linkedin.com/in/mersad-habibi-b2701b2bb/",
  },
  {
    value: "Telegram",
    href: "https://t.me/MersadHabibi",
  },
];

export default function Footer() {
  return (
    <div className="border-t-[3px] border-black">
      <div className="container flex flex-col justify-between gap-y-6 border-black px-5 py-8 xs:border-l-[3px] sm:gap-y-8 sm:px-8 sm:py-12 lg:flex-row lg:items-center">
        <h4
          className={cn("text-border text-xl sm:text-4xl", FHandlee.className)}>
          Mersad Habibi
        </h4>
        <div className="flex flex-col gap-4 sm:gap-7 lg:items-center">
          <div className="flex items-center gap-x-5 sm:gap-x-16">
            {Links.map((link) => (
              <Link
                key={link.value}
                href={link.href}
                className={cn(
                  "text-border-white bg-first-text-color pt-1 text-white sm:text-3xl/8",
                  FHandlee.className,
                )}>
                {link.value}
              </Link>
            ))}
          </div>
          <p className="font-normal sm:text-2xl">Copyright. Portfolio 2024</p>
        </div>
      </div>
    </div>
  );
}
