import { Reveal, SectionIndicator } from '@/components/reveal'
import { GITHUB_STATS, GITHUB_USERNAME, SOCIALS } from '@/lib/data'

function seededRandom(seed: number) {
  let s = seed
  return () => {
    s = (s * 1664525 + 1013904223) & 0xffffffff
    return (s >>> 0) / 0xffffffff
  }
}

function intensity(week: number, day: number) {
  const rand = seededRandom(week * 100 + day * 7 + week * 3)
  const v = rand()
  if (v > 0.88) return 'bg-[#D97706]'
  if (v > 0.72) return 'bg-[#D97706]/70'
  if (v > 0.52) return 'bg-[#D97706]/40'
  if (v > 0.30) return 'bg-[#D97706]/20'
  return 'bg-white/5'
}

export function GithubStats() {
  return (
    <section className="section-padding">
      <div className="max-w-content">
        <Reveal>
          <SectionIndicator label="Open Source" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            GitHub <span className="gradient-text">activity</span>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            A snapshot of contributions, repositories, and open-source momentum.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-2">
          <Reveal>
            <div className="rounded-2xl border-2 border-white/5 bg-white/[0.02] p-7 transition-all duration-500 hover:border-[#D97706] hover:shadow-[0_0_30px_rgba(217,119,6,0.35),0_0_60px_rgba(217,119,6,0.12)]">
              <div className="mb-6 flex items-center justify-between">
                <span className="font-display text-base font-semibold text-foreground">Contribution Graph</span>
                <a
                  href={SOCIALS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#D97706] transition-colors hover:text-[#D97706]/80"
                >
                  @{GITHUB_USERNAME}
                </a>
              </div>

              <div className="flex gap-1 overflow-x-auto pb-2">
                {Array.from({ length: 28 }).map((_, week) => (
                  <div key={week} className="flex flex-col gap-1">
                    {Array.from({ length: 7 }).map((_, day) => (
                      <span key={day} className={`h-3 w-3 rounded-sm ${intensity(week, day)}`} />
                    ))}
                  </div>
                ))}
              </div>

              <div className="mt-4 flex items-center justify-end gap-1.5 text-xs text-muted-foreground">
                <span>Less</span>
                <span className="h-3 w-3 rounded-sm bg-white/5" />
                <span className="h-3 w-3 rounded-sm bg-[#D97706]/20" />
                <span className="h-3 w-3 rounded-sm bg-[#D97706]/40" />
                <span className="h-3 w-3 rounded-sm bg-[#D97706]/70" />
                <span className="h-3 w-3 rounded-sm bg-[#D97706]" />
                <span>More</span>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-4">
            {GITHUB_STATS.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.05}>
                <div className="rounded-2xl border-2 border-white/5 bg-white/[0.02] p-6 transition-all duration-500 hover:border-[#D97706] hover:shadow-[0_0_30px_rgba(217,119,6,0.35),0_0_60px_rgba(217,119,6,0.12)]">
                  <p className="font-display text-2xl font-bold gradient-text-duo">{stat.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
