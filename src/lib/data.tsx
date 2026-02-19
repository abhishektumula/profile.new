export type ExperienceType = {
  companyName: string;
  role: string;
  from: string;
  to: string;
  description: string;
};

export const experienceData: ExperienceType[] = [
  {
    companyName: "HCL Tech",
    role: "Frontend Engineer",
    from: "July 2024",
    to: "Oct 2024",
    description:
      "Worked as a Frontend Engineer responsible for developing responsive, scalable, and user-friendly web applications using modern frontend technologies. Built reusable UI components and optimized performance to ensure fast loading and smooth user experience across devices. Collaborated with designers, backend engineers, and product managers to implement new features, debug issues, and enhance existing modules. Followed best practices such as component reusability, clean architecture, and maintainable code structure. Focused on improving accessibility, cross-browser compatibility, and consistent design implementation across the platform.",
  },
  {
    companyName: "Slash Mark",
    role: "project Intern/ Data Science Intern",
    from: "May 2024",
    to: "June 2024",
    description:
      "Worked as a Data Science Intern assisting in data preprocessing, cleaning, and exploratory analysis to support machine learning model development. Handled structured datasets and performed transformations using Python libraries such as Pandas and NumPy. Contributed to building and testing basic machine learning models while learning core concepts of data science workflows, feature engineering, and model evaluation. Supported the team in improving dataset quality, organizing data pipelines, and understanding performance metrics like accuracy, precision, and recall. Collaborated with team members to document insights and ensure efficient data handling for model training.",
  },
];

export type ProjectDetail = {
  title: string;
  description: string;
  repoUrl: string;
  siteUrl: string;
  technologies: string[];
};

export const projectDetails: ProjectDetail[] = [
  {
    title: "Comet",
    description:
      "Comet is an AI-powered call agent designed to automate customer outreach and convert leads into paying customers. It intelligently interacts with users, evaluates responses in real time, and generates structured reports for administrators. The system focuses on improving lead qualification, automating follow-ups, and increasing conversion rates through smart AI-driven communication workflows.",
    repoUrl: "https://github.com/abhishektumula/comet.git",
    siteUrl: "",
    technologies: ["nextjs", "typescript", "nodejs", "ai", "mongodb"],
  },
  {
    title: "s2Chat",
    description:
      "S2 is a privacy-focused real-time chat application built using WebSockets for secure one-to-one communication. The platform emphasizes simplicity, speed, and user privacy, allowing developers to clone the repository and deploy their own private chat instance. It supports low-latency messaging and clean, minimal UI design.",
    repoUrl: "https://github.com/abhishektumula/s2.git",
    siteUrl: "",
    technologies: ["react", "nodejs", "mongodb", "websocket", "tailwind"],
  },
  {
    title: "AI Companion",
    description:
      "AI Companion is a supportive digital assistant designed to provide a safe and non-judgmental conversational space. It focuses on empathetic interactions, helping users freely express thoughts and emotions while ensuring privacy and comfort. The system integrates conversational AI with a clean user interface to create a calming and supportive digital experience.",
    repoUrl: "https://github.com/abhishektumula/AI-Companion-2025",
    siteUrl: "",
    technologies: ["react", "typescript", "mongodb", "ai", "tailwind"],
  },
  {
    title: "TweetBox",
    description:
      "TweetBox is a lightweight microblogging-style application that allows users to post and interact with short-form content. The project focuses on implementing CRUD operations, responsive UI components, and basic content management workflows while maintaining a clean and intuitive interface.",
    repoUrl: "https://github.com/abhishektumula/TweetBox.git",
    siteUrl: "",
    technologies: ["react", "nodejs", "mongodb", "tailwind"],
  },
  {
    title: "FunProject",
    description:
      "FunProject is an experimental application built to explore creative frontend concepts and interactive UI features. It focuses on implementing dynamic components, animations, and engaging user interactions while improving hands-on experience with modern web technologies.",
    repoUrl: "https://github.com/abhishektumula/funP.git",
    siteUrl: "",
    technologies: ["javascript", "react", "css"],
  },
  {
    title: "Interior Design Freelance Project",
    description:
      "A freelance project developed for an interior design client to showcase services, portfolio work, and contact information. The application emphasizes modern design aesthetics, responsive layouts, and smooth navigation to create a visually appealing and professional online presence for the business.",
    repoUrl: "https://github.com/abhishektumula/FLP-1.git",
    siteUrl: "",
    technologies: ["react", "nextjs", "tailwind", "typescript"],
  },
];
