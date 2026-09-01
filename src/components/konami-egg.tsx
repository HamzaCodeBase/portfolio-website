import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const SEQUENCE = ['arrowup', 'arrowup', 'arrowdown', 'arrowdown', 'arrowleft', 'arrowright', 'arrowleft', 'arrowright', 'b', 'a']

export function KonamiEgg() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    let buffer: string[] = []
    function onKeyDown(e: KeyboardEvent) {
      buffer = [...buffer, e.key.toLowerCase()].slice(-SEQUENCE.length)
      if (buffer.join(',') === SEQUENCE.join(',')) {
        setOpen(true)
        buffer = []
      }
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  useEffect(() => {
    if (!open) return
    const timeout = setTimeout(() => setOpen(false), 9000)
    return () => clearTimeout(timeout)
  }, [open])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="status"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.96 }}
          transition={{ type: 'spring', stiffness: 260, damping: 22 }}
          className="fixed bottom-6 right-6 z-[100] max-w-xs border border-[#201C16]/20 bg-[#FBF8F1] p-5 shadow-[0_20px_40px_rgba(32,28,22,0.16)]"
        >
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Dismiss"
            className="absolute right-3 top-3 text-[#6B6255] transition-colors hover:text-[#B4432B]"
          >
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-3.5 w-3.5">
              <path d="M4 12L12 4M12 12L4 4" strokeLinecap="round" />
            </svg>
          </button>

          <p className="font-mono text-[11px] uppercase tracking-wider text-[#B4432B]">Easter egg found</p>
          <p className="mt-2 font-display text-lg leading-snug">You know your way around a keyboard.</p>
          <p className="mt-2 text-sm leading-relaxed text-[#6B6255]">
            If you made it this far, you probably read code for fun too. Let&rsquo;s build something.
          </p>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="link-underline mt-4 inline-block text-sm text-[#B4432B]"
          >
            Say hello &rarr;
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
