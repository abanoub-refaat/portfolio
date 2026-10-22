import React from "react";

export type IconName =
  | "stack"
  | "window"
  | "phone"
  | "server"
  | "pen"
  | "brain"
  | "arrow"
  | "linkedin"
  | "dribbble"
  | "twitter"
  | "github"
  | "external-link"
  | "link"
  | "check";

interface IconProps {
  name: string;
  className?: string;
}

export const Icon: React.FC<IconProps> = ({ name, className }) => {
  const paths: Record<string, React.ReactNode> = {
    stack: (
      <>
        <path d="m3 7 9-4 9 4-9 4-9-4Z" />
        <path d="m3 12 9 4 9-4M3 17l9 4 9-4" />
      </>
    ),
    window: (
      <>
        <rect x="3" y="4" width="18" height="16" rx="2" />
        <path d="M3 9h18M8 4v5" />
      </>
    ),
    phone: (
      <>
        <rect x="6" y="2" width="12" height="20" rx="2" />
        <path d="M10 5h4M11 18h2" />
      </>
    ),
    server: (
      <>
        <rect x="3" y="4" width="18" height="6" rx="2" />
        <rect x="3" y="14" width="18" height="6" rx="2" />
        <path d="M7 7h.01M7 17h.01M11 7h7M11 17h7" />
      </>
    ),
    pen: (
      <>
        <path d="m12 19 7-7 2 2-7 7-4 1 2-3Z" />
        <path d="m17 5-9 9-5 1 1-5 9-9 4 4Z" />
      </>
    ),
    brain: (
      <>
        <path d="M9.5 2a4.5 4.5 0 0 0-4.5 4.5c0 .7.16 1.36.44 1.96A4.5 4.5 0 0 0 3 12.5a4.5 4.5 0 0 0 1.94 3.7A4.5 4.5 0 0 0 9.5 21H10V3h-.5Z" />
        <path d="M14.5 2a4.5 4.5 0 0 1 4.5 4.5c0 .7-.16 1.36-.44 1.96A4.5 4.5 0 0 1 21 12.5a4.5 4.5 0 0 1-1.94 3.7A4.5 4.5 0 0 1 14.5 21H14V3h.5Z" />
        <path d="M10 8h4M10 12h4M10 16h4" />
      </>
    ),
    arrow: <path d="M5 12h14M14 7l5 5-5 5" />,
    linkedin: (
      <>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <path d="M2 9h4v12H2zM4 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
      </>
    ),
    dribbble: (
      <>
        <circle cx="12" cy="12" r="10" />
        <path d="M8 3.2c4 4.9 6.4 10.1 7.5 17.5M2.2 10.5c6.6.2 11.5-1.6 15-5M5 19c3.2-4.5 8.3-6.4 16.6-4.7" />
      </>
    ),
    twitter: (
      <path d="M22 4s-1 3-3 4c4 8-5 14-12 10-2 0-5-2-5-2s3 0 4-2c-4-2-5-7-3-10 4 5 9 5 12 5-1-5 5-7 7-5Z" />
    ),
    github: (
      <>
        <path d="M15 22v-4c.1-1-.4-2-1-2.5 3.2-.4 6.5-1.6 6.5-7A5.4 5.4 0 0 0 19 4.7 5 5 0 0 0 18.8 1S17.7.6 15 2.5a13.4 13.4 0 0 0-7 0C5.3.6 4.2 1 4.2 1A5 5 0 0 0 4 4.7a5.4 5.4 0 0 0-1.5 3.8c0 5.4 3.3 6.6 6.5 7-.6.5-1.1 1.4-1 2.5v4" />
        <path d="M8 19c-3 .9-3-1.5-4-2" />
      </>
    ),
    "external-link": (
      <>
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </>
    ),
    link: (
      <>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </>
    ),
    check: <path d="M20 6 9 17l-5-5" />,
  };

  return (
    <svg
      viewBox="0 0 24 24"
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {paths[name] || null}
    </svg>
  );
};
