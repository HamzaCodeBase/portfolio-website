import { useEffect, useState } from 'react'
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
    <footer className="border-t border-[#201C16]/12 px-6 py-12">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-8 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="font-display text-lg italic">Hamza Zafar</span>
          <span className="text-sm text-[#6B6255]">&copy; {year}</span>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-5">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-sm text-[#6B6255] transition-colors hover:text-[#201C16]">
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-5">
          {LINKS.map((l) => (
            <a
              key={l.label}
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-[#6B6255] transition-colors hover:text-[#201C16]"
            >
              {l.label}
            </a>
          ))}
          <a href="#home" className="link-underline text-sm">
            Top &uarr;
          </a>
        </div>
      </div>
    </footer>
  )
}
