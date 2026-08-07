"use client";

import { useEffect, useRef } from "react";

/**
 * Jank-free single-word rotator for hero headings.
 *
 * How it stays smooth:
 * - Words are stacked in a vertical track; swapping is a CSS transition on
 *   `transform` (translateY), which runs entirely on the compositor — no
 *   per-frame JS, no React re-render, no layout reflow.
 * - Width is reserved by the invisible widest word, so the surrounding
 *   heading never shifts when the word changes.
 * - The gradient class is applied to each word itself, NOT the container —
 *   `background-clip: text` only clips to an element's own text, so putting
 *   it on the wrapper would make the words invisible.
 * - Respects `prefers-reduced-motion`.
 */
export default function WordRotator({
  words,
  interval = 2600,
  className,
}: {
  words: string[];
  interval?: number;
  className?: string;
}) {
  const trackRef = useRef<HTMLSpanElement>(null);
  const indexRef = useRef(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.transition = "none";
      return;
    }

    const id = setInterval(() => {
      indexRef.current = (indexRef.current + 1) % words.length;
      el.style.transform = `translateY(${-indexRef.current * 100}%)`;
    }, interval);

    return () => clearInterval(id);
  }, [words.length, interval]);

  const widest = words.reduce((a, b) => (b.length > a.length ? b : a), "");

  return (
    <span className="relative inline-block overflow-hidden align-bottom">
      {/* Invisible spacer reserves the widest word's width */}
      <span aria-hidden className="invisible">
        {widest}
      </span>
      <span
        ref={trackRef}
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          transform: "translateY(0)",
          transition: "transform 550ms cubic-bezier(0.22, 1, 0.36, 1)",
          willChange: "transform",
        }}>
        {words.map((word) => (
          <span
            key={word}
            className={`block h-full shrink-0 whitespace-nowrap ${className ?? ""}`}>
            {word}
          </span>
        ))}
      </span>
      <span className="sr-only">{words[0]}</span>
    </span>
  );
}
