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
    <section key={props.id} className=" h-auto bg-white rounded-3xl p-4 m-2">
      <div className="main-info felx flex-col gap-2">
        <div className="title-date-section flex justify-between">
          <h3 className="font-bold">{props.title}</h3>
          <p className="date">
            {props.startDate} - {props.endDate}
          </p>
        </div>
        <div className="subtitle-location flex justify-between">
          <p className="subtitle">{props.subtitle}</p>
          <p className="location">{props.location}</p>
        </div>
      </div>

      <div className="desc felx flex-col mt-2">
        <h4 className="font-semibold">Job Description & Contributions:</h4>
        <p>{props.describtion}</p>
      </div>

      <div className="skills-used flex flex-col gap-2 items-start ">
        <h4 className="font-semibold">Skills:</h4>
        <div className="flex gap-1">
          {props.techStack.map((skill) => {
            return <SkillComponentSolid key={skill} name={skill} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default ExperienceCard;
