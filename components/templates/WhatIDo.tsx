import { FHandlee } from "@/config/fonts";
import { cn } from "@/lib/utils";
import Arrow from "../modules/Arrow";
import Image from "next/image";

export default function WhatIDo() {
  return (
    <div className="pb-6 lg:pb-48">
      <div className="space-y-8 pl-2 lg:pl-16">
        <h3
          className={cn(
            "text-border w-fit bg-first-color-100 text-xl font-normal md:text-3xl/10",
            FHandlee.className,
          )}>
          What i do?
        </h3>
        <Arrow className="w-16 -rotate-[80deg]" />
      </div>
      <div className="flex flex-col justify-between gap-x-6 gap-y-10 px-5 pt-10 sm:px-20 lg:flex-row lg:px-0 xl:gap-x-8 2xl:gap-x-16">
        <div className="w-full">
          <div className="relative flex h-96 -rotate-3 flex-col items-start justify-center gap-y-6 rounded-md border-4 border-third-color-200 bg-third-color-100 pl-5 pr-4 shadow-lg shadow-third-color-100/30 xs:pl-10 sm:h-[500px] sm:gap-y-10 md:h-[550px] lg:h-[400px] xl:h-[500px]">
            <p
              className={cn(
                "text-border absolute -right-7 top-1/4 w-fit rotate-3 bg-second-color-100 text-xl font-normal md:text-3xl/10",
                FHandlee.className,
              )}>
              React/Next
            </p>
            <div className="size-12">
              <Image
                className="size-full overflow-visible object-cover"
                src={"/svg/pen.svg"}
                alt="Pen"
                width={100}
                height={100}
              />
            </div>
            <p className="text-2xl font-medium text-black sm:text-4xl/10">
              Develop Front-end Logic
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="relative flex h-96 rotate-3 flex-col items-start justify-center gap-y-6 rounded-md border-4 border-second-color-200 bg-second-color-100 pl-5 pr-4 shadow-lg shadow-second-color-100/30 xs:pl-10 sm:h-[500px] sm:gap-y-10 md:h-[550px] lg:h-[400px] xl:h-[500px]">
            <p
              className={cn(
                "text-border absolute -top-7 right-7 w-fit -rotate-3 bg-first-color-100 text-xl font-normal md:text-3xl/10",
                FHandlee.className,
              )}>
              Tailwind
            </p>
            <div className="size-14 sm:size-16">
              <Image
                className="size-full -rotate-3 overflow-visible object-cover"
                src={"/svg/eye.svg"}
                alt="Pen"
                width={100}
                height={100}
              />
            </div>
            <p className="text-2xl font-medium text-black sm:text-4xl/10">
              Design Website UI
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="relative flex h-96 -rotate-3 flex-col items-start justify-center gap-y-6 rounded-md border-4 border-first-color-200 bg-first-color-100 pl-5 pr-4 shadow-lg shadow-first-color-100/30 xs:pl-10 sm:h-[500px] sm:gap-y-10 md:h-[550px] lg:h-[400px] xl:h-[500px]">
            <p
              className={cn(
                "text-border absolute -right-7 top-1/4 w-fit rotate-3 bg-third-color-100 text-xl font-normal md:text-3xl/10",
                FHandlee.className,
              )}>
              Console.log
            </p>
            <div className="size-16">
              <Image
                className="size-full overflow-visible object-cover"
                src={"/svg/star.svg"}
                alt="star"
                width={100}
                height={100}
              />
            </div>
            <p className="text-2xl font-medium text-black sm:text-4xl/10">
              Debug Website UI & Logic
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
