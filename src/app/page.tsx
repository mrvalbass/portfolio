"use client";
import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MotionPathPlugin from "gsap/MotionPathPlugin";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";

import ProgressionBar from "@/components/ProgressionBar";
import ProfilePicture from "@/components/ProfilePicture";
import Landing from "@/components/Landing";
import Journey from "@/components/Journey";
import Portfolio from "@/components/Portfolio";
import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";

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
      return window.removeEventListener("load", load);
    } else {
      setLoading(false);
    }
  }, []);

  useGSAP(() => {
    if (!loading) {
      gsap.from(".whole-site", { opacity: 0 });
      gsap.to(".arrow-up", {
        scrollTrigger: {
          trigger: ".landing-page",
          scrub: 0.3,
          start: "10% top",
          end: "50% top",
        },
        opacity: 1,
      });
    }
  });

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
      <FontAwesomeIcon
        icon={faArrowUp}
        className="arrow-up cursor-pointer fixed z-50 bottom-5 left-5 opacity-0 hover:scale-110 active:scale-95"
        size="2x"
        onClick={() => {
          landingRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <Landing ref={landingRef} />
      <Portfolio />
      <AboutMe />
      <Journey />
      <Contact ref={contactRef} />
    </main>
  );
}
