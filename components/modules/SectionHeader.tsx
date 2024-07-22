import { FHandlee } from "@/config/fonts";
import { cn } from "@/lib/utils";
import Arrow from "./Arrow";

export default function SectionHeader({
  title,
  className,
  description,
  titleClassName,
}: {
  title: string;
  description?: React.ReactNode;
  className?: string;
  titleClassName?: string;
}) {
  return (
    <div
      className={cn(
        "mb-10 flex shrink-0 justify-start pr-4 lg:w-72 lg:pt-36 xl:w-80",
        className,
      )}>
      <div className="flex w-fit flex-col gap-y-10 lg:items-end">
        <h3
          className={cn(
            "text-border w-fit bg-first-color-100 text-xl font-normal shadow-md shadow-first-color-100/20 md:text-3xl/10",
            FHandlee.className,
            titleClassName,
          )}>
          {title}
        </h3>
        <Arrow className="-mr-2 w-16 -rotate-[100deg] lg:-rotate-[125deg]" />
        {description ? (
          <p className="text-2xl/8 font-normal">{description}</p>
        ) : null}
      </div>
    </div>
  );
}
