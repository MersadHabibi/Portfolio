import { cn, rand } from "@/lib/utils";
import Image from "next/image";

const skills = [
  "/images/HTML.png",
  "/images/CSS.png",
  "/images/tailwind.png",
  "/images/javascript.png",
  "/images/typescript.png",
  "/svg/react.svg",
  "/images/redux.png",
  "/images/next.png",
  "/images/GraphQL.png",
  "/images/Socket.png",
  "/images/shadcnUI.png",
  "/images/nextUI.png",
];

export default function Skills() {
  return (
    <div className="flex flex-wrap items-center justify-around gap-x-5 gap-y-5 pb-24 min-[400px]:gap-x-9 xs:gap-x-10 md:gap-x-14 lg:gap-x-0 lg:pb-40">
      {skills.map((skill) => {
        const rndNumber = rand(1, 4);

        return (
          <div
            key={skill}
            className={cn(
              "flex size-16 items-center justify-center rounded-md border-[3px] bg-white",
              rndNumber === 1
                ? "border-first-color-200"
                : rndNumber === 2
                  ? "border-second-color-200"
                  : rndNumber === 3
                    ? "border-third-color-200"
                    : "border-fourth-color-200",
            )}>
            <Image
              className="size-full object-contain p-2.5"
              src={skill}
              alt="skills"
              width={100}
              height={100}
            />
          </div>
        );
      })}
    </div>
  );
}
