import { PublicHandles } from "./handels";

export const HeroSection = () => {
  const data =
    // "I design and build smart web applications and AI-driven tools using Python, React, and modern technologies. Passionate about clean UI, scalable systems, and solving real-world problems through code.";
    "Full-stack developer crafting AI-powered products, modern web experiences, and scalable digital solutions.";
  return (
    <div className="w-full max-w-2xl px-4 pt-4 text-base font-medium text-neutral-800 dark:text-neutral-200 sm:px-6 sm:pt-6 sm:text-lg">
      <div className="w-full">
        <h1 className="text-4xl w-full">
          Hi,I'm Abhi {""}
          <span className="text-xl text-neutral-600 dark:text-neutral-600">
            -Full Stack Web Developer
          </span>
        </h1>
      </div>
      <div className="py-4 text-neutral-500">{data}</div>
      <div className="py-2">
        <PublicHandles />
      </div>
    </div>
  );
};
