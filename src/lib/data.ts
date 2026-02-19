type experienceType = {
  companyName: string;
  role: string;
  from: string;
  to: string;
  description: string;
};

export const experienceData: experienceType[] = [
  {
    companyName: "TechNova Solutions",
    role: "Frontend Developer Intern",
    from: "May 2024",
    to: "Aug 2024",
    description:
      "Worked as a Frontend Developer Intern focusing on building modern, responsive, and accessible web interfaces using React and Tailwind CSS. Developed reusable UI components such as navigation bars, modals, dashboards, and dynamic forms that improved development speed across multiple projects. Collaborated closely with backend developers to integrate RESTful APIs and implemented efficient state management using React hooks and context API. Optimized application performance by reducing unnecessary re-renders and improving page load times by nearly 25%. Participated in code reviews, sprint planning, and daily standups in an Agile development environment.",
  },
  {
    companyName: "CodeCraft Labs",
    role: "Full Stack Developer",
    from: "Sep 2024",
    to: "Dec 2024",
    description:
      "Designed and developed a full-stack web application using Next.js, Node.js, Express, and MongoDB. Implemented secure authentication and authorization using JWT and role-based access control. Built a responsive dashboard with analytics, charts, and dynamic data visualization to track user activity and business metrics. Integrated third-party APIs for payment processing and email notifications. Improved backend performance by optimizing database queries and indexing MongoDB collections. Ensured clean and maintainable code using TypeScript and followed best practices for scalable application architecture.",
  },
  {
    companyName: "AI Innovate",
    role: "Machine Learning Intern",
    from: "Jan 2025",
    to: "Apr 2025",
    description:
      "Worked on developing NLP-based solutions including text summarization and intelligent chatbot systems. Preprocessed large datasets using Python and implemented machine learning models with scikit-learn and Hugging Face transformers. Evaluated model performance using precision, recall, and F1-score metrics and fine-tuned models to improve accuracy. Integrated AI features into web applications using REST APIs and deployed models for real-time inference. Collaborated with cross-functional teams to design user-friendly interfaces that allowed seamless interaction with AI-powered tools.",
  },
  {
    companyName: "PixelForge Studio",
    role: "UI/UX Developer",
    from: "Jun 2025",
    to: "Present",
    description:
      "Leading the design and development of visually appealing and user-centric interfaces using Figma, React, and Tailwind CSS. Designed complete design systems including typography, color palettes, spacing systems, and reusable components to maintain consistency across projects. Implemented complex animations and micro-interactions using Framer Motion to enhance user experience. Focused on accessibility standards (WCAG) and cross-browser compatibility. Collaborated with product managers and developers to translate business requirements into intuitive digital experiences while maintaining performance and scalability.",
  },
];
