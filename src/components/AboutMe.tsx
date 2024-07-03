import Image from "next/image";
import Marquee from "react-fast-marquee";

export default function AboutMe() {
  const softSkills = [
    "CURIOUS",
    "AUTONOMOUS",
    "SOCIABLE",
    "RIGOROUS",
    "RESILIENT",
    "ADAPTABLE",
    "PROBLEM-SOLVER",
  ];

  return (
    <div className="bg-[#495c78] flex flex-col md:h-screen about-me">
      <h1 className="font-bold text-2xl md:text-5xl p-5">ABOUT ME</h1>
      <Marquee
        className=" border-y-4 md:border-y-8 border-[#CBB083] flex gap-10 font-['Rubik_Mono_One'] text-2xl md:text-4xl py-5 bg-black/50"
        speed={100}
        pauseOnHover
      >
        {softSkills.map((softSkill, i) => (
          <p key={i} className={`${i ? "mx-8" : "mr-8"}`}>
            {softSkill}
          </p>
        ))}
      </Marquee>
      <div className="flex flex-col md:flex-row grow gap-10 p-10 about-me">
        <div className="h-[20svh] md:h-auto md:basis-1/4 relative">
          <Image
            src={"/aboutMe1.jpg"}
            alt="About me 1"
            fill={true}
            sizes="100%"
            className="object-cover object-[15%_top] hover:object-[35%_top] rounded-xl duration-[5s]"
          />
        </div>
        <div className="flex flex-col gap-10 basis-[37.5%]">
          <div className="text-justify bg-[#495c78] p-5 rounded-lg border-2 border-[#CBB083]">
            Hi there ! I&apos;m Valentin 😊 <br /> I used to be a chemical
            engineer working in the field of food flavourings and I underwent a
            professional transition in 2024 to work in the Web Development
            field. <br />
            Find more information about my education/career in the &quot;My
            Journey&quot; section
          </div>
          <div className="flex grow gap-10 h-[30svh]">
            <div className="basis-1/2 hover:basis-full duration-200 relative">
              <Image
                src={"/aboutMe4.jpg"}
                alt="About me 4"
                fill={true}
                sizes="100%"
                className="object-cover object-[25%_top] rounded-xl"
              />
            </div>
            <div className="basis-1/2 hover:basis-full duration-200 relative">
              <Image
                src={"/aboutMe3.jpg"}
                alt="About me 3"
                fill={true}
                sizes="100%"
                className="object-cover object-[40%_top] rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 basis-[37.5%] ">
          <div className="md:basis-5/6 flex gap-10 order-2 h-[30svh] md:order-none">
            <div className="basis-1/3 hover:basis-full duration-200 relative">
              <Image
                src={"/aboutMe5.jpg"}
                alt="About me 5"
                fill={true}
                sizes="100%"
                className="object-cover object-[25%_top] rounded-xl"
              />
            </div>
            <div className="basis-1/3 hover:basis-full duration-200 relative">
              <Image
                src={"/aboutMe6.jpg"}
                alt="About me 6"
                fill={true}
                sizes="100%"
                className="object-cover object-[40%_top] rounded-xl"
              />
            </div>
            <div className="basis-1/3 hover:basis-full duration-200 relative">
              <Image
                src={"/aboutMe2.jpg"}
                alt="About me 2"
                fill={true}
                sizes="100%"
                className="object-cover object-[50%_top] rounded-xl"
              />
            </div>
          </div>
          <div className="text-justify bg-[#495c78] p-5 rounded-lg border-2 border-[#CBB083] basis-1/6 flex justify-center items-center order-1 md:order-none">
            On my free time, I&apos;m a bass and drum player, and I also like
            hitting the CrossFit Gym
          </div>
        </div>
      </div>
    </div>
  );
}
