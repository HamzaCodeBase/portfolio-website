import { useState } from 'react'
import { motion } from 'framer-motion'

import { Reveal, SectionIndicator } from '@/components/reveal'
import { Modal } from '@/components/modal'
import { PROJECTS } from '@/lib/data'

export function Projects() {
  const [modalProject, setModalProject] = useState<typeof PROJECTS[0] | null>(null)

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-content">
        <Reveal>
          <SectionIndicator index="03" label="Selected work" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
            Projects
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-5">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.name} delay={i * 0.045}>
              <button
                type="button"
                onClick={() => setModalProject(project)}
                className="group grid w-full gap-4 border border-[#201C16]/14 bg-[#FBF8F1] p-6 text-left transition-all duration-300 hover:-translate-y-1 hover:border-[#B4432B] hover:shadow-[0_20px_40px_rgba(32,28,22,0.1)] sm:grid-cols-[88px_1fr] sm:gap-8 sm:p-8"
              >
                <span className="font-display text-4xl leading-none text-[#201C16]/15 transition-colors duration-300 group-hover:text-[#B4432B]/35 sm:text-5xl">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="min-w-0">
                  <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
                    <div>
                      <h3 className="font-display text-2xl transition-colors duration-300 group-hover:text-[#B4432B] sm:text-[1.7rem]">
                        {project.name}
                      </h3>
                      <p className="mt-1 text-sm text-[#6B6255]">{project.type}</p>
                    </div>
                    <span className="mt-1 inline-flex shrink-0 items-center gap-1.5 text-sm text-[#6B6255] transition-all duration-300 group-hover:translate-x-1 group-hover:text-[#B4432B]">
                      View case study &rarr;
                    </span>
                  </div>

                  <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#6B6255] line-clamp-2">
                    {project.summary}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.slice(0, 5).map((tag) => (
                      <span
                        key={tag}
                        className="border border-[#201C16]/15 px-2.5 py-1 font-mono text-[11px] text-[#6B6255]"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="px-2.5 py-1 font-mono text-[11px] text-[#6B6255]/60">
                        +{project.tech.length - 5} more
                      </span>
                    )}
                  </div>
                </div>
              </button>
            </Reveal>
          ))}
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
      <p className="text-sm text-[#B4432B]">Case study</p>
      <h2 className="mt-2 font-display text-3xl text-[#201C16]">{project.name}</h2>
      <p className="mt-1 text-sm text-[#6B6255]">{project.type}</p>

      {/* Overview */}
      <div className="mt-8">
        <h3 className="font-display text-base">Overview</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#6B6255]">{project.summary}</p>
      </div>

      {/* Technical Details */}
      <div className="mt-8">
        <h3 className="font-display text-base">Technical details</h3>
        <ul className="mt-3 space-y-3">
          {project.contributions.map((point, i) => (
            <motion.li
              key={point}
              initial={{ opacity: 0, x: -8 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.35, delay: 0.1 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="flex gap-3 text-sm leading-relaxed text-[#6B6255]"
            >
              <span className="mt-2 block h-1 w-1 shrink-0 bg-[#B4432B]" />
              {point}
            </motion.li>
          ))}
        </ul>
      </div>

      {/* Outcome */}
      <div className="mt-8 border-l-2 border-[#B4432B] pl-4">
        <h3 className="font-display text-base">Outcome</h3>
        <p className="mt-2 text-sm leading-relaxed text-[#6B6255]">{project.outcome}</p>
      </div>

      {/* Technologies Used */}
      <div className="mt-8">
        <h3 className="font-display text-base">Technologies used</h3>
        <p className="mt-3 text-sm leading-relaxed text-[#6B6255]">{project.tech.join(' · ')}</p>
      </div>
    </div>
  )
}
