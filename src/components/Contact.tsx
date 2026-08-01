import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Mail, MapPin, Send, CheckCircle } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import SectionWrapper, { SectionLabel, SectionTitle, itemVariants } from './SectionWrapper'

const socials = [
  {
    icon: Mail,
    label: 'Email',
    value: 'roystonsoans3@gmail.com',
    href: 'mailto:roystonsoans3@gmail.com',
  },
  {
    icon: GithubIcon,
    label: 'GitHub',
    value: 'github.com/royysoans',
    href: 'https://github.com/royysoans',
  },
  {
    icon: LinkedinIcon,
    label: 'LinkedIn',
    value: 'linkedin.com/in/royston-soans',
    href: 'https://www.linkedin.com/in/royston-soans-3b14b3329/',
  },
  {
    icon: MapPin,
    label: 'Location',
    value: 'Mumbai, India',
    href: undefined,
  },
]

const inputClass =
  'w-full px-3.5 py-2.5 rounded-md border border-white/[0.08] bg-[#0a0a0a] text-sm text-[#EBEBEB] placeholder:text-[#333333] focus:outline-none focus:border-[#4DA8DA]/40 transition-colors duration-200 font-sans'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const data = new FormData(e.currentTarget)
    const name = data.get('name') as string
    const email = data.get('email') as string
    const message = data.get('message') as string
    const mailto = `mailto:roystonsoans3@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`
    window.location.href = mailto
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <SectionWrapper id="contact" className="border-t border-white/[0.04]">
      <div className="mb-12">
        <SectionLabel>Let's talk</SectionLabel>
        <SectionTitle>Get in Touch</SectionTitle>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-3xl">
        {/* Contact details */}
        <motion.div variants={itemVariants} className="space-y-1">
          <p className="text-[#888888] text-sm leading-relaxed mb-6">
            Open to internship opportunities, project collaborations,
            and interesting conversations.
          </p>

          <div className="space-y-0 border border-white/[0.07] rounded-lg overflow-hidden">
            {socials.map((s, i) => {
              const Icon = s.icon
              const Wrapper = s.href ? 'a' : 'div'
              return (
                <Wrapper
                  key={s.label}
                  {...(s.href ? {
                    href: s.href,
                    target: s.href.startsWith('http') ? '_blank' : undefined,
                    rel: 'noopener noreferrer',
                  } : {})}
                  className={`flex items-center gap-4 px-4 py-3 transition-colors duration-200 ${
                    s.href ? 'hover:bg-white/[0.03] cursor-pointer' : 'cursor-default'
                  } ${i < socials.length - 1 ? 'border-b border-white/[0.05]' : ''}`}
                  style={{ textDecoration: 'none' }}
                >
                  <Icon size={14} style={{ color: '#4DA8DA', flexShrink: 0 }} />
                  <div>
                    <p className="font-mono text-[10px] text-[#444444] uppercase tracking-wider mb-0.5">
                      {s.label}
                    </p>
                    <p className="text-sm text-[#888888]">{s.value}</p>
                  </div>
                </Wrapper>
              )
            })}
          </div>
        </motion.div>

        {/* Form */}
        <motion.div variants={itemVariants}>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="contact-name" className="block font-mono text-[10px] text-[#444444] uppercase tracking-wider mb-1.5">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                required
                placeholder="Your name"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="contact-email" className="block font-mono text-[10px] text-[#444444] uppercase tracking-wider mb-1.5">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                required
                placeholder="your@email.com"
                className={inputClass}
              />
            </div>

            <div>
              <label htmlFor="contact-message" className="block font-mono text-[10px] text-[#444444] uppercase tracking-wider mb-1.5">
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                required
                rows={4}
                placeholder="What's on your mind?"
                className={`${inputClass} resize-none`}
              />
            </div>

            <motion.button
              type="submit"
              id="contact-submit-btn"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className={`btn-primary w-full justify-center ${sent ? 'opacity-70 cursor-not-allowed' : ''}`}
              disabled={sent}
            >
              {sent ? (
                <>
                  <CheckCircle size={14} />
                  Sent — check your email app
                </>
              ) : (
                <>
                  <Send size={14} />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
