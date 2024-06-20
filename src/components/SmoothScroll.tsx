"use client";
import { ReactLenis } from "lenis/react";
import React from "react";

interface SmoothScrollProps {
  children?: React.ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
  return <ReactLenis root>{children}</ReactLenis>;
}
