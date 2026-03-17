import { Container } from "@/components/container";
import { NavBar } from "@/components/navbar";
import { RandomQuoteCard } from "@/components/random-quote-card";
import { SiteFooter } from "@/components/site-footer";
import { IconArrowRight, IconBellRinging, IconSparkles } from "@tabler/icons-react";

export default function ShowcasePage() {
  return (
    <div className="w-full min-h-screen bg-white text-black dark:bg-black dark:text-white">
      <Container className="min-h-screen">
        <NavBar />
        <section className="flex h-32 w-full items-center justify-center px-4 pt-6 text-center sm:h-40 sm:px-6 sm:pt-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              Showcase
            </h1>
            <p className="pt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              A curated space for selected work, experiments, and launches.
            </p>
          </div>
        </section>

        <section className="w-full px-4 pb-10 sm:px-6">
          <div className="relative overflow-hidden rounded-[28px] bg-neutral-100/90 p-5 shadow-[0_18px_50px_rgba(15,23,42,0.08)] dark:bg-neutral-950/90 dark:shadow-[0_24px_60px_rgba(0,0,0,0.35)] sm:p-7">
            <div className="relative grid gap-6 lg:grid-cols-[1.35fr_0.65fr]">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/80 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-neutral-600 dark:bg-neutral-900/80 dark:text-neutral-300">
                  <IconSparkles size={14} />
                  Upcoming
                </div>

                <h2 className="max-w-xl pt-5 text-3xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100 sm:text-4xl">
                  Showcase is being shaped into something sharper.
                </h2>
                <p className="max-w-2xl pt-4 text-sm leading-7 text-neutral-600 dark:text-neutral-300 sm:text-base">
                  This space will hold the strongest launches, polished product
                  snapshots, and the work that deserves a cleaner stage. I am
                  keeping it focused, selective, and worth waiting for.
                </p>

                <div className="pt-6 flex flex-wrap items-center gap-3">
                  <a
                    href="mailto:abhishektumula.in@gmail.com?subject=Notify%20me%20about%20Showcase"
                    className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-4 py-2 text-sm font-medium text-white transition duration-300 hover:translate-y-[-1px] hover:bg-neutral-800 dark:bg-neutral-100 dark:text-neutral-900 dark:hover:bg-white"
                  >
                    <IconBellRinging size={16} />
                    Notify me
                  </a>
                  <span className="text-sm text-neutral-500 dark:text-neutral-400">
                    limited drops, selected work, no filler
                  </span>
                </div>
              </div>

              <div className="grid gap-3 self-end">
                <div className="rounded-2xl bg-white/80 p-4 dark:bg-neutral-900/70">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                    Status
                  </p>
                  <p className="pt-2 text-lg font-medium text-neutral-900 dark:text-neutral-100">
                    Curating now
                  </p>
                </div>

                <div className="rounded-2xl bg-white/80 p-4 dark:bg-neutral-900/70">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 dark:text-neutral-400">
                    Focus
                  </p>
                  <p className="pt-2 text-sm leading-6 text-neutral-700 dark:text-neutral-300">
                    Product launches, interactive experiments, and refined case
                    study moments.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/60 p-4 dark:bg-neutral-900/50">
                  <div className="inline-flex items-center gap-2 text-sm text-neutral-600 dark:text-neutral-300">
                    First collection drops soon
                    <IconArrowRight size={16} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <RandomQuoteCard />
      </Container>
      <SiteFooter />
    </div>
  );
}
