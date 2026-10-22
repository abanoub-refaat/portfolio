export interface ExperienceItem {
  logo: string;
  date: string;
  role: string;
  company: string;
  copy: string;
}

export const experiences: ExperienceItem[] = [
  {
    logo: "G",
    date: "AUG 2025 — SEP 2025",
    role: "Machine Learning Trainee",
    company: "Genius Technology Center",
    copy: "Completed an intensive 60-hour training track covering machine learning algorithms, model evaluation, and computer vision pipelines.",
  },
  {
    logo: "E",
    date: "JUL 2025 — JUL 2025",
    role: "Front-End Developer Intern",
    company: "EFG Holdings",
    copy: "Developed responsive UI components for the Cine Sphere platform using Next.js, TypeScript, and Tailwind CSS.",
  },
  {
    logo: "T",
    date: "NOV 2024 — SEP 2025",
    role: "Web Development Committee Member",
    company: "TechTalent",
    copy: "Constructed public event landing pages and web applications utilizing Next.js and TypeScript.",
  },
];
