import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  from?: 'bottom' | 'left' | 'right'
}

const fromVariants = {
  bottom: { y: 40 },
  left: { x: -40 },
  right: { x: 40 },
}

export function Reveal({ children, className, delay = 0, from = 'bottom' }: RevealProps) {
  const dir = fromVariants[from]
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, scale: 0.97, ...dir }}
      whileInView={{ opacity: 1, scale: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: [0.215, 0.61, 0.355, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionReveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9, z: -100 }}
      whileInView={{ opacity: 1, scale: 1, z: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function SectionIndicator({ label }: { label: string }) {
  return (
    <div className="mb-6 flex items-center gap-3 text-xs tracking-[0.2em] uppercase text-muted-foreground">
      <span className="inline-block h-px w-12 bg-[#D97706]/40" />
      {label}
    </div>
  )
}
