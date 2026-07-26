import { Reveal, SectionIndicator } from '@/components/reveal'
import { CERTIFICATIONS, EDUCATION, LANGUAGES } from '@/lib/data'

function GraduationCap({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M4.26 10.147a60.44 60.44 0 0 0-.491 6.347A48.63 48.63 0 0 1 12 20.904a48.63 48.63 0 0 1 8.232-4.41 60.44 60.44 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
    </svg>
  )
}

function ReactIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="2.5" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" />
      <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="3.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" fill="none" transform="rotate(120 12 12)" />
    </svg>
  )
}

function CSharpIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="none" className={className}>
      <text x="12" y="17" textAnchor="middle" fill="currentColor" fontSize="14" fontWeight="bold" fontFamily="Arial">C#</text>
    </svg>
  )
}

function certIcon(name: string) {
  if (name.includes('React')) return ReactIcon
  if (name.includes('C#')) return CSharpIcon
  return null
}

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-content">
        <Reveal>
          <SectionIndicator label="Background" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="gradient-text">Education</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.2fr_1fr] lg:gap-8">
          <div className="grid gap-5">
            <Reveal>
              <div className="group relative overflow-hidden rounded-2xl border-2 border-white/5 bg-white/[0.02] p-5 transition-all duration-500 hover:border-[#D97706] hover:shadow-[0_0_30px_rgba(217,119,6,0.35),0_0_60px_rgba(217,119,6,0.12)] md:p-7">
                <div className="absolute -top-12 -right-12 h-40 w-40 rounded-full bg-[#D97706]/5 blur-3xl transition-all duration-500 group-hover:bg-[#D97706]/10" />
                <div className="relative">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#D97706]/10 text-[#D97706]">
                      <GraduationCap className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-foreground md:text-xl">{EDUCATION.degree}</h3>
                  <p className="mt-1 text-xs text-muted-foreground md:text-sm">{EDUCATION.school}</p>
                  <div className="mt-6 flex items-center justify-between rounded-xl border border-white/5 bg-white/[0.02] p-4">
                    <span className="font-display text-4xl font-bold gradient-text-duo">{EDUCATION.gpa}</span>
                    <div className="text-right">
                      <p className="text-xs font-medium text-foreground">CGPA</p>
                      <p className="text-xs text-muted-foreground">4.0 scale</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-2xl border-2 border-white/5 bg-white/[0.02] p-5 transition-all duration-500 hover:border-[#D97706] hover:shadow-[0_0_30px_rgba(217,119,6,0.35),0_0_60px_rgba(217,119,6,0.12)]">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#D97706]/10 text-[#D97706]">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                      <path d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                    </svg>
                  </span>
                  <h3 className="font-display text-sm font-semibold text-foreground">Languages</h3>
                </div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {LANGUAGES.map((lang) => (
                    <span key={lang} className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-1 text-xs text-muted-foreground transition-all hover:border-[#D97706]/20 hover:text-[#D97706]">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4 auto-rows-fr">
            {CERTIFICATIONS.map((cert, i) => {
              const BrandIcon = certIcon(cert.name)
              return (
              <Reveal key={cert.name} delay={0.06 + i * 0.03} className="h-full">
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full items-center gap-3 rounded-2xl border-2 border-white/5 bg-white/[0.02] p-4 transition-all duration-500 hover:border-[#D97706] hover:shadow-[0_0_30px_rgba(217,119,6,0.35),0_0_60px_rgba(217,119,6,0.12)]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#D97706]/10 text-[#D97706] transition-all group-hover:bg-[#D97706]/20 group-hover:shadow-[0_0_20px_rgba(217,119,6,0.15)]">
                    {BrandIcon ? (
                      <BrandIcon className="h-5 w-5" />
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
                        <path d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                      </svg>
                    )}
                  </span>
                  <div className="flex-1 min-w-0">
                    <span className="block text-sm font-medium text-foreground transition-colors group-hover:text-[#D97706]">{cert.name}</span>
                    <span className="block mt-0.5 text-xs text-muted-foreground">{cert.issuer}</span>
                  </div>
                  <svg viewBox="0 0 16 16" fill="none" className="h-3 w-3 shrink-0 text-muted-foreground/30 transition-all group-hover:translate-x-0.5 group-hover:text-[#D97706]">
                    <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
