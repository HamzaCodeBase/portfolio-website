import { Reveal, SectionIndicator } from '@/components/reveal'
import { ABOUT_FACTS, ABOUT_PARAGRAPHS, WHAT_I_DO } from '@/lib/data'

export function About() {
  return (
    <section id="about" className="section-padding border-t border-[#201C16]/12">
      <div className="max-w-content">
        <Reveal>
          <SectionIndicator index="01" label="About" />
        </Reveal>

        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-20">
          {/* Left - Editorial content */}
          <div>
            <Reveal>
              <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
                About me
              </h2>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-[#6B6255]">
                {ABOUT_PARAGRAPHS.map((p) => (
                  <p key={p.slice(0, 30)}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right - Photo + facts */}
          <div>
            <Reveal delay={0.1}>
              <div className="group aspect-[4/5] w-full overflow-hidden border border-[#201C16]/12 bg-[#EFE8D8]">
                <img
                  src="/images/photo.png"
                  alt="Hamza Zafar"
                  className="h-full w-full object-cover grayscale transition-all duration-700 ease-out group-hover:scale-105 group-hover:grayscale-0"
                  onError={(e) => { e.currentTarget.style.display = 'none' }}
                />
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="mt-6 divide-y divide-[#201C16]/12 border-y border-[#201C16]/12">
                {ABOUT_FACTS.map((fact) => (
                  <div key={fact.label} className="flex items-center justify-between gap-4 py-3.5">
                    <span className="text-sm text-[#6B6255]">{fact.label}</span>
                    <span className="text-right text-sm">{fact.value}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        {/* What I Do */}
        <div className="mt-20">
          <Reveal>
            <h3 className="font-display text-2xl">What I bring to the table</h3>
          </Reveal>

          <div className="mt-8 border-t border-[#201C16]/12">
            {WHAT_I_DO.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.06}>
                <div className="group flex flex-col gap-1 border-b border-[#201C16]/12 py-6 transition-all duration-300 hover:pl-3 sm:flex-row sm:items-baseline sm:gap-8">
                  <span className="font-mono text-xs text-[#B4432B] sm:w-6 sm:shrink-0">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h4 className="font-display text-lg transition-colors group-hover:text-[#B4432B] sm:w-56 sm:shrink-0">{item.title}</h4>
                  <p className="max-w-xl text-sm leading-relaxed text-[#6B6255]">{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
