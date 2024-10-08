import Arrow from "@/components/modules/Arrow";
import { FHandlee } from "@/config/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="flex flex-col justify-between gap-y-4 pb-52 pl-5 pt-36 sm:pb-28 sm:pl-5 sm:pt-28 md:gap-y-7 lg:flex-row lg:items-end lg:pb-44 lg:pl-5 xl:pl-8 xl:pr-5">
      <div className="space-y-4">
        <div className="flex items-start gap-x-3 md:gap-x-6">
          <div className="-mt-3 size-20 overflow-hidden rounded-full bg-second-color-100 md:-mt-5 md:size-28">
            <Image
              className="size-full object-cover"
              src={"/images/me.jpg"}
              alt="mersadhabibi"
              width={300}
              height={300}
            />
          </div>
          <Arrow className="mt-4 w-14 md:w-20" />
          <p
            className={cn(
              "text-border -rotate-6 bg-first-color-100 text-xl font-normal md:text-3xl/10",
              FHandlee.className,
            )}>
            Mersad
          </p>
        </div>
        <h1 className="text-[36px] font-semibold leading-[50px] md:max-w-lg md:text-[64px] md:leading-[77px]">
          I <span className="text-underline">develop</span> top notch websites
        </h1>
      </div>
      <div className="space-y-5 md:space-y-8">
        <h2 className="max-w-[420px] font-normal md:text-2xl">
          I`ll develop your website with best and latest technologies.
        </h2>
        <Link
          href={"/resume.pdf"}
          className="inline-block bg-first-text-color px-8 py-2 text-white shadow-lg shadow-black/5 md:px-12 md:py-4 md:text-2xl"
          download={true}>
          Resume
        </Link>
      </div>
    </header>
  );
}
