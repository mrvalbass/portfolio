import Image from "next/image";
import { SplitText } from "@cyriacbr/react-split-text";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import AnimatedLetter from "@/components/AnimatedLetter";

export default function Landing() {
  useGSAP(() => {
    gsap.from(".landing-page > *", {
      opacity: 0,
      scale: 1.1,
    });
    gsap.to(".scroll-animation", {
      y: -10,
      delay: 4,
      repeat: -1,
      yoyo: true,
    });
  });
  return (
    <div className="font-[Prompt] text-[#CBB083] h-screen bg-[#495c78] flex flex-col items-center justify-end landing-page">
      <div className="h-1/2">
        <SplitText
          className="text-8xl font-['Rubik_Mono_One'] font-normal p-5 border-4 border-[#CBB083] text-center main-title"
          LetterWrapper={({ children }) => (
            <AnimatedLetter>{children}</AnimatedLetter>
          )}
        >
          VALENTIN GUILLOT
        </SplitText>
        <h2 className="text-5xl font-bold z-10 text-end pt-[5vh]">
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
