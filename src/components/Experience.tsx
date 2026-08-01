import { motion } from 'framer-motion'
import SectionWrapper, { SectionLabel, SectionTitle, itemVariants } from './SectionWrapper'
import { experiences, educationList } from '@/data/experience'

const TYPE_COLOR: Record<string, string> = {
  hackathon: '#1A3B8B',
  club: '#15803d',
  work: '#c2410c',
  education: '#7c3aed',
}

export default function Experience() {
  return (
    <SectionWrapper id="experience" className="border-t border-black/[0.05]">
      <div className="mb-10 text-center">
        <SectionLabel>My Background</SectionLabel>
        <SectionTitle>Education & Experience</SectionTitle>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
        {/* Left: Education */}
        <motion.div variants={itemVariants} className="space-y-6">
          <h3 className="text-base font-semibold text-[#18181B] text-left mb-4">Academic Journey</h3>
          <div className="relative pl-6">
            <div className="absolute left-1.5 top-2 bottom-2 w-px bg-black/[0.08]" />
            <div className="space-y-8">
              {educationList.map(item => (
                <div key={item.id} className="relative">
                  <div className="absolute -left-6 top-[7px] w-3 h-3 rounded-full border-2 border-[#DCC5B0]"
                    style={{
                      background: item.currentYear ? '#1A3B8B' : '#D4D4D8',
                      left: '-22px',
                      boxShadow: item.currentYear ? '0 0 8px rgba(26,59,139,0.3)' : 'none'
                    }} />
                  <div className="flex flex-col gap-1">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-sm font-semibold text-[#18181B] tracking-tight text-left">{item.institution}</h4>
                      <span className="font-mono text-xs px-2 py-0.5 rounded-sm bg-green-50 border border-green-200 text-green-700 font-semibold shrink-0">
                        {item.score}
                      </span>
                    </div>
                    <p className="text-[#71717A] text-xs text-left">{item.degree} {item.field ? `— ${item.field}` : ''}</p>
                    <p className="text-[10px] text-[#A1A1AA] font-mono text-left">
                      {item.period} {item.currentYear ? `(${item.currentYear})` : ''}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Right: Experience */}
        <motion.div variants={itemVariants} className="space-y-6">
          <h3 className="text-base font-semibold text-[#18181B] text-left mb-4">Experience</h3>
          <div className="relative pl-6">
            <div className="absolute left-1.5 top-2 bottom-2 w-px bg-black/[0.08]" />
            <div className="space-y-8">
              {experiences.map(exp => {
                const dotColor = TYPE_COLOR[exp.type] ?? '#A1A1AA'
                return (
                  <div key={exp.id} className="relative">
                    <div className="absolute -left-6 top-[7px] w-3 h-3 rounded-full border-2 border-[#DCC5B0]"
                      style={{ background: dotColor, left: '-22px' }} />
                    <div className="flex flex-col gap-1 text-left">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="text-sm font-semibold text-[#18181B] tracking-tight">{exp.role}</h4>
                        <span className="text-[#A1A1AA] text-[10px] font-mono shrink-0">{exp.period}</span>
                      </div>
                      <p className="text-[#1A3B8B] text-xs font-medium">{exp.org}</p>
                      <p className="text-[#71717A] text-xs leading-relaxed">{exp.description}</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {exp.tags.map(t => <span key={t} className="tag text-[9px] py-0.5 px-1.5">{t}</span>)}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
