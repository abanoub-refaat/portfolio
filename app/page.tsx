"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ExperienceSection } from "@/components/ExperienceSection";
import { GraphicDesignSection } from "@/components/GraphicDesignSection";
import { SkillsSection } from "@/components/SkillsSection";
import { ContactSection } from "@/components/ContactSection";

export default function Home() {
  const [activeFilter, setActiveFilter] = useState<string | null>("FULLSTACK");

  return (
    <main className="landing">
      <Navbar />
      <HeroSection
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <ProjectsSection
        activeFilter={activeFilter}
        onFilterChange={setActiveFilter}
      />
      <ExperienceSection />
      <GraphicDesignSection />
      <SkillsSection />
      <ContactSection />
    </main>
  );
}
