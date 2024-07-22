import { FHandlee } from "@/config/fonts";
import SectionHeader from "../modules/SectionHeader";
import { cn } from "@/lib/utils";

export default function Contact() {
  return (
    <section className="flex flex-col gap-x-20 px-2 pb-24 lg:flex-row lg:justify-between lg:pb-48 xl:gap-x-32 2xl:gap-x-60">
      <SectionHeader
        title="Contact Here"
        description={
          <>
            Have a project idea? <br /> just say me Hi.
          </>
        }
        className="!pt-4"
        titleClassName="mr-auto"
      />
      <div className="w-full space-y-10 sm:space-y-14 lg:pr-10">
        <div className="flex">
          <h3
            className={cn(
              "text-border w-fit shrink-0 border-l-2 border-black bg-first-color-100 px-1 text-xl font-normal shadow-md shadow-first-color-100/50 sm:text-3xl/10",
              FHandlee.className,
            )}>
            Name
          </h3>
          <input
            type="text"
            placeholder="Your name ..."
            className={cn(
              "w-full border-b border-black bg-transparent px-3 outline-none sm:px-6 sm:text-[28px]",
              FHandlee.className,
            )}
          />
        </div>
        <div className="flex">
          <h3
            className={cn(
              "text-border w-fit shrink-0 border-l-2 border-black bg-third-color-100 px-1 text-xl font-normal shadow-md shadow-third-color-100/40 sm:text-3xl/10",
              FHandlee.className,
            )}>
            Your Email
          </h3>
          <input
            type="text"
            placeholder="Your email ..."
            className={cn(
              "w-full border-b border-black bg-transparent px-3 outline-none sm:px-6 sm:text-[28px]",
              FHandlee.className,
            )}
          />
        </div>
        <div className="flex">
          <h3
            className={cn(
              "text-border w-fit shrink-0 border-l-2 border-black bg-second-color-100 px-1 text-xl font-normal shadow-md shadow-second-color-100/30 sm:text-3xl/10",
              FHandlee.className,
            )}>
            About Project
          </h3>
          <input
            type="text"
            placeholder="Description ..."
            className={cn(
              "w-full border-b border-black bg-transparent px-3 outline-none sm:px-6 sm:text-[28px]",
              FHandlee.className,
            )}
          />
        </div>
        <button className="ml-auto block bg-first-text-color px-7 py-2.5 font-semibold text-white sm:px-10 sm:py-[15px] sm:text-2xl">
          Send Here
        </button>
      </div>
    </section>
  );
}
