import { SplitText } from "@cyriacbr/react-split-text";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import CircleLetter from "./CircleLetter";

export default function ProfilePicture() {
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
      x: "45vw",
      y: "-15vh",
      scale: 0.3,
      reversed: true,
    });
  });

  return (
    <div className="fixed z-50 size-[30vh] top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 profile-picture">
      <SplitText
        LetterWrapper={({ children }) => (
          <CircleLetter>{children}</CircleLetter>
        )}
      >
        Test
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
