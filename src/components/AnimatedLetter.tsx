import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

interface AnimatedLetterProps {
  children?: React.ReactNode;
}

const AnimatedLetter: React.FC<AnimatedLetterProps> = ({ children }) => {
  useGSAP(() => {
    gsap.fromTo(
      ".title-letter",
      { y: 100, opacity: 0, ease: "expo.out" },
      { y: 0, opacity: 1, duration: 0.2, stagger: 0.07, delay: 0.5 }
    );
  });

  return (
    <span className=" title-letter inline-block relative">{children}</span>
  );
};
export default AnimatedLetter;
