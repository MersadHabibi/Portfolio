"use client";

import SectionHeading from "../modules/SectionHeading";
import TiltCard from "../modules/TiltCard";
import { RevealGroup, RevealItem } from "../modules/Reveal";
import { FiArrowUpRight, FiFolder } from "react-icons/fi";
import Image from "next/image";
import { projects, type Project } from "@/data/projects";

function ProjectLinks({ project }: { project: Project }) {
  return (
    <div className="space-y-2 text-sm text-gray-400">
      {project.id === 1 && <p>Live deployments:</p>}
      {project.links?.map((link) => (
        <p key={link.title}>
          <a href={link.href} target="_blank" rel="noreferrer" className="text-accent-soft hover:underline">
            {link.title} <FiArrowUpRight className="inline" />
          </a>
          {link.description && <> — {link.description}</>}
        </p>
      ))}
    </div>
  );
}

export default function Projects() {
  const [featured, ...rest] = projects;
  return (
    <section id="projects" className="scroll-mt-24 py-24 lg:py-32">
      <div className="container">
        <SectionHeading index="03" eyebrow="SELECTED WORK" title={<>Projects I&apos;m<br /><span className="text-gradient">proud of</span></>} description="A selection of real products and experiments — from client sites to full-stack apps." className="mb-16" />
        <RevealGroup className="space-y-6">
          <RevealItem>
            <TiltCard className="group">
              <div className="glass grid overflow-hidden rounded-2xl md:grid-cols-2">
                <div className="grid min-h-48 place-items-center bg-gradient-to-br from-accent/25 to-cyan-neon/10 text-accent-soft md:min-h-full" aria-hidden="true">
                  <FiFolder className="text-6xl" />
                </div>
                <div className="relative flex flex-col justify-center gap-4 p-8 lg:p-12">
                  <h3 className="font-display text-3xl font-bold text-white lg:text-4xl">{featured.title}</h3>
                  <p className="text-gray-400">{featured.description}</p>
                  <div><a href={featured.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-2.5 text-sm font-semibold text-ink-900 transition-colors hover:bg-accent hover:text-white">Demo <FiArrowUpRight /></a></div>
                  <ProjectLinks project={featured} />
                </div>
              </div>
            </TiltCard>
          </RevealItem>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {rest.map((project) => (
              <RevealItem key={project.id}>
                <TiltCard intensity={8} className="group h-full">
                  <div className="glass glass-hover flex h-full flex-col overflow-hidden rounded-2xl">
                    {project.image && <div className="relative aspect-video overflow-hidden"><Image src={project.image} alt={project.title} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover object-top transition-transform duration-700 group-hover:scale-110" /><div className="absolute inset-0 bg-gradient-to-t from-ink-900/70 via-transparent to-transparent" /></div>}
                    <div className="flex flex-1 flex-col gap-3 p-6">
                      <FiFolder className="text-lg text-accent-soft" />
                      <h3 className="font-display text-xl font-semibold text-white">
                        {project.href ? <a href={project.href} target="_blank" rel="noreferrer" className="hover:text-accent-soft">{project.title} <FiArrowUpRight className="inline" /></a> : project.title}
                      </h3>
                      <p className="text-sm leading-relaxed text-gray-400">{project.description}</p>
                      <ProjectLinks project={project} />
                    </div>
                  </div>
                </TiltCard>
              </RevealItem>
            ))}
          </div>
        </RevealGroup>
      </div>
    </section>
  );
}
