import Image from "next/image";
import React, { useState } from "react";

interface CarouselProps {
  children: React.ReactNode;
  className: string;
}

export default function Carousel({ children, className }: CarouselProps) {
  const [currentSlide, setCurrentSlide] = useState(5);

  return (
    <div className={`flex md:max-w-[50vw] relative items-center ${className}`}>
      <button
        className="absolute z-10 left-0 md:relative h-12 aspect-square duration-200 hover:scale-110"
        onClick={() => setCurrentSlide((prev) => (prev ? prev - 1 : 6))}
      >
        <Image fill={true} src="/carousel-arrow.svg" alt="Left Arrow" />
      </button>
      <div className="grow self-stretch overflow-hidden rounded-lg bg-[#495c78] border-4 border-[#CBB083]">
        <div
          className={`h-full flex transform duration-500`}
          style={{ transform: `translateX(-${currentSlide}00%` }}
        >
          {children}
        </div>
      </div>
      <button
        className="absolute right-0 md:relative h-12 aspect-square rotate-180 duration-200 hover:scale-110"
        onClick={() => setCurrentSlide((prev) => (prev === 6 ? 0 : prev + 1))}
      >
        <Image fill={true} src="/carousel-arrow.svg" alt="Right Arrow" />
      </button>
    </div>
  );
}
