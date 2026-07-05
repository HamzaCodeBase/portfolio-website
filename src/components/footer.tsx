import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { NAV_LINKS, SOCIALS } from '@/lib/data'

const LINKS = [
  { label: 'Email', href: `mailto:${SOCIALS.email}` },
  { label: 'LinkedIn', href: SOCIALS.linkedin },
  { label: 'GitHub', href: SOCIALS.github },
]

export function Footer() {
  const [year, setYear] = useState('')

  useEffect(() => { setYear(String(new Date().getFullYear())) }, [])

  return (
    <footer className="border-t border-white/5 px-6 py-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 sm:flex-row">
        <div className="flex items-center gap-2">
          <motion.span
            className="font-display text-lg font-bold"
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
            style={{
              background: 'linear-gradient(90deg, #D97706, #E11D48, #F59E0B, #D97706)',
              backgroundSize: '200% 100%',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}
          >
            HZ
          </motion.span>
          <span className="text-sm text-muted-foreground">&copy; {year}</span>
        </div>

        <div className="flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-muted-foreground transition-colors hover:text-foreground">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#home"
            className="ml-2 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-muted-foreground transition-all hover:border-[#D97706]/30 hover:text-[#D97706]"
            aria-label="Back to top"
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5">
              <path d="M8 12V4M4 8l4-4 4 4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  )
}
