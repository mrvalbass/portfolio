"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";

export default function Stellia() {
  return (
    <div className="min-h-screen relative flex justify-center items-center font-[Prompt] text-[#CBB083]">
      <div className="h-screen w-screen fixed top-0 bg-black/70 z-10"></div>
      <Image
        src="/background.webp"
        alt="Stellia landing page"
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
        <div className="relative z-10 flex flex-col gap-10 md:basis-2/3">
          <h1 className="text-center text-5xl font-bold">Stellia</h1>
          <div className="border-2 border-[#CBB083]"></div>
          <p className="leading-relaxed">
            This project for stellia was to design a form in the shape of an
            interactive chat. <br />
            The form can have several types of answers : input, select,
            multiselect, or button. <br /> It uses a linked list logic to go
            through the steps prepared in advance. <br /> Every option setup can
            be modified again before submitting the form without exiting the
            component. And the design changes to indicate whether the option is
            available to the user or not <br />
            The objective of the form is to setup custom AI tools from Stellia
            that will help teachers improve their learning materials
          </p>
          <div className="border-2 border-[#CBB083]"></div>
          <div>
            <h2 className=" font-bold">Tech Stack:</h2>
            <p>Typescript / React / GraphQL / PostgreSQL</p>
          </div>
        </div>
        <div className="relative flex justify-center h-[60svh] w-full md:h-[90vh] md:basis-1/3 ">
          <video
            src="/stellia.mov"
            autoPlay
            loop
            className="absolute z-10 h-full rounded-xl"
          />
        </div>
      </div>
    </div>
  );
}
