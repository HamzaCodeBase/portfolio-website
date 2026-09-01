import { useRef } from 'react'
import { motion } from 'framer-motion'

type Chip = { label: string; left: string; top: string; rotate: number }

const CHIPS: Chip[] = [
  { label: '.NET 8', left: '2%', top: '4%', rotate: -7 },
  { label: 'ASP.NET Core', left: '34%', top: '0%', rotate: 4 },
  { label: 'React', left: '70%', top: '10%', rotate: -5 },
  { label: 'Blazor', left: '6%', top: '32%', rotate: 5 },
  { label: 'EF Core', left: '42%', top: '30%', rotate: -3 },
  { label: 'SignalR', left: '72%', top: '38%', rotate: 6 },
  { label: 'Azure', left: '0%', top: '62%', rotate: 3 },
  { label: 'SQL Server', left: '32%', top: '60%', rotate: -6 },
  { label: 'TypeScript', left: '62%', top: '68%', rotate: 3 },
  { label: 'Docker', left: '30%', top: '84%', rotate: -2 },
]

export function TechChips() {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <div className="flex flex-col items-center">
      <div
        ref={containerRef}
        className="relative mx-auto h-[360px] w-full max-w-[380px]"
      >
        {CHIPS.map((chip, i) => (
          <motion.div
            key={chip.label}
            drag
            dragConstraints={containerRef}
            dragElastic={0.15}
            dragTransition={{ bounceStiffness: 300, bounceDamping: 20 }}
            whileDrag={{ scale: 1.1, zIndex: 30, boxShadow: '0 16px 28px rgba(32,28,22,0.2)', cursor: 'grabbing' }}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, scale: 0.7, rotate: chip.rotate }}
            animate={{ opacity: 1, scale: 1, rotate: chip.rotate }}
            transition={{ type: 'spring', stiffness: 220, damping: 18, delay: 0.5 + i * 0.05 }}
            className="absolute cursor-grab touch-none select-none whitespace-nowrap border border-[#201C16]/20 bg-[#FBF8F1] px-3.5 py-2 font-mono text-xs text-[#201C16] shadow-[0_2px_6px_rgba(32,28,22,0.08)]"
            style={{ left: chip.left, top: chip.top }}
          >
            {chip.label}
          </motion.div>
        ))}
      </div>

      <p className="mt-4 text-[11px] uppercase tracking-wider text-[#6B6255]/70">
        Drag to rearrange
      </p>
    </div>
  )
}
