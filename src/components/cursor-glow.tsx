import { useEffect, useRef } from 'react'

interface Star {
  x: number
  y: number
  vx: number
  vy: number
  size: number
  alpha: number
  phase: number
  rate: number
}

export function CursorGlow() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) return

    let running = true
    let mouseX = -500
    let mouseY = -500
    let t = 0

    const stars: Star[] = []
    for (let i = 0; i < 80; i++) {
      stars.push({
        x: Math.random() * window.innerWidth,
        y: Math.random() * window.innerHeight,
        vx: (Math.random() - 0.5) * 0.12,
        vy: (Math.random() - 0.5) * 0.12,
        size: Math.random() * 2.5 + 0.5,
        alpha: 0.2 + Math.random() * 0.5,
        phase: Math.random() * Math.PI * 2,
        rate: 0.3 + Math.random() * 0.8,
      })
    }

    function resize() {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    function frame() {
      if (!running || !canvas || !ctx) return
      t += 0.016

      ctx.clearRect(0, 0, canvas.width, canvas.height)

      // Ambient aurora
      const bg = ctx.createRadialGradient(
        canvas.width * 0.5, canvas.height * 0.3, 0,
        canvas.width * 0.5, canvas.height * 0.3, canvas.width * 0.55,
      )
      bg.addColorStop(0, `rgba(217,119,6,${0.035 + 0.015 * Math.sin(t * 0.25)})`)
      bg.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = bg
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Cursor glow
      const gl = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 220)
      gl.addColorStop(0, 'rgba(245,158,11,0.06)')
      gl.addColorStop(0.5, 'rgba(217,119,6,0.03)')
      gl.addColorStop(1, 'rgba(0,0,0,0)')
      ctx.fillStyle = gl
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Constellation connections
      for (let i = 0; i < stars.length; i++) {
        const a = stars[i]
        for (let j = i + 1; j < stars.length; j++) {
          const b = stars[j]
          const dx = a.x - b.x
          const dy = a.y - b.y
          const d = Math.sqrt(dx * dx + dy * dy)
          if (d < 110) {
            const str = 0.1 * (1 - d / 110) * a.alpha * b.alpha
            ctx.beginPath()
            ctx.moveTo(a.x, a.y)
            ctx.lineTo(b.x, b.y)
            ctx.strokeStyle = `rgba(217,119,6,${str})`
            ctx.lineWidth = 0.4
            ctx.stroke()
          }
        }
      }

      // Stars
      for (const s of stars) {
        s.x += s.vx
        s.y += s.vy
        if (s.x < -20) s.x = canvas.width + 20
        if (s.x > canvas.width + 20) s.x = -20
        if (s.y < -20) s.y = canvas.height + 20
        if (s.y > canvas.height + 20) s.y = -20

        const pulse = 0.5 + 0.5 * Math.sin(s.phase + t * s.rate)
        const sz = s.size * (0.6 + 0.4 * pulse)

        // Outer glow
        const og = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, sz * 3)
        og.addColorStop(0, `rgba(217,119,6,${s.alpha * pulse * 0.15})`)
        og.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = og
        ctx.beginPath()
        ctx.arc(s.x, s.y, sz * 3, 0, Math.PI * 2)
        ctx.fill()

        // Star body
        ctx.beginPath()
        ctx.arc(s.x, s.y, sz, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(245,158,11,${s.alpha * pulse * 0.5})`
        ctx.fill()

        // Star core
        ctx.beginPath()
        ctx.arc(s.x, s.y, sz * 0.35, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(251,191,36,${s.alpha * pulse})`
        ctx.fill()
      }

      // Mouse trail burst
      for (let i = 0; i < stars.length; i++) {
        const s = stars[i]
        const dx = s.x - mouseX
        const dy = s.y - mouseY
        const d = Math.sqrt(dx * dx + dy * dy)
        if (d < 60) {
          s.vx += dx * 0.0008
          s.vy += dy * 0.0008
          s.alpha = Math.min(0.8, s.alpha + 0.015)
        }
        s.vx *= 0.99
        s.vy *= 0.99
      }

      requestAnimationFrame(frame)
    }

    resize()
    frame()
    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }, { passive: true })

    return () => {
      running = false
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-[1]" />
}
