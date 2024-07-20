import { FHandlee } from "@/config/fonts";
import { cn } from "@/lib/utils";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="flex w-full items-center justify-between py-10 md:justify-end">
      <div className="pl-2 sm:pl-10 md:mr-56">
        <h2
          className={cn("text-border text-xl md:text-4xl", FHandlee.className)}>
          Mersad Habibi
        </h2>
      </div>
      <div className="flex items-center gap-x-8 text-base/4 md:text-2xl/6">
        <Link
          href={"#"}
          className="before:content-[' '] relative before:absolute before:inset-0 before:-z-10 before:mt-auto before:h-1/2 before:w-full before:bg-first-color-100">
          Portfolio
        </Link>
        <Link href={"#"}>Contact Me</Link>
      </div>
    </div>
  );
}
