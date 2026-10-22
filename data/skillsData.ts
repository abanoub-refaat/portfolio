export interface SkillGroup {
  category: string;
  subtitle: string;
  icon: "window" | "server" | "phone" | "brain" | "stack";
  skills: {
    name: string;
    level?: string;
    featured?: boolean;
  }[];
}

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend Development",
    subtitle: "Modern, reactive, and accessible web experiences",
    icon: "window",
    skills: [
      { name: "Next.js", featured: true },
      { name: "React.js", featured: true },
      { name: "TypeScript", featured: true },
      { name: "JavaScript (ES6+)", featured: true },
      { name: "Tailwind CSS", featured: true },
      { name: "Vite", featured: true },
      { name: "Bootstrap" },
      { name: "SASS & Compose" },
    ],
  },
  {
    category: "Backend & Systems",
    subtitle: "Scalable APIs, databases, and robust server architectures",
    icon: "server",
    skills: [
      { name: "Node.js", featured: true },
      { name: "Express.js", featured: true },
      { name: "Java", featured: true },
      { name: "Python", featured: true },
      { name: "RESTful APIs", featured: true },
      { name: "MongoDB", featured: true },
      { name: "MySQL & Oracle XE" },
      { name: "Firebase / Firestore" },
      { name: "Hibernate & SQL" },
    ],
  },
  {
    category: "Mobile Development",
    subtitle: "Cross-platform mobile apps with offline-first synchronization",
    icon: "phone",
    skills: [
      { name: "React Native & Expo", featured: true },
      { name: "Offline-First Sync & AsyncStorage", featured: true },
      { name: "Firebase Auth & Firestore" },
      { name: "Kotlin & Dart" },
      { name: "Jetpack Compose" },
    ],
  },
  {
    category: "AI / ML & Engineering Tools",
    subtitle:
      "Machine learning pipelines, networking, and development workflows",
    icon: "brain",
    skills: [
      { name: "TensorFlow & PyTorch", featured: true },
      { name: "Scikit-learn, NumPy & Pandas", featured: true },
      { name: "Git & GitHub CI/CD", featured: true },
      { name: "Linux (Fedora / Ubuntu)", featured: true },
      { name: "Scapy & PySide6" },
      { name: "Docker & Bash Scripting" },
    ],
  },
];
