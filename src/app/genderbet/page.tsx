"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

export default function Genderbet() {
  return (
    <div className="min-h-screen relative flex justify-center items-center font-[Prompt] text-[#CBB083]">
      <div className="h-screen w-screen fixed top-0 bg-black/70 z-10"></div>
      <Image
        src="/background.webp"
        alt="Notre p'tit bébé landing page"
        layout="fill"
        className="object-cover"
      />
      <Link href="/#portfolio">
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="absolute z-10 cursor-pointer top-5 left-5 hover:scale-110 active:scale-95"
          size="2x"
        />
      </Link>
      <div className="flex flex-col md:flex-row gap-10 w-4/5 items-center pt-20 pb-10 md:p-0">
        <div className="relative z-10 flex flex-col gap-10 md:basis-1/2">
          <h1 className="text-center text-5xl font-bold">
            Notre p&apos;tit bébé
          </h1>
          <div className="border-2 border-[#CBB083]"></div>
          <p className="leading-relaxed">
            Personal project for the birth of my first child. <br /> All family
            and friends can connect to this app to try and predict our child
            name, gender and birth date. <br />
            The project is responsive to adapt on mobile screens <br /> <br />
            <a
              href="https://genderbet-web-front.vercel.app/"
              className="cursor-pointer font-bold hover:scale-105 active:scale-100"
            >
              Try it with the account test@test.com (mdp : 123456) ➚
            </a>
            <br />
          </p>
          <div className="border-2 border-[#CBB083]"></div>
          <div>
            <h2 className=" font-bold">Tech Stack:</h2>
            <p>Typescript / React / Next / Node / Express / MongoDB</p>
          </div>
        </div>
        <div className="relative flex justify-center h-[60svh] w-full md:h-[90vh] md:basis-1/2 ">
          <Link
            href={"https://genderbet-web-front.vercel.app/"}
            target="_blank"
            className="w-full rounded-lg"
          >
            <video
              src="/genderbet.mov"
              autoPlay
              loop
              className="absolute z-10 h-full rounded-xl"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}