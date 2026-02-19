import { NavBar } from "../navbar";
import { BannerCard } from "./banner-card";
import { ExperienceBlock } from "./experience-section";
import { HeroSection } from "./hero-section";
import { ProjectSection } from "./project-section";
export const Home = () => {
  return (
    <div className="w-full min-h-[200vh] bg-white dark:bg-black text-black dark:text-white">
      <NavBar />
      <BannerCard />
      <HeroSection />
      <ExperienceBlock />
      <ProjectSection />
    </div>
  );
};
