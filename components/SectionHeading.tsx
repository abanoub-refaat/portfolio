import React from "react";

interface SectionHeadingProps {
  number: string;
  title: string;
  subtitle: string;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  number,
  title,
  subtitle,
  className = "",
}) => {
  return (
    <header className={`section-heading ${className}`}>
      <span>{number}</span>
      <div>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <i />
    </header>
  );
};
