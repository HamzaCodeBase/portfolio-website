import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal, SectionIndicator } from '@/components/reveal'
import { EXPERIENCE } from '@/lib/data'

const ACCENTS = ['#D97706', '#F59E0B', '#E11D48']

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-[#0C0C10]">
      <div className="max-w-content">
        <Reveal>
          <SectionIndicator label="Experience" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Professional <span className="gradient-text">journey</span>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Three years, one team, growing scope — from intern to full-stack developer.
          </p>
        </Reveal>

        <div className="relative mt-16">
          {/* Timeline line */}
          <div className="absolute left-[31px] top-0 bottom-0 w-px bg-gradient-to-b from-[#D97706]/40 via-[#F59E0B]/20 to-transparent" />

          <div className="space-y-12">
            {EXPERIENCE.map((job, i) => (
              <Reveal key={job.period} delay={i * 0.1}>
                <ExperienceCard job={job} index={i} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

function ExperienceCard({ job, index }: { job: typeof EXPERIENCE[0]; index: number }) {
  const [open, setOpen] = useState(false)
  const color = ACCENTS[index % ACCENTS.length]

  return (
    <div className="relative pl-16">
      {/* Timeline dot */}
      <motion.div
        className="absolute left-[21px] top-2"
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 200, damping: 15 }}
      >
        <div className="flex h-5 w-5 items-center justify-center rounded-full" style={{ background: `${color}20` }}>
          <div className="h-2.5 w-2.5 rounded-full" style={{ background: color }} />
        </div>
      </motion.div>

      {/* Card */}
      <motion.div
        className="rounded-2xl border-2 border-white/5 bg-white/[0.02] p-7 transition-all duration-500 hover:border-[#D97706] hover:shadow-[0_0_30px_rgba(217,119,6,0.35),0_0_60px_rgba(217,119,6,0.12)]"
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs text-muted-foreground">{job.period}</span>
          {job.current && (
            <span className="rounded-full px-2.5 py-0.5 text-xs font-medium" style={{ background: `${color}20`, color }}>
              Current
            </span>
          )}
        </div>

        <h3 className="mt-3 font-display text-xl font-bold text-foreground">{job.role}</h3>
        <p className="text-sm text-muted-foreground">{job.company} &middot; {job.location}</p>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{job.summary}</p>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="mt-4 inline-flex items-center gap-1.5 text-sm transition-all hover:gap-2"
          style={{ color }}
        >
          <span>{open ? 'Show less' : 'View contributions'}</span>
          <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className={`h-3 w-3 transition-transform ${open ? 'rotate-180' : ''}`}>
            <path d="M4 6l4 4 4-4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <ul className="mt-5 space-y-3 border-t border-white/5 pt-5">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
                    <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full" style={{ background: `${color}60` }} />
                    {point}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {job.tech.map((t) => (
                  <span key={t} className="rounded-lg border border-white/5 bg-white/[0.02] px-2.5 py-1 font-mono text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  )
}
