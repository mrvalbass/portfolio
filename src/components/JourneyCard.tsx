import Image from "next/image";
import React from "react";

interface JourneyCardProps {
  children: React.ReactNode;
  imgSrc: string;
  imgAlt: string;
  place: string;
  city: string;
  occupation: string;
}

export default function JourneyCard({
  children,
  imgSrc,
  imgAlt,
  place,
  city,
  occupation,
}: JourneyCardProps) {
  return (
    <div className="flex flex-col gap-[2vh] items-center mx-20 py-10 w-full">
      <div className="bg-[#CBB083] rounded h-1/4 w-4/5 flex justify-center items-center p-5 shrink-0">
        <Image
          src={imgSrc}
          width={1000}
          height={1000}
          alt={imgAlt}
          className="max-h-full object-contain"
        />
      </div>
      <div className="py-5 flex flex-col overflow-hidden w-[90%]">
        <h2 className="font-['Rubik_Mono_One'] text-xl">{place}</h2>
        <h3 className="font-bold">{city}</h3>
        <p className="border-2 border-[#CBB083] w-fit px-2 self-end mb-5">
          {occupation}
        </p>
      </div>
      <div className="w-[90%]">{children}</div>
    </div>
  );
}
