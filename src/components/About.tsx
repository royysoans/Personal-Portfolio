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
]

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
        {/* Left */}
        <div>
          <SectionLabel>Who I Am</SectionLabel>
          <SectionTitle>Passionate about<br />building things</SectionTitle>
          <motion.div variants={itemVariants} className="space-y-4 text-[#71717A] leading-relaxed text-[15px]">
            <p>
              I'm a Computer Science student specialising in{' '}
              <span className="text-[#18181B] font-medium">Artificial Intelligence and Machine Learning</span>{' '}
              with a strong focus on <span className="text-[#1A3B8B] font-medium">Full-Stack Web Development</span> and software engineering.
            </p>
            <p>
              I enjoy solving real-world problems through well-crafted web applications and dynamic AI systems. I care deeply
              about clean architecture, responsive UI detail, and shipping products that deliver real user value.
            </p>
          </motion.div>

          {/* Details table */}
          <motion.div variants={itemVariants} className="mt-8 rounded-lg overflow-hidden border border-black/[0.07]">
            {highlights.map((h, i) => (
              <div key={h.label}
                className={`flex gap-4 px-4 py-3 text-sm bg-surface ${i < highlights.length - 1 ? 'border-b border-black/[0.05]' : ''}`}>
                <span className="font-mono text-[11px] text-[#1A3B8B] w-20 shrink-0 pt-0.5 uppercase tracking-wider">{h.label}</span>
                <span className="text-[#71717A]">{h.value}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Right */}
        <div className="space-y-6">
          <motion.div variants={itemVariants} className="grid grid-cols-3 gap-4">
            {stats.map(s => (
              <div key={s.label} className="p-4 text-center rounded-lg border border-black/[0.07] bg-surface shadow-sm">
                <div className="text-2xl font-bold text-[#18181B] tracking-tight">
                  {s.value}
                  {s.suffix && <span className="text-[#1A3B8B] text-base">{s.suffix}</span>}
                </div>
                <div className="text-[#A1A1AA] text-xs mt-1 font-mono uppercase tracking-wider">{s.label}</div>
              </div>
            ))}
          </motion.div>

          {/* About JSON card */}
          <motion.div variants={itemVariants} className="rounded-lg border border-[#5C4033]/30 overflow-hidden bg-[#1B130E] shadow-lg">
            <div className="px-4 py-2.5 border-b border-[#5C4033]/20 bg-[#2A201B] flex items-center justify-between">
              <div className="flex gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
              </div>
              <span className="font-mono text-[10px] text-[#CDB39C]">~/about.json</span>
            </div>
            <div className="p-4 font-mono text-[12px] leading-6 bg-[#1B130E] text-[#EAD7C6]">
              {[
                ['location', '"Mumbai, India"'],
                ['available', 'true'],
                ['languages', '["C++", "JS", "TS", "Python"]'],
                ['domains', '["Web Development", "AI Integrations", "DSA"]'],
              ].map(([k, v]) => (
                <div key={k} className="flex gap-2">
                  <span className="text-[#E8985E]">{k}</span>
                  <span className="text-[#CDB39C]">: </span>
                  <span className={v === 'true' ? 'text-[#6C9EF8]' : 'text-[#A5C261]'}>{v}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  )
}
