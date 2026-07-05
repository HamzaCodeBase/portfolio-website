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

export function Skills() {
  return (
    <section id="skills" className="section-padding bg-[#0C0C10]">
      <div className="max-w-content">
        <Reveal>
          <SectionIndicator label="Skills" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Technology <span className="gradient-text">constellation</span>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            A curated map of technologies I work with daily across the stack.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SKILL_GROUPS.map((group, i) => {
            const accentColor = COLORS[group.category] || '#D97706'
            return (
              <Reveal key={group.category} delay={i * 0.04} className="h-full">
                <div
                  className="group relative flex h-full flex-col rounded-2xl border-2 border-white/5 bg-white/[0.03] p-6 transition-all duration-500 hover:border-[#D97706] hover:shadow-[0_0_30px_rgba(217,119,6,0.35),0_0_60px_rgba(217,119,6,0.12)]"
                >
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
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
