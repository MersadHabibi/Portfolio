import Contact from "@/components/templates/Contact";
import Header from "@/components/templates/Header";
import Navbar from "@/components/templates/Navbar";
import Projects from "@/components/templates/Projects";
import Skills from "@/components/templates/Skills";
import WhatIDo from "@/components/templates/WhatIDo";
import Experiences from "@/components/templates/Experiences";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Header />
        <Skills />
        <WhatIDo />
        <Projects />
        <Experiences />
        <Contact />
      </main>
    </>
  );
}
