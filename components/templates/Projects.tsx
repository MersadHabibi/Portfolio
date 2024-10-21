import { FHandlee } from "@/config/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import SectionHeader from "../modules/SectionHeader";

const projects = [
  {
    id: 1,
    title: "Next-Ecommerce",
    image: "/images/next-ecommerce.png",
    buttonStyle:
      "bg-first-color-200 border-[2.5px] border-first-color-300 shadow-lg shadow-first-color-100/40",
    href: "https://next-ecommerce-murex-mu.vercel.app",
    stack: "Full-Stack",
  },
  {
    id: 3,
    title: "Arya Shop",
    image: "/images/arya-shop.png",
    buttonStyle:
      "bg-fourth-color-200 border-[2.5px] border-fourth-color-300 shadow-lg shadow-fourth-color-100/40",
    href: "https://arya-company.com/",
    stack: "Front-End",
  },
  {
    id: 2,
    title: "sabzlearn.ir clone",
    image: "/images/sabzlearn.png",
    buttonStyle:
      "bg-second-color-200 border-[2.5px] border-second-color-300 shadow-lg shadow-second-color-100/40",
    href: "https://github.com/MersadHabibi/Sabzlearn",
    stack: "Front-End",
  },
  {
    id: 4,
    title: "Wiki Sefaresh",
    image: "/images/wiki-sefaresh.png",
    buttonStyle:
      "bg-third-color-200 border-[2.5px] border-third-color-300 shadow-lg shadow-third-color-100/40",
    href: "https://www.wiki-sefaresh.ir",
    stack: "Full-Stack",
  },
];

export default function Projects() {
  return (
    <section className="flex flex-col px-2 pb-16 lg:flex-row lg:pb-24">
      <SectionHeader title="Featured Projects" />
      <div className="grid w-full grid-cols-1 grid-rows-2 gap-4 sm:grid-cols-2 sm:gap-3 md:gap-6 xl:gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="grid space-y-3 rounded-md border-[3px] border-black bg-white p-5 sm:space-y-4 sm:p-3 xl:space-y-3 xl:p-5">
            <div className="aspect-video overflow-hidden rounded-md sm:aspect-[7/4]">
              <Image
                className="top-0 size-full rounded-md object-cover object-top sm:rounded-none"
                src={project.image}
                alt="next-ecommerce"
                width={800}
                height={800}
              />
            </div>
            <div>
              <div className="mb-4">
                <p
                  className={cn(
                    "!h-fit !w-fit rounded-md px-3 py-1 text-xs font-semibold text-gray-900",
                    project.buttonStyle,
                  )}>
                  {project.stack}
                </p>
              </div>
              <div className="flex items-center justify-between gap-x-8 gap-y-2 sm:flex-wrap xl:flex-nowrap">
                <p
                  className={cn(
                    "text-border text-xl font-normal leading-7 sm:text-2xl xl:text-[28px]",
                    FHandlee.className,
                  )}>
                  {project.title}
                </p>
                <Link href={project.href} className="ml-auto shrink-0">
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
          </div>
        ))}
      </div>
    </section>
  );
}
