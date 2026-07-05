import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Experience } from '@/components/experience'
import { Education } from '@/components/education'
import { GithubStats } from '@/components/github-stats'
import { Testimonials } from '@/components/testimonials'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { CursorGlow } from '@/components/cursor-glow'
import { CursorDot } from '@/components/cursor-dot'
import { ScrollProgress } from '@/components/scroll-progress'

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090B] text-[#F1F1F3] antialiased selection:bg-[#D97706]/30">
      <CursorGlow />
      <CursorDot />
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
        <GithubStats />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
