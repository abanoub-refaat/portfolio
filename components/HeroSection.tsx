import { about } from "@/data/about";
import Image from "next/image";
import heroSectionImage from "@/public/icons/14723864_People_in_programming_01ung_01.svg";
import { LinkButton } from "./UI/LinkButton";

export const HeroSection = () => {
  return (
    <div className="flex flex-col lg:flex-row p-3 gap-4 lg:gap-6 justify-center items-center">
      <div className="info-section flex flex-col gap-3 lg:w-1/2">
        <div className="bg-emerald-50 border border-emerald-700 text-black text-xs font-medium px-1.5 py-0.5 rounded-full w-fit">
          {about.openToWork ? (
            <p> 🟢 Open To Work on roles {about.roles.join(" • ")}</p>
          ) : (
            <p>Currently Working ...</p>
          )}
        </div>
        <h1 className="text-6xl font-bold">{about.name}</h1>
        <p className="text-2xl italic">{about.subtitle}</p>
        <p className="max-w-2xl">{about.summary}</p>

        <div className="flex flex-row gap-3">
          <LinkButton title="Explore the Projects" isPrimary={true} link={""} />
          <LinkButton title="Download Resume" isPrimary={false} link={""} />
        </div>
      </div>
      <div className="flex flex-col">
        <Image src={heroSectionImage} alt="Picture of the author" />
      </div>
    </div>
  );
};
