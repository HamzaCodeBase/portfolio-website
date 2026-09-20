import { motion } from 'framer-motion'

export function DragToy() {
  return (
    <motion.div
      drag
      dragElastic={0.6}
      dragConstraints={{ top: -120, bottom: 120, left: -120, right: 120 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 10 }}
      whileDrag={{ scale: 1.18, rotate: 14 }}
      whileHover={{ scale: 1.06, rotate: -3 }}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.9 }}
      style={{ touchAction: 'none' }}
      className="absolute -top-3 right-2 z-10 hidden cursor-grab select-none items-center gap-2 border border-[#201C16]/20 bg-[#FBF8F1] px-4 py-2 font-mono text-xs text-[#6B6255] shadow-[0_10px_24px_rgba(32,28,22,0.12)] active:cursor-grabbing sm:flex"
    >
      <span className="text-base">🖱️</span>
      drag me
    </motion.div>
  )
}
