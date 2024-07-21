import Header from "@/components/templates/Header";
import Navbar from "@/components/templates/Navbar";
import WhatIDo from "@/components/templates/WhatIDo";

export default function Home() {
  return (
    <main className="min-h-screen pb-96">
      <Navbar />
      <Header />
      <WhatIDo />
    </main>
  );
}
