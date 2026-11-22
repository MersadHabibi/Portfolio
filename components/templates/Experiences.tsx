"use client";

import { motion } from "motion/react";
import SectionHeading from "../modules/SectionHeading";
import { experiences } from "@/data/experiences";
import { FiBriefcase } from "react-icons/fi";

export default function Experiences() {
  return (
    <section id="experience" className="scroll-mt-24 py-24 lg:py-32">
      <div className="container">
        <SectionHeading
          index="04"
          eyebrow="CAREER"
          title={
            <>
              Work
              <br />
              <span className="text-gradient">experience</span>
            </>
          }
          description="Where I've worked and the value I've delivered along the way."
          className="mb-16"
        />

        <div className="relative mx-auto max-w-3xl">
          {/* Vertical glowing line */}
          <div className="absolute left-6 top-0 h-full w-px bg-gradient-to-b from-accent via-cyan-neon/50 to-transparent sm:left-8" />

          <div className="space-y-10">
            {experiences.map((experience, i) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="relative flex gap-6 pl-1 sm:gap-8">
                {/* Node */}
                <div className="relative z-10 grid size-12 shrink-0 place-items-center rounded-xl border border-white/10 bg-ink-800 text-accent-soft shadow-glow sm:size-16">
                  <FiBriefcase className="text-xl sm:text-2xl" />
                </div>

                <div className="flex-1 rounded-2xl glass glass-hover p-6">
                  <span className="font-mono text-xs text-cyan-neon">
                    {experience.date}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-semibold text-white sm:text-2xl">
                    {experience.position}
                  </h3>
                  <p className="text-accent-soft">{experience.company}</p>
                  <ul className="mt-3 space-y-2 text-sm leading-relaxed text-gray-400">
                    {experience.description.map((item) => <li key={item}>{item}</li>)}
                    <li>Delivered software projects for <a href="https://ravinow.ir/" target="_blank" rel="noreferrer" className="text-accent-soft hover:underline">Ravinow</a>, a public-sector cultural institution and client of Pardakht Plus.</li>
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
