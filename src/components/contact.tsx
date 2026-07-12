import { useState, useRef, useEffect, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Reveal, SectionIndicator } from '@/components/reveal'
import { SOCIALS } from '@/lib/data'

const CHANNELS = [
  { icon: MailIcon, label: 'Email', value: SOCIALS.email, href: `mailto:${SOCIALS.email}` },
  { icon: LinkedinIcon, label: 'LinkedIn', value: '/in/hamzazafarg', href: SOCIALS.linkedin },
  { icon: GithubIcon, label: 'GitHub', value: '@Hamza-Zafar-9', href: SOCIALS.github },
]

export function Contact() {
  const [sent, setSent] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [details, setDetails] = useState('')
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [focusField, setFocusField] = useState<string | null>(null)
  const errorTimeouts = useRef<Record<string, ReturnType<typeof setTimeout>>>({})

  useEffect(() => {
    return () => { Object.values(errorTimeouts.current).forEach(clearTimeout) }
  }, [])

  function validateEmail(v: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) }
  const errors = {
    name: touched.name && !name.trim() ? 'Required' : '',
    email: touched.email && !email.trim() ? 'Required' : touched.email && email.trim() && !validateEmail(email) ? 'Invalid email' : '',
    details: touched.details && !details.trim() ? 'Required' : '',
  }
  const isValid = name.trim() && validateEmail(email) && details.trim()

  function handleBlur(field: string) {
    setTouched((p) => ({ ...p, [field]: true }))
    if (errorTimeouts.current[field]) clearTimeout(errorTimeouts.current[field])
    errorTimeouts.current[field] = setTimeout(() => {
      setTouched((p) => ({ ...p, [field]: false }))
    }, 5500)
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setTouched({ name: true, email: true, details: true })
    if (!isValid) return
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${details}`)
    window.location.href = `mailto:${SOCIALS.email}?subject=${subject}&body=${body}`
    setSent(true); setName(''); setEmail(''); setDetails(''); setTouched({})
    setTimeout(() => setSent(false), 5000)
  }

  return (
    <section id="contact" className="relative overflow-hidden section-padding bg-[#0C0C10]">
      {/* Ambient orbs */}
      <div className="pointer-events-none absolute -top-1/3 -right-1/4">
        <div className="h-[300px] w-[300px] rounded-full opacity-15 blur-[100px] md:h-[500px] md:w-[500px] md:blur-[140px]"
          style={{ background: 'radial-gradient(circle, rgba(217,119,6,0.3), transparent)' }} />
      </div>
      <div className="pointer-events-none absolute -bottom-1/3 -left-1/4">
        <div className="h-[250px] w-[250px] rounded-full opacity-10 blur-[80px] md:h-[400px] md:w-[400px] md:blur-[120px]"
          style={{ background: 'radial-gradient(circle, rgba(225,29,72,0.25), transparent)' }} />
      </div>

      <div className="relative z-10 max-w-content">
        <Reveal>
          <SectionIndicator label="Contact" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            <span className="gradient-text">Contact</span>
          </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
              Have a <span className="text-[#D97706]">project</span>, an <span className="text-[#D97706]">MVP idea</span>, or a <span className="text-[#D97706]">role</span> in mind? Reach out and I&rsquo;ll get back within <span className="text-[#D97706]">1-4</span> hours.
            </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.3fr] lg:gap-8">
          {/* Left: Contact info */}
          <Reveal>
            <div className="flex h-full flex-col rounded-2xl border-2 border-white/5 bg-white/[0.02] p-4 transition-all duration-500 hover:border-[#D97706] hover:shadow-[0_0_30px_rgba(217,119,6,0.35),0_0_60px_rgba(217,119,6,0.12)] md:p-8">
              {/* Availability badge */}
              <div className="mb-4 inline-flex items-center gap-2 self-center rounded-full border border-emerald-500/10 bg-emerald-500/5 px-3 py-1.5 md:mb-8 md:gap-2.5 md:px-4 md:py-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="text-xs font-medium text-emerald-400">Available for projects</span>
              </div>

              {/* Channels */}
              <div className="space-y-2">
                {CHANNELS.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center gap-2 rounded-xl px-3 py-2.5 transition-all hover:bg-[#D97706]/5 md:gap-4 md:px-4 md:py-3.5"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-white/5 text-muted-foreground transition-all group-hover:bg-[#D97706]/15 group-hover:text-[#D97706] group-hover:shadow-[0_0_20px_rgba(217,119,6,0.15)] md:h-11 md:w-11">
                      <c.icon className="h-4.5 w-4.5" />
                    </span>
                    <div className="flex-1">
                      <span className="block text-sm font-medium text-foreground">{c.label}</span>
                      <span className="block text-xs text-muted-foreground/70">{c.value}</span>
                    </div>
                    <svg viewBox="0 0 16 16" fill="none" className="h-3.5 w-3.5 text-muted-foreground/30 transition-all group-hover:translate-x-0.5 group-hover:text-[#D97706]">
                      <path d="M6 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                ))}
              </div>

              <div className="mt-auto pt-4 md:pt-8">
                <p className="text-xs text-muted-foreground/60">
                  Or email directly at{' '}
                  <a href={`mailto:${SOCIALS.email}`} className="text-[#D97706] transition-colors hover:text-[#D97706]/80">
                    {SOCIALS.email}
                  </a>
                </p>
              </div>
            </div>
          </Reveal>

          {/* Right: Form */}
          <Reveal delay={0.08}>
            <form onSubmit={handleSubmit} noValidate className="rounded-2xl border-2 border-white/5 bg-white/[0.02] p-4 transition-all duration-500 hover:border-[#D97706] hover:shadow-[0_0_30px_rgba(217,119,6,0.35),0_0_60px_rgba(217,119,6,0.12)] md:p-8">
              <div className="grid gap-3 md:gap-5">
                {(['name', 'email', 'details'] as const).map((field) => (
                  <div key={field} className="grid gap-1.5">
                    <label htmlFor={field} className="text-xs font-medium tracking-wider text-muted-foreground/60 uppercase">
                      {field === 'details' ? 'Message' : field}
                    </label>
                    <div className="relative">
                      {field !== 'details' ? (
                        <input
                          id={field}
                          name={field}
                          type={field === 'email' ? 'email' : 'text'}
                          value={field === 'name' ? name : email}
                          onChange={(e) => {
                            if (field === 'name') setName(e.target.value)
                            else setEmail(e.target.value)
                          }}
                          onFocus={() => setFocusField(field)}
                          onBlur={() => { setFocusField(null); handleBlur(field) }}
                          placeholder={`Your ${field === 'email' ? 'email address' : 'name'}`}
                          className="w-full rounded-xl border bg-white/5 px-4 py-2.5 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/30 md:py-3.5"
                          style={{
                            borderColor: focusField === field ? '#D97706' : errors[field] ? '#EF4444' : 'rgba(255,255,255,0.08)',
                            boxShadow: focusField === field ? '0 0 0 1px #D97706, 0 0 25px rgba(217,119,6,0.08)' : 'none',
                          }}
                        />
                      ) : (
                        <textarea
                          id={field}
                          name={field}
                          rows={3}
                          value={details}
                          onChange={(e) => setDetails(e.target.value)}
                          onFocus={() => setFocusField(field)}
                          onBlur={() => { setFocusField(null); handleBlur(field) }}
                          placeholder="Tell me about your project, idea, or the role you have in mind..."
                          className="w-full resize-none rounded-xl border bg-white/5 px-4 py-2.5 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/30 md:py-3.5"
                          style={{
                            borderColor: focusField === field ? '#D97706' : errors[field] ? '#EF4444' : 'rgba(255,255,255,0.08)',
                            boxShadow: focusField === field ? '0 0 0 1px #D97706, 0 0 25px rgba(217,119,6,0.08)' : 'none',
                          }}
                        />
                      )}
                    </div>
                    {errors[field] && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-red-400"
                      >
                        {errors[field]}
                      </motion.p>
                    )}
                  </div>
                ))}

                <button
                  type="submit"
                  disabled={touched.name || touched.email || touched.details ? !isValid : false}
                  className="group mt-2 flex w-full items-center justify-center gap-2 rounded-xl bg-[#D97706] px-6 py-2.5 font-semibold text-white transition-all hover:shadow-[0_0_35px_rgba(217,119,6,0.3)] disabled:cursor-not-allowed disabled:opacity-50 md:py-3.5"
                >
                  {sent ? (
                    <span className="inline-flex items-center gap-2">
                      <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                      Message sent
                    </span>
                  ) : (
                    <>
                      Send message
                      <svg viewBox="0 0 16 16" fill="none" className="h-4 w-4 transition-transform group-hover:translate-x-1">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </>
                  )}
                </button>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

function MailIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
    </svg>
  )
}

function LinkedinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
  )
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  )
}
