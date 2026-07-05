import { Reveal, SectionIndicator } from '@/components/reveal'
import { CERTIFICATIONS, EDUCATION, LANGUAGES } from '@/lib/data'

export function Education() {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-content">
        <Reveal>
          <SectionIndicator label="Background" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Education & <span className="gradient-text">credentials</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <Reveal>
            <div className="rounded-2xl border-2 border-white/5 bg-white/[0.02] p-8 transition-all duration-500 hover:border-[#D97706] hover:shadow-[0_0_30px_rgba(217,119,6,0.35),0_0_60px_rgba(217,119,6,0.12)]">
              <span className="font-mono text-xs text-muted-foreground">{EDUCATION.period}</span>
              <h3 className="mt-3 font-display text-xl font-bold text-foreground">{EDUCATION.degree}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{EDUCATION.school} &middot; {EDUCATION.location}</p>
              <div className="mt-8 flex items-center gap-5 border-t border-white/5 pt-6">
                <span className="font-display text-5xl font-bold gradient-text-duo">{EDUCATION.gpa}</span>
                <span className="text-sm text-muted-foreground">CGPA on a 4.0 scale</span>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6">
            <Reveal delay={0.06}>
              <div className="rounded-2xl border-2 border-white/5 bg-white/[0.02] p-6 transition-all duration-500 hover:border-[#D97706] hover:shadow-[0_0_30px_rgba(217,119,6,0.35),0_0_60px_rgba(217,119,6,0.12)]">
                <h3 className="font-display text-base font-semibold text-foreground">Certifications</h3>
                <ul className="mt-4 space-y-3">
                  {CERTIFICATIONS.map((cert) => (
                    <li key={cert.name}>
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-foreground transition-colors hover:text-[#D97706]"
                      >
                        {cert.name}
                      </a>
                      <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <div className="rounded-2xl border-2 border-white/5 bg-white/[0.02] p-6 transition-all duration-500 hover:border-[#D97706] hover:shadow-[0_0_30px_rgba(217,119,6,0.35),0_0_60px_rgba(217,119,6,0.12)]">
                <h3 className="font-display text-base font-semibold text-foreground">Languages</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {LANGUAGES.map((lang) => (
                    <span key={lang} className="rounded-lg border border-white/5 bg-white/[0.02] px-3 py-1.5 text-sm text-muted-foreground">
                      {lang}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
