"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import ProgressionBar from "@/components/ProgressionBar";
import ProfilePicture from "@/components/ProfilePicture";
import Landing from "@/components/Landing";
import Journey from "@/components/Journey";
import Portfolio from "@/components/Portfolio";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  useGSAP(() => {
    gsap.from(".whole-site", { opacity: 0 });
  });

  return (
    <main className="whole-site font-[Prompt] text-[#CBB083]">
      <ProgressionBar />
      <ProfilePicture />
      <Landing />
      <Journey />
      <Portfolio />
      <AboutMe />
      <Contact />
    </main>
  );
}
