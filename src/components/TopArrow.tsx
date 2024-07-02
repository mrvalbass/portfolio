import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface TopArrowProps {
  refTarget: any;
}

export default function TopArrow({ refTarget }: TopArrowProps) {
  useGSAP(() => {
    gsap.to(".arrow-up", {
      scrollTrigger: {
        trigger: ".landing-page",
        scrub: 0.3,
        start: "10% top",
        end: "50% top",
      },
      opacity: 1,
    });
  });

  return (
    <FontAwesomeIcon
      icon={faArrowUp}
      className="arrow-up z-10 cursor-pointer fixed bottom-5 left-5 opacity-0 hover:scale-110 active:scale-95"
      size="2x"
      onClick={() => {
        refTarget.current?.scrollIntoView({ behavior: "smooth" });
      }}
    />
  );
}
