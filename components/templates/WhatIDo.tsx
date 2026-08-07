"use client";

import { motion } from "motion/react";
import { FiArrowUpRight } from "react-icons/fi";
import {
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";
import SectionHeading from "../modules/SectionHeading";
import { RevealGroup, RevealItem } from "../modules/Reveal";

const services = [
  {
    icon: SiReact,
    title: "Front-End Development",
    description:
      "Pixel-perfect, accessible interfaces built with React and modern tooling.",
    tint: "from-accent/25",
    iconColor: "text-accent-soft",
    chip: "React · Next.js",
  },
  {
    icon: SiNextdotjs,
    title: "Performance & UX",
    description:
      "Fast-loading, buttery-smooth experiences scored by real metrics, not guesses.",
    tint: "from-cyan-neon/20",
    iconColor: "text-cyan-neon",
    chip: "Lighthouse 90+",
  },
  {
    icon: SiTypescript,
    title: "Type-Safe Engineering",
    description:
      "Reliable, maintainable codebases with TypeScript, tested and shipped with care.",
    tint: "from-pink-neon/20",
    iconColor: "text-pink-neon",
    chip: "TypeScript · GraphQL",
  },
];

export default function WhatIDo() {
  return (
    <section id="work" className="scroll-mt-24 py-24 lg:py-32">
      <div className="container">
        <SectionHeading
          index="02"
          eyebrow="WHAT I DO"
          title={
            <>
              Turning ideas into
              <br />
              <span className="text-gradient">digital experiences</span>
            </>
          }
          description="I focus on the intersection of design and engineering to build products people love to use."
          className="mb-16"
        />

        <RevealGroup className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service) => (
            <RevealItem key={service.title}>
              <motion.div
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative h-full overflow-hidden rounded-2xl glass p-7">
                {/* Gradient tint on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.tint} to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                />
                <div className="relative flex h-full flex-col gap-5">
                  <div className="flex items-start justify-between">
                    <span
                      className={`grid size-12 place-items-center rounded-xl bg-white/5 text-2xl ${service.iconColor} transition-transform duration-500 group-hover:scale-110`}>
                      <service.icon />
                    </span>
                    <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-[11px] text-gray-400">
                      {service.chip}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-400">
                      {service.description}
                    </p>
                  </div>
                  <div className="mt-auto flex items-center gap-1 text-sm font-medium text-accent-soft opacity-0 transition-all duration-300 group-hover:opacity-100">
                    Learn more <FiArrowUpRight />
                  </div>
                </div>
              </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
