import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MagneticButton } from '@/components/magnetic-button'
import { NAV_LINKS } from '@/lib/data'

export function Navbar() {
  const [visible, setVisible] = useState(true)
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)
  const [lastY, setLastY] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    function onScroll() {
      const y = window.scrollY
      setVisible(y < 60 || y < lastY)
      setScrolled(y > 20)
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
    <motion.nav
      role="navigation"
      aria-label="Main navigation"
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed inset-x-0 top-0 z-50 bg-[#F6F1E7] transition-[transform,border-color] duration-500 ${
        visible ? 'translate-y-0' : '-translate-y-full'
      } ${scrolled ? 'border-b border-[#201C16]/12' : 'border-b border-transparent'}`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
        <a href="#home" className="font-display text-lg italic">
          Hamza Zafar
        </a>

        <div className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = active === link.href.replace('#', '')
            return (
              <a
                key={link.href}
                href={link.href}
                className={`relative py-1 text-sm transition-colors ${
                  isActive ? 'text-[#B4432B]' : 'text-[#6B6255] hover:text-[#201C16]'
                }`}
              >
                {link.label}
                {isActive && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 -bottom-0.5 h-px bg-[#B4432B]"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </a>
            )
          })}
          <MagneticButton
            href="#contact"
            strength={0.3}
            className="inline-block border border-[#201C16]/20 px-4 py-2 text-sm transition-colors duration-200 hover:border-[#B4432B] hover:text-[#B4432B] active:scale-[0.96]"
          >
            Let&rsquo;s talk
          </MagneticButton>
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

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-[#201C16]/12 bg-[#F6F1E7] md:hidden"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="block border-b border-[#201C16]/8 px-6 py-3 text-sm text-[#6B6255] transition-colors hover:text-[#201C16]"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block px-6 py-3 text-center text-sm text-[#B4432B]"
            >
              Let&rsquo;s talk
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
