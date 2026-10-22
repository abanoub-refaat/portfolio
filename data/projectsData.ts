export interface Project {
  name: string;
  type: string;
  category:
    | "FULLSTACK"
    | "FRONTEND"
    | "BACKEND"
    | "MOBILE"
    | "AI/ML"
    | "GRAPHIC DESIGN";
  tone: "sand" | "stone" | "ink" | "sage" | "clay" | "paper";
  mark: string;
  description?: string;
  link?: string;
  githubUrl?: string;
  liveUrl?: string;
}

export const filterCategories = [
  { label: "FULLSTACK", icon: "stack" },
  { label: "FRONTEND", icon: "window" },
  { label: "MOBILE", icon: "phone" },
  { label: "BACKEND", icon: "server" },
  { label: "AI/ML", icon: "brain" },
  { label: "GRAPHIC DESIGN", icon: "pen" },
] as const;

export type FilterCategory = (typeof filterCategories)[number]["label"];

export const projects: Project[] = [
  {
    name: "Odorata",
    type: "Fullstack · 2026",
    category: "FULLSTACK",
    tone: "sand",
    mark: "ODR",
    description:
      "Luxury fragrance e-commerce storefront featuring product catalog, TanStack Query caching, and Zustand state management.",
    link: "https://odorata-mu.vercel.app/",
    githubUrl: "https://odorata-mu.vercel.app/",
  },
  {
    name: "Aethel",
    type: "Mobile · 2026",
    category: "MOBILE",
    tone: "sage",
    mark: "ATH",
    description:
      "Mobile app automating device wallpaper rotation with classical art and AI-generated stories.",
    link: "https://github.com/abanoub-refaat/aethel-mobile",
    githubUrl: "https://github.com/abanoub-refaat/aethel-mobile",
  },
  {
    name: "Ironwall",
    type: "Backend · 2026",
    category: "BACKEND",
    tone: "ink",
    mark: "IRN",
    description:
      "Network security AI agent featuring ML anomaly detection, Scapy packet sniffing, and a PySide6 live dashboard.",
    link: "https://github.com/abanoub-refaat/Ironwall-AI-netwrok-security",
    githubUrl: "https://github.com/abanoub-refaat/Ironwall-AI-netwrok-security",
  },
  {
    name: "California Housing ML",
    type: "AI/ML · 2026",
    category: "AI/ML",
    tone: "stone",
    mark: "CHM",
    description:
      "End-to-end machine learning regression pipeline for predicting housing prices featuring feature engineering and model evaluation.",
    link: "https://github.com/abanoub-refaat/california-housing-end-to-end-ml",
    githubUrl:
      "https://github.com/abanoub-refaat/california-housing-end-to-end-ml",
  },
  {
    name: "Arabic Digit Recognition CNN",
    type: "AI/ML · 2026",
    category: "AI/ML",
    tone: "clay",
    mark: "ADR",
    description:
      "Deep learning image classification model utilizing Convolutional Neural Networks (CNNs) to recognize handwritten Arabic digits.",
    link: "https://github.com/abanoub-refaat/arabic-handwritten-digit-recognition-cnn",
    githubUrl:
      "https://github.com/abanoub-refaat/arabic-handwritten-digit-recognition-cnn",
  },
  {
    name: "Diabetes Prediction Model",
    type: "AI/ML · 2025",
    category: "AI/ML",
    tone: "paper",
    mark: "DBT",
    description:
      "Predictive classification model designed to assess diabetes risk using clinical health indicators and data preprocessing.",
    link: "https://github.com/abanoub-refaat/gtc-diabetes-predection-model",
    githubUrl:
      "https://github.com/abanoub-refaat/gtc-diabetes-predection-model ",
  },
  {
    name: "Hotel Bookings Analysis",
    type: "AI/ML · 2025",
    category: "AI/ML",
    tone: "sand",
    mark: "HBA",
    description:
      "Exploratory data analysis (EDA) and machine learning classification models built to predict hotel booking cancellations.",
    link: "https://github.com/abanoub-refaat/gtc-ml-project1-hotel-bookings",
    githubUrl:
      "https://github.com/abanoub-refaat/gtc-ml-project1-hotel-bookings",
  },
  {
    name: "Brain Tumor Detection API",
    type: "AI/ML · 2025",
    category: "AI/ML",
    tone: "stone",
    mark: "BTD",
    description:
      "Deep learning REST API for classifying brain tumor types from MRI images using a CNN model trained in Python.",
    link: "github.com/abanoub-refaat/Comp415-brain-tumer-detection-model-Final-Project",
    githubUrl:
      "github.com/abanoub-refaat/Comp415-brain-tumer-detection-model-Final-Project",
  },
  {
    name: "Cine Sphere",
    type: "Frontend · 2025",
    category: "FRONTEND",
    tone: "stone",
    mark: "CNE",
    description:
      "Multi-page OTT platform UI built from scratch using Next.js, Tailwind CSS, and TypeScript.",
    link: "https://github.com/abanoub-refaat/cine-sphere-app",
    githubUrl: "https://github.com/abanoub-refaat/cine-sphere-app",
  },
  {
    name: "Homy",
    type: "Mobile · 2025",
    category: "MOBILE",
    tone: "paper",
    mark: "HMY",
    description:
      "Student housing mobile app with real-time Firebase integration, authentication, and an admin dashboard.",
    link: "https://github.com/abanoub-refaat/Homy_CS303_StudentHousingApp",
    githubUrl: "https://github.com/abanoub-refaat/Homy_CS303_StudentHousingApp",
  },

  {
    name: "DealZone",
    type: "Fullstack · 2024",
    category: "FULLSTACK",
    tone: "sand",
    mark: "DLZ",
    description:
      "Full-stack e-commerce platform with product browsing, cart management, and user authentication backed by MongoDB and Express.js.",
    link: "https://github.com/abanoub-refaat/CS309_EcommerceProject_Front-end",
    githubUrl:
      "https://github.com/abanoub-refaat/CS309_EcommerceProject_Front-end",
  },
  {
    name: "Wack-a-Rabbit Game",
    type: "Backend · 2024",
    category: "BACKEND",
    tone: "clay",
    mark: "WAR",
    description:
      "2D OpenGL game built in Java featuring a scoring system, smooth animations, and progressive difficulty levels using OOP architecture.",
    link: "https://github.com/abanoub-refaat/CS309-Final-Project-Wack-a-Rabbit",
    githubUrl:
      "https://github.com/abanoub-refaat/CS309-Final-Project-Wack-a-Rabbit",
  },
];
