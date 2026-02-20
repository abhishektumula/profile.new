"use client";

import { AboutSection } from "./about-section";
import { NavBar } from "../navbar";
import { BannerCard } from "./banner-card";
import { ExperienceBlock } from "./experience-section";
import { HeroSection } from "./hero-section";
import { ProjectSection } from "./project-section";
import { RandomQuoteCard } from "../random-quote-card";
import { SetupSection } from "./setup-section";
import { motion } from "motion/react";

export const Home = () => {
  const smoothTransition = {
    duration: 0.3,
    ease: [0.22, 1, 0.36, 1] as const,
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        ...smoothTransition,
        staggerChildren: 0.06,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 12 },
    show: { opacity: 1, y: 0, transition: smoothTransition },
  };

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="w-full min-h-[200vh] bg-white dark:bg-black text-black dark:text-white"
    >
      <motion.div variants={itemVariants}>
        <NavBar />
      </motion.div>
      <motion.div variants={itemVariants}>
        <BannerCard />
      </motion.div>
      <motion.div variants={itemVariants}>
        <HeroSection />
      </motion.div>
      <motion.div
        variants={itemVariants}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={smoothTransition}
      >
        <AboutSection />
      </motion.div>
      <motion.div
        variants={itemVariants}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={smoothTransition}
      >
        <ProjectSection limit={3} columns={2} showAllButton />
      </motion.div>
      <motion.div
        variants={itemVariants}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={smoothTransition}
      >
        <ExperienceBlock />
      </motion.div>
      <motion.div
        variants={itemVariants}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={smoothTransition}
      >
        <SetupSection />
      </motion.div>
      <motion.div
        variants={itemVariants}
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={smoothTransition}
      >
        <RandomQuoteCard />
      </motion.div>
    </motion.div>
  );
};
