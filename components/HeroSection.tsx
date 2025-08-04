/* eslint-disable @next/next/no-img-element */
import React from "react";
import ButtonSolidLight from "@/components/UI/ButtonSolidLight";

const HeroSection = () => {
  return (
    <section className="flex flex-col-reverse text-center justify-center lg:text-start lg:flex-row sm:px-6 md:px-8 items-center bg-[#DFD4D8] gap-5 min-h-screen lg:h-screen">
      <div className="hero-text flex flex-col gap-4 px-2 md:px-4 w-full lg:w-[46%]">
        <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-7xl w-full lg:w-[95%] text-[#7B3B4b]">
          Hello, I&apos;m Abanoub Refaat A Front-end Develper
        </h1>
        <p className="w-full flex justify-center items-center  lg:w-[85%] xl:w-[75%] text-lg sm:text-xl md:text-2xl text-[#7b3b4bd3]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit optio
          tempora natus laborum ut quos, repellat nemo exercitationem voluptate
          quis. Accusantium ex est cupiditate et dolore voluptates iusto dolorem
          debitis.
        </p>
        <ButtonSolidLight
          title="Contact Me"
          styles="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 uppercase self-center lg:self-start"
        />
      </div>
      <div className="hero-img w-full lg:w-auto flex justify-center">
        <img
          src="images/hero-section-img-skills.png"
          alt="Abanoub Refaat image"
          className="w-full max-w-md lg:max-w-none h-auto object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
