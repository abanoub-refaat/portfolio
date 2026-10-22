import React from "react";
import { experiences } from "@/data/experienceData";
import { SectionHeading } from "./SectionHeading";

export const ExperienceSection: React.FC = () => {
  return (
    <section className="panel-section experience" id="experience">
      <div className="page-shell experience-layout">
        <div className="experience-title">
          <SectionHeading
            number="02"
            title="EXPERIENCE"
            subtitle="THE JOURNEY SO FAR"
          />
          <p>
            Building robust architectures, fluid user experiences, and
            distributed systems across engineering and visual culture.
          </p>
        </div>

        <div className="timeline">
          {experiences.map((item) => (
            <article className="timeline-item" key={item.company}>
              <div className="company-logo">{item.logo}</div>
              <div>
                <span className="date">{item.date}</span>
                <h3>{item.role}</h3>
                <b>{item.company}</b>
                <p>{item.copy}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
