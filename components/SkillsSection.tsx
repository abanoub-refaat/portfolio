import React from "react";
import skills from "@/data/skills";
import SkillCard from "@/components/UI/SkillCard";

const SkillsSection = () => {
  return (
    <div className="flex flex-col gap-5 p-6 justify-center items-center flex-wrap bg-[#7B3B4b] txet-[#DFD4D8]">
      <h2 className="font-extrabold text-3xl m-3 uppercase md:text-4xl text-[#DFD4D8]">
        My Skills
      </h2>
      <div className="skills-section justify-center flex flex-wrap">
        {skills.map((el) => (
          <SkillCard
            icon={el.icon}
            name={el.name}
            exp={el.experience}
            key={el.name}
          />
        ))}
      </div>
    </div>
  );
};

export default SkillsSection;
