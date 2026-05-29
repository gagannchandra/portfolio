import HeroSection from "./components/sections/HeroSection";
import AboutSection from "./components/sections/AboutSection";
import SkillsSection from "./components/sections/SkillsSection";
import ProjectsSection from "./components/sections/ProjectsSection";
import AchievementsSection from "./components/sections/AchievementsSection";
import ExperienceSection from "./components/sections/ExperienceSection";
import CertificationsSection from "./components/sections/CertificationsSection";
import GithubSection from "./components/sections/GithubSection";
import ContactSection from "./components/sections/ContactSection";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto md:px-16 px-6 lg:mt-32 mt-20">
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <AchievementsSection />
      <ExperienceSection />
      <CertificationsSection />
      <GithubSection />
      <ContactSection />
    </main>
  );
}
