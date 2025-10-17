import { FHandlee } from "@/config/fonts";
import { cn } from "@/lib/utils";
import SectionHeader from "../modules/SectionHeader";

const experiences = [
  {
    id: 1,
    company: "Pardakht Plus",
    position: "Front-End Developer",
    description:
      "Developed websites and internal tools using latest technologies and best practices.",
    date: "November 2024 - Present",
  },
];

export default function Experiences() {
  return (
    <section className="flex flex-col px-3 pb-16 pt-10 lg:flex-row lg:pb-24">
      <SectionHeader className="lg:pt-16" title="Work Experience" />
      <div className="relative w-full lg:m-14 lg:p-16">
        <div className="absolute bottom-0 left-0 top-0 -mt-14 h-[calc(100%+56px*2)] w-[2px] bg-black max-lg:hidden"></div>
        <div className="absolute bottom-0 right-0 top-0 -mt-14 h-[calc(100%+56px*2)] w-[2px] bg-black max-lg:hidden"></div>
        <div className="absolute left-0 right-0 top-0 -ml-14 h-[2px] w-[calc(100%+56px*2)] bg-black max-lg:hidden"></div>
        <div className="absolute bottom-0 left-0 right-0 -ml-14 h-[2px] w-[calc(100%+56px*2)] bg-black max-lg:hidden"></div>
        <div className="space-y-14">
          {experiences.map((experience) => (
            <div
              key={experience.id}
              className="flex items-start gap-x-4 sm:items-center sm:gap-x-8">
              <div
                className={cn(
                  "flex size-10 shrink-0 items-center justify-center rounded-md border-2 border-third-color-200 bg-third-color-100 text-2xl max-sm:mt-1 sm:size-20 sm:text-4xl",
                  FHandlee.className,
                )}>
                <span className="text-stroke-DEFAULT-black text-black">
                  {experience.id}
                </span>
              </div>
              <div>
                <h4 className="text-xl font-normal sm:text-2xl">
                  {experience.position} at{" "}
                  <span className="font-bold">{experience.company}</span>
                </h4>
                <p className="text-base font-normal sm:text-lg">
                  {experience.description}
                </p>
                <p className="mt-0.5 text-sm font-medium text-[#706F6F] sm:text-base">
                  {experience.date}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
