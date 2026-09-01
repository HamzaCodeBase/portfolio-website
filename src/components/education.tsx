import { CountUp } from '@/components/count-up'
import { Reveal, SectionIndicator } from '@/components/reveal'
import { CERTIFICATIONS, EDUCATION, LANGUAGES } from '@/lib/data'

export function Education() {
  return (
    <section id="education" className="section-padding border-t border-[#201C16]/12 bg-[#EFE8D8]">
      <div className="max-w-content">
        <Reveal>
          <SectionIndicator index="05" label="Background" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
            Education
          </h2>
        </Reveal>

        <div className="mt-12 grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
          <Reveal>
            <div className="border-t border-[#201C16]/12 pt-6">
              <h3 className="font-display text-2xl">{EDUCATION.degree}</h3>
              <p className="mt-1 text-sm text-[#6B6255]">{EDUCATION.school} &middot; {EDUCATION.period}</p>

              <div className="mt-6 flex items-baseline gap-4">
                <span className="font-display text-4xl text-[#B4432B]"><CountUp value={EDUCATION.gpa} /></span>
                <span className="text-sm text-[#6B6255]">CGPA &middot; 4.0 scale</span>
              </div>

              <div className="mt-8 border-t border-[#201C16]/12 pt-6">
                <h4 className="text-sm text-[#6B6255]">Languages</h4>
                <p className="mt-2 text-sm">{LANGUAGES.join(' · ')}</p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <div className="border-t border-[#201C16]/12 pt-6">
              <h4 className="text-sm text-[#6B6255]">Certifications</h4>
              <div className="mt-4 divide-y divide-[#201C16]/12">
                {CERTIFICATIONS.map((cert) => (
                  <a
                    key={cert.name}
                    href={cert.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-baseline justify-between gap-4 py-3.5 transition-all duration-300 hover:pl-3"
                  >
                    <span className="text-sm transition-colors group-hover:text-[#B4432B]">{cert.name}</span>
                    <span className="shrink-0 text-xs text-[#6B6255]">{cert.issuer}</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
