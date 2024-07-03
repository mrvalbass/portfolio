import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Project from "./Project";
import { mobileProjects, webProjects } from "@/app/data";
export default function Portfolio() {
  useGSAP(() => {
    gsap.to(".background-portfolio", {
      scrollTrigger: {
        trigger: ".portfolio",
        scrub: 0.3,
        start: "top bottom",
        end: "bottom top",
      },
      y: "-20%",
    });
  });

  return (
    <div
      id="portfolio"
      className="md:h-screen justify-center relative portfolio"
    >
      <div className="absolute h-[150%] w-full bg-[url('/background.webp')] bg-cover justify-center -z-10 background-portfolio"></div>
      <div className="flex flex-col backdrop-blur-sm bg-black/30 md:h-screen p-5">
        <h1 className="font-bold text-2xl md:text-5xl">PORTFOLIO</h1>
        <div className="grow flex flex-col md:flex-row">
          <div className="basis-3/4 flex flex-col p-5">
            <h2 className="font-bold text-lg pb-5">WEB PROJECTS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 grow">
              {webProjects.map((project, i) => (
                <Project
                  key={i}
                  imgSrc={project.img}
                  imgAlt={project.alt}
                  fit={project.fit}
                  projectName={project.name}
                  projectLink={project.link}
                  target={project.target}
                  technoIcons={project.technoIcons}
                />
              ))}
            </div>
          </div>
          <div className="border-4 border-[#CBB083] rounded-lg"></div>
          <div className="basis-1/4 flex flex-col p-5">
            <h2 className="font-bold text-lg pb-5">NATIVE PROJECTS</h2>
            <div className="grid grid-rows-3 gap-10 grow">
              {mobileProjects.map((project, i) => (
                <Project
                  key={i}
                  imgSrc={project.img}
                  imgAlt={project.alt}
                  fit={project.fit}
                  projectName={project.name}
                  projectLink={project.link}
                  technoIcons={project.technoIcons}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
