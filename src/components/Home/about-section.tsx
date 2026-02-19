import Image from "next/image";

const aboutText =
  "I design and build smart web applications and AI-driven tools using Python, React, and modern technologies. Passionate about clean UI, scalable systems, and solving real-world problems through code.";

const skills = [
  "next-js",
  "ts",
  "js",
  "python",
  "java",
  "postman",
  "postgres",
  "prisma",
  "react",
  "tailwind",
  "motion",
  "express",
];

export const AboutSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 pt-4 sm:pt-8">
      <p className="text-neutral-500 text-md font-semibold">Featured</p>
      <h2 className="text-black dark:text-white text-2xl font-bold pb-4">
        About Me
      </h2>

      <div className="w-full rounded-xl border border-neutral-200/80 bg-white/80 p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-950/70">
        <div className="flex flex-col items-stretch gap-4 sm:flex-row">
          <div className="w-full sm:w-52 md:w-56 shrink-0">
            <Image
              src="/profile.png"
              alt="Abhi profile"
              width={320}
              height={400}
              className="h-full w-full rounded-xl border border-neutral-300 object-cover dark:border-neutral-700"
            />
          </div>

          <div className="flex-1">
            <p className="text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              {aboutText}
            </p>

            <div className="pt-5">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-neutral-500 dark:text-neutral-400">
                Skills
              </h3>
              <div className="pt-2 flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md border border-neutral-300 bg-neutral-100 px-2.5 py-1 text-xs font-medium capitalize text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
