import { useEffect, useState } from 'react'
import { NAV_LINKS } from '@/lib/data'
import { Magnetic } from '@/components/magnetic'

export function Navbar() {
  const [visible, setVisible] = useState(true)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const [lastY, setLastY] = useState(0)

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY
      setVisible(y < 60 || y < lastY)
      setLastY(y)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [lastY])

  useEffect(() => {
    const ids = NAV_LINKS.map((l) => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        let best = ''; let bestRatio = 0
        for (const e of entries) {
          if (e.intersectionRatio > bestRatio) { bestRatio = e.intersectionRatio; best = e.target.id }
        }
        if (best) setActive(best)
      },
      { rootMargin: '-120px 0px -60% 0px', threshold: [0, 0.25, 0.5, 0.75, 1] },
    )
    for (const id of ids) { const el = document.getElementById(id); if (el) observer.observe(el) }
    return () => observer.disconnect()
  }, [])

  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } bg-[#09090B]`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Magnetic as="a" href="#home" strength={0.15}>
          <span className="font-display text-xl font-bold tracking-tight">
            <span className="gradient-text">HZ</span>
            <span className="text-muted-foreground">.</span>
          </span>
        </Magnetic>

        <div className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href.replace('#', '')
            return (
              <Magnetic key={link.href} as="a" href={link.href} strength={0.15}>
                <span className={`relative rounded-xl px-4 py-2 text-sm transition-all ${
                  isActive ? 'text-[#D97706]' : 'text-muted-foreground hover:text-foreground'
                }`}>
                  {link.label}
                  {isActive && (
                    <span className="absolute inset-x-2 -bottom-px h-[2px] rounded-full bg-[#D97706]" />
                  )}
                </span>
              </Magnetic>
            )
          })}
          <Magnetic as="a" href="#contact" strength={0.15}>
            <span className="ml-3 rounded-xl bg-[#D97706] px-5 py-2.5 text-sm font-semibold text-white transition-all hover:shadow-[0_0_30px_rgba(217,119,6,0.3)]">
              Let&rsquo;s talk
            </span>
          </Magnetic>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center text-foreground md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-5 w-5">
            {open ? <path d="M6 18L18 6M6 6l12 12" /> : <path d="M4 6h16M4 12h16M4 18h16" />}
          </svg>
        </button>
      </div>

      {open && (
        <div className="mx-4 mb-4 rounded-2xl border border-white/10 bg-[#09090B]/95 p-4 md:hidden">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 block rounded-xl bg-[#D97706] px-4 py-3 text-center text-sm font-semibold text-white"
          >
            Let&rsquo;s talk
          </a>
        </div>
      )}
    </nav>
  )
}
