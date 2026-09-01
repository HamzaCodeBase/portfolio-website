import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Reveal, SectionIndicator } from '@/components/reveal'
import { EXPERIENCE } from '@/lib/data'

export function Experience() {
  return (
    <section id="experience" className="section-padding border-t border-[#201C16]/12">
      <div className="max-w-content">
        <Reveal>
          <SectionIndicator index="04" label="Experience" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
            Experience
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-[#201C16]/12 border-t border-[#201C16]/12">
          {EXPERIENCE.map((job, i) => (
            <Reveal key={job.period} delay={i * 0.06}>
              <ExperienceRow job={job} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExperienceRow({ job }: { job: typeof EXPERIENCE[0] }) {
  const [open, setOpen] = useState(false)

  return (
    <div className="py-7">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
        <div className="sm:w-2/3">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="font-display text-xl">{job.role}</h3>
            {job.current && (
              <span className="text-xs text-[#B4432B]">Current</span>
            )}
          </div>
          <p className="mt-1 text-sm text-[#6B6255]">{job.company} &middot; {job.location}</p>
        </div>
        <span className="font-mono text-xs text-[#6B6255] sm:text-right">{job.period}</span>
      </div>

      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#6B6255]">{job.summary}</p>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="mt-3 inline-flex items-center gap-1.5 text-sm text-[#B4432B]"
      >
        <span className="link-underline">{open ? 'Show less' : 'View contributions'}</span>
        <motion.svg
          viewBox="0 0 12 12"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="h-2.5 w-2.5"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          <path d="M2.5 4.5L6 8l3.5-3.5" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden"
          >
            <ul className="mt-4 max-w-2xl space-y-3">
              {job.points.map((point) => (
                <li key={point} className="flex gap-3 text-sm leading-relaxed text-[#6B6255]">
                  <span className="mt-2 block h-1 w-1 shrink-0 bg-[#B4432B]" />
                  {point}
                </li>
              ))}
            </ul>
            <p className="mt-4 max-w-2xl text-sm text-[#6B6255]">{job.tech.join(' · ')}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
