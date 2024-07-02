import Image from "next/image";
import React from "react";

interface JourneyCardProps {
  children?: React.ReactNode;
  imgSrc: string;
  imgAlt: string;
  place: string;
  city: string;
  occupation: string;
  desc: React.ReactNode;
  countIndex: number;
}

export default function JourneyCard({
  imgSrc,
  imgAlt,
  place,
  city,
  occupation,
  desc,
  countIndex,
}: JourneyCardProps) {
  return (
    <div className="flex flex-col gap-5 p-10 max-h-[95svh] min-w-full">
      <div className="bg-[#CBB083] rounded h-1/6 md:h-1/4 flex justify-center items-center p-5 shrink-0">
        <Image
          src={imgSrc}
          width={1000}
          height={1000}
          alt={imgAlt}
          className="max-h-full object-contain"
        />
      </div>
      <div className="flex flex-col">
        <h2 className="font-['Rubik_Mono_One'] text-xl">{place}</h2>
        <h3 className="font-bold">{city}</h3>
        <p className="md:border-2 border-[#CBB083] md:rounded-sm px-2 self-end my-5 text-right">
          {occupation}
        </p>
      </div>
      <div className="overflow-auto">{desc}</div>
    </div>
  );
}
