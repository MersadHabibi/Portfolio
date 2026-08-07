"use client";

import SectionHeading from "../modules/SectionHeading";
import TiltCard from "../modules/TiltCard";
import { RevealGroup, RevealItem } from "../modules/Reveal";
import { FiArrowUpRight, FiFolder } from "react-icons/fi";
import Image from "next/image";
import { projects } from "@/data/projects";

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="scroll-mt-24 py-24 lg:py-32">
      <div className="container">
        <SectionHeading
          index="03"
          eyebrow="SELECTED WORK"
          title={
            <>
              Projects I&apos;m
              <br />
              <span className="text-gradient">proud of</span>
            </>
          }
          description="A selection of real products and experiments — from client sites to full-stack apps."
          className="mb-16"
        />

        <RevealGroup className="space-y-6">
          {/* Featured project — spans full width */}
          <RevealItem>
            <TiltCard className="group">
              <div className="glass grid overflow-hidden rounded-2xl md:grid-cols-2">
                <div className="relative aspect-video overflow-hidden md:aspect-auto">
                  <Image
                    src={featured.image}
                    alt={featured.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
                </div>
                <div className="relative flex flex-col justify-center gap-4 p-8 lg:p-12">
                  <span className="w-fit rounded-full bg-accent/15 px-3 py-1 font-mono text-xs text-accent-soft">
                    {featured.stack}
                  </span>
                  <h3 className="font-display text-3xl font-bold text-white lg:text-4xl">
                    {featured.title}
                  </h3>
                  <p className="text-gray-400">
                    A production website built with modern React tooling — fast,
                    responsive, and polished down to the last pixel.
                  </p>
                  <div className="mt-2 flex items-center gap-2">
                    <a
                      href={featured.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-accent hover:text-white">
                      Visit live site <FiArrowUpRight />
                    </a>
                  </div>
                </div>
              </div>
            </TiltCard>
          </RevealItem>

          {/* Remaining projects grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {rest.map((project) => (
              <RevealItem key={project.id}>
                <TiltCard intensity={8} className="group h-full">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className="glass glass-hover flex h-full flex-col overflow-hidden rounded-2xl">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 640px) 100vw, 50vw"
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" />
                    </div>
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <div className="flex items-center justify-between gap-4">
                        <div className="flex items-center gap-2 text-gray-500">
                          <FiFolder className="text-lg" />
                          <span className="font-mono text-sm text-accent-soft">
                            {project.stack}
                          </span>
                        </div>
                        <span className="grid size-9 place-items-center rounded-lg border border-white/10 text-white transition-all duration-300 group-hover:border-accent group-hover:bg-accent">
                          <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                        </span>
                      </div>
                      <h3 className="font-display text-xl font-semibold text-white">
                        {project.title}
                      </h3>
                    </div>
                  </a>
                </TiltCard>
              </RevealItem>
            ))}
          </div>
        </RevealGroup>
      </div>
    </section>
  );
}
