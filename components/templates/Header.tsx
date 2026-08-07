"use client";

import MagneticButton from "@/components/modules/MagneticButton";
import { motion, type Variants } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { FiArrowUpRight, FiDownload } from "react-icons/fi";
import {
  SiGithub,
  SiLinkedin,
  SiTelegram,
  SiInstagram,
} from "react-icons/si";
import WordRotator from "../modules/WordRotator";

const container: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.15 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28, filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] },
  },
};

const socials = [
  { icon: SiGithub, href: "https://github.com/MersadHabibi", label: "GitHub" },
  {
    icon: SiLinkedin,
    href: "https://www.linkedin.com/in/mersad-habibi-b2701b2bb/",
    label: "LinkedIn",
  },
  { icon: SiTelegram, href: "https://t.me/MersadHabibi", label: "Telegram" },
  {
    icon: SiInstagram,
    href: "https://www.instagram.com/mersadhabibii",
    label: "Instagram",
  },
];

export default function Header() {
  return (
    <header
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-32 lg:pt-28">
      <div className="container grid grid-cols-1 items-center gap-14 lg:grid-cols-[1.15fr_0.85fr]">
        {/* Left: intro copy */}
        <motion.div variants={container} initial="hidden" animate="visible">
          <motion.div
            variants={item}
            className="mb-6 inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-gray-300">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-green-400" />
            </span>
            Available for freelance work
          </motion.div>

          <motion.p
            variants={item}
            className="mb-4 font-mono text-sm text-accent-soft sm:text-base">
            {"> Hi, I'm Mersad Habibi"}
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
            I{" "}
            <WordRotator
              words={["develop", "design", "build", "ship"]}
              interval={2600}
              className="text-gradient-accent"
            />
            <br />
            top-notch <span className="text-gradient">websites</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-6 max-w-lg text-lg leading-relaxed text-gray-400">
            Front-end developer crafting fast, accessible, and beautifully
            animated web experiences with React, Next.js, and TypeScript.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center gap-4">
            <MagneticButton href="#work">
              <span className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent to-accent-glow px-7 py-3.5 font-semibold text-white shadow-glow transition-shadow hover:shadow-glow-lg">
                View my work
                <FiArrowUpRight className="text-lg transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </MagneticButton>
            <MagneticButton href="/resume.pdf" download>
              <span className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-7 py-3.5 font-semibold text-white transition-colors hover:bg-white/5">
                <FiDownload /> Resume
              </span>
            </MagneticButton>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-5">
            {socials.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                aria-label={s.label}
                className="text-xl text-gray-500 transition-colors hover:text-accent-soft">
                <s.icon />
              </Link>
            ))}
          </motion.div>
        </motion.div>

        {/* Right: avatar + floating code card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative mx-auto hidden aspect-square w-full max-w-md lg:block">
          {/* Glow ring */}
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-accent/40 via-transparent to-cyan-neon/40 blur-2xl" />
          <div className="absolute inset-10 animate-spin-slow rounded-full border border-dashed border-white/10" />

          {/* Avatar */}
          <div className="absolute inset-14 overflow-hidden rounded-full border border-white/10 shadow-glow-lg">
            <Image
              src="/images/me.jpg"
              alt="Mersad Habibi"
              width={500}
              height={500}
              className="size-full object-cover"
              priority
            />
          </div>

          {/* Floating code snippet */}
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-6 top-6 rounded-xl glass p-4 font-mono text-xs shadow-card">
            <p className="text-pink-neon">
              const <span className="text-cyan-neon">dev</span> = {"{"}
            </p>
            <p className="pl-4 text-gray-300">
              stack: <span className="text-green-400">{"'React'"}</span>,
            </p>
            <p className="pl-4 text-gray-300">
              passion: <span className="text-green-400">{"'∞'"}</span>,
            </p>
            <p className="text-pink-neon">{"}"}</p>
          </motion.div>

          {/* Floating badge */}
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -right-2 bottom-10 flex items-center gap-2 rounded-xl glass px-4 py-3 shadow-card">
            <span className="grid size-8 place-items-center rounded-lg bg-accent/20 text-accent-soft">
              ⚡
            </span>
            <div className="text-xs">
              <p className="font-semibold text-white">Fast & polished</p>
              <p className="text-gray-400">pixel-perfect UI</p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
        <span className="font-mono text-xs text-gray-500">scroll</span>
        <div className="flex h-9 w-5 justify-center rounded-full border border-white/20 p-1">
          <motion.span
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-2 w-1 rounded-full bg-accent-soft"
          />
        </div>
      </motion.div>
    </header>
  );
}
