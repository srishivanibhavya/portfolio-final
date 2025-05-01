import { AboutSection } from "@/components/about-section";
import { AchievementsSection } from "@/components/achievements-section";
import { ContactSection } from "@/components/contact-section";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";

export default function Home() {
  return (
    <div
      style={{
        maxWidth: 1280,
        margin: '0 auto',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <Header />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <AchievementsSection />
      <ProjectsSection />
      <ContactSection />
    </div>
  );
}
