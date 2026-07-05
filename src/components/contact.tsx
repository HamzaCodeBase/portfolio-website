import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Reveal, SectionIndicator } from '@/components/reveal'
import { Magnetic } from '@/components/magnetic'
import { SOCIALS } from '@/lib/data'

const CHANNELS = [
  { icon: MailIcon, label: 'Email', value: SOCIALS.email, href: `mailto:${SOCIALS.email}` },
  { icon: LinkedinIcon, label: 'LinkedIn', value: '/in/hamza-zafar', href: SOCIALS.linkedin },
  { icon: GithubIcon, label: 'GitHub', value: '@HamzaCodeBase', href: SOCIALS.github },
]

export function Contact() {
  const [sent, setSent] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [details, setDetails] = useState('')
  const [touched, setTouched] = useState<Record<string, boolean>>({})
  const [focusField, setFocusField] = useState<string | null>(null)

  function validateEmail(v: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) }
  const errors = {
    name: touched.name && !name.trim() ? 'Required' : '',
    email: touched.email && !email.trim() ? 'Required' : touched.email && email.trim() && !validateEmail(email) ? 'Invalid email' : '',
    details: touched.details && !details.trim() ? 'Required' : '',
  }
  const isValid = name.trim() && validateEmail(email) && details.trim()

  function handleBlur(field: string) { setTouched((p) => ({ ...p, [field]: true })) }

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
    <section id="contact" className="section-padding bg-[#0C0C10]">
      <div className="max-w-content">
        <Reveal>
          <SectionIndicator label="Contact" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Let&rsquo;s build something <span className="gradient-text">great</span>
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-muted-foreground">
            Have a project, an MVP idea, or a role in mind? Send a message and I&rsquo;ll get back within 24 hours.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_1.3fr]">
          {/* Left: Social channels */}
          <Reveal>
            <div className="space-y-4">
              {CHANNELS.map((c) => (
                <Magnetic key={c.label} as="a" href={c.href} strength={0.15}>
                  <span className="group flex items-center gap-4 rounded-2xl border border-white/5 bg-white/[0.02] p-5 transition-all hover:border-[#D97706]/20 hover:bg-[#D97706]/5">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/5 text-muted-foreground transition-colors group-hover:bg-[#D97706]/15 group-hover:text-[#D97706]">
                      <c.icon className="h-5 w-5" />
                    </span>
                    <div>
                      <span className="block text-sm font-medium text-foreground">{c.label}</span>
                      <span className="block text-xs text-muted-foreground">{c.value}</span>
                    </div>
                  </span>
                </Magnetic>
              ))}

              {/* Availability */}
              <div className="flex items-center gap-3 rounded-2xl border border-emerald-500/10 bg-emerald-500/5 p-5">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
                </span>
                <div>
                  <p className="text-sm font-medium text-emerald-400">Available for projects</p>
                  <p className="text-xs text-muted-foreground">Typically replies within 24h</p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Right: Form */}
          <Reveal delay={0.08}>
            <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-white/5 bg-white/[0.02] p-8">
              <div className="grid gap-6">
                {(['name', 'email', 'details'] as const).map((field) => (
                  <div key={field} className="grid gap-1.5">
                    <label htmlFor={field} className="text-sm text-muted-foreground">
                      {field.charAt(0).toUpperCase() + field.slice(1)}
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
                          placeholder={`Your ${field}`}
                          className="w-full rounded-xl border bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/50"
                          style={{
                            borderColor: focusField === field ? 'rgba(217,119,6,0.3)' : 'rgba(255,255,255,0.08)',
                            boxShadow: focusField === field ? '0 0 20px rgba(217,119,6,0.05)' : 'none',
                          }}
                        />
                      ) : (
                        <textarea
                          id={field}
                          name={field}
                          rows={4}
                          value={details}
                          onChange={(e) => setDetails(e.target.value)}
                          onFocus={() => setFocusField(field)}
                          onBlur={() => { setFocusField(null); handleBlur(field) }}
                          placeholder="Tell me about your project..."
                          className="w-full resize-none rounded-xl border bg-white/5 px-4 py-3 text-sm text-foreground outline-none transition-all placeholder:text-muted-foreground/50"
                          style={{
                            borderColor: focusField === field ? 'rgba(217,119,6,0.3)' : 'rgba(255,255,255,0.08)',
                            boxShadow: focusField === field ? '0 0 20px rgba(217,119,6,0.05)' : 'none',
                          }}
                        />
                      )}
                    </div>
                    {errors[field] && (
                      <motion.p
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-red-400"
                      >
                        {errors[field]}
                      </motion.p>
                    )}
                  </div>
                ))}

                <Magnetic as="button" onClick={() => {}} strength={0.15}>
                  <button
                    type="submit"
                    disabled={touched.name || touched.email || touched.details ? !isValid : false}
                    className="w-full rounded-xl bg-[#D97706] px-6 py-3.5 font-semibold text-white transition-all hover:shadow-[0_0_40px_rgba(217,119,6,0.25)] disabled:cursor-not-allowed disabled:opacity-50"
                  >
                    {sent ? (
                      <span className="inline-flex items-center gap-2">
                        Message sent <svg viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4"><path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" /></svg>
                      </span>
                    ) : (
                      'Send message'
                    )}
                  </button>
                </Magnetic>
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
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-3a2.25 2.25 0 00-2.25 2.25V18" />
    </svg>
  )
}

function GithubIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={className}>
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844a9.59 9.59 0 012.501.338c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}
