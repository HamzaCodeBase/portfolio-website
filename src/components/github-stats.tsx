// Requires: npm install react-github-calendar
import { useEffect, useState } from 'react'
import { GitHubCalendar } from 'react-github-calendar'
import { Reveal, SectionIndicator } from '@/components/reveal'
import { GITHUB_USERNAME, SOCIALS } from '@/lib/data'

const theme = {
  dark: ['#161b22', '#3a2223', '#66333c', '#f43f5e', '#f97316'],
}

export function GithubStats() {
  const [repos, setRepos] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
        const user = await res.json()
        setRepos(`${user.public_repos}+`)
      } catch {
        setRepos('12+')
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  return (
    <section className="section-padding">
      <div className="max-w-content">
        <Reveal>
          <SectionIndicator label="Open Source" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="gradient-text">GitHub</span>
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[3fr_1fr]">
          <Reveal>
            <div className="rounded-2xl border-2 border-white/5 bg-white/[0.02] p-7 transition-all duration-500 hover:border-[#D97706] hover:shadow-[0_0_30px_rgba(217,119,6,0.35),0_0_60px_rgba(217,119,6,0.12)]">
              <div className="mb-6 flex items-center justify-between">
                <h3 className="font-display text-base font-semibold text-foreground">
                  Open Source Contributions
                </h3>
                <a
                  href={SOCIALS.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#D97706] transition-colors hover:text-[#D97706]/80"
                >
                  @{GITHUB_USERNAME}
                </a>
              </div>

              <div className="flex justify-center overflow-x-auto px-2 pb-2">
                <GitHubCalendar
                  username={GITHUB_USERNAME}
                  theme={theme}
                  hideBorder
                  blockSize={12}
                  blockMargin={4}
                  fontSize={13}
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            {loading ? (
              <div className="animate-pulse rounded-2xl border-2 border-white/5 bg-white/[0.02] p-6">
                <div className="mb-2 h-7 w-20 rounded bg-white/10" />
                <div className="h-4 w-28 rounded bg-white/5" />
              </div>
            ) : (
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border-2 border-white/5 bg-white/[0.02] p-6 transition-all duration-500 hover:border-[#D97706] hover:shadow-[0_0_30px_rgba(217,119,6,0.35),0_0_60px_rgba(217,119,6,0.12)]">
                <p className="font-display text-3xl font-bold gradient-text-duo">{repos}</p>
                <p className="mt-1 text-sm text-muted-foreground">Public repositories</p>
              </div>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
