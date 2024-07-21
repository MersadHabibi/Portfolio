import Arrow from "@/components/modules/Arrow";
import { FHandlee } from "@/config/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-col justify-between gap-y-6 pl-5 pt-32 sm:pl-10 md:gap-y-7 lg:flex-row lg:items-end lg:pl-5 xl:pl-12 xl:pr-8">
      <div className="space-y-6">
        <div className="flex items-start gap-x-6">
          <div className="-mt-3 size-20 md:-mt-5 md:size-28">
            <Image
              className="size-full object-cover"
              src={"/svgs/boy.svg"}
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
        <p className="max-w-md text-[36px] font-semibold leading-[50px] md:text-[64px] md:leading-[77px]">
          I <span className="text-underline">develop</span> top notch websites
        </p>
      </div>
      <div className="space-y-5 md:space-y-8">
        <p className="max-w-[420px] font-normal md:text-2xl">
          I`ll develop your website with best and latest technologies.
        </p>
        <button className="bg-first-text-color px-8 py-2 text-white md:px-12 md:py-4 md:text-2xl">
          contact me
        </button>
      </div>
    </header>
  );
}
