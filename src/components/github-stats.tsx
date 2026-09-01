// Requires: npm install react-github-calendar
import { useEffect, useState } from 'react'
import { GitHubCalendar } from 'react-github-calendar'
import { CountUp } from '@/components/count-up'
import { Reveal, SectionIndicator } from '@/components/reveal'
import { GITHUB_USERNAME, SOCIALS } from '@/lib/data'

const theme = {
  light: ['#EFE8D8', '#E7C9BA', '#D89478', '#B4432B', '#7A2C1B'],
}

export function GithubStats() {
  const [repos, setRepos] = useState<string | null>(null)
  const [blockSize, setBlockSize] = useState(12)

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`)
        const user = await res.json()
        setRepos(`${user.public_repos}+`)
      } catch {
        setRepos('12+')
      }
    }
    fetchData()
  }, [])

  useEffect(() => {
    function onResize() {
      setBlockSize(window.innerWidth < 640 ? 6 : 12)
    }
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return (
    <section className="section-padding border-t border-[#201C16]/12">
      <div className="max-w-content">
        <Reveal>
          <SectionIndicator index="06" label="Open source" />
        </Reveal>
        <div className="flex flex-wrap items-baseline justify-between gap-4">
          <Reveal delay={0.05}>
            <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
              GitHub
            </h2>
          </Reveal>
          <Reveal delay={0.08}>
            <a
              href={SOCIALS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="link-underline text-sm text-[#B4432B]"
            >
              @{GITHUB_USERNAME} &middot; {repos ? <CountUp value={repos} /> : '—'} repositories
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.1} className="min-w-0">
          <div className="mt-10 overflow-x-auto border-t border-[#201C16]/12 pt-8">
            <div style={{ minWidth: 'max-content' }}>
              <GitHubCalendar
                username={GITHUB_USERNAME}
                theme={theme}
                blockSize={blockSize}
                blockMargin={3}
                fontSize={13}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
