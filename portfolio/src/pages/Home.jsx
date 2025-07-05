import { ThemeToggle } from "../components/ThemeToggle"
import { StarBackground } from "@/components/StarBackground"

export const Home = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <ThemeToggle />
      <StarBackground />

    </div>
  )

}