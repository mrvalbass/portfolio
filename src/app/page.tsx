"use client";
import { useRef } from "react";

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
  const ref = useRef<null | HTMLDivElement>(null);

  useGSAP(() => {
    gsap.from(".whole-site", { opacity: 0 });
  });

  return (
    <main className="whole-site font-[Prompt] text-[#CBB083]">
      <ProgressionBar />
      <ProfilePicture
        onClick={() => {
          console.log("test");

          ref.current?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <Landing />
      <Journey />
      <Portfolio />
      <AboutMe />
      <Contact ref={ref} />
    </main>
  );
}
