/* eslint-disable @next/next/no-img-element */
import React from "react";
import ButtonSolidLight from "@/components/UI/ButtonSolidLight";

const HeroSection = () => {
  return (
    <section className="flex px-8 items-center bg-[#DFD4D8] gap-5 h-screen">
      <div className="hero-text flex flex-col gap-4 px-4 w-[46%]">
        <h1 className="font-extrabold text-7xl w-[95%] text-[#7B3B4b]">
          Hello, I&apos;m Abanoub Refaat A Front-end Develper
        </h1>
        <p className="w-[75%] text-2xl text-[#7b3b4bd3]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit optio
          tempora natus laborum ut quos, repellat nemo exercitationem voluptate
          quis. Accusantium ex est cupiditate et dolore voluptates iusto dolorem
          debitis.
        </p>
        <ButtonSolidLight title="Contact Me" styles="w-1/4 uppercase" />
      </div>
      <div className="hero-img">
        <img
          src="images/hero-section-img-skills.png"
          alt="Abanoub Refaat image"
        />
      </div>
    </section>
  );
};

export default HeroSection;
