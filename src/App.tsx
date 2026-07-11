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
import { SectionReveal } from '@/components/reveal'

export default function App() {
  return (
    <div className="min-h-screen bg-[#09090B] text-[#F1F1F3] antialiased selection:bg-[#D97706]/30">
      <CursorGlow />
      <CursorDot />
      <ScrollProgress />
      <Navbar />
      <main style={{ perspective: '1200px' }}>
        <Hero />
        <SectionReveal><About /></SectionReveal>
        <SectionReveal><Skills /></SectionReveal>
        <SectionReveal><Projects /></SectionReveal>
        <SectionReveal><Experience /></SectionReveal>
        <SectionReveal><Education /></SectionReveal>
        <SectionReveal><GithubStats /></SectionReveal>
        <SectionReveal><Testimonials /></SectionReveal>
        <SectionReveal><Contact /></SectionReveal>
      </main>
      <Footer />
    </div>
  )
}
