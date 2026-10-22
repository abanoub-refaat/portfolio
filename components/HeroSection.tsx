"use client";

import React from "react";
import Image from "next/image";
import { about } from "@/data/about";
import { filterCategories } from "@/data/projectsData";
import { Icon } from "./Icon";

interface HeroSectionProps {
  activeFilter: string | null;
  onFilterChange: (filter: string | null) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  activeFilter,
  onFilterChange,
}) => {
  const handleFilterClick = (label: string) => {
    // If clicking already active filter, toggle off to show all
    if (activeFilter === label) {
      onFilterChange(null);
    } else {
      onFilterChange(label);
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content page-shell">
        <div className="hero-copy">
          <span className="eyebrow">{about.eyebrow}</span>
          <h1>
            {about.name}
            <em>{about.roleItalic1}</em>
            <em>&amp; {about.roleItalic2}</em>
          </h1>
          <p>{about.summary}</p>
          <a className="hero-link" href="#projects">
            Explore selected work <Icon name="arrow" />
          </a>
        </div>

        <div className="portrait-frame">
          <div className="portrait-orbit" />
          <Image
            src={about.portraitUrl}
            alt={`Portrait of ${about.name}`}
            width={820}
            height={1000}
            priority
            unoptimized
          />
          <span className="portrait-tag">{about.greetingTag}</span>
        </div>
      </div>

      <div
        className="filter-dock page-shell"
        aria-label="Filter work by discipline"
      >
        {filterCategories.map((filter) => {
          const isActive = activeFilter === filter.label;
          return (
            <button
              className={isActive ? "filter active" : "filter"}
              key={filter.label}
              onClick={() => handleFilterClick(filter.label)}
              type="button"
              title={`Filter projects by ${filter.label}`}
              aria-pressed={isActive}
            >
              <Icon name={filter.icon} />
              <span>{filter.label}</span>
            </button>
          );
        })}
      </div>
    </section>
  );
};
