import { useEffect, useState, type ReactNode, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type TiltCardProps = {
  children: ReactNode
  className?: string
  glare?: boolean
}

export function TiltCard({ children, className = '', glare = false }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [tilt, setTilt] = useState({ x: 0, y: 0 })
  const [glarePos, setGlarePos] = useState({ x: 50, y: 50 })

  function onMove(e: React.MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width
    const y = (e.clientY - rect.top) / rect.height
    setTilt({ x: (x - 0.5) * 8, y: (y - 0.5) * -8 })
    setGlarePos({ x: x * 100, y: y * 100 })
  }

  function onLeave() {
    setTilt({ x: 0, y: 0 })
    setGlarePos({ x: 50, y: 50 })
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className={`relative ${className}`}
      style={{
        perspective: '800px',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        className="h-full"
        style={{
          transform: `rotateX(${tilt.y}deg) rotateY(${tilt.x}deg)`,
          transition: 'transform 0.3s cubic-bezier(0.25, 0.1, 0.25, 1)',
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
        {glare && (
          <div
            className="pointer-events-none absolute inset-0 rounded-[inherit]"
            style={{
              background: `radial-gradient(circle at ${glarePos.x}% ${glarePos.y}%, rgba(255,255,255,0.06), transparent 60%)`,
            }}
          />
        )}
      </div>
    </div>
  )
}

type ModalProps = {
  open: boolean
  onClose: () => void
  children: ReactNode
}

export function Modal({ open, onClose, children }: ModalProps) {
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') onClose()
    }
    if (open) window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 md:p-8"
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="relative z-10 max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-white/10 bg-[#09090B] p-6 shadow-2xl md:p-10"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-white/5 text-muted-foreground transition-colors hover:bg-white/10 hover:text-foreground"
              aria-label="Close modal"
            >
              <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4">
                <path d="M5 15l10-10M15 15L5 5" strokeLinecap="round" />
              </svg>
            </button>
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

type TypewriterProps = {
  words: string[]
  className?: string
}

export function Typewriter({ words, className = '' }: TypewriterProps) {
  const [index, setIndex] = useState(0)
  const [char, setChar] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index]
    const speed = deleting ? 40 : 80
    const timeout = setTimeout(() => {
      if (!deleting && char < word.length) {
        setChar((c) => c + 1)
      } else if (!deleting && char === word.length) {
        setTimeout(() => setDeleting(true), 2000)
      } else if (deleting && char > 0) {
        setChar((c) => c - 1)
      } else if (deleting && char === 0) {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      }
    }, speed)
    return () => clearTimeout(timeout)
  }, [char, deleting, index, words])

  return (
    <span className={className}>
      {words[index].slice(0, char)}
      <span className="animate-pulse-soft text-[#D97706]">|</span>
    </span>
  )
}
