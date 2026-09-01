import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

const ease = [0.16, 1, 0.3, 1] as const

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay, ease }}
    >
      {children}
    </motion.div>
  )
}

export function SectionReveal({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, ease }}
    >
      {children}
    </motion.div>
  )
}

export function SectionIndicator({ label, index }: { label: string; index: string }) {
  return (
    <div className="mb-6 flex items-baseline gap-3 text-sm text-[#6B6255]">
      <span className="font-mono text-xs text-[#B4432B]">{index}</span>
      <span className="uppercase tracking-[0.14em]">{label}</span>
    </div>
  )
}
