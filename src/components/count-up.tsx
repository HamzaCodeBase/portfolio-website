import { useEffect, useRef, useState } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'

type CountUpProps = {
  value: string
  className?: string
}

const PARTS = /^(-?\d+(\.\d+)?)(.*)$/

export function CountUp({ value, className }: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const match = value.match(PARTS)
  const numeric = match ? parseFloat(match[1]) : null
  const suffix = match ? match[3] : ''
  const decimals = match?.[2] ? match[2].length - 1 : 0

  const motionVal = useMotionValue(0)
  const spring = useSpring(motionVal, { stiffness: 60, damping: 18, mass: 1 })
  const [display, setDisplay] = useState(decimals ? (0).toFixed(decimals) : '0')

  useEffect(() => {
    if (inView && numeric !== null) motionVal.set(numeric)
  }, [inView, numeric, motionVal])

  useEffect(() => {
    return spring.on('change', (v) => {
      setDisplay(decimals ? v.toFixed(decimals) : Math.round(v).toString())
    })
  }, [spring, decimals])

  if (numeric === null) return <span ref={ref} className={className}>{value}</span>

  return (
    <span ref={ref} className={className}>
      {display}{suffix}
    </span>
  )
}
