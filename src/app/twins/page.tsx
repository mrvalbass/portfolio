"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

export default function Twins() {
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
        <div className="relative z-10 flex flex-col gap-10 w-3/4">
          <h1 className="text-center text-5xl font-bold">TWINS</h1>
          <div className="border-2 border-[#CBB083]"></div>
          <p className="leading-relaxed">
            TWINS was the first software development project I got to work on.{" "}
            <br />
            The objective was to compare one flavor formula against the entire
            MANE portfolio to check whether there was something similar already
            existing. <br />
            It allowed flavourists to avoid repetitions and improve the
            selection of existing flavors by suggesting close alternatives when
            needed.
            <br />
            The project then evolved so that the app could accept a list of
            hundreds of formulas to cluster them by aroma using AI techniques.
            <br />
            This enabled the identification of portfolio optimizations.
            <br />
            What made this project valuable was that the flavor formulas were
            compared based on their aroma and not on their composition, thanks
            to a formula I designed.
            <br />
            At the moment, the project is being adapted to fit into the MANE IT
            ecosystem.
          </p>
          <p>
            Since TWINS is a proprietary product of MANE, access to the website
            cannot be granted.
          </p>
          <div className="border-2 border-[#CBB083]"></div>
          <div>
            <h2 className=" font-bold">Tech Stack:</h2>

            <p>Python (pandas, scikit-learn, dash-enterprise), HTML, CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
