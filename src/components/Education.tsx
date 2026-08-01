import { motion } from 'framer-motion'
import { GraduationCap, Award, BookOpen } from 'lucide-react'
import SectionWrapper, { SectionLabel, SectionTitle, itemVariants } from './SectionWrapper'
import { educationList } from '@/data/experience'

const ICONS = [BookOpen, Award, GraduationCap]

export default function Education() {
  return (
    <SectionWrapper id="education" className="border-t border-white/[0.04]">
      <div className="mb-10">
        <SectionLabel>Academic Journey</SectionLabel>
        <SectionTitle>Education</SectionTitle>
      </div>

      <div className="space-y-4 max-w-2xl">
        {educationList.map((item, index) => {
          const IconComponent = ICONS[index % ICONS.length]
          return (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="rounded-lg border border-white/[0.07] p-5 transition-all duration-200 hover:border-white/[0.14]"
              style={{ background: '#0f0f0f' }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-9 h-9 rounded-md flex items-center justify-center shrink-0 mt-0.5"
                  style={{ background: 'rgba(77,168,218,0.08)', border: '1px solid rgba(77,168,218,0.15)' }}
                >
                  <IconComponent size={17} style={{ color: '#4DA8DA' }} />
                </div>

                <div className="flex-1">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <h3 className="text-[#EBEBEB] font-semibold text-[15px]">
                      {item.institution}
                    </h3>
                    <span
                      className="font-mono text-xs px-2 py-0.5 rounded-sm"
                      style={{ color: '#10b981', border: '1px solid rgba(16,185,129,0.2)', background: 'rgba(16,185,129,0.06)' }}
                    >
                      {item.score}
                    </span>
                  </div>

                  <p className="text-[#4DA8DA] text-xs font-medium mb-3">
                    {item.degree} {item.field ? `— ${item.field}` : ''}
                  </p>

                  <div className="flex flex-wrap gap-x-5 gap-y-1 text-xs text-[#555555] font-mono">
                    <span>{item.period}</span>
                    <span>{item.location}</span>
                    {item.currentYear && (
                      <span className="text-[#EBEBEB] font-medium">{item.currentYear}</span>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )
        })}
      </div>
    </SectionWrapper>
  )
}
