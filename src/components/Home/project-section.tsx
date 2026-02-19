import {
  IconBrandGithub,
  IconBrandMongodb,
  IconBrandNextjs,
  IconBrandNodejs,
  IconBrandPrisma,
  IconBrandPython,
  IconBrandReact,
  IconBrandSocketIo,
  IconBrandTailwind,
  IconBrandTypescript,
  IconChartBar,
  IconDatabase,
  IconExternalLink,
  IconStack2,
} from "@tabler/icons-react";
import type { ReactNode } from "react";
import { projectDetails } from "@/lib/data";

const techMap: Record<
  string,
  { label: string; icon: ReactNode; className: string }
> = {
  react: {
    label: "React",
    icon: <IconBrandReact size={18} />,
    className: "text-sky-500",
  },
  nextjs: {
    label: "Next.js",
    icon: <IconBrandNextjs size={18} />,
    className: "text-neutral-800 dark:text-neutral-100",
  },
  typescript: {
    label: "TypeScript",
    icon: <IconBrandTypescript size={18} />,
    className: "text-blue-600",
  },
  tailwind: {
    label: "Tailwind",
    icon: <IconBrandTailwind size={18} />,
    className: "text-cyan-500",
  },
  python: {
    label: "Python",
    icon: <IconBrandPython size={18} />,
    className: "text-yellow-500",
  },
  nodejs: {
    label: "Node.js",
    icon: <IconBrandNodejs size={18} />,
    className: "text-green-600",
  },
  mongodb: {
    label: "MongoDB",
    icon: <IconBrandMongodb size={18} />,
    className: "text-emerald-600",
  },
  postgres: {
    label: "PostgreSQL",
    icon: <IconDatabase size={18} />,
    className: "text-indigo-500",
  },
  prisma: {
    label: "Prisma",
    icon: <IconBrandPrisma size={18} />,
    className: "text-violet-500",
  },
  socket: {
    label: "Socket.IO",
    icon: <IconBrandSocketIo size={18} />,
    className: "text-orange-500",
  },
  chart: {
    label: "Charts",
    icon: <IconChartBar size={18} />,
    className: "text-rose-500",
  },
};

export const ProjectSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 pt-4 sm:pt-8 pb-8">
      <p className="text-neutral-500 text-md font-semibold">Featured</p>
      <h2 className="text-black dark:text-white text-2xl font-bold pb-4">
        Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {projectDetails.map((project) => (
          <article
            key={project.title}
            className="w-full rounded-xl border border-neutral-200/80 bg-white/80 p-4 shadow-sm transition duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950/70"
          >
            <div className="flex items-start justify-between gap-3">
              <h3 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                {project.title}
              </h3>

              <div className="flex items-center gap-2 shrink-0">
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} repository`}
                  className="inline-flex items-center gap-1 rounded-md border border-neutral-300 px-2.5 py-1 text-xs font-medium text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                >
                  Repo
                  <IconBrandGithub size={14} />
                </a>
                <a
                  href={project.siteUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} live site`}
                  className="inline-flex items-center gap-1 rounded-md border border-neutral-300 px-2.5 py-1 text-xs font-medium text-neutral-700 hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                >
                  Site
                  <IconExternalLink size={14} />
                </a>
              </div>
            </div>

            <p className="pt-3 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              {project.description}
            </p>

            <div className="pt-4 flex items-center gap-2 flex-wrap">
              {project.technologies.map((technology) => {
                const tech = techMap[technology];
                if (!tech) {
                  return (
                    <span
                      key={technology}
                      title={technology}
                      className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-300 text-neutral-600 dark:border-neutral-700 dark:text-neutral-300"
                    >
                      <IconStack2 size={17} />
                    </span>
                  );
                }

                return (
                  <span
                    key={technology}
                    title={tech.label}
                    className={`inline-flex h-9 w-9 items-center justify-center rounded-md border border-neutral-300 bg-white dark:bg-neutral-900 dark:border-neutral-700 ${tech.className}`}
                  >
                    {tech.icon}
                  </span>
                );
              })}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
