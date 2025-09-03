import { HeroSection } from "./home/hero-section";
import { AboutSection } from "./home/about-section";
import { TechStackSection } from "./home/tech-stack-section";
import { ExperienceSection } from "./home/experience-section";
import { ProjectSection } from "./home/project-section";
import { ContactSection } from "./home/contact-section";

export default function Home() {
  return (
    <div className="max-w-[1320px] m-auto px-[20px] pt-[160px] md:pt-[200px] lg:pt-[230px] pb-[40px] md:pb-[70px] lg:pb-[100px] flex flex-col gap-[60px] md:gap-[90px] lg:gap-[120px]">
      <HeroSection/>
      <AboutSection/>
      <TechStackSection/>
      <ProjectSection/>
      <ExperienceSection/>
      <ContactSection/>
    </div>
  );
}
