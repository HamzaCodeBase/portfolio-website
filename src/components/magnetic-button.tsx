import type { MouseEvent, ReactNode } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'

type MagneticButtonProps = {
  children: ReactNode
  className?: string
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  disabled?: boolean
  strength?: number
}

export function MagneticButton({
  children,
  className,
  href,
  onClick,
  type = 'button',
  disabled,
  strength = 0.25,
}: MagneticButtonProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.5 })

  function handleMove(e: MouseEvent<HTMLElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    x.set((e.clientX - rect.left - rect.width / 2) * strength)
    y.set((e.clientY - rect.top - rect.height / 2) * strength)
  }

  function handleLeave() {
    x.set(0)
    y.set(0)
  }

  if (href) {
    return (
      <motion.a
        href={href}
        onClick={onClick}
        onMouseMove={handleMove}
        onMouseLeave={handleLeave}
        style={{ x: springX, y: springY }}
        className={className}
      >
        {children}
      </motion.a>
    )
  }

  return (
    <motion.button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: springX, y: springY }}
      className={className}
    >
      {children}
    </motion.button>
  )
}
