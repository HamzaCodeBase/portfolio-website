import { useRef, type ReactNode, type MouseEvent } from 'react'

type MagneticProps = {
  children: ReactNode
  className?: string
  strength?: number
  as?: 'a' | 'button' | 'div'
  href?: string
  onClick?: () => void
}

export function Magnetic({
  children,
  className = '',
  strength = 0.2,
  as = 'div',
  href,
  onClick,
}: MagneticProps) {
  const ref = useRef<HTMLDivElement>(null)

  function onMove(e: MouseEvent) {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    el.style.transform = `translate(${x * strength}px, ${y * strength}px)`
  }

  function onLeave() {
    const el = ref.current
    if (!el) return
    el.style.transform = 'translate(0, 0)'
  }

  const _common = {
    ref,
    onMouseMove: onMove,
    onMouseLeave: onLeave,
    className: `inline-block transition-transform duration-200 ${className}`,
  }

  if (as === 'a') return <a href={href} {...(_common as any)}>{children}</a>
  if (as === 'button') return <button type="button" onClick={onClick} {...(_common as any)}>{children}</button>
  return <div {..._common}>{children}</div>
}
