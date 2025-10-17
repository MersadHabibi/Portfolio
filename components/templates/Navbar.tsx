import { FHandlee } from "@/config/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between px-3 py-6 sm:py-10 lg:justify-end">
      <div className="w-full max-lg:hidden"></div>
      <div className="text-center max-lg:shrink-0 lg:w-full">
        <h2
          className={cn("text-border text-xl md:text-4xl", FHandlee.className)}>
          Mersad Habibi
        </h2>
      </div>
      <div className="flex w-full items-center justify-end gap-x-8 text-base/4 md:text-2xl/6">
        <Link href={"#"}>Portfolio</Link>
        <Link href={"#contact"} className="text-underline">
          Contact Me
        </Link>
      </div>
    </nav>
  );
}
