import React from "react";
import { skillGroups } from "@/data/skillsData";
import { SectionHeading } from "./SectionHeading";
import { Icon } from "./Icon";

export const SkillsSection: React.FC = () => {
  return (
    <section className="panel-section skills" id="skills">
      <div className="page-shell">
        <SectionHeading
          number="04"
          title="TECHNICAL SKILLS"
          subtitle="PROFICIENCIES & TOOLKIT"
        />

        <div className="skills-grid">
          {skillGroups.map((group) => (
            <div className="skill-card" key={group.category}>
              <div className="skill-card-header">
                <div className="skill-card-icon">
                  <Icon name={group.icon} />
                </div>
                <div>
                  <h3>{group.category}</h3>
                  <p>{group.subtitle}</p>
                </div>
              </div>

              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`skill-tag ${skill.featured ? "featured" : ""}`}
                  >
                    {skill.featured && <i className="featured-dot" />}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
