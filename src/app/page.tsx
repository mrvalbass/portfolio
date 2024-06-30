"use client";
import { useRef } from "react";

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
import { useRouter } from "next/router";

gsap.registerPlugin(useGSAP);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

export default function Home() {
  const contactRef = useRef<null | HTMLDivElement>(null);
  const landingRef = useRef<null | HTMLDivElement>(null);

  useGSAP(() => {
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
  });

  return (
    <main className="whole-site font-[Prompt] text-[#CBB083]">
      <ProgressionBar />
      <FontAwesomeIcon
        icon={faArrowUp}
        className="arrow-up cursor-pointer fixed z-10 bottom-5 left-5 opacity-0 hover:scale-110 active:scale-95"
        size="2x"
        onClick={() => {
          landingRef.current?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <ProfilePicture
        onClick={() => {
          contactRef.current?.scrollIntoView({ behavior: "smooth" });
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
