import Image from "next/image";
import { LetterWrapperProp, SplitText } from "@cyriacbr/react-split-text";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AnimatedLetter from "@/components/AnimatedLetter";

export default function Landing() {
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
  return (
    <div className="font-[Prompt] text-[#CBB083] h-screen bg-[#495c78] flex flex-col items-center justify-end landing-page">
      <div className="h-1/2">
        <SplitText
          className="text-8xl font-['Rubik_Mono_One'] font-normal p-5 border-4 border-[#CBB083] text-center main-title"
          LetterWrapper={({ children }: LetterWrapperProp) => (
            <AnimatedLetter>{children}</AnimatedLetter>
          )}
        >
          VALENTIN GUILLOT
        </SplitText>
        <h2 className="text-5xl font-bold z-10 text-end pt-[5vh] subtitle">
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
