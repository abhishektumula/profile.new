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
import Link from "next/link";
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

type ProjectSectionProps = {
  limit?: number;
  showAllButton?: boolean;
  columns?: 1 | 2;
};

export const ProjectSection = ({
  limit,
  showAllButton = false,
  columns = 1,
}: ProjectSectionProps) => {
  const visibleProjects =
    typeof limit === "number" ? projectDetails.slice(0, limit) : projectDetails;

  const gridClass = columns === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1";

  return (
    <section className="w-full px-4 sm:px-6 pt-4 sm:pt-8 pb-8">
      <p className="text-neutral-500 text-md font-semibold">Featured</p>
      <h2 className="text-black dark:text-white text-2xl font-bold pb-4">
        Projects
      </h2>

      <div className={`grid ${gridClass} gap-5`}>
        {visibleProjects.map((project) => (
          <article
            key={project.title}
            className="w-full rounded-xl border border-neutral-200/80 bg-white/80 p-4 sm:p-5 shadow-md transition duration-300 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-950/70"
          >
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2">
                <h3 className="text-2xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                  {project.title}
                </h3>
                <a
                  href={project.siteUrl.trim().length > 0 ? project.siteUrl : project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`${project.title} project link`}
                  className="text-neutral-600 transition hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-neutral-100"
                >
                  <IconExternalLink size={16} />
                </a>
              </div>

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
                {project.siteUrl.trim().length > 0 ? (
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
                ) : null}
              </div>
            </div>

            <p className="pt-4 text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
              {project.description}
            </p>

            <div className="pt-5 flex items-center gap-2 flex-wrap">
              {Array.from(new Set(["nextjs", ...project.technologies])).map(
                (technology) => {
                  const tech = techMap[technology];
                  if (!tech) {
                    return (
                      <span
                        key={technology}
                        title={technology}
                        className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-300 text-neutral-600 dark:border-neutral-700 dark:text-neutral-300"
                      >
                        <IconStack2 size={18} />
                      </span>
                    );
                  }

                  return (
                    <span
                      key={technology}
                      title={tech.label}
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-md border border-neutral-300 bg-white dark:bg-neutral-900 dark:border-neutral-700 ${tech.className}`}
                    >
                      {tech.icon}
                    </span>
                  );
                },
              )}
            </div>
          </article>
        ))}
      </div>

      {showAllButton && projectDetails.length > visibleProjects.length ? (
        <div className="pt-6 w-full flex items-center justify-center">
          <Link
            href="/projects"
            className="inline-flex w-full items-center justify-center gap-2 rounded-md border border-neutral-300 bg-neutral-100 px-3 py-2 text-sm font-medium text-neutral-800 transition hover:bg-neutral-200 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-100 dark:hover:bg-neutral-800"
          >
            Show all projects
            <IconExternalLink size={14} />
          </Link>
        </div>
      ) : null}
    </section>
  );
};
