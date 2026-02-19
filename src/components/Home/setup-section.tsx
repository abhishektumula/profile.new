import {
  IconBrandGithub,
  IconCpu,
  IconExternalLink,
  IconTerminal2,
} from "@tabler/icons-react";
import Link from "next/link";

const TERMINAL_SETUP_URL = "https://github.com/abhishektumula/terminal-setup";
const EDITOR_SETUP_URL =
  "https://github.com/abhishektumula/terminal-setup#editor-setup";

export const SetupSection = () => {
  return (
    <section className="w-full px-4 sm:px-6 pt-4 sm:pt-8">
      <p className="text-neutral-500 text-md font-semibold">Featured</p>
      <h2 className="text-black dark:text-white text-2xl font-bold pb-4">
        Setup
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <article className="w-full rounded-xl border border-neutral-200/80 bg-white/80 p-4 shadow-sm transition duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950/70">
          <div className="flex items-center gap-2">
            <IconCpu
              size={18}
              className="text-neutral-700 dark:text-neutral-200"
            />
            <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Gear Section
            </h3>
          </div>
          <p className="pt-2 text-sm text-neutral-600 dark:text-neutral-300">
            Hardware and minimal setup details.
          </p>
          <Link
            href="/gear"
            className="mt-4 inline-flex items-center gap-1 rounded-md border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-800 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-900 cursor-not-allowed"
          >
            Open Gear
            <IconExternalLink size={13} />
          </Link>
        </article>

        <article className="w-full rounded-xl border border-neutral-200/80 bg-white/80 p-4 shadow-sm transition duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950/70">
          <div className="flex items-center gap-2">
            <IconTerminal2
              size={18}
              className="text-neutral-700 dark:text-neutral-200"
            />
            <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              Terminal Section
            </h3>
          </div>
          <p className="pt-2 text-sm text-neutral-600 dark:text-neutral-300">
            Terminal dotfiles and command-line setup.
          </p>
          <a
            href={TERMINAL_SETUP_URL}
            target="_blank"
            rel="noreferrer"
            className="mt-4 inline-flex items-center gap-1 rounded-md border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-800 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-900 cursor-not-allowed"
          >
            Open Terminal Setup
            <IconExternalLink size={13} />
          </a>
        </article>

        <article className="w-full rounded-xl border border-neutral-200/80 bg-white/80 p-4 shadow-sm transition duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950/70 sm:col-span-2">
          <div className="flex items-center gap-2">
            <IconBrandGithub
              size={18}
              className="text-neutral-700 dark:text-neutral-200"
            />
            <h3 className="text-lg font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
              VSCode/Cursor Setup Repo Links
            </h3>
          </div>
          <p className="pt-2 text-sm text-neutral-600 dark:text-neutral-300">
            Editor setup is included in the same repository.
          </p>
          <div className="pt-4 flex flex-wrap items-center gap-2">
            <a
              href={TERMINAL_SETUP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-800 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-900 cursor-not-allowed"
            >
              Terminal Setup Repo
              <IconExternalLink size={13} />
            </a>
            <a
              href={EDITOR_SETUP_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 rounded-md border border-neutral-300 px-3 py-1.5 text-xs font-medium text-neutral-800 transition hover:bg-neutral-100 dark:border-neutral-700 dark:text-neutral-100 dark:hover:bg-neutral-900"
            >
              VSCode/Cursor Section
              <IconExternalLink size={13} />
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};
