import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

interface AnimatedLetterProps {
  children?: React.ReactNode;
}

const CircleLetter: React.FC<AnimatedLetterProps> = ({ children }) => {
  const letter = useRef();

  useGSAP(() => {
    gsap.fromTo(
      ".title-letter",
      { y: 100, opacity: 0, ease: "expo.out" },
      { y: 0, opacity: 1, duration: 0.2, stagger: 0.07, delay: 0.5 }
    );
  });

  return (
    <div className="circle-letter font-['Rubik_Mono_One'] h-[18vh] absolute">
      {children}
    </div>
  );
};
export default CircleLetter;
