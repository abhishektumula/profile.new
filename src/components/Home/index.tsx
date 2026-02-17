import { NavBar } from "../navbar";
import { HeroSection } from "./hero-section";
export const Home = () => {
  return (
    <div className="w-full min-h-[200vh] bg-white dark:bg-black text-black dark:text-white">
      <NavBar />
      <HeroSection />
    </div>
  );
};
