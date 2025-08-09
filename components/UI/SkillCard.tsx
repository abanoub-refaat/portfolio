import Image from "next/image";
import React from "react";

interface Props {
  icon: string;
  name: string;
  exp: number;
}

const SkillCard = ({ ...props }: Props) => {
  return (
    <div className="flex flex-col items-center text-center gap-5 justify-center px-5">
      <div className="skill-icon flex w-fit rounded-full bg-[#ffffff] p-5 items-center justify-center">
        <Image src={props.icon} alt={props.name} width={50} height={50} />
      </div>
      <div className="flex flex-col">
        <p className="text-2xl text-[#ffffff] font-bold">{props.name}</p>
        <p className="text-lg ">{props.exp} years of experience</p>
      </div>
    </div>
  );
};

export default SkillCard;
