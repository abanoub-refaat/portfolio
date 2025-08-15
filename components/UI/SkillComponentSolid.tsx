import React from "react";

interface Props {
  name: string;
}

const SkillComponentSolid = ({ name }: Props) => {
  return (
    <div
      className={`rounded-full text-xs uppercase px-4 py-2 text-white bg-[#7B3B4b]`}
    >
      {name}
    </div>
  );
};

export default SkillComponentSolid;
