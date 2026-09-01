import { useState, useRef, useEffect, type FormEvent, type MouseEvent } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { MagneticButton } from '@/components/magnetic-button'
import { Reveal, SectionIndicator } from '@/components/reveal'
import { SOCIALS } from '@/lib/data'

const CHANNELS = [
  { label: 'Email', value: SOCIALS.email, href: `mailto:${SOCIALS.email}` },
  { label: 'LinkedIn', value: '/in/hamzazafarg', href: SOCIALS.linkedin },
  { label: 'GitHub', value: '@HamzaCodeBase', href: SOCIALS.github },
]

export function Contact() {
  const [sent, setSent] = useState(false)
  const [copied, setCopied] = useState(false)
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

  async function handleCopyEmail(e: MouseEvent<HTMLButtonElement>) {
    e.preventDefault()
    try {
      await navigator.clipboard.writeText(SOCIALS.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      window.location.href = `mailto:${SOCIALS.email}`
    }
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
    <section id="contact" className="section-padding border-t border-[#201C16]/12 bg-[#EFE8D8]">
      <div className="max-w-content">
        <Reveal>
          <SectionIndicator index="07" label="Contact" />
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display text-4xl tracking-tight sm:text-5xl">
            Let&rsquo;s work together
          </h2>
          <p className="mt-4 max-w-lg text-base leading-relaxed text-[#6B6255]">
            Have a project, an MVP idea, or a role in mind? Reach out and I&rsquo;ll get back
            within a day.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
          {/* Left: Contact info */}
          <Reveal>
            <div className="divide-y divide-[#201C16]/12 border-t border-[#201C16]/12">
              {CHANNELS.map((c) => (
                <div
                  key={c.label}
                  className="group flex items-center justify-between gap-4 py-4 transition-all duration-300 hover:pl-3"
                >
                  <a
                    href={c.href}
                    target={c.label === 'Email' ? undefined : '_blank'}
                    rel={c.label === 'Email' ? undefined : 'noopener noreferrer'}
                    className="flex flex-1 items-baseline justify-between gap-4"
                  >
                    <span className="text-sm text-[#6B6255]">{c.label}</span>
                    <span className="text-sm transition-colors group-hover:text-[#B4432B]">
                      {c.label === 'Email' && copied ? 'Copied to clipboard' : c.value}
                    </span>
                  </a>
                  {c.label === 'Email' && (
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      aria-label="Copy email address"
                      className="shrink-0 text-[#6B6255] transition-colors hover:text-[#B4432B]"
                    >
                      <AnimatePresence mode="wait" initial={false}>
                        {copied ? (
                          <motion.svg
                            key="check"
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                            transition={{ duration: 0.15 }}
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="h-4 w-4"
                          >
                            <path d="M3 8.5l3 3 7-7" strokeLinecap="round" strokeLinejoin="round" />
                          </motion.svg>
                        ) : (
                          <motion.svg
                            key="copy"
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                            transition={{ duration: 0.15 }}
                            viewBox="0 0 16 16"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            className="h-4 w-4"
                          >
                            <rect x="5.5" y="5.5" width="8" height="8" rx="1" />
                            <path d="M3 10.5V3.5a1 1 0 0 1 1-1h7" strokeLinecap="round" />
                          </motion.svg>
                        )}
                      </AnimatePresence>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </Reveal>

          {/* Right: Form */}
          <Reveal delay={0.08}>
            <form onSubmit={handleSubmit} noValidate>
              <div className="grid gap-6">
                {(['name', 'email', 'details'] as const).map((field) => (
                  <div key={field} className="grid gap-1.5">
                    <label htmlFor={field} className="text-xs uppercase tracking-wider text-[#6B6255]">
                      {field === 'details' ? 'Message' : field}
                    </label>
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
                        className="w-full border-b bg-transparent py-2 text-base outline-none transition-colors placeholder:text-[#6B6255]/50"
                        style={{
                          borderColor: focusField === field ? '#B4432B' : errors[field] ? '#B4432B' : 'rgba(32,28,22,0.2)',
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
                        className="w-full resize-none border-b bg-transparent py-2 text-base outline-none transition-colors placeholder:text-[#6B6255]/50"
                        style={{
                          borderColor: focusField === field ? '#B4432B' : errors[field] ? '#B4432B' : 'rgba(32,28,22,0.2)',
                        }}
                      />
                    )}
                    {errors[field] && (
                      <motion.p
                        initial={{ opacity: 0, y: -4 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-xs text-[#B4432B]"
                      >
                        {errors[field]}
                      </motion.p>
                    )}
                  </div>
                ))}

                <MagneticButton
                  type="submit"
                  strength={0.2}
                  disabled={touched.name || touched.email || touched.details ? !isValid : false}
                  className="mt-2 inline-flex w-fit items-center gap-2 border border-[#201C16] px-6 py-3 text-sm transition-colors duration-200 hover:border-[#B4432B] hover:text-[#B4432B] active:scale-[0.96] disabled:cursor-not-allowed disabled:opacity-50 disabled:active:scale-100"
                >
                  {sent ? 'Message sent' : 'Send message'}
                </MagneticButton>
              </div>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
