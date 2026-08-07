"use client";

import { useEffect, useRef } from "react";

export default function MagneticCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorDotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorDot = cursorDotRef.current;
    if (!cursor || !cursorDot) return;

    // Only enable the custom cursor on real pointer devices.
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches) {
      return;
    }

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;
    let visible = false;
    let rafId = 0;

    const show = () => {
      if (visible) return;
      visible = true;
      cursor.style.opacity = "1";
      cursorDot.style.opacity = "1";
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // On the very first movement, snap both cursors to the pointer so they
      // don't slide in from the top-left corner, then reveal them.
      if (!visible) {
        cursorX = dotX = mouseX;
        cursorY = dotY = mouseY;
        show();
      }
    };

    const animate = () => {
      // Smooth follow with spring-like easing
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      dotX += (mouseX - dotX) * 0.5;
      dotY += (mouseY - dotY) * 0.5;

      cursor.style.transform = `translate3d(${cursorX}px, ${cursorY}px, 0) translate(-50%, -50%)`;
      cursorDot.style.transform = `translate3d(${dotX}px, ${dotY}px, 0) translate(-50%, -50%)`;

      rafId = requestAnimationFrame(animate);
    };

    const handleMouseLeave = () => {
      visible = false;
      cursor.style.opacity = "0";
      cursorDot.style.opacity = "0";
    };

    const handleMouseEnter = (e: MouseEvent) => {
      cursorX = dotX = e.clientX;
      cursorY = dotY = e.clientY;
      show();
    };

    // Event delegation so dynamically-added links/buttons (e.g. the mobile
    // menu) also grow the cursor without needing to re-query the DOM.
    const isInteractive = (t: EventTarget | null) =>
      t instanceof Element && !!t.closest("a, button, [data-magnetic]");

    const handleOver = (e: MouseEvent) => {
      if (isInteractive(e.target)) {
        cursor.style.width = "60px";
        cursor.style.height = "60px";
        cursor.style.backgroundColor = "rgba(124, 92, 255, 0.12)";
        cursor.style.borderColor = "rgba(124, 92, 255, 0.6)";
      }
    };

    const handleOut = (e: MouseEvent) => {
      if (isInteractive(e.target) && !isInteractive(e.relatedTarget)) {
        cursor.style.width = "40px";
        cursor.style.height = "40px";
        cursor.style.backgroundColor = "rgba(124, 92, 255, 0.06)";
        cursor.style.borderColor = "rgba(124, 92, 255, 0.3)";
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.documentElement.addEventListener("mouseleave", handleMouseLeave);
    document.documentElement.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);

    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.documentElement.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );
      document.documentElement.removeEventListener(
        "mouseenter",
        handleMouseEnter,
      );
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      cancelAnimationFrame(rafId);
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
