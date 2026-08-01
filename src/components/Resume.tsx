import { motion } from 'framer-motion'
import { Download, Mail, ExternalLink } from 'lucide-react'
import SectionWrapper, { SectionLabel, SectionTitle, itemVariants } from './SectionWrapper'

export default function Resume() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <SectionWrapper id="resume" className="border-t border-white/[0.04]">
      <div className="mb-10">
        <SectionLabel>On Paper</SectionLabel>
        <SectionTitle>Resume</SectionTitle>
      </div>

      <motion.div variants={itemVariants} className="max-w-[#540px]">
        <div
          className="rounded-lg border border-white/[0.07] p-6 sm:p-8"
          style={{ background: '#0f0f0f' }}
        >
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-5 border-b border-white/[0.06]">
            <div>
              <p className="text-[#EBEBEB] text-lg font-bold mb-0.5">Royston Soans</p>
              <p className="text-[#888888] text-xs font-mono">Software Engineer & Full-Stack Web Developer</p>
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded border border-[#4DA8DA]/30 bg-[#4DA8DA]/10 text-[#4DA8DA]">
              Updated 2026
            </span>
          </div>

          {/* Key resume highlights */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {[
              { label: 'Degree', value: 'B.Tech AI & ML' },
              { label: 'Experience', value: '5+ Hackathons' },
              { label: 'Key Projects', value: 'PokeLearn & ChromaGen' },
            ].map(item => (
              <div
                key={item.label}
                className="rounded-md p-3 text-xs border border-white/[0.06]"
                style={{ background: '#111111' }}
              >
                <p className="text-[#444444] font-mono uppercase tracking-wider text-[9px] mb-1">{item.label}</p>
                <p className="text-[#888888] font-medium leading-tight">{item.value}</p>
              </div>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap sm:flex-nowrap gap-3">
            <a
              href="/resume.pdf"
              download="Royston_Soans_Resume.pdf"
              id="resume-download-btn"
              className="btn-primary flex-1 justify-center py-2.5"
            >
              <Download size={14} />
              Download Resume
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              id="resume-view-btn"
              className="btn-secondary justify-center py-2.5 px-4"
            >
              <ExternalLink size={14} />
              View PDF
            </a>

            <button
              onClick={scrollToContact}
              id="resume-contact-btn"
              className="btn-secondary justify-center py-2.5 px-4"
            >
              <Mail size={14} />
              Get in Touch
            </button>
          </div>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
