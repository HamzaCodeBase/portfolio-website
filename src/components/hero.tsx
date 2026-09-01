import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import { CountUp } from '@/components/count-up'
import { MagneticButton } from '@/components/magnetic-button'
import { TechChips } from '@/components/tech-chips'
import { HERO_STATS, PROFILE } from '@/lib/data'

const ease = [0.16, 1, 0.3, 1] as const

const LINES: (string | React.ReactNode)[] = [
  'I build reliable',
  <>
    <span className="italic text-[#B4432B]">.NET</span> software
  </>,
  'that ships.',
]

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 80])
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0])

  return (
    <section id="home" ref={sectionRef} className="relative flex min-h-screen items-center pt-24">
      <motion.div style={{ y, opacity }} className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="grid gap-16 lg:grid-cols-[1.15fr_1fr] lg:items-center lg:gap-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease }}
              className="text-sm text-[#6B6255]"
            >
              {PROFILE.title} &middot; {PROFILE.location}
            </motion.p>

            <h1 className="mt-4 font-display text-5xl leading-[1.05] tracking-tight sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl">
              {LINES.map((line, i) => (
                <span key={i} className="block overflow-hidden pb-1">
                  <motion.span
                    className="block"
                    initial={{ y: '110%' }}
                    animate={{ y: '0%' }}
                    transition={{ duration: 0.7, delay: 0.12 + i * 0.08, ease }}
                  >
                    {line}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45, ease }}
              className="mt-8 max-w-lg text-base leading-relaxed text-[#6B6255] sm:text-lg"
            >
              For the last {PROFILE.yearsExperience} years I&rsquo;ve worked across ASP.NET Core,
              React, and Blazor &mdash; building APIs, SaaS platforms, and internal tools that hold
              up in production.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.55, ease }}
              className="mt-10 flex flex-wrap items-center gap-6"
            >
              <MagneticButton
                href="#projects"
                strength={0.3}
                className="inline-block border border-[#201C16] px-6 py-3 text-sm transition-colors duration-200 hover:border-[#B4432B] hover:text-[#B4432B] active:scale-[0.96]"
              >
                View my work
              </MagneticButton>
              <a href="#contact" className="link-underline text-sm">
                Get in touch &rarr;
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65, ease }}
              className="mt-20 flex flex-nowrap gap-x-6 border-t border-[#201C16]/12 pt-8 sm:gap-x-10 lg:gap-x-6 xl:gap-x-10"
            >
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="min-w-0">
                  <p className="font-display text-2xl sm:text-3xl">
                    <CountUp value={stat.value} />
                  </p>
                  <p className="mt-1 max-w-[7.5rem] text-xs leading-tight text-[#6B6255] sm:max-w-[9rem]">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4, ease }}
            className="hidden lg:block"
          >
            <TechChips />
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
