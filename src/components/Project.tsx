import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

interface ProjectProps {
  imgSrc: string;
  imgAlt: string;
  fit?: string;
  projectName?: string;
  projectLink: string;
  target?: string;
  technoIcons: IconDefinition[];
}

export default function Project({
  imgSrc,
  imgAlt,
  fit,
  projectName,
  projectLink,
  target,
  technoIcons,
}: ProjectProps) {
  useGSAP(() => {
    gsap.to(".project", {
      scrollTrigger: {
        trigger: ".project",
        start: "top bottom",
        end: "bottom bottom",
        scrub: 1,
      },
      opacity: 1,
      stagger: 0.1,
    });
  });
  return (
    <Link
      href={projectLink}
      target={target}
      className="relative rounded-xl hover:scale-105 active:scale-95 duration-200 opacity-0 h-[15svh] md:h-auto project"
    >
      <div className="absolute z-10 bg-black/70 rounded-xl h-full w-full flex flex-col gap-5 justify-center items-center md:opacity-0 md:hover:opacity-100 duration-200">
        <div className="flex items-center gap-5 relative">
          <h2 className="text-2xl font-bold">{projectName}</h2>
          <FontAwesomeIcon
            icon={faUpRightFromSquare}
            size="xs"
            className="absolute top-0 -right-4"
          />
        </div>
        <div className="border border-[#CBB083] w-1/2"></div>
        <div className="flex w-1/2 gap-5 justify-center">
          {technoIcons.map((technoIcon, i) => (
            <FontAwesomeIcon key={i} icon={technoIcon} size="2x" />
          ))}
        </div>
      </div>
      <Image
        src={imgSrc}
        alt={imgAlt}
        fill={true}
        className={`rounded-xl bg-black/70 object-${fit}`}
      />
    </Link>
  );
}
