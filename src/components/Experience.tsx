import { motion } from 'framer-motion'
import SectionWrapper, { SectionLabel, SectionTitle, itemVariants } from './SectionWrapper'
import { experiences } from '@/data/experience'

const TYPE_COLOR: Record<string, string> = {
  hackathon: '#4DA8DA',
  club: '#10b981',
  work: '#f97316',
  education: '#a855f7',
}

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="border-t border-white/[0.04]">
      <div className="mb-12">
        <SectionLabel>Background</SectionLabel>
        <SectionTitle>Experience</SectionTitle>
      </div>

      {/* Left-aligned vertical timeline */}
      <div className="relative max-w-2xl">
        {/* Line */}
        <div
          className="absolute top-2 bottom-2 w-px left-[5px]"
          style={{ background: 'rgba(255,255,255,0.06)' }}
        />

        <div className="space-y-8 pl-9">
          {experiences.map((exp, i) => {
            const dotColor = TYPE_COLOR[exp.type] ?? '#444444'
            return (
              <motion.div key={exp.id} variants={itemVariants} className="relative">
                {/* Timeline dot */}
                <div
                  className="absolute -left-9 top-[18px] w-[11px] h-[11px] rounded-full border-2 border-[#090909]"
                  style={{ background: dotColor, left: '-36px' }}
                />

                {/* Card */}
                <div
                  className="rounded-lg border border-white/[0.07] p-5 transition-all duration-200 hover:border-white/[0.12]"
                  style={{ background: '#0f0f0f' }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <span
                      className="font-mono text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-sm"
                      style={{
                        color: dotColor,
                        border: `1px solid ${dotColor}30`,
                        background: `${dotColor}10`,
                      }}
                    >
                      {exp.type}
                    </span>
                    <span className="text-[#444444] text-xs font-mono">{exp.period}</span>
                  </div>

                  <h3 className="text-[#EBEBEB] font-semibold text-[15px] mb-0.5">
                    {exp.role}
                  </h3>
                  <p className="text-[#4DA8DA] text-xs font-medium mb-3">{exp.org}</p>
                  <p className="text-[#888888] text-sm leading-relaxed mb-4">
                    {exp.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map(t => (
                      <span key={t} className="tag">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </SectionWrapper>
  )
}
