import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground"
import { NavBar } from "@/components/NavBar"
import { HeroSection } from "../components/HereSection"
import { AboutMeSection } from "../components/AboutMeSection"
import { SkillSection } from "../components/SkillSection"

export const Home = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />
      <NavBar />

      <main>
        <HeroSection />
        <AboutMeSection />
        <SkillSection />
      </main>

    </div>
  )

}