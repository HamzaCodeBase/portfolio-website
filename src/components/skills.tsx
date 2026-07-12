import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal, SectionIndicator } from '@/components/reveal'
import { SKILL_GROUPS } from '@/lib/data'

const ICONS: Record<string, string> = {
  'Backend Engineering': 'C#',
  'Frontend Engineering': '⚛',
  Databases: '🗄',
  'Cloud & DevOps': '☁',
  'Architecture & Security': '🔐',
  'Tools & Collaboration': '🛠',
}

const COLORS: Record<string, string> = {
  'Backend Engineering': '#D97706',
  'Frontend Engineering': '#F59E0B',
  Databases: '#E11D48',
  'Cloud & DevOps': '#D97706',
  'Architecture & Security': '#F59E0B',
  'Tools & Collaboration': '#E11D48',
}

function SkillCard({ group }: { group: typeof SKILL_GROUPS[0] }) {
  const accentColor = COLORS[group.category] || '#D97706'
  return (
    <div className="group relative flex h-full flex-col rounded-2xl border-2 border-white/5 bg-white/[0.03] p-5 transition-all duration-500 hover:border-[#D97706] hover:shadow-[0_0_30px_rgba(217,119,6,0.35),0_0_60px_rgba(217,119,6,0.12)] md:p-6">
      <div className="flex items-center gap-3">
        <span
          className="flex h-11 w-11 items-center justify-center rounded-xl font-mono text-sm font-bold"
          style={{ background: `${accentColor}15`, color: accentColor }}
        >
          {ICONS[group.category]}
        </span>
        <div>
          <h3 className="font-display text-sm font-semibold text-foreground">{group.category}</h3>
          <p className="text-xs text-muted-foreground">{group.skills.length} technologies</p>
        </div>
      </div>

      <div className="mt-6 flex flex-1 flex-wrap gap-2" style={{ alignContent: 'flex-start' }}>
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-muted-foreground transition-all hover:border-[#D97706]/20 hover:text-[#D97706]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  const [active, setActive] = useState(0)
  const touchStartX = useRef(0)

  function handleTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.touches[0].clientX
  }

  function handleTouchEnd(e: React.TouchEvent) {
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 50) {
      if (diff > 0 && active < SKILL_GROUPS.length - 1) setActive(active + 1)
      if (diff < 0 && active > 0) setActive(active - 1)
    }
  }

  return (
    <section id="skills" className="section-padding bg-[#0C0C10]">
      <div className="max-w-content">
        <Reveal>
          <SectionIndicator label="Skills" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </Reveal>

        {/* Desktop: grid */}
        <div className="mt-12 hidden gap-6 sm:grid sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.04} className="h-full">
              <SkillCard group={group} />
            </Reveal>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="mt-12 sm:hidden">
          <div
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <SkillCard group={SKILL_GROUPS[active]} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex justify-center gap-2">
            {SKILL_GROUPS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? 'w-8 bg-[#D97706]' : 'w-2 bg-white/10'
                }`}
                aria-label={`Go to ${SKILL_GROUPS[i].category}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
