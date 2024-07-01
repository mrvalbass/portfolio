import { SplitText } from "@cyriacbr/react-split-text";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import CircleLetter from "./CircleLetter";
import { useEffect, useState } from "react";

interface ProfilePictureProps {
  onClick: () => void | undefined;
}

export default function ProfilePicture({ onClick }: ProfilePictureProps) {
  const [resize, setResize] = useState<boolean>(true);

  useEffect(() => {
    const handleResize = () => {
      console.log("test");
      setResize((prev) => !prev);
    };
    window.addEventListener("resize", handleResize);
    return window.removeEventListener("resize", handleResize);
  }, []);

  useGSAP(() => {
    gsap.from(".profile-picture", {
      opacity: 0,
      scale: 1.1,
    });
    gsap.to(".profile-picture", {
      scrollTrigger: {
        trigger: ".landing-page",
        start: "10% top",
        end: "10% top",
        scrub: 2,
      },
      y: "-14vh",
      right: "-14vh",
      translateX: 0,
      scale: 0.3,
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
        start: "10% top",
        end: "10% top",
      },
      rotation: "-=360",
      ease: "none",
      duration: 15,
      repeat: -1,
    });
  }, [resize]);

  return (
    <div
      onClick={onClick}
      className="profile-picture fixed size-[20vh] top-[10vh] md:top-0 md:size-[46vh] md:right-1/2 md:translate-x-1/2 flex items-center justify-center cursor-pointer z-20 "
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
        className="size-[12vh] md:size-[30vh] rounded-full object-cover border-4 border-[#CBB083]"
      />
    </div>
  );
}
