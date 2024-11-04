"use client";
import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";

import ProgressionBar from "@/components/ProgressionBar";
import ProfilePicture from "@/components/ProfilePicture";
import Landing from "@/components/Landing";
import Journey from "@/components/Journey";
import Portfolio from "@/components/Portfolio";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import TopArrow from "@/components/TopArrow";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

export default function Home() {
  const contactRef = useRef<null | HTMLDivElement>(null);
  const landingRef = useRef<null | HTMLDivElement>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (document.readyState !== "complete") {
      const load = () => setLoading(false);
      window.addEventListener("load", load);
      return () => window.removeEventListener("load", load);
    } else {
      setLoading(false);
    }
  }, []);

  useGSAP(() => {
    if (!loading) {
      gsap.from(".whole-site", { opacity: 0 });
    }
  }, [loading]);

  if (loading)
    return (
      <main className="flex h-screen items-center justify-center bg-[#495c78]">
        <span className="loading loading-ring loading-lg text-[#CBB083]"></span>
      </main>
    );

  return (
    <main className="whole-site font-[Prompt] text-[#CBB083]">
      <ProgressionBar />
      <ProfilePicture
        onClick={() => {
          contactRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <TopArrow refTarget={landingRef} />
      <Landing ref={landingRef} />
      <Portfolio />
      <AboutMe />
      <Journey />
      <Contact ref={contactRef} />
    </main>
  );
}
