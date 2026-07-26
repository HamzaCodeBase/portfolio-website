import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

import { Typewriter } from '@/components/tilt-card'

import { HERO_STATS, PROFILE } from '@/lib/data'

const ROLES = [
  'ASP.NET Core Developer',
  'Backend Engineer',
  'Blazor Developer',
  'React Engineer',
  'Redux & Context API',
  'React Hooks',
  'TypeScript Specialist',
  'Azure Specialist',
  'Clean Architecture',
  'System Design',
  'AI Integration',
]

const nameChars = PROFILE.name.split('')
const splitIdx = PROFILE.name.indexOf(' ')
const letterBaseDelay = 0.4
const letterDelay = 0.06

const totalLetterDuration = letterBaseDelay + nameChars.length * letterDelay + 0.6

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })

  useEffect(() => {
    function onMove(e: MouseEvent) {
      const rect = sectionRef.current?.getBoundingClientRect()
      if (!rect) return
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      })
    }
    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      {/* Background grid */}
      <svg
        className="pointer-events-none absolute inset-0 h-full w-full opacity-[0.03]"
        style={{
          transform: `translate(${(mousePos.x - 0.5) * 20}px, ${(mousePos.y - 0.5) * 20}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      >
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#D97706" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>

      {/* Lighting orbs — auto-drift + mouse follow */}
          <div className="animate-float-slow pointer-events-none absolute -top-1/4 -right-1/2 md:-right-1/4">
        <div
          className="h-[300px] w-[300px] rounded-full opacity-20 blur-[100px] md:h-[600px] md:w-[600px] md:blur-[150px]"
          style={{
            background: `radial-gradient(circle, rgba(217,119,6,0.4), transparent)`,
            transform: `translate(${(mousePos.x - 0.5) * -30}px, ${(mousePos.y - 0.5) * -30}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>
      <div className="animate-float-slow pointer-events-none absolute -bottom-1/4 -left-1/2 md:-left-1/4" style={{ animationDelay: '-4s' }}>
        <div
          className="h-[250px] w-[250px] rounded-full opacity-15 blur-[80px] md:h-[500px] md:w-[500px] md:blur-[120px]"
          style={{
            background: `radial-gradient(circle, rgba(225,29,72,0.4), transparent)`,
            transform: `translate(${(mousePos.x - 0.5) * 30}px, ${(mousePos.y - 0.5) * 30}px)`,
            transition: 'transform 0.3s ease-out',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 pb-16 pt-24 md:pb-20 md:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: totalLetterDuration + 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#D97706]/20 bg-[#D97706]/5 px-4 py-2 text-xs font-medium text-[#D97706] animate-pulse-soft"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              Available for projects
            </motion.div>

            {/* Letter-by-letter heading */}
            <h1 className="font-display text-4xl font-bold leading-[1.04] tracking-tight sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl">
              {nameChars.map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 80, rotateX: -90 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{ duration: 0.6, delay: letterBaseDelay + i * letterDelay, ease: [0.25, 0.1, 0.25, 1] }}
                  className="inline-block origin-bottom"
                  style={{
                    color: i < splitIdx ? '#D97706' : '#E11D48',
                    marginRight: char === ' ' ? '0.25em' : undefined,
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </h1>

            {/* Gradient underline */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.7, delay: totalLetterDuration + 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-4 h-[2px] w-56 origin-left animate-shimmer-gradient sm:w-72 md:w-96"
              style={{
                background: 'linear-gradient(90deg, #D97706, #E11D48, #F59E0B, transparent)',
              }}
            />

            {/* Role */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: totalLetterDuration + 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-6 flex items-center gap-3"
            >
              <p className="text-base text-muted-foreground sm:text-lg">
                <span className="text-[#D97706] font-semibold">.NET</span> Full Stack Developer
              </p>
            </motion.div>

            {/* Typing specialties */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: totalLetterDuration + 0.4, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-3 font-mono text-sm text-muted-foreground"
            >
              Expert{' '}
              <span className="text-[#F59E0B]">
                <Typewriter words={ROLES} />
              </span>
            </motion.div>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: totalLetterDuration + 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
            >
              I build .NET apps, APIs, and full-stack platforms that run smoothly. 
              For the last {PROFILE.yearsExperience} years, I&apos;ve focused on writing clean, reliable code 
              that solves real business problems and is easy to maintain.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: totalLetterDuration + 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              className="mt-10 flex flex-wrap gap-4"
            >
              <a href="#projects">
                <span className="group inline-flex items-center gap-2 rounded-2xl bg-[#D97706] px-8 py-4 font-semibold text-white transition-all hover:shadow-[0_0_40px_rgba(217,119,6,0.3)]">
                  Explore my work
                  <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 transition-transform group-hover:translate-x-1">
                    <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
              <a href="#contact">
                <span className="group inline-flex items-center gap-2 rounded-2xl border border-white/10 px-8 py-4 font-semibold text-foreground transition-all hover:border-[#D97706] hover:shadow-[0_0_30px_rgba(217,119,6,0.35),0_0_60px_rgba(217,119,6,0.12)] hover:bg-white/5">
                  Get in touch
                </span>
              </a>
            </motion.div>
          </div>

          {/* 3D wireframe mesh */}
          <div className="relative hidden h-full min-h-[400px] lg:block">
            <HeroMesh mousePos={mousePos} />
          </div>

        </div>

          {/* Tech stack marquee */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: totalLetterDuration + 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="-mx-6 mt-14 overflow-hidden"
          >
            <div className="flex w-max animate-marquee gap-2">
              {[
                'ASP.NET Core', 'Blazor', 'React', 'Redux', 'Context API', 'React Hooks', 'Azure', 'SQL Server', 'Docker', 'GraphQL',
                'C#', 'TypeScript', 'JavaScript', 'PostgreSQL', 'MongoDB', 'Redis', 'SignalR',
                'Entity Framework Core', 'MediatR', 'FluentValidation', 'xUnit', 'Auth0', 'Stripe',
                'GitHub Actions', 'IIS', 'Serilog', 'Sentry', 'SonarQube', 'Docker', 'Kestrel',
                'ASP.NET Core', 'Blazor', 'React', 'Redux', 'Context API', 'React Hooks', 'Azure', 'SQL Server', 'Docker', 'GraphQL',
                'C#', 'TypeScript', 'JavaScript', 'PostgreSQL', 'MongoDB', 'Redis', 'SignalR',
                'Entity Framework Core', 'MediatR', 'FluentValidation', 'xUnit', 'Auth0', 'Stripe',
                'GitHub Actions', 'IIS', 'Serilog', 'Sentry', 'SonarQube', 'Docker', 'Kestrel',
              ].map((tech, i) => (
                <span
                  key={`${tech}-${i}`}
                  className="inline-flex shrink-0 rounded-full border border-white/5 bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-[#D97706]/20 hover:text-[#D97706]"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: totalLetterDuration + 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="mt-16"
          >
            <div className="grid grid-cols-3 gap-3 rounded-2xl border border-white/5 bg-white/[0.02] p-4 text-center md:flex md:justify-center md:gap-16 md:p-8">
              {HERO_STATS.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-2xl font-bold gradient-text-duo sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-1 text-[10px] text-muted-foreground leading-tight sm:text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
      </div>

    </section>
  )
}

const PHI = (1 + Math.sqrt(5)) / 2

const ICOSAHEDRON_R = 90

const ICOSAHEDRON_VERTS: [number, number, number][] = [
  [-1, PHI, 0], [1, PHI, 0], [-1, -PHI, 0], [1, -PHI, 0],
  [0, -1, PHI], [0, 1, PHI], [0, -1, -PHI], [0, 1, -PHI],
  [PHI, 0, -1], [PHI, 0, 1], [-PHI, 0, -1], [-PHI, 0, 1],
].map(v => v.map(c => c * ICOSAHEDRON_R / Math.sqrt(1 + PHI * PHI))) as [number, number, number][]

const ICOSAHEDRON_EDGES: [number, number][] = [
  [0, 1], [0, 4], [0, 5], [0, 10], [0, 11],
  [1, 5], [1, 7], [1, 8], [1, 9],
  [2, 3], [2, 4], [2, 6], [2, 10], [2, 11],
  [3, 6], [3, 8], [3, 9],
  [4, 5], [4, 10], [4, 11],
  [5, 9], [5, 11],
  [6, 7], [6, 8], [6, 10],
  [7, 8], [7, 11],
  [8, 9], [9, 11], [10, 11],
]

function project(
  x: number, y: number, z: number,
  rx: number, ry: number, rz: number,
  w: number, h: number,
  ox: number, oy: number,
): [number, number, number] | null {
  let x1 = x * Math.cos(ry) + z * Math.sin(ry)
  let y1 = y
  let z1 = -x * Math.sin(ry) + z * Math.cos(ry)
  let x2 = x1
  let y2 = y1 * Math.cos(rx) - z1 * Math.sin(rx)
  let z2 = y1 * Math.sin(rx) + z1 * Math.cos(rx)
  let x3 = x2 * Math.cos(rz) - y2 * Math.sin(rz)
  let y3 = x2 * Math.sin(rz) + y2 * Math.cos(rz)
  let z3 = z2
  const fl = 400
  const s = fl / (fl + z3)
  if (s <= 0) return null
  return [w / 2 + x3 * s + ox, h / 2 + y3 * s + oy, z3]
}

function HeroMesh({ mousePos: _mousePos }: { mousePos: { x: number; y: number } }) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const rafRef = useRef<number>(0)
  const mouseRef = useRef(_mousePos)
  mouseRef.current = _mousePos

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const c = canvas.getContext('2d')
    if (!c) return

    const cvs: HTMLCanvasElement = canvas
    const cx: CanvasRenderingContext2D = c

    let w = 0, h = 0
    const dpr = window.devicePixelRatio || 1

    function resize() {
      const rect = cvs.getBoundingClientRect()
      w = rect.width
      h = rect.height
      cvs.width = w * dpr
      cvs.height = h * dpr
      cx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }
    resize()
    window.addEventListener('resize', resize)

    const verts = ICOSAHEDRON_VERTS
    const edges = ICOSAHEDRON_EDGES
    const R = ICOSAHEDRON_R

    function draw() {
      cx.clearRect(0, 0, w, h)

      const mp = mouseRef.current
      const rx = (mp.y - 0.5) * Math.PI * 0.8
      const ry = -(mp.x - 0.5) * Math.PI * 1.2
      const rz = 0
      const ox = (mp.x - 0.5) * 12
      const oy = (mp.y - 0.5) * -8

      for (const [i, j] of edges) {
        const p1 = project(...verts[i], rx, ry, rz, w, h, ox, oy)
        const p2 = project(...verts[j], rx, ry, rz, w, h, ox, oy)
        if (!p1 || !p2) continue

        const dz = (p1[2] + p2[2]) / 2
        const depth = 1 - (dz + R * 1.2) / (R * 2.4)
        const alpha = 0.1 + 0.65 * Math.max(0, Math.min(1, depth))

        const ci = (i + j) % 3
        const color = ci === 0 ? [217, 119, 6] as const
          : ci === 1 ? [245, 158, 11] as const
          : [225, 29, 72] as const

        cx.strokeStyle = `rgba(${color[0]},${color[1]},${color[2]},${alpha})`
        cx.lineWidth = 0.8 + alpha * 1.2
        cx.beginPath()
        cx.moveTo(p1[0], p1[1])
        cx.lineTo(p2[0], p2[1])
        cx.stroke()
      }

      for (const v of verts) {
        const p = project(...v, rx, ry, rz, w, h, ox, oy)
        if (!p) continue
        const depth = 1 - (p[2] + R * 1.2) / (R * 2.4)
        const alpha = 0.3 + 0.7 * Math.max(0, Math.min(1, depth))
        const radius = 1.5 + alpha * 1.5

        cx.fillStyle = `rgba(217,119,6,${alpha * 0.8})`
        cx.beginPath()
        cx.arc(p[0], p[1], radius, 0, Math.PI * 2)
        cx.fill()

        cx.fillStyle = `rgba(217,119,6,${alpha * 0.15})`
        cx.beginPath()
        cx.arc(p[0], p[1], radius * 3, 0, Math.PI * 2)
        cx.fill()
      }

      const gx = w / 2 + ox
      const gy = h / 2 + oy
      const glow = cx.createRadialGradient(gx, gy, 0, gx, gy, 140)
      glow.addColorStop(0, 'rgba(217,119,6,0.04)')
      glow.addColorStop(1, 'rgba(217,119,6,0)')
      cx.fillStyle = glow
      cx.beginPath()
      cx.arc(gx, gy, 140, 0, Math.PI * 2)
      cx.fill()

      rafRef.current = requestAnimationFrame(draw)
    }
    rafRef.current = requestAnimationFrame(draw)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="h-full w-full"
    />
  )
}
