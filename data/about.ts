export interface About {
  name: string;
  eyebrow: string;
  subtitle: string;
  roleItalic1: string;
  roleItalic2: string;
  summary: string;
  resumeUrl: string;
  openToWork: boolean;
  roles: string[];
  location: string;
  greetingTag: string;
  portraitUrl: string;
  officeUrl: string;
}

export const about: About = {
  name: "ABANOUB REFAAT IBRAHIM",
  eyebrow: "BASED IN CAIRO · EGYPT",
  subtitle: "Junior Fullstack Developer & Software Engineer",
  roleItalic1: "SOFTWARE ENGINEER",
  roleItalic2: "FULLSTACK & MOBILE DEVELOPER",
  summary:
    "Junior Software Engineer with a B.Sc. in Computer Science from the Faculty of Science, Cairo University (Ranked 23rd in the department). Specialized in full-stack web and mobile development, combining solid backend fundamentals with modern frontend frameworks like React, Next.js, and Tailwind CSS.",
  resumeUrl: "/Abanoub_Refaat_Ibrahim-Frontend_Developer.pdf",
  openToWork: true,
  roles: [
    "Fullstack Developer",
    "Software Engineer",
    "Mobile Developer",
    "Frontend Developer",
  ],
  location: "Cairo, Egypt",
  greetingTag: "HELLO, I’M ABANOUB",
  portraitUrl:
    "https://res.cloudinary.com/dynw2az0g/image/upload/v1792686494/copy_of_picsart_26-06-30_13-48-53-519_pkowr3.png",
  officeUrl:
    "https://res.cloudinary.com/dynw2az0g/image/upload/v1792686494/copy_of_picsart_26-06-30_13-48-53-519_pkowr3.png",
};
