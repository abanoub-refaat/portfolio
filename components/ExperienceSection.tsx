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
        spaceBetween={1}
        slidesPerView={2}
        className={
          "bg-[#DFD4D8] text-[#7B3B4b] items-center justify-center lg:rounded-tl-3xl lg:rounded-tr-3xl"
        }
        style={{
          display: "flex",
          flexDirection: "column-reverse",
          justifyContent: "center",
          alignItems: "center",
        }}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 1,
          },
          480: {
            slidesPerView: 1,
            spaceBetween: 1,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          524: {
            slidesPerView: 2,
            spaceBetween: 5,
          },
          1280: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
          1440: {
            slidesPerView: 3,
            spaceBetween: 5,
          },
        }}
      >
        <p className="mb-3 lowercase text-center text-sm md:text-lg">
          note: Scroll right or left to see more of my experiences ...
        </p>
        <h2 className="font-extrabold mt-3 text-3xl uppercase md:text-4xl">
          My Experience
        </h2>
        {experience.map((exp) => {
          return (
            <SwiperSlide
              key={exp.id}
              style={{
                marginRight: 0,
                height: "auto",
              }}
              className="!flex !items-stretch"
            >
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
