import { AboutSection } from "./about-section";
import { NavBar } from "../navbar";
import { BannerCard } from "./banner-card";
import { ExperienceBlock } from "./experience-section";
import { HeroSection } from "./hero-section";
import { ProjectSection } from "./project-section";
import { RandomQuoteCard } from "../random-quote-card";
export const Home = () => {
  return (
    <div className="w-full min-h-[200vh] bg-white dark:bg-black text-black dark:text-white">
      <NavBar />
      <BannerCard />
      <HeroSection />
      <AboutSection />
      <ProjectSection limit={3} columns={2} showAllButton />
      <ExperienceBlock />
      <RandomQuoteCard />
    </div>
  );
};
