/* eslint-disable @next/next/no-img-element */
import React from "react";
import ButtonSolidLight from "@/components/UI/ButtonSolidLight";

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse text-center gap-3 lg:gap-0 lg:text-start lg:flex-row justify-center overflow-hidden p-6 items-center bg-[#DFD4D8] lg:h-screen lg:rounded-bl-3xl lg:rounded-br-3xl">
      <div className="hero-text flex flex-col gap-4 md:w-[50%]">
        <h1 className="font-extrabold uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl w-full lg:w-[95%] text-[#7B3B4b]">
          Hello, I&apos;m Abanoub Refaat A Front-end Develper
        </h1>
        <p className="w-full flex justify-center items-center  lg:w-[90%] xl:w-[80%] text-lg sm:text-xl md:text-2xl text-[#7b3b4bd3]">
          I&apos;m a passionate front-end developer specializing in creating
          responsive, user-friendly web applications with React, Next.js,
          JavaScript, and Tailwind CSS. I have a strong understanding of core
          computer science principles.
        </p>
        <ButtonSolidLight
          title="Contact Me"
          styles="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 uppercase self-center lg:self-start"
        />
      </div>
      <div className="hero-img max-h-screen flex">
        <img
          src="images/hero-section-img-skills.png"
          alt="Abanoub Refaat image"
          className=""
        />
      </div>
    </section>
  );
};

export default HeroSection;
