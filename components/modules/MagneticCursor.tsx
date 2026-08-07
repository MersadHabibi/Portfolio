"use client";

import { useEffect, useRef } from "react";

export default function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Smooth follow with spring physics
      const dx = mouseX - cursorX;
      const dy = mouseY - cursorY;
      cursorX += dx * 0.15;
      cursorY += dy * 0.15;

      const dotDx = mouseX - dotX;
      const dotDy = mouseY - dotY;
      dotX += dotDx * 0.5;
      dotY += dotDy * 0.5;

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      cursorDot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;

      requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = "1";
      cursorDot.style.opacity = "1";
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = "0";
      cursorDot.style.opacity = "0";
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.body.addEventListener("mouseenter", handleMouseEnter);
    document.body.addEventListener("mouseleave", handleMouseLeave);

    const animationFrame = requestAnimationFrame(animate);

    // Interactive elements scale the cursor
    const interactiveElements = document.querySelectorAll(
      "a, button, [data-magnetic]",
    );

    const handleInteractiveEnter = () => {
      cursor.style.width = "60px";
      cursor.style.height = "60px";
      cursor.style.backgroundColor = "rgba(124, 92, 255, 0.12)";
      cursor.style.borderColor = "rgba(124, 92, 255, 0.6)";
    };

    const handleInteractiveLeave = () => {
      cursor.style.width = "40px";
      cursor.style.height = "40px";
      cursor.style.backgroundColor = "rgba(124, 92, 255, 0.06)";
      cursor.style.borderColor = "rgba(124, 92, 255, 0.3)";
    };

    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleInteractiveEnter);
      el.addEventListener("mouseleave", handleInteractiveLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.removeEventListener("mouseenter", handleMouseEnter);
      document.body.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrame);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleInteractiveEnter);
        el.removeEventListener("mouseleave", handleInteractiveLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={cursorRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden size-10 rounded-full border border-accent/30 bg-accent/5 opacity-0 backdrop-blur-sm transition-[width,height,background-color,border-color] duration-300 ease-out md:block"
        style={{ mixBlendMode: "screen" }}
      />
      <div
        ref={cursorDotRef}
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden size-1.5 rounded-full bg-accent opacity-0 md:block"
      />
    </>
  );
}
