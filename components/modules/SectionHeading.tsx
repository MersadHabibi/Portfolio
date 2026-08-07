"use client";

import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { type ReactNode } from "react";

export default function SectionHeading({
  index,
  eyebrow,
  title,
  description,
  className,
  align = "left",
}: {
  index?: string;
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  className?: string;
  align?: "left" | "center";
}) {
  return (
    <div
      className={cn(
        "flex flex-col gap-4",
        align === "center" && "items-center text-center",
        className,
      )}>
      {(eyebrow || index) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 font-mono text-sm text-accent-soft">
          {index && <span className="text-accent">{index}</span>}
          <span className="h-px w-8 bg-gradient-to-r from-accent to-transparent" />
          {eyebrow && <span className="tracking-wider">{eyebrow}</span>}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.05 }}
        className="font-display text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
        {title}
      </motion.h2>
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className={cn(
            "max-w-xl text-base text-gray-400 sm:text-lg",
            align === "center" && "mx-auto",
          )}>
          {description}
        </motion.p>
      )}
    </div>
  );
}
