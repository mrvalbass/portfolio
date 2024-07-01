import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

export const metadata: Metadata = {
  title: "Valentin Guillot",
  description: "This is my portfolio Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="md:overflow-hidden">
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
