import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Skills } from '@/components/skills'
import { Projects } from '@/components/projects'
import { Experience } from '@/components/experience'
import { Education } from '@/components/education'
import { GithubStats } from '@/components/github-stats'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'
import { SectionReveal } from '@/components/reveal'

export default function App() {
  return (
    <div className="min-h-screen bg-[#F6F1E7] text-[#201C16] antialiased">
      <Navbar />
      <main>
        <div className="overflow-x-hidden">
          <Hero />
          <SectionReveal><About /></SectionReveal>
          <SectionReveal><Skills /></SectionReveal>
          <SectionReveal><Projects /></SectionReveal>
          <SectionReveal><Experience /></SectionReveal>
          <SectionReveal><Education /></SectionReveal>
          <SectionReveal><GithubStats /></SectionReveal>
          <SectionReveal><Contact /></SectionReveal>
        </div>
      </main>
      <Footer />
    </div>
  )
}
