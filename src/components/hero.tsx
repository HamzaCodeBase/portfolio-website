import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Magnetic } from '@/components/magnetic'
import { Typewriter } from '@/components/tilt-card'
import { ScrambleText } from '@/components/scramble-text'
import { HERO_STATS, PROFILE } from '@/lib/data'

const ROLES = [
  'ASP.NET Core Developer',
  'Blazor Architect',
  'React Engineer',
  'Azure Specialist',
  'Clean Architecture Advocate',
  'Microservices Designer',
]

const nameChars = PROFILE.name.split('')
const splitIdx = PROFILE.name.indexOf(' ')
const letterBaseDelay = 0.4
const letterDelay = 0.06

const totalLetterDuration = letterBaseDelay + nameChars.length * letterDelay + 0.6

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    function onMove(e: MouseEvent) {
      const rect = sectionRef.current?.getBoundingClientRect()
      if (!rect) return
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      })
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background grid */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]"
        style={{
          transform: `translate(${(mousePos.x - 0.5) * 20}px, ${(mousePos.y - 0.5) * 20}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#D97706" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Lighting orbs — auto-drift + mouse follow */}
      <div className="animate-float-slow pointer-events-none absolute -top-1/4 -right-1/4">
        <div
          className="h-[600px] w-[600px] rounded-full opacity-20 blur-[150px]"
          style={{
            background: `radial-gradient(circle, rgba(217,119,6,0.4), transparent)`,
            transform: `translate(${(mousePos.x - 0.5) * -30}px, ${(mousePos.y - 0.5) * -30}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>
      <div className="animate-float-slow pointer-events-none absolute -bottom-1/4 -left-1/4" style={{ animationDelay: '-4s' }}>
        <div
          className="h-[500px] w-[500px] rounded-full opacity-15 blur-[120px]"
          style={{
            background: `radial-gradient(circle, rgba(225,29,72,0.4), transparent)`,
            transform: `translate(${(mousePos.x - 0.5) * 30}px, ${(mousePos.y - 0.5) * 30}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-24 md:pb-20 md:pt-32">
        <div className="max-w-4xl">
          {/* Availability badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: totalLetterDuration + 0.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D97706]/20 bg-[#D97706]/5 px-4 py-2 text-xs font-medium text-[#D97706] animate-pulse-soft"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for projects
          </motion.div>

          {/* Letter-by-letter heading */}
          <h1 className="font-display text-5xl font-bold leading-[1.04] tracking-tight sm:text-7xl md:text-8xl lg:text-9xl">
            {nameChars.map((char, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 80, rotateX: -90 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: letterBaseDelay + i * letterDelay, ease: [0.25, 0.1, 0.25, 1] }}
                className="inline-block origin-bottom"
                style={{
                  color: i < splitIdx ? '#D97706' : '#E11D48',
                  marginRight: char === ' ' ? '0.25em' : undefined,
                }}
              >
                {char === ' ' ? '\u00A0' : char}
              </motion.span>
            ))}
          </h1>

          {/* Gradient underline */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: totalLetterDuration + 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-4 h-[2px] w-56 origin-left animate-shimmer-gradient sm:w-72 md:w-96"
            style={{
              background: 'linear-gradient(90deg, #D97706, #E11D48, #F59E0B, transparent)',
            }}
          />

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: totalLetterDuration + 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-6 flex items-center gap-3"
          >
            <ScrambleText text={PROFILE.title} className="text-base text-muted-foreground sm:text-lg" />
          </motion.div>

          {/* Typing specialties */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: totalLetterDuration + 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-3 font-mono text-sm text-muted-foreground"
          >
            Specializing in{' '}
            <span className="text-[#F59E0B]">
              <Typewriter words={ROLES} />
            </span>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: totalLetterDuration + 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            I architect and ship production .NET systems — APIs, SaaS platforms, and
            full-stack applications. {PROFILE.yearsExperience} years shipping code
            that businesses actually run on.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: totalLetterDuration + 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <Magnetic as="a" href="#projects" strength={0.2}>
              <span className="group inline-flex items-center gap-2 rounded-2xl bg-[#D97706] px-8 py-4 font-semibold text-white transition-all hover:shadow-[0_0_40px_rgba(217,119,6,0.3)]">
                Explore my work
                <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 transition-transform group-hover:translate-x-1">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Magnetic>
            <Magnetic as="a" href="#contact" strength={0.2}>
              <span className="inline-flex items-center gap-2 rounded-2xl border border-white/10 px-8 py-4 text-sm text-foreground transition-all hover:border-[#D97706]/30 hover:bg-white/5">
                Get in touch
              </span>
            </Magnetic>
          </motion.div>

        </div>

          {/* Tech stack marquee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: totalLetterDuration + 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="-mx-6 mt-14 overflow-hidden"
          >
            <div className="flex w-max animate-marquee gap-2">
              {[
                'ASP.NET Core', 'Blazor', 'React', 'Azure', 'SQL Server', 'Docker', 'GraphQL',
                'ASP.NET Core', 'Blazor', 'React', 'Azure', 'SQL Server', 'Docker', 'GraphQL',
                'ASP.NET Core', 'Blazor', 'React', 'Azure', 'SQL Server', 'Docker', 'GraphQL',
                'ASP.NET Core', 'Blazor', 'React', 'Azure', 'SQL Server', 'Docker', 'GraphQL',
              ].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="inline-flex shrink-0 rounded-full border border-white/5 bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-[#D97706]/20 hover:text-[#D97706]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: totalLetterDuration + 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-16"
          >
            <div className="grid grid-cols-3 gap-6 rounded-2xl border border-white/5 bg-white/[0.02] p-8 text-center md:flex md:justify-center md:gap-16">
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl font-bold gradient-text-duo sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
      </div>


    </section>
  )
}
