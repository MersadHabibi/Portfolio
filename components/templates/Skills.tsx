"use client";

import LogoLoop from "../modules/animation/LogoLoop";
import { skills } from "@/data/skills";
import SectionHeading from "../modules/SectionHeading";
import Reveal from "../modules/Reveal";

export default function Skills() {
  return (
    <section id="about" className="py-24 lg:py-32">
      <div className="container">
        <Reveal>
          <SectionHeading
            index="01"
            eyebrow="TECH STACK"
            title={
              <>
                Technologies I
                <br />
                work with
              </>
            }
            description="Modern tools and frameworks I use to craft fast, scalable, and beautiful web applications."
            align="center"
            className="mb-16"
          />
        </Reveal>

        <div className="relative overflow-hidden py-12 text-gray-600">
          <div className="mask-fade-x [&_a]:transition-colors [&_a]:duration-300 [&_a:hover]:text-accent-soft">
            <LogoLoop
              logos={skills}
              speed={80}
              direction="left"
              logoHeight={56}
              gap={80}
              pauseOnHover
              scaleOnHover
              fadeOut={false}
              ariaLabel="Technology stack"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
