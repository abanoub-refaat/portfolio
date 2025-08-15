"use client";
import React from "react";
import SkillComponentSolid from "./SkillComponentSolid";

interface Props {
  id: number;
  title: string;
  subtitle: string;
  startDate: string;
  endDate: string;
  location: string;
  describtion: string;
  techStack: Array<string>;
}

const ExperienceCard = ({ ...props }: Props) => {
  return (
    <section
      key={props.id}
      className=" justify-center items-center bg-white rounded-3xl p-6 m-2"
    >
      <div className="main-info felx flex-col gap-2">
        <div className="title-date-section gap-2 flex justify-between">
          <h3 className="font-bold text-lg">{props.title}</h3>
          <p className="date text-sm">
            {props.startDate} - {props.endDate}
          </p>
        </div>
        <div className="subtitle-location flex justify-between">
          <p className="subtitle text-sm">{props.subtitle}</p>
          <p className="location text-sm">{props.location}</p>
        </div>
      </div>

      <div className="desc felx flex-col mt-2 py-4">
        <h4 className="font-semibold">Job Description & Contributions:</h4>
        <p className="md:w-[70%]">{props.describtion}</p>
      </div>

      <div className="skills-used w-full flex flex-col gap-2 items-start ">
        <h4 className="font-semibold">Skills:</h4>
        <div className="flex gap-1 flex-wrap">
          {props.techStack.map((skill) => {
            return <SkillComponentSolid key={skill} name={skill} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceCard;
