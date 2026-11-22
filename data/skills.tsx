import {
  SiDocker,
  SiFastify,
  SiGraphql,
  SiJavascript,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiReact,
  SiSocketdotio,
  SiTypescript,
} from "react-icons/si";

export const skills = [
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiJavascript />, title: "JavaScript", href: "https://www.javascript.com" },
  { node: <SiReact />, title: "React.js", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiReact />, title: "React Native", href: "https://reactnative.dev" },
  { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
  { node: <SiNestjs />, title: "NestJS", href: "https://nestjs.com" },
  { node: <SiFastify />, title: "Fastify", href: "https://fastify.dev" },
  { node: <span className="text-lg font-semibold">REST APIs</span>, title: "REST APIs" },
  { node: <SiGraphql />, title: "GraphQL", href: "https://graphql.org" },
  { node: <SiSocketdotio />, title: "Socket", href: "https://socket.io" },
  { node: <SiDocker />, title: "Docker", href: "https://www.docker.com" },
  { node: <span className="text-lg font-semibold">CI/CD</span>, title: "CI/CD" },
];
