import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

const SECTIONS = [
  { id: 'about', index: '01', rotate: -8 },
  { id: 'skills', index: '02', rotate: 6 },
  { id: 'projects', index: '03', rotate: -5 },
  { id: 'experience', index: '04', rotate: 9 },
  { id: 'education', index: '05', rotate: -7 },
  { id: 'github', index: '06', rotate: 5 },
  { id: 'contact', index: '07', rotate: -4 },
]

export function SectionStamps() {
  const [visited, setVisited] = useState<string[]>([])
  const [hideAtEnd, setHideAtEnd] = useState(false)
  const orderRef = useRef<string[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting && !orderRef.current.includes(entry.target.id)) {
            orderRef.current = [...orderRef.current, entry.target.id]
            setVisited(orderRef.current)
          }
        }
      },
      { rootMargin: '-30% 0px -30% 0px', threshold: 0 },
    )
    for (const { id } of SECTIONS) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const sentinel = document.getElementById('stamps-hide-sentinel')
    if (!sentinel) return
    const observer = new IntersectionObserver(
      ([entry]) => setHideAtEnd(entry.isIntersecting),
      { rootMargin: '0px' },
    )
    observer.observe(sentinel)
    return () => observer.disconnect()
  }, [])

  const collected = SECTIONS.filter((s) => visited.includes(s.id))

  if (collected.length === 0) return null

  return (
    <div
      className="pointer-events-none fixed bottom-6 left-6 z-40 flex items-center gap-1.5 transition-opacity duration-500"
      style={{ opacity: hideAtEnd ? 0 : 1 }}
      title={`${collected.length} of ${SECTIONS.length} sections explored`}
      aria-hidden
    >
      <AnimatePresence>
        {collected.map((s) => (
          <motion.div
            key={s.id}
            initial={{ opacity: 0, scale: 1.8, rotate: 0 }}
            animate={{ opacity: 0.85, scale: 1, rotate: s.rotate }}
            transition={{ type: 'spring', stiffness: 260, damping: 14 }}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-[#B4432B] font-mono text-[10px] font-bold text-[#B4432B]"
            style={{ mixBlendMode: 'multiply' }}
          >
            {s.index}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}
