import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import CircleLetter from "./CircleLetter";

interface ProfilePictureProps {
  onClick: () => void | undefined;
}

export default function ProfilePicture({ onClick }: ProfilePictureProps) {
  useGSAP(() => {
    const mm = gsap.matchMedia();
    mm.add(`(min-width: 768px)`, () => {
      gsap.to(".profile-picture", {
        scrollTrigger: {
          trigger: ".landing-page",
          start: "10% top",
          end: "10% top",
          scrub: 2,
        },
        y: "-13vh",
        x: "55vw",
        translateX: 0,
        scale: 0.3,
      });
    });

    mm.add(`(max-width: 768px)`, () => {
      gsap.to(".profile-picture", {
        scrollTrigger: {
          trigger: ".landing-page",
          start: "10% top",
          end: "10% top",
          scrub: 2,
        },
        y: "-13svh",
        x: "55vw",
        translateX: 0,
        scale: 0.5,
      });
    });

    gsap.from(".profile-picture", {
      opacity: 0,
      scale: 1.1,
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
  }, []);

  return (
    <div
      onClick={onClick}
      className="profile-picture fixed size-[20vh] top-[10vh] md:top-0 md:size-[46vh] right-1/2 translate-x-1/2 flex items-center justify-center cursor-pointer z-20 "
    >
      <div className="absolute circle-text h-full">
        {"CONTACT ME!".split("").map((letter, i) => (
          <CircleLetter key={i} countIndex={i}>
            {letter}
          </CircleLetter>
        ))}
      </div>
      <Image
        priority={true}
        width={1000}
        height={1000}
        alt="profile picture Valentin"
        src={"/profilePicture.webp"}
        className="size-[12vh] md:size-[30vh] rounded-full object-cover border-4 border-[#CBB083]"
      />
    </div>
  );
}
