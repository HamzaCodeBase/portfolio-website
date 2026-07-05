import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay, ease: [0.25, 0.1, 0.25, 1] }}
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
