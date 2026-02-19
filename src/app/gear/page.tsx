"use client";

import { Container } from "@/components/container";
import { NavBar } from "@/components/navbar";
import { motion } from "motion/react";
import { IconSettings } from "@tabler/icons-react";
import { RandomQuoteCard } from "@/components/random-quote-card";

const gearItems = [
  "Mac book pro 14 inch M5 chip",
  "iPhone 13",
  "No monitor, keyboard, mouse, desk and shit",
  "Polimanders theme / Oscukar by Fay theme",
  "And brain",
];

export default function GearPage() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Container className="min-h-screen">
        <NavBar />
        <section className="flex h-32 w-full items-center justify-center px-4 pt-6 text-center sm:h-40 sm:px-6 sm:pt-8">
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              Gear
            </h1>
            <p className="pt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              Minimal setup, maximum output.
            </p>
          </div>
        </section>

        <section className="w-full px-4 sm:px-6 pb-10">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="rounded-xl border border-neutral-200/80 bg-white/80 p-5 shadow-md dark:border-neutral-800 dark:bg-neutral-950/70"
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="rounded-md border border-neutral-300 p-2 text-neutral-700 dark:border-neutral-700 dark:text-neutral-200"
              >
                <IconSettings size={20} />
              </motion.div>
              <h2 className="text-xl font-semibold tracking-tight text-neutral-900 dark:text-neutral-100">
                Current Setup
              </h2>
            </div>

            <ul className="pt-4 list-disc pl-5 space-y-2 text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
              {gearItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </section>
        <RandomQuoteCard />
      </Container>
    </div>
  );
}
