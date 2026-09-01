import { motion, useScroll, useSpring } from 'framer-motion'

export function ReadingProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 30, restDelta: 0.001 })

  return (
    <motion.div
      className="fixed inset-x-0 top-0 z-[60] h-px origin-left bg-[#B4432B]"
      style={{ scaleX }}
    />
  )
}
