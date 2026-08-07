"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring } from "motion/react";
import Link from "next/link";
import { type ReactNode, useRef } from "react";

/**
 * A button/link that is magnetically pulled toward the cursor while hovered.
 */
export default function MagneticButton({
  children,
  className,
  href,
  onClick,
  download,
  target,
  strength = 0.4,
  type = "button",
  disabled,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
  download?: boolean;
  target?: string;
  strength?: number;
  type?: "button" | "submit";
  disabled?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 200, damping: 15 });
  const springY = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const relX = e.clientX - (rect.left + rect.width / 2);
    const relY = e.clientY - (rect.top + rect.height / 2);
    x.set(relX * strength);
    y.set(relY * strength);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const inner = (
    <motion.div
      ref={ref}
      data-magnetic
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={cn("inline-flex", className)}>
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <Link href={href} download={download} target={target}>
        {inner}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled}>
      {inner}
    </button>
  );
}
