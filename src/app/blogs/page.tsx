"use client";

import Image from "next/image";
import { Container } from "@/components/container";
import { NavBar } from "@/components/navbar";
import { RandomQuoteCard } from "@/components/random-quote-card";
import { IconArrowRight, IconCalendarEvent } from "@tabler/icons-react";
import { motion } from "motion/react";

export default function BlogsPage() {
  const smoothTransition = {
    duration: 0.3,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const blogPosts = [
    {
      title:
        "Why Modern Software Sucks and What It Says About Our Tech Culture",
      href: "https://medium.com/@abhishektumula.in/why-modern-software-sucks-and-what-it-says-about-our-tech-culture-63704acc8dfa",
      cover: "/download.png",
      excerpt:
        "There is a creeping feeling in tech that software is no longer what it used to be. This piece unpacks why.",
      tags: ["Culture", "Software", "Tech", "+1 more"],
      date: "February 20, 2026",
    },
    {
      title: "Building Fast UIs with Next.js and Tailwind",
      href: "https://medium.com/",
      cover: "/demo.png",
      excerpt:
        "A practical guide to composing clean UI systems and improving perceived performance in production apps.",
      tags: ["Frontend", "Next.js", "Tailwind", "+1 more"],
      date: "February 12, 2026",
    },
    {
      title: "What I Learned from Shipping Side Projects",
      href: "https://medium.com/",
      cover: "/demo.png",
      excerpt:
        "Lessons on scope, iteration speed, and building products people actually use.",
      tags: ["Projects", "Product", "Career", "+1 more"],
      date: "January 31, 2026",
    },
  ];

  return (
    <div className="w-full min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <Container className="min-h-screen">
        <NavBar />
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={smoothTransition}
          className="flex h-32 w-full items-center justify-center px-4 pt-6 text-center sm:h-40 sm:px-6 sm:pt-8"
        >
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-neutral-900 dark:text-neutral-100">
              Blogs
            </h1>
            <p className="pt-2 text-sm leading-relaxed text-neutral-600 dark:text-neutral-300">
              Articles and notes from my writing.
            </p>
          </div>
        </motion.section>
        <motion.section
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ...smoothTransition, delay: 0.06 }}
          className="w-full px-4 pb-6 sm:px-6 sm:pb-8"
        >
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: 0.08,
                },
              },
            }}
            className="grid grid-cols-1 gap-5 sm:grid-cols-2"
          >
            {blogPosts.map((blogPost, index) => (
              <motion.article
                key={blogPost.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ ...smoothTransition, delay: index * 0.03 }}
                whileHover={{ y: -4, scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
                className="w-full overflow-hidden rounded-xl border border-neutral-200/80 bg-white/80 shadow-md transition duration-300 hover:shadow-xl dark:border-neutral-800 dark:bg-neutral-950/70"
              >
                <div className="relative aspect-video w-full overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                  <Image
                    src={blogPost.cover}
                    alt={blogPost.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent dark:from-black/40" />
                </div>
                <div className="space-y-5 p-4 sm:p-5">
                  <h2 className="text-2xl font-semibold leading-tight tracking-tight text-neutral-900 dark:text-neutral-100">
                    {blogPost.title}
                  </h2>
                  <p className="max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-neutral-300">
                    {blogPost.excerpt}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {blogPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-2xl border border-neutral-300 bg-neutral-100 px-3 py-1 text-xs text-neutral-700 dark:border-neutral-700 dark:bg-neutral-900 dark:text-neutral-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between gap-4 border-t border-neutral-200 pt-4 dark:border-neutral-800">
                    <div className="inline-flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
                      <IconCalendarEvent size={16} />
                      <span className="text-sm sm:text-base">
                        {blogPost.date}
                      </span>
                    </div>
                    <motion.a
                      href={blogPost.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial="rest"
                      whileHover="hover"
                      variants={{ rest: { scale: 1 }, hover: { scale: 1.02 } }}
                      whileTap={{ scale: 0.98 }}
                      transition={smoothTransition}
                      className="inline-flex items-center gap-2 text-base text-neutral-700 transition duration-300 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
                    >
                      Read More
                      <motion.span
                        variants={{ rest: { x: 0 }, hover: { x: 4 } }}
                        transition={smoothTransition}
                      >
                        <IconArrowRight size={18} />
                      </motion.span>
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </motion.section>
        <RandomQuoteCard />
      </Container>
    </div>
  );
}
