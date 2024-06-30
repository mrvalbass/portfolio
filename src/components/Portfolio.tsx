import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Project from "./Project";
import {
  faHtml5,
  faPython,
  faCss3,
  faJs,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";

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

  const webProjects = [
    {
      name: "Concept 360",
      img: "/concept360.png",
      alt: "Concept 360 Screenshot",
      fit: "cover",
      target: "_blank",
      link: "https://concept360-frontend-web.vercel.app/",
      technoIcons: [faJs, faReact, faNodeJs],
    },

    {
      name: "HackaTweet",
      img: "/hackatweet.png",
      alt: "Hackatweet Screenshot",
      fit: "cover",
      link: "https://hackatweet-front-five.vercel.app/",
      target: "_blank",
      technoIcons: [faJs, faReact, faNodeJs],
    },
    {
      name: "My Moviz",
      img: "/my-moviz.png",
      alt: "My Moviz Screenshot",
      fit: "cover",
      link: "https://mymoviz-front-three.vercel.app/",
      target: "_blank",
      technoIcons: [faJs, faReact, faNodeJs],
    },
    {
      name: "TicketHack",
      img: "/tickethack.png",
      alt: "TicketHack Screenshot",
      fit: "cover",
      link: "https://tickethack-front-iota.vercel.app/",
      target: "_blank",
      technoIcons: [faHtml5, faCss3, faJs, faNodeJs],
    },
    {
      name: "Weather App",
      img: "/weather-app.png",
      alt: "Weather App Screenshot",
      fit: "cover",
      link: "https://weatherapp-frontend-nine-theta.vercel.app/",
      target: "_blank",
      technoIcons: [faHtml5, faCss3, faJs, faNodeJs],
    },
    {
      name: "TWINS",
      img: "/logo-mane.svg",
      alt: "Mane logo",
      fit: "contain",
      link: "/twins",
      technoIcons: [faHtml5, faCss3, faPython],
    },
    {
      name: "FLAVOUR ANALYST",
      img: "/logo-mane.svg",
      alt: "Mane logo",
      fit: "contain",
      link: "/flavour-analyst",
      technoIcons: [faHtml5, faCss3, faPython],
    },
    {
      name: "Calculator",
      img: "/calculator.png",
      alt: "Calculator Screenshot",
      fit: "cover",
      link: "https://mrvalbass.github.io/odin-calculator/",
      target: "_blank",
      technoIcons: [faHtml5, faCss3, faJs],
    },
    {
      name: "Rock Paper Scissors Game",
      img: "/rock-paper-scissors.png",
      alt: "Rock Paper Scissors Screenshot",
      fit: "cover",
      link: "https://mrvalbass.github.io/odin-rock_paper_scissors/",
      target: "_blank",
      technoIcons: [faHtml5, faCss3, faJs],
    },
  ];

  const mobileProjects = [
    {
      name: "E",
      img: "/aboutMe1.jpg",
      alt: "About Me 1",
      fit: "cover",
      link: "#",
      technoIcons: [faHtml5],
    },
    {
      name: "E",
      img: "/aboutMe1.jpg",
      alt: "About Me 1",
      fit: "cover",
      link: "#",
      technoIcons: [faHtml5],
    },
    {
      name: "E",
      img: "/aboutMe1.jpg",
      alt: "About Me 1",
      fit: "cover",
      link: "#",
      technoIcons: [faHtml5],
    },
  ];
  return (
    <div id="portfolio" className="h-screen justify-center relative portfolio">
      <div className="absolute h-[150vh] w-full bg-[url('/background.jpg')] bg-cover justify-center -z-10 background-portfolio"></div>
      <div className="flex flex-col backdrop-blur-sm bg-black/30 h-screen p-5">
        <h1 className="font-bold text-5xl">PORTFOLIO</h1>
        <div className="grow flex">
          <div className="basis-3/4 flex flex-col p-5">
            <h2 className="font-bold text-lg pb-5">WEB PROJECTS</h2>
            <div className="grid grid-cols-3 gap-10 grow">
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
                  target={project.target}
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
