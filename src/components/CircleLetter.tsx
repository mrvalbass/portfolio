import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(useGSAP);

interface AnimatedLetterProps {
  children?: React.ReactNode;
  countIndex?: number;
}

const CircleLetter: React.FC<AnimatedLetterProps> = ({
  countIndex,
  children,
}) => {
  return (
    <div
      className={`circle-letter font-['Rubik_Mono_One'] text-6xl h-[23vh] left-1/2 -translate-x-1/2 absolute`}
      style={{
        transform: `translateX(-50%)  rotate(${
          countIndex ? (countIndex * 360) / 12 : 0
        }deg)`,
      }}
    >
      {children}
    </div>
  );
};
export default CircleLetter;
