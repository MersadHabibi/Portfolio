"use client";

import { cn } from "@/lib/utils";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { type ReactNode, useRef } from "react";

/**
 * A card that tilts in 3D toward the cursor and lifts a light-glare highlight.
 */
export default function TiltCard({
  children,
  className,
  intensity = 10,
  glare = true,
}: {
  children: ReactNode;
  className?: string;
  intensity?: number;
  glare?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 260, damping: 22 });
  const mouseYSpring = useSpring(y, { stiffness: 260, damping: 22 });

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    [`${intensity}deg`, `-${intensity}deg`],
  );
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    [`-${intensity}deg`, `${intensity}deg`],
  );

  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(px);
    y.set(py);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className={cn("relative rounded-2xl [perspective:1000px]", className)}>
      {children}
      {glare && (
        <motion.div
          className="pointer-events-none absolute inset-0 z-20 rounded-[inherit] opacity-0 transition-opacity duration-300 [background:radial-gradient(circle_at_var(--gx)_var(--gy),rgba(255,255,255,0.18),transparent_45%)] group-hover:opacity-100"
          style={
            {
              "--gx": glareX,
              "--gy": glareY,
            } as React.CSSProperties
          }
        />
      )}
    </motion.div>
  );
}
