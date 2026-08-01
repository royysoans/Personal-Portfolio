import { useState, type FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Download, Mail, ExternalLink, Send, CheckCircle, MapPin } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import SectionWrapper, { SectionLabel, SectionTitle, itemVariants } from './SectionWrapper'

const socials = [
  { icon: Mail, label: 'Email', value: 'roystonsoans3@gmail.com', href: 'mailto:roystonsoans3@gmail.com' },
  { icon: GithubIcon, label: 'GitHub', value: 'github.com/royysoans', href: 'https://github.com/royysoans' },
  { icon: LinkedinIcon, label: 'LinkedIn', value: 'linkedin.com/in/royston-soans', href: 'https://www.linkedin.com/in/royston-soans-3b14b3329/' },
  { icon: MapPin, label: 'Location', value: 'Mumbai, India', href: undefined },
]

const inputClass = 'w-full px-3.5 py-2.5 rounded-md border border-black/[0.09] bg-surface text-sm text-[#18181B] placeholder:text-[#D4D4D8] focus:outline-none focus:border-[#1A3B8B]/40 focus:ring-1 focus:ring-[#1A3B8B]/10 transition-colors duration-200 font-sans shadow-sm'

export default function Resume() {
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
    <SectionWrapper id="resume" className="border-t border-black/[0.05]">
      <div className="mb-10 text-center">
        <SectionLabel>Details & Communication</SectionLabel>
        <SectionTitle>Resume & Contact</SectionTitle>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
        {/* Left: Resume */}
        <motion.div variants={itemVariants} className="space-y-5">
          <div>
            <h3 className="text-base font-semibold text-[#18181B] mb-1 text-left">Curriculum Vitae</h3>
            <p className="text-[#71717A] text-sm leading-relaxed mb-5 text-left">
              My professional milestones, skills, and academic records compiled in a single-page PDF.
            </p>

            <div className="grid grid-cols-3 gap-3 mb-5">
              {[
                { label: 'Degree', value: 'B.Tech AI & ML' },
                { label: 'Experience', value: '5+ Hackathons' },
                { label: 'Key Stack', value: 'React / TS' },
              ].map(item => (
                <div key={item.label} className="rounded-md p-3 text-center border border-black/[0.07] bg-surface shadow-sm">
                  <p className="text-[#A1A1AA] font-mono uppercase tracking-wider text-[9px] mb-1">{item.label}</p>
                  <p className="text-[#71717A] text-xs font-medium leading-tight">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col gap-2 bg-surface border border-black/[0.07] p-5 rounded-lg shadow-sm">
              <span className="font-mono text-[10px] text-[#A1A1AA] mb-1 self-start">Royston_Soans_Resume.pdf</span>
              <a href="/resume.pdf" download="Royston_Soans_Resume.pdf" id="resume-download-btn"
                className="btn-primary justify-center text-xs py-2 w-full">
                <Download size={13} /> Download Resume
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" id="resume-view-btn"
                className="btn-secondary justify-center text-xs py-2 w-full">
                <ExternalLink size={13} /> View PDF Online
              </a>
            </div>
          </div>

          {/* Social links */}
          <div className="rounded-lg overflow-hidden border border-black/[0.07] bg-surface shadow-sm">
            {socials.map((s, i) => {
              const Icon = s.icon
              const Wrapper = s.href ? 'a' : 'div'
              return (
                <Wrapper key={s.label}
                  {...(s.href ? { href: s.href, target: s.href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' } : {})}
                  className={`flex items-center gap-4 px-4 py-2.5 transition-colors duration-200 ${s.href ? 'hover:bg-black/[0.02] cursor-pointer' : 'cursor-default'} ${i < socials.length - 1 ? 'border-b border-black/[0.05]' : ''}`}
                  style={{ textDecoration: 'none' }}>
                  <Icon size={14} style={{ color: '#1A3B8B', flexShrink: 0 }} />
                  <div className="text-left">
                    <p className="font-mono text-[9px] text-[#A1A1AA] uppercase tracking-wider mb-0.5">{s.label}</p>
                    <p className="text-xs text-[#71717A]">{s.value}</p>
                  </div>
                </Wrapper>
              )
            })}
          </div>
        </motion.div>

        {/* Right: Contact form */}
        <motion.div variants={itemVariants} className="rounded-lg border border-black/[0.07] p-6 sm:p-8 bg-surface shadow-sm">
          <h3 className="text-base font-semibold text-[#18181B] mb-4 text-left">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <label htmlFor="contact-name" className="block font-mono text-[10px] text-[#A1A1AA] uppercase tracking-wider mb-1.5 text-left">Name</label>
              <input id="contact-name" name="name" type="text" required placeholder="Your name" className={inputClass} />
            </div>
            <div>
              <label htmlFor="contact-email" className="block font-mono text-[10px] text-[#A1A1AA] uppercase tracking-wider mb-1.5 text-left">Email</label>
              <input id="contact-email" name="email" type="email" required placeholder="your@email.com" className={inputClass} />
            </div>
            <div>
              <label htmlFor="contact-message" className="block font-mono text-[10px] text-[#A1A1AA] uppercase tracking-wider mb-1.5 text-left">Message</label>
              <textarea id="contact-message" name="message" required rows={5} placeholder="What's on your mind?" className={`${inputClass} resize-none`} />
            </div>
            <motion.button type="submit" id="contact-submit-btn"
              whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }}
              className={`btn-primary w-full justify-center ${sent ? 'opacity-70 cursor-not-allowed' : ''}`}
              disabled={sent}>
              {sent ? <><CheckCircle size={14} /> Message Sent</> : <><Send size={14} /> Send Message</>}
            </motion.button>
          </form>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
