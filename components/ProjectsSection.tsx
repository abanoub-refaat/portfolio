"use client";

import React from "react";
import { projects, filterCategories } from "@/data/projectsData";
import { SectionHeading } from "./SectionHeading";
import { Icon } from "./Icon";

interface ProjectsSectionProps {
  activeFilter: string | null;
  onFilterChange: (filter: string | null) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  activeFilter,
  onFilterChange,
}) => {
  const displayedProjects = activeFilter
    ? projects.filter((project) => project.category === activeFilter)
    : projects;

  return (
    <section className="panel-section projects" id="projects">
      <div className="page-shell">
        <SectionHeading
          number="01"
          title="PROJECTS"
          subtitle="SELECTED WORK / 2024—26"
        />

        <div className="projects-filter-bar">
          <div className="projects-filter-pills">
            <button
              type="button"
              className={`filter-pill ${activeFilter === null ? "active" : ""}`}
              onClick={() => onFilterChange(null)}
            >
              ALL WORK ({projects.length})
            </button>
            {filterCategories.map((f) => (
              <button
                key={f.label}
                type="button"
                className={`filter-pill ${
                  activeFilter === f.label ? "active" : ""
                }`}
                onClick={() =>
                  onFilterChange(activeFilter === f.label ? null : f.label)
                }
              >
                {f.label}
              </button>
            ))}
          </div>

          <span className="hidden sm:inline-block">
            Showing {displayedProjects.length} of {projects.length}
          </span>
        </div>

        <div className="project-grid">
          {displayedProjects.map((project, index) => (
            <article
              className={`project-card ${project.tone}`}
              key={project.name}
            >
              <div className="project-art">
                <div className="project-art-top">
                  <span>{project.mark}</span>
                  {project.link && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-badge"
                      title={`Open ${project.name} repository or live site`}
                      aria-label={`Open ${project.name} repository or live site`}
                    >
                      <Icon name="external-link" />
                    </a>
                  )}
                </div>
                <div className="art-window">
                  <i />
                  <i />
                  <i />
                  <b>{String(index + 1).padStart(2, "0")}</b>
                </div>
              </div>

              <p>{project.type}</p>

              <div className="project-title-row">
                <h3>{project.name}</h3>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-title-link"
                    title={`View ${project.name} repository or live project`}
                    aria-label={`View ${project.name} repository or live project`}
                  >
                    <Icon name="external-link" />
                  </a>
                )}
              </div>

              {project.description && (
                <p className="text-[13px] leading-relaxed text-[#554d47] mt-2 font-normal">
                  {project.description}
                </p>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
