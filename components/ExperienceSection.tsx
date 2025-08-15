"use client";
import React from "react";
import experience from "@/data/experience";
import ExperienceCard from "./UI/ExperienceCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

const ExperienceSection = () => {
  return (
    <>
      <Swiper
        spaceBetween={2}
        slidesPerView={1}
        className={
          "bg-[#DFD4D8] text-[#7B3B4b] items-center justify-center lg:rounded-tl-3xl lg:rounded-tr-3xl"
        }
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          padding: 10,
        }}
      >
        <p className="mb-3 lowercase">
          note: Scroll right and left to see more of my experiences ...
        </p>
        <h2 className="font-extrabold mt-3 text-3xl uppercase md:text-4xl">
          My Experience
        </h2>
        {experience.map((exp) => {
          return (
            <SwiperSlide key={exp.id}>
              <ExperienceCard
                id={exp.id}
                title={exp.title}
                subtitle={exp.subtitle}
                startDate={exp.startDate}
                endDate={exp.endDate}
                location={exp.location}
                describtion={exp.describtion}
                techStack={exp.techStack}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default ExperienceSection;
