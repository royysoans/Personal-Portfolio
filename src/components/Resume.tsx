import { motion } from 'framer-motion'
import { Download, Mail, ExternalLink } from 'lucide-react'
import SectionWrapper, { SectionLabel, SectionTitle, itemVariants } from './SectionWrapper'

export default function Resume() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <SectionWrapper id="resume" className="border-t border-white/[0.04] flex flex-col items-center">
      <div className="mb-8 text-center">
        <SectionLabel>Curriculum Vitae</SectionLabel>
        <SectionTitle>Resume</SectionTitle>
        <motion.p variants={itemVariants} className="text-[#888888] text-sm leading-relaxed max-w-md mx-auto">
          My professional journey, technical expertise, and academic milestones are compiled in a single page document.
        </motion.p>
      </div>

      {/* Centered, sleek resume card */}
      <motion.div
        variants={itemVariants}
        className="rounded-lg border border-white/[0.07] p-6 sm:p-8 w-full max-w-lg mx-auto"
        style={{ background: '#0e0e0e' }}
      >
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-5 border-b border-white/[0.06]">
          <div className="text-left">
            <p className="text-[#EBEBEB] text-base font-bold mb-0.5">Royston Soans</p>
            <p className="text-[#888888] text-xs font-mono">Software Engineer & Full-Stack Web Developer</p>
          </div>
          <span className="font-mono text-[9px] uppercase tracking-wider px-2.5 py-1 rounded border border-[#4DA8DA]/30 bg-[#4DA8DA]/10 text-[#4DA8DA] shrink-0">
            Updated 2026
          </span>
        </div>

        {/* Quick Highlights */}
        <div className="grid grid-cols-3 gap-3 mb-6">
          {[
            { label: 'Degree', value: 'B.Tech AI & ML' },
            { label: 'Experience', value: '5+ Hackathons' },
            { label: 'Key Projects', value: 'PokeLearn' },
          ].map(item => (
            <div
              key={item.label}
              className="rounded-md p-3 text-center border border-white/[0.06]"
              style={{ background: '#111111' }}
            >
              <p className="text-[#444444] font-mono uppercase tracking-wider text-[9px] mb-1">{item.label}</p>
              <p className="text-[#888888] text-xs font-medium leading-tight">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2.5">
          <a
            href="/resume.pdf"
            download="Royston_Soans_Resume.pdf"
            id="resume-download-btn"
            className="btn-primary justify-center text-xs py-2.5 w-full"
          >
            <Download size={13} />
            Download Resume
          </a>
          <div className="grid grid-cols-2 gap-2">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              id="resume-view-btn"
              className="btn-secondary justify-center text-xs py-2"
            >
              <ExternalLink size={13} />
              View PDF
            </a>
            <button
              onClick={scrollToContact}
              id="resume-contact-btn"
              className="btn-secondary justify-center text-xs py-2"
            >
              <Mail size={13} />
              Get in Touch
            </button>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
