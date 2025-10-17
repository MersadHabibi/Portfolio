"use client";

import {
  SiCss3,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiRedux,
  SiSocketdotio,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import LogoLoop from "../modules/animation/LogoLoop";
import { useMediaQuery } from "usehooks-ts";

const techLogos = [
  {
    node: <SiHtml5 />,
    title: "HTML",
    href: "https://www.w3.org/html/",
  },
  {
    node: <SiCss3 />,
    title: "CSS",
    href: "https://www.w3.org/Style/CSS/Overview.en.html",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
  {
    node: <SiJavascript />,
    title: "JavaScript",
    href: "https://www.javascript.com",
  },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiGraphql />,
    title: "GraphQL",
    href: "https://graphql.org",
  },
  {
    node: <SiSocketdotio />,
    title: "Socket.io",
    href: "https://socket.io",
  },
  {
    node: <SiRedux />,
    title: "Redux",
    href: "https://redux.js.org",
  },
];

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
          logos={techLogos}
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
