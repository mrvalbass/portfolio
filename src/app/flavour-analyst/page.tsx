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
          src="/background.webp"
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
          <h1 className="text-center text-5xl font-bold">FLAVOUR ANALYST</h1>
          <div className="border-2 border-[#CBB083]"></div>
          <p className="leading-relaxed">
            Following TWINS, FLAVOUR ANALYST has been developed to tackle a
            recurring pain point of the Flavour R&D: the traduction of a
            chemical analysis in a flavour formula.
            <br />
            The application allowed flavourists to reduce the time spent on this
            traduction by 50%.
          </p>
          <p>
            Since FLAVOUR ANALYST is a proprietary product of MANE, access to
            the website cannot be granted.
          </p>
          <div className="border-2 border-[#CBB083]"></div>
          <div>
            <h2 className=" font-bold">Tech Stack:</h2>

            <p>Python (pandas, dash-enterprise), HTML, CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
}
