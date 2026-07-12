import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Reveal, SectionIndicator } from '@/components/reveal'
import { TESTIMONIALS } from '@/lib/data'

export function Testimonials() {
  const [active, setActive] = useState(0)

  return (
    <section className="section-padding bg-[#0C0C10]">
      <div className="max-w-content">
        <Reveal>
          <SectionIndicator label="Testimonials" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="gradient-text">Testimonials</span>
          </h2>
        </Reveal>

        {/* Desktop: 3-column grid */}
        <div className="mt-12 hidden gap-6 md:grid md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <figure
                className={`group flex h-full flex-col rounded-2xl border-2 p-5 transition-all duration-500 md:p-7 ${
                  active === i ? 'border-[#D97706]/30 bg-[#D97706]/[0.03]' : 'border-white/5 bg-white/[0.02]'
                } hover:border-[#D97706] hover:shadow-[0_0_30px_rgba(217,119,6,0.35),0_0_60px_rgba(217,119,6,0.12)]`}
                onMouseEnter={() => setActive(i)}
              >
                <span className="font-display text-5xl leading-none gradient-text">&ldquo;</span>
                <blockquote className="-mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D97706]/15 text-sm font-medium text-[#D97706]">
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </span>
                  <div>
                    <span className="block text-sm font-medium text-foreground">{t.name}</span>
                    <span className="block text-xs text-muted-foreground">{t.title}</span>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Mobile: carousel */}
        <div className="mt-12 md:hidden">
          <AnimatePresence mode="wait">
            <motion.figure
              key={active}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col rounded-2xl border-2 border-white/5 bg-white/[0.02] p-5 transition-all duration-500 hover:border-[#D97706] hover:shadow-[0_0_30px_rgba(217,119,6,0.35),0_0_60px_rgba(217,119,6,0.12)] md:p-7"
            >
              <span className="font-display text-5xl leading-none gradient-text">&ldquo;</span>
              <blockquote className="-mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {TESTIMONIALS[active].quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-white/5 pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D97706]/15 text-sm font-medium text-[#D97706]">
                  {TESTIMONIALS[active].name.split(' ').map((n) => n[0]).join('')}
                </span>
                <div>
                  <span className="block text-sm font-medium text-foreground">{TESTIMONIALS[active].name}</span>
                  <span className="block text-xs text-muted-foreground">{TESTIMONIALS[active].title}</span>
                </div>
              </figcaption>
            </motion.figure>
          </AnimatePresence>
          <div className="mt-6 flex justify-center gap-2">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === active ? 'w-8 bg-[#D97706]' : 'w-2 bg-white/10'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
