"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

export default function Concept360() {
  return (
    <div className="font-[Prompt] text-[#CBB083]">
      <div className="h-screen relative flex justify-center items-center">
        <div className="h-screen w-screen absolute bg-black/70 z-10"></div>
        <Image
          src="/background.jpg"
          alt="Twins landing page"
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
        <div className="flex gap-10 h-[90vh] w-4/5 items-center">
          <div className="relative z-10 flex flex-col gap-10 w-2/3 ">
            <h1 className="text-center text-5xl font-bold">
              Concept 360 - Mobile App
            </h1>
            <div className="border-2 border-[#CBB083]"></div>
            <p className="leading-relaxed">
              The Concept 360 project aimed to develop a solution to ease the
              management of patients and programs for a health center. <br />
              It came with two apps, one on the web for the specialists to
              manage their programs and patients, and one on mobile for patients
              to follow their programs
            </p>
            <div className="border-2 border-[#CBB083]"></div>
            <div>
              <h2 className=" font-bold">Tech Stack:</h2>
              <p>React Native (Expo), Node.js (Express.js), MongoDB</p>
            </div>
          </div>
          <div className="relative h-full basis-1/3 flex justify-center">
            <video
              src="/concept360.mp4"
              autoPlay
              loop
              className="absolute z-10 h-full rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
