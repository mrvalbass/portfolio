import Image from "next/image";
import Link from "next/link";

export default function ContactOptions() {
  return (
    <div className="flex w-1/2 max-w-[666px] min-w-[333px] h-[55px] bg-[#CBB083] rounded-lg p-2">
      <Link
        href="https://github.com/mrvalbass"
        target="_blank"
        className="h-full grow shrink basis-0"
      >
        <Image
          src="/github-logo.svg"
          alt="Github logo"
          width={1000}
          height={1000}
          className="h-full w-fit mx-auto"
        />
      </Link>
      <Link
        href="https://www.linkedin.com/in/valentin-guillot/"
        target="_blank"
        className="h-full grow shrink basis-0"
      >
        <Image
          src="/linkedin-logo.svg"
          alt="LinkedIn logo"
          width={1000}
          height={1000}
          className="h-full w-fit mx-auto"
        />
      </Link>
      <div
        id="tel"
        className="flex justify-center items-center h-full grow shrink basis-0"
      >
        <Image
          src="/phone-logo.svg"
          alt="Phone logo"
          width={1000}
          height={1000}
          className="h-full w-fit"
        />
        <p
          id="num"
          className="text-black w-0 overflow-hidden text-md font-bold duration-500"
        >
          +33.7.70.18.62.65
        </p>
      </div>
      <a
        href="mailto:dev-web+portfolio@valentinguillot.fr"
        target="_blank"
        className="h-full grow shrink basis-0"
      >
        <Image
          src="/mail-logo.svg"
          alt="Mail logo"
          width={1000}
          height={1000}
          className="h-full w-fit mx-auto"
        />
      </a>
    </div>
  );
}
