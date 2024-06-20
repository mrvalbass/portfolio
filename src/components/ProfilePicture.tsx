import { SplitText } from "@cyriacbr/react-split-text";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import CircleLetter from "./CircleLetter";
import React from "react";

interface ProfilePictureProps {
  onClick: () => void | undefined;
}

export default function ProfilePicture({ onClick }: ProfilePictureProps) {
  useGSAP(() => {
    gsap.from(".profile-picture", {
      opacity: 0,
      scale: 1.1,
    });
    gsap.to(".profile-picture", {
      scrollTrigger: {
        trigger: ".landing-page",
        toggleActions: "play none reverse none",
        start: "10% top",
        end: "10% top",
      },
      top: "10vh",
      left: "95vw",
      scale: 0.3,
      reversed: true,
    });
    gsap.from(".circle-text", {
      scrollTrigger: {
        trigger: ".landing-page",
        toggleActions: "play none reverse none",
        start: "10% top",
        end: "10% top",
      },
      opacity: 0,
    });
    gsap.to(".circle-text", {
      scrollTrigger: {
        trigger: ".landing-page",
        toggleActions: "play none reverse none",
        start: "10% top",
        end: "10% top",
      },
      rotation: "-=360",
      ease: "none",
      duration: 15,
      repeat: -1,
    });
  });

  return (
    <div
      onClick={onClick}
      className="profile-picture fixed z-50 size-[46vh] top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center"
    >
      <SplitText
        className="absolute circle-text h-full"
        LetterWrapper={({ countIndex, children }) => (
          <CircleLetter countIndex={countIndex}>{children}</CircleLetter>
        )}
      >
        CONTACT ME!
      </SplitText>
      <Image
        width={500}
        height={500}
        alt="profile picture Valentin"
        src={"/profilePicture.jpg"}
        className="size-[30vh] rounded-full object-cover border-4 border-[#CBB083]"
      />
    </div>
  );
}
