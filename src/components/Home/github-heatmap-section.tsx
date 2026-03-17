import Image from "next/image";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";

const GITHUB_USERNAME = "abhishektumula";
const GITHUB_PROFILE_URL = `https://github.com/${GITHUB_USERNAME}`;
const GITHUB_HEATMAP_URL = `https://ghchart.rshah.org/4b5563/${GITHUB_USERNAME}`;

export const GithubHeatmapSection = () => {
  return (
    <section className="w-full px-4 pt-4 pb-2 sm:px-6 sm:pt-8">
      <p className="text-md font-semibold text-neutral-500">Featured</p>
      <div className="flex items-center justify-between gap-3 pb-4">
        <h2 className="text-2xl font-bold text-black dark:text-white">
          My Coding Journey
        </h2>
        <a
          href={GITHUB_PROFILE_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-xs font-medium text-neutral-600 transition hover:bg-neutral-100 hover:text-neutral-900 dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-white"
        >
          Profile
          <IconExternalLink size={13} />
        </a>
      </div>

      <article className="w-full rounded-xl border border-neutral-200/80 bg-white p-4 shadow-sm dark:border-neutral-800 dark:bg-neutral-950">
        <div className="flex flex-wrap items-center justify-between gap-3 pb-4">
          <div className="flex items-center gap-2">
            <IconBrandGithub
              size={18}
              className="text-neutral-700 dark:text-neutral-200"
            />
            <p className="text-sm text-neutral-600 dark:text-neutral-300">
              Contributions from the last year
            </p>
          </div>
          <p className="text-xs text-neutral-500 dark:text-neutral-400">
            github.com/{GITHUB_USERNAME}
          </p>
        </div>

        <div className="overflow-x-auto rounded-lg bg-neutral-50 p-3 dark:bg-neutral-900/80">
          <Image
            src={GITHUB_HEATMAP_URL}
            alt="Abhishek Tumula GitHub contribution heatmap"
            width={720}
            height={112}
            unoptimized
            className="min-w-[720px] w-full max-w-none opacity-95 grayscale dark:brightness-110 dark:invert"
          />
        </div>

        <div className="flex items-center justify-end gap-2 pt-3 text-[11px] text-neutral-500 dark:text-neutral-400">
          <span>Less</span>
          <span className="h-2.5 w-2.5 rounded-sm bg-neutral-200 dark:bg-neutral-800" />
          <span className="h-2.5 w-2.5 rounded-sm bg-neutral-300 dark:bg-neutral-700" />
          <span className="h-2.5 w-2.5 rounded-sm bg-neutral-500 dark:bg-neutral-500" />
          <span className="h-2.5 w-2.5 rounded-sm bg-neutral-700 dark:bg-neutral-300" />
          <span>More</span>
        </div>
      </article>
    </section>
  );
};
