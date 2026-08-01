import { motion } from 'framer-motion'
import SectionWrapper, { SectionLabel, SectionTitle, itemVariants } from './SectionWrapper'

const stats = [
  { label: 'GPA', value: '9.64', suffix: '/10' },
  { label: 'Projects', value: '10+' },
  { label: 'Hackathons', value: '5+' },
]

const highlights = [
  { label: 'Degree', value: 'B.Tech in Artificial Intelligence & Machine Learning' },
  { label: 'College', value: 'DJ Sanghvi College of Engineering, Mumbai' },
  { label: 'Year', value: 'Third Year · 2024 – 2028' },
  { label: 'Focus', value: 'Full-stack Web Development, AI integrations, DSA & Systems' },
  { label: 'Status', value: 'Open to software engineering internships' },
]

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

        {/* Left column */}
        <div>
          <SectionLabel>Who I Am</SectionLabel>
          <SectionTitle>Passionate about<br />building things</SectionTitle>

          <motion.div variants={itemVariants} className="space-y-4 text-[#888888] leading-relaxed text-[15px]">
            <p>
              I'm a Computer Science student specialising in{' '}
              <span className="text-[#EBEBEB] font-medium">Artificial Intelligence and Machine Learning</span>
              {' '}with a strong focus on <span className="text-[#4DA8DA] font-medium">Full-Stack Web Development</span> and software engineering.
            </p>
            <p>
              I enjoy solving real-world problems through well-crafted web applications and dynamic AI systems. I care deeply
              about code performance, clean architecture, responsive UI detail, and shipping products that deliver real user value.
            </p>
          </motion.div>

          {/* Details table */}
          <motion.div variants={itemVariants} className="mt-8 space-y-0 border border-white/[0.07] rounded-lg overflow-hidden">
            {highlights.map((h, i) => (
              <div
                key={h.label}
                className={`flex gap-4 px-4 py-3 text-sm ${
                  i < highlights.length - 1 ? 'border-b border-white/[0.05]' : ''
                }`}
              >
                <span className="font-mono text-[11px] text-[#4DA8DA] w-20 shrink-0 pt-0.5 uppercase tracking-wider">
                  {h.label}
                </span>
                <span className="text-[#888888]">{h.value}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right column — stats + quick facts */}
        <div className="space-y-6">
          {/* Stat row */}
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4">
            {stats.map(s => (
              <div
                key={s.label}
                className="p-4 text-center rounded-lg border border-white/[0.07]"
                style={{ background: '#0f0f0f' }}
              >
                <div className="text-2xl font-bold text-[#EBEBEB] tracking-tight">
                  {s.value}
                  {s.suffix && <span className="text-[#4DA8DA] text-base">{s.suffix}</span>}
                </div>
                <div className="text-[#555555] text-xs mt-1 font-mono uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Terminal-style card */}
          <motion.div
            variants={itemVariants}
            className="rounded-lg border border-white/[0.07] overflow-hidden"
            style={{ background: '#0D0D0D' }}
          >
            <div
              className="px-4 py-2.5 border-b border-white/[0.06] flex items-center gap-2"
              style={{ background: '#111111' }}
            >
              <span className="font-mono text-[10px] text-[#444444]">~/about.json</span>
            </div>
            <div className="p-4 font-mono text-[12px] leading-6">
              {[
                ['location', '"Mumbai, India"'],
                ['available', 'true'],
                ['languages', '["C++", "JS", "TS", "Python"]'],
                ['domains', '["Web Development", "AI Integrations", "DSA"]'],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-2">
                  <span className="code-property">{k}</span>
                  <span className="code-plain">: </span>
                  <span className={v === 'true' ? 'code-keyword' : 'code-string'}>{v}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
