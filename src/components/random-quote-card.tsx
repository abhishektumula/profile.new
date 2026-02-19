"use client";

import { IconReload, IconSparkles } from "@tabler/icons-react";
import { useMemo, useState } from "react";
import { funnyNonsenseQuotes } from "@/lib/quotes";

const randomQuote = () =>
  funnyNonsenseQuotes[Math.floor(Math.random() * funnyNonsenseQuotes.length)];

export const RandomQuoteCard = () => {
  const initialQuote = useMemo(() => randomQuote(), []);
  const [quote, setQuote] = useState<string>(initialQuote);

  return (
    <section className="w-full px-4 sm:px-6 pt-6 sm:pt-8 pb-10">
      <div className="relative overflow-hidden rounded-2xl border border-neutral-300/70 bg-gradient-to-br from-amber-100 via-rose-100 to-sky-100 p-5 shadow-xl dark:border-neutral-700/80 dark:from-neutral-900 dark:via-slate-900 dark:to-neutral-950 sm:p-6">
        <div className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full bg-yellow-300/35 blur-2xl dark:bg-cyan-500/25" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-pink-300/35 blur-2xl dark:bg-rose-500/25" />

        <div className="relative">
          <div className="flex items-center justify-between gap-2">
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-300/70 bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-neutral-700 dark:border-neutral-700 dark:bg-black/30 dark:text-neutral-200">
              <IconSparkles size={14} />
              Random Quote
            </div>
            <button
              onClick={() => setQuote(randomQuote())}
              className="inline-flex items-center gap-1 rounded-md border border-neutral-300 bg-white/70 px-2.5 py-1 text-xs font-medium text-neutral-700 transition hover:bg-white dark:border-neutral-700 dark:bg-black/30 dark:text-neutral-200 dark:hover:bg-black/40"
            >
              New one
              <IconReload size={13} />
            </button>
          </div>

          <p className="pt-4 text-xl leading-relaxed font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-2xl">
            <span>&ldquo;</span>
            {quote}
            <span>&rdquo;</span>
          </p>
        </div>
      </div>
    </section>
  );
};
