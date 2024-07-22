import { FHandlee } from "@/config/fonts";
import { cn } from "@/lib/utils";
import Arrow from "../modules/Arrow";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../modules/SectionHeader";

const projects = [
  {
    id: 1,
    title: "E-commerce website for shoes shop",
    image: "/images/next-ecommerce.png",
    buttonStyle:
      "bg-first-color-200 border-[2.5px] border-first-color-300 shadow-lg shadow-first-color-100/70",
    href: "#",
  },
  {
    id: 2,
    title: "E-commerce website for shoes shop",
    image: "/images/next-ecommerce.png",
    buttonStyle:
      "bg-second-color-200 border-[2.5px] border-second-color-300 shadow-lg shadow-second-color-100/70",
    href: "#",
  },
  {
    id: 3,
    title: "E-commerce website for shoes shop",
    image: "/images/next-ecommerce.png",
    buttonStyle:
      "bg-fourth-color-200 border-[2.5px] border-fourth-color-300 shadow-lg shadow-fourth-color-100/70",
    href: "#",
  },
];

export default function Projects() {
  return (
    <section className="flex flex-col px-2 pb-28 lg:flex-row lg:pb-48">
      <SectionHeader title="Featured Projects" />
      <div className="grid w-full grid-cols-1 grid-rows-2 gap-4 sm:grid-cols-2 sm:gap-3 md:gap-6 xl:gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="space-y-5 rounded-md border-[3px] border-black bg-white p-5 sm:space-y-4 sm:p-3 xl:space-y-5 xl:p-5">
            <div className="aspect-video sm:aspect-[4/3]">
              <Image
                className="size-full rounded-md object-cover sm:rounded-none"
                src={project.image}
                alt="next-ecommerce"
                width={1000}
                height={1000}
              />
            </div>
            <div className="flex items-end justify-between gap-x-4 gap-y-2 sm:flex-wrap sm:py-3 xl:flex-nowrap">
              <p
                className={cn(
                  "text-border max-w-80 text-xl font-normal leading-7 sm:text-2xl xl:text-[28px]",
                  FHandlee.className,
                )}>
                {project.title}
              </p>
              <Link href={project.href} className="ml-auto">
                <button
                  className={cn(
                    "project-button-radiuses px-6 py-1.5 text-sm text-white sm:px-8 sm:text-lg",
                    project.buttonStyle,
                  )}>
                  View
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
