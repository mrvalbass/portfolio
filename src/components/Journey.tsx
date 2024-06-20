import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { Carousel } from "react-daisyui";

export default function Journey() {
  useGSAP(() => {
    gsap.from(".map", {
      scrollTrigger: {
        trigger: ".journey",
        scrub: 1,
        start: "top bottom",
        end: "bottom bottom",
      },
      x: "-100%",
    });
    gsap.to(".background-journey", {
      scrollTrigger: {
        trigger: ".journey",
        scrub: 0.3,
        start: "top bottom",
        end: "bottom top",
      },
      y: "-20%",
    });
  });

  return (
    <div className="h-screen bg-cover justify-center relative journey">
      <div className="absolute h-[150vh] w-full bg-[url('/background.jpg')] bg-cover justify-center -z-10 background-journey"></div>
      <div className="flex flex-col backdrop-blur-sm bg-black/30 h-screen p-5">
        <h1 className="font-bold text-5xl mb-5">MY JOURNEY</h1>
        <div className="flex gap-5 grow items-center min-h-0">
          <Image
            width={1000}
            height={1000}
            alt="french map"
            src={"/frenchMap.svg"}
            className="map max-w-[50vw] h-full bg-black/80 rounded-xl"
          />
          <Carousel display="slider" vertical={false}>
            <Carousel.Item src="/logo-agrosup.svg" alt="Agrosup" />
            <Carousel.Item src="/logo-ensiacet.png" alt="Ensiacet" />
            <Carousel.Item src="/logo-la-capsule.svg" alt="La Capsule" />
            <Carousel.Item src="/logo-isipca.png" alt="ISIPCA" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
