import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function AboutMe() {
  useGSAP(() => {
    gsap.to(".background-about-me", {
      scrollTrigger: {
        trigger: ".about-me",
        scrub: 0.3,
        start: "top bottom",
        end: "bottom top",
      },
      y: "-20%",
    });
  });

  return (
    <div className="h-screen bg-cover justify-center relative about-me">
      <div className="absolute h-[150vh] w-full bg-[url('/background.jpg')] bg-cover justify-center -z-10 background-about-me"></div>
      <div className="flex flex-col backdrop-blur-sm bg-black/30 h-screen p-5">
        <h1 className="font-bold text-5xl">ABOUT ME</h1>
      </div>
    </div>
  );
}
