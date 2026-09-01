import { Reveal, SectionIndicator } from '@/components/reveal'
import { SKILL_GROUPS } from '@/lib/data'

export function Skills() {
  return (
    <section id="skills" className="section-padding border-t border-[#201C16]/12 bg-[#EFE8D8]">
      <div className="max-w-content">
        <Reveal>
          <SectionIndicator index="02" label="Skills" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
            Skills &amp; technologies
          </h2>
        </Reveal>

        <div className="mt-12 divide-y divide-[#201C16]/12 border-t border-[#201C16]/12">
          {SKILL_GROUPS.map((group, i) => (
            <Reveal key={group.category} delay={i * 0.05}>
              <div className="group flex flex-col gap-2 py-6 transition-all duration-300 hover:pl-3 sm:flex-row sm:gap-8">
                <h3 className="font-display text-lg transition-colors group-hover:text-[#B4432B] sm:w-56 sm:shrink-0">{group.category}</h3>
                <p className="max-w-2xl text-sm leading-relaxed text-[#6B6255]">
                  {group.skills.join(' · ')}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
