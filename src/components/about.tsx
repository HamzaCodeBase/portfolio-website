import { Reveal, SectionIndicator } from '@/components/reveal'
import { ABOUT_FACTS, ABOUT_PARAGRAPHS, WHAT_I_DO } from '@/lib/data'

const counterItems = [
  { value: '3+', label: 'Years Experience' },
  { value: '15+', label: 'Projects Delivered' },
  { value: '10+', label: 'Happy Clients' },
]

export function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-content">
        <Reveal>
          <SectionIndicator label="About" />
        </Reveal>

        <div className="grid gap-16 lg:grid-cols-[1.2fr_1fr]">
          {/* Left - Editorial content */}
          <div>
            <Reveal>
              <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Building robust .NET systems{' '}
                <span className="gradient-text">for production</span>
              </h2>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
                {ABOUT_PARAGRAPHS.map((p) => (
                  <p key={p.slice(0, 30)}>{p}</p>
                ))}
              </div>
            </Reveal>

            {/* Stats row */}
            <Reveal delay={0.15}>
              <div className="mt-12 grid grid-cols-3 gap-8 border-t border-white/5 pt-10">
                {counterItems.map((item) => (
                  <div key={item.label}>
                    <p className="font-display text-3xl font-bold gradient-text-duo">{item.value}</p>
                    <p className="mt-1 text-xs text-muted-foreground">{item.label}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right - Photo + facts */}
          <div className="lg:pl-8">
            <Reveal delay={0.08}>
              <div className="relative">
                {/* Photo placeholder */}
                <div className="aspect-[3/4] w-full overflow-hidden rounded-2xl border border-white/5 bg-gradient-to-br from-[#D97706]/10 to-[#E11D48]/10">
                  <div className="flex h-full items-center justify-center">
                    <div className="text-center">
                      <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#D97706]/10">
                        <svg viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.5" className="h-8 w-8">
                          <path d="M16.5 6a3 3 0 11-6 0 3 3 0 016 0zM12 15c-4.418 0-8 1.79-8 4v1h16v-1c0-2.21-3.582-4-8-4z" />
                        </svg>
                      </div>
                      <p className="mt-4 text-sm text-muted-foreground">Photo placeholder</p>
                    </div>
                  </div>
                </div>

                {/* Floating fact card */}
                <div className="absolute -right-4 -bottom-4 rounded-xl border border-white/10 bg-[#09090B]/90 p-5 backdrop-blur-xl">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#D97706]/10">
                      <svg viewBox="0 0 24 24" fill="none" stroke="#D97706" strokeWidth="1.5" className="h-5 w-5">
                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">.NET Full Stack</p>
                      <p className="text-xs text-muted-foreground">3+ years in production</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            {/* Facts list */}
            <Reveal delay={0.12}>
              <div className="mt-6 divide-y divide-white/5 rounded-2xl border-2 border-white/5 bg-white/[0.02] transition-all duration-500 hover:border-[#D97706] hover:shadow-[0_0_30px_rgba(217,119,6,0.35),0_0_60px_rgba(217,119,6,0.12)]">
                {ABOUT_FACTS.map((fact) => (
                  <div key={fact.label} className="flex items-center justify-between gap-4 px-6 py-4">
                    <span className="text-sm text-muted-foreground">{fact.label}</span>
                    <span className="text-right text-sm font-medium text-foreground">{fact.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* What I Do - staggered cards */}
        <div className="mt-24">
          <Reveal>
            <SectionIndicator label="Expertise" />
          </Reveal>
          <Reveal delay={0.05}>
            <h3 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              What I bring to the table
            </h3>
          </Reveal>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {WHAT_I_DO.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.05}>
                <div className="group h-full rounded-2xl border-2 border-white/5 bg-[#09090B] p-8 transition-all duration-500 hover:border-[#D97706] hover:shadow-[0_0_30px_rgba(217,119,6,0.35),0_0_60px_rgba(217,119,6,0.12)]">
                  <span className="font-mono text-xs text-[#D97706]/50">{String(i + 1).padStart(2, '0')}</span>
                  <h4 className="mt-4 font-display text-lg font-semibold text-foreground">{item.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
