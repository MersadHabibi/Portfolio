"use client";

import MagneticButton from "@/components/modules/MagneticButton";
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about", id: "about" },
  { label: "Services", href: "#work", id: "work" },
  { label: "Work", href: "#projects", id: "projects" },
  { label: "Experience", href: "#experience", id: "experience" },
  { label: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const { scrollY, scrollYProgress } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" },
    );

    links.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-500",
          scrolled ? "py-3" : "py-5",
        )}>
        <nav
          className={cn(
            "container flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 sm:px-6",
            scrolled
              ? "glass shadow-card"
              : "border border-transparent bg-transparent",
          )}>
          <Link href="#home" className="group flex items-center gap-2">
            <span className="grid size-9 place-items-center rounded-lg bg-gradient-to-br from-accent to-cyan-neon font-display text-sm font-bold text-white shadow-glow">
              MH
            </span>
            <span className="hidden font-display text-lg font-semibold text-white sm:block">
              Mersad<span className="text-accent">.</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative rounded-lg px-4 py-2 text-sm font-medium transition-colors",
                  active === link.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white",
                )}>
                {active === link.id && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-lg bg-white/10"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <MagneticButton
              href="/resume.pdf"
              download
              className="hidden sm:inline-flex">
              <span className="rounded-xl bg-white px-5 py-2 text-sm font-semibold text-ink-900 transition-colors hover:bg-accent hover:text-white">
                Resume
              </span>
            </MagneticButton>
            <button
              aria-label="Toggle menu"
              onClick={() => setMenuOpen((v) => !v)}
              className="glass grid size-10 place-items-center rounded-lg lg:hidden">
              <div className="space-y-1.5">
                <span
                  className={cn(
                    "block h-0.5 w-5 bg-white transition-all",
                    menuOpen && "translate-y-2 rotate-45",
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-5 bg-white transition-all",
                    menuOpen && "opacity-0",
                  )}
                />
                <span
                  className={cn(
                    "block h-0.5 w-5 bg-white transition-all",
                    menuOpen && "-translate-y-2 -rotate-45",
                  )}
                />
              </div>
            </button>
          </div>
        </nav>

        {/* Scroll progress bar */}
        <motion.div
          style={{ scaleX: scrollYProgress }}
          className="mx-auto mt-2 h-0.5 w-[89%] origin-left rounded-full bg-gradient-to-r from-accent via-cyan-neon to-pink-neon"
        />
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 lg:hidden">
            <div
              className="absolute inset-0 bg-ink-950/80 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 32 }}
              className="absolute right-0 top-0 flex h-full w-72 flex-col gap-2 border-l border-white/10 bg-ink-800/95 p-8 pt-28">
              {links.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-xl px-4 py-3 text-lg font-medium text-gray-300 transition-colors hover:bg-white/5 hover:text-white">
                  {link.label}
                </Link>
              ))}
              <Link
                href="/resume.pdf"
                download
                className="mt-4 rounded-xl bg-accent px-4 py-3 text-center font-semibold text-white">
                Resume
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
