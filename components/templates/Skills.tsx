"use client";

import { useMediaQuery } from "usehooks-ts";
import LogoLoop from "../modules/animation/LogoLoop";
import { skills } from "@/data/skills";

export default function Skills() {
  const isSm = useMediaQuery("(max-width: 640px)");

  return (
    <div className="">
      <div
        style={{
          height: isSm ? "150px" : "200px",
          position: "relative",
          overflow: "hidden",
        }}>
        <LogoLoop
          logos={skills}
          speed={100}
          direction="left"
          logoHeight={isSm ? 50 : 60}
          gap={isSm ? 60 : 80}
          pauseOnHover
          scaleOnHover
          fadeOut
          fadeOutColor="#ffffff"
          ariaLabel="Technology partners"
        />
      </div>
    </div>
  );
}
