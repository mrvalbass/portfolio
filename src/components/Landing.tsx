import React, { forwardRef } from "react";
import Image from "next/image";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AnimatedLetter from "@/components/AnimatedLetter";

function Landing(_: any, ref: any) {
  useGSAP(() => {
    gsap.from(".landing-page", {
      opacity: 0,
      scale: 1.1,
    });
    gsap.from(".subtitle", {
      opacity: 0,
      x: -20,
      delay: 2,
    });
    gsap.to(".scroll-animation", {
      y: -10,
      delay: 4,
      repeat: -1,
      yoyo: true,
    });

    const mm = gsap.matchMedia();
    mm.add(`(min-width: 768px)`, () => {
      gsap.to(".scroll-animation", {
        scrollTrigger: {
          trigger: ".landing-page",
          scrub: 0.3,
          start: "10% top",
          end: "50% top",
        },
        opacity: 0,
      });
      gsap.to(".main-title", {
        scrollTrigger: {
          trigger: ".landing-page",
          scrub: 0.3,
          start: "10% top",
          end: "50% top",
        },
        x: "-50%",
        opacity: 0,
      });
      gsap.to(".subtitle", {
        scrollTrigger: {
          trigger: ".landing-page",
          scrub: 0.3,
          start: "10% top",
          end: "50% top",
        },
        x: "50%",
        color: "#495c78",
      });
    });
  });
  return (
    <div
      ref={ref}
      className="h-[100svh] md:h-screen bg-[#495c78] flex flex-col items-center justify-center md:justify-end landing-page"
    >
      <div className="md:h-1/2">
        <div className="text-2xl md:text-8xl font-['Rubik_Mono_One'] font-normal p-5 border-4 border-[#CBB083] rounded text-center main-title">
          {"VALENTIN".split("").map((letter, i) => (
            <AnimatedLetter key={i}>{letter}</AnimatedLetter>
          ))}{" "}
          {"GUILLOT".split("").map((letter, i) => (
            <AnimatedLetter key={i}>{letter}</AnimatedLetter>
          ))}
        </div>
        <h2 className="text-xl md:text-5xl font-bold text-end pt-[2vh] md:pt-[5vh] subtitle">
          Full Stack Web Developer
        </h2>
      </div>
      <Image
        width={150}
        height={150}
        alt="scroll animation"
        src={"/scrollAnimation.gif"}
        className="absolute bottom-10 size-16 scroll-animation z-10"
      />
    </div>
  );
}

export default forwardRef(Landing);
