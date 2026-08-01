import { motion } from 'framer-motion'
import SectionWrapper, { SectionLabel, SectionTitle, itemVariants } from './SectionWrapper'
import { educationList } from '@/data/experience'

export default function Education() {
  return (
    <SectionWrapper id="education" className="border-t border-white/[0.04] flex flex-col items-center">
      <div className="mb-10 text-center">
        <SectionLabel>Academic Journey</SectionLabel>
        <SectionTitle>Education</SectionTitle>
      </div>

      {/* Connected minimal timeline for education - Centered wrapper */}
      <div className="relative pl-6 w-full max-w-xl mx-auto">
        {/* Thin vertical connector line */}
        <div
          className="absolute left-1.5 top-2 bottom-2 w-px"
          style={{ background: 'rgba(255, 255, 255, 0.08)' }}
        />

        <div className="space-y-8">
          {educationList.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="relative"
            >
              {/* Timeline marker */}
              <div
                className="absolute -left-6 top-[7px] w-3 h-3 rounded-full border border-[#090909]"
                style={{
                  background: item.currentYear ? '#4DA8DA' : 'rgba(255,255,255,0.2)',
                  left: '-22px',
                  boxShadow: item.currentYear ? '0 0 8px #4DA8DA' : 'none'
                }}
              />

              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                <div className="text-left">
                  <h3 className="text-sm font-semibold text-[#EBEBEB] tracking-tight">
                    {item.institution}
                  </h3>
                  <p className="text-[#888888] text-xs mt-0.5">
                    {item.degree} {item.field ? `— ${item.field}` : ''}
                  </p>
                </div>
                <div className="text-left sm:text-right shrink-0">
                  <span
                    className="inline-block font-mono text-xs px-2 py-0.5 rounded-sm bg-white/[0.03] border border-white/[0.06] text-[#10b981] font-semibold"
                  >
                    {item.score}
                  </span>
                  <p className="text-[11px] text-[#555555] font-mono mt-1">
                    {item.period} {item.currentYear ? `(${item.currentYear})` : ''}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
