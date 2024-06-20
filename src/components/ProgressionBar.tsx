import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function ProgressionBar() {
  useGSAP(() => {
    gsap.to(".progress-bar", {
      value: 100,
      ease: "none",
      scrollTrigger: { scrub: 1 },
    });
  });
  return (
    <progress
      value="0"
      max="100"
      className="progress-bar w-full fixed bg-transparent z-10 h-[1vh]"
    ></progress>
  );
}
