import { FHandlee } from "@/config/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex w-full items-center justify-between py-6 sm:py-10 lg:justify-end">
      <div className="pl-2 sm:pl-10 md:mr-56">
        <h2
          className={cn("text-border text-xl md:text-4xl", FHandlee.className)}>
          Mersad Habibi
        </h2>
      </div>
      <div className="flex items-center gap-x-8 text-base/4 md:text-2xl/6">
        <Link href={"#"}>Portfolio</Link>
        <Link href={"#"} className="text-underline">
          Contact Me
        </Link>
      </div>
    </nav>
  );
}
