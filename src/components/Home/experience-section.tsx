"use client";
import { useState } from "react";
import { IconArrowDown, IconArrowAutofitUp } from "@tabler/icons-react";
import { experienceData } from "@/lib/data";
import { AnimatePresence, motion } from "motion/react";

export const ExperienceBlock = () => {
  const [expand, setExpand] = useState<number | null>(0);

  const onToggle = (idx: number) => {
    setExpand((prev) => (prev === idx ? null : idx));
  };

  const toBullets = (text: string) =>
    text
      .split(/(?<=[.!?])\s+/)
      .map((line) => line.trim())
      .filter(Boolean);

  return (
    <div className="w-full px-4 sm:px-6 pt-4 sm:pt-8">
      <p className="text-neutral-500 text-md font-semibold">Featured</p>
      <h1 className="text-black dark:text-white text-2xl font-bold pb-4">
        Experience
      </h1>
      <div className="flex flex-col items-start justify-start gap-4">
        {experienceData.map((each, idx) => (
          <motion.article
            key={each.companyName}
            layout
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="relative w-full overflow-hidden rounded-xl border border-neutral-200/80 bg-white/80 shadow-sm backdrop-blur transition duration-300 hover:shadow-lg dark:border-neutral-800 dark:bg-neutral-950/70"
          >
            {expand === idx ? (
              <motion.div
                layoutId="experience-active-card"
                className="pointer-events-none absolute inset-0 "
                // bg-linear-to-r from-blue-500/10 via-cyan-400/8 to-emerald-400/10 => add this line to give the gradinet background for the Experiecn
              />
            ) : null}

            <div className="relative w-full h-full flex flex-row items-center justify-between gap-3 px-4 py-3">
              <div className="w-full h-full flex flex-col items-start justify-start gap-2 flex-1">
                <div className="w-full flex items-center justify-start gap-2">
                  <h4 className="text-lg font-semibold tracking-tight text-slate-900 dark:text-slate-100">
                    {each.companyName}
                  </h4>
                  <button
                    aria-label={`Toggle ${each.companyName} details`}
                    onClick={() => onToggle(idx)}
                    className="p-1.5 border border-neutral-300/80 rounded-md text-neutral-700 hover:bg-neutral-100 transition dark:border-neutral-700 dark:text-neutral-200 dark:hover:bg-neutral-800"
                  >
                    {expand === idx ? (
                      <IconArrowAutofitUp size={16} />
                    ) : (
                      <IconArrowDown size={16} />
                    )}
                  </button>
                </div>
                <div>
                  <p className="tracking-tight leading-tight font-medium text-sky-700 dark:text-sky-300">
                    {each.role}
                  </p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-start py-2 px-1 sm:px-3">
                <p className="uppercase tracking-wide text-[11px] text-neutral-500 dark:text-neutral-400">
                  Duration
                </p>
                <h5 className="text-sm font-semibold text-emerald-700 dark:text-emerald-300">
                  {each.from} - {each.to}
                </h5>
              </div>
            </div>

            <AnimatePresence initial={false}>
              {idx === expand ? (
                <motion.div
                  key="description"
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <motion.div
                    layoutId="experience-description"
                    className="px-4 pb-4 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300"
                  >
                    <ul className="list-disc space-y-1.5 pl-5 marker:text-sky-500 dark:marker:text-sky-400">
                      {toBullets(each.description).map((point) => (
                        <li key={point}>{point}</li>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>
          </motion.article>
        ))}
      </div>
    </div>
  );
};
