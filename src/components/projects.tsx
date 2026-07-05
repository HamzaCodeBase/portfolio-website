import { useState } from 'react'

import { Reveal, SectionIndicator } from '@/components/reveal'
import { Modal } from '@/components/tilt-card'
import { PROJECTS } from '@/lib/data'

const FALLBACK_ACCENTS = ['#D97706', '#F59E0B', '#E11D48']

export function Projects() {
  const [modalProject, setModalProject] = useState<typeof PROJECTS[0] | null>(null)

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-content">
        <Reveal>
          <SectionIndicator label="Selected work" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Featured <span className="gradient-text">projects</span>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Production systems I&apos;ve built end-to-end, from architecture to deployment.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {PROJECTS.map((project, i) => {
            const accent = project.accent || FALLBACK_ACCENTS[i % FALLBACK_ACCENTS.length]
            return (
            <Reveal key={project.name} delay={i * 0.06} className="h-full">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border-2 border-white/5 bg-white/[0.02] transition-all duration-500 hover:border-[#D97706] hover:shadow-[0_0_30px_rgba(217,119,6,0.35),0_0_60px_rgba(217,119,6,0.12)]">
                  <div className="h-1.5 w-full" style={{ background: `linear-gradient(90deg, ${accent}, ${accent}88, transparent)` }} />

                  <div className="flex flex-1 flex-col p-6">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-mono text-xs" style={{ color: `${accent}99` }}>{String(i + 1).padStart(2, '0')}</span>
                          <h3 className="font-display text-lg font-semibold text-foreground">{project.name}</h3>
                        </div>
                        <p className="mt-0.5 text-sm text-muted-foreground">{project.type}</p>
                      </div>
                      <button
                        onClick={() => setModalProject(project)}
                        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-muted-foreground transition-all hover:text-foreground"
                        style={{ background: `${accent}10` }}
                        aria-label={`View ${project.name} details`}
                      >
                        <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                          <path d="M4 16L16 4M8 4h8v8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </button>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted-foreground line-clamp-2">{project.summary}</p>

                    <div className="mt-auto flex flex-nowrap gap-1.5 overflow-x-auto pt-4 [&::-webkit-scrollbar]:hidden">
                      {project.tech.slice(0, 5).map((tag) => (
                          <span key={tag} className="shrink-0 rounded-lg border border-white/5 bg-white/[0.02] px-2.5 py-1 font-mono text-xs text-muted-foreground">
                            {tag}
                          </span>
                        ))}
                        {project.tech.length > 5 && (
                          <span className="shrink-0 rounded-lg border border-white/5 bg-white/[0.02] px-2.5 py-1 font-mono text-xs text-muted-foreground">
                          +{project.tech.length - 5}
                        </span>
                      )}
                    </div>

                    <button
                      onClick={() => setModalProject(project)}
                      className="mt-5 inline-flex items-center gap-1.5 text-sm transition-all hover:gap-2"
                      style={{ color: accent }}
                    >
                      Details
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3 w-3">
                        <path d="M6 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </div>
                </article>
            </Reveal>
            )
          })}
        </div>

        {/* Modal */}
        <Modal open={!!modalProject} onClose={() => setModalProject(null)}>
          {modalProject && <ProjectModalContent project={modalProject} />}
        </Modal>
      </div>
    </section>
  )
}

function ProjectModalContent({ project }: { project: typeof PROJECTS[0] }) {
  return (
    <div>
      <div className="flex items-center gap-2 text-xs text-[#D97706]">
        <span className="font-mono">Details</span>
      </div>
      <h2 className="mt-2 font-display text-3xl font-bold text-foreground">{project.name}</h2>
      <p className="mt-1 text-sm text-muted-foreground">{project.type}</p>

      {/* Overview */}
      <div className="mt-8">
        <h3 className="font-display text-base font-semibold text-foreground">Overview</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
      </div>

      {/* Technical Details */}
      <div className="mt-8">
        <h3 className="font-display text-base font-semibold text-foreground">Technical Details</h3>
        <ul className="mt-3 space-y-3">
          {project.contributions.map((point) => (
            <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted-foreground">
              <span className="mt-1.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-[#D97706]/60" />
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* Technologies Used */}
      <div className="mt-8">
        <h3 className="font-display text-base font-semibold text-foreground">Technologies Used</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span key={t} className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-muted-foreground">
              {t}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
