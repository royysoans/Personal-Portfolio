import { useMemo, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper, { SectionLabel, SectionTitle, itemVariants } from './SectionWrapper'
import { skills, skillCategories, currentlyLearning, type SkillCategory } from '@/data/skills'
import TiltCard from './TiltCard'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('All')

  // Precompute counts once so the filter buttons don't re-filter on every render
  const categoryCounts = useMemo(
    () => new Map(skillCategories.map(cat => [cat, cat === 'All' ? skills.length : skills.filter(s => s.category === cat).length])),
    []
  )

  // Recompute filtered list only when activeCategory changes
  const filtered = useMemo(
    () => activeCategory === 'All' ? skills : skills.filter(s => s.category === activeCategory),
    [activeCategory]
  )

  return (
    <SectionWrapper id="skills" className="border-t border-black/[0.05]">
      <div className="mb-8">
        <SectionLabel>Stack & Expertise</SectionLabel>
        <SectionTitle>Technologies I Enjoy Working With</SectionTitle>
      </div>

      {/* Category filter */}
      <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-6 border-b border-black/[0.06] pb-3">
        {skillCategories.map(cat => {
          const count = categoryCounts.get(cat) ?? 0
          const isActive = activeCategory === cat
          return (
            <button key={cat} onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-mono transition-all duration-150 border ${
                isActive
                  ? 'border-[#18181B] text-[#18181B] bg-[#18181B]/06'
                  : 'border-black/[0.07] text-[#A1A1AA] hover:text-[#71717A] hover:border-black/[0.14] bg-surface'
              }`}>
              <span>{cat}</span>
              <span className={`text-[9px] px-1 rounded ${isActive ? 'bg-[#18181B]/08 text-[#18181B]' : 'bg-black/[0.04] text-[#A1A1AA]'}`}>
                {count}
              </span>
            </button>
          )
        })}
      </motion.div>

      {/* Skills tags */}
      <motion.div layout className="flex flex-wrap gap-2 mb-8 max-w-4xl">
        <AnimatePresence mode="popLayout">
          {filtered.map(skill => (
            <motion.div key={skill.name} layout
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 0.15 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded border border-black/[0.07] hover:border-[#1A3B8B]/30 hover:bg-[#1A3B8B]/03 transition-all duration-150 group bg-surface"
              title={skill.description}>
              {skill.icon ? (
                <img src={skill.icon} alt={skill.name} className="w-3.5 h-3.5 object-contain shrink-0" loading="lazy" />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-[#D4D4D8] group-hover:bg-[#1A3B8B] transition-colors" />
              )}
              <span className="text-xs font-medium text-[#71717A] group-hover:text-[#18181B] transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Currently learning */}
      <motion.div variants={itemVariants} className="w-full max-w-md">
        <TiltCard glowColor="rgba(165, 194, 97, 0.08)">
          <div className="rounded-lg border border-[#5C4033]/30 overflow-hidden bg-[#1B130E] shadow-md">
            <div className="px-3.5 py-1.5 flex items-center justify-between border-b border-[#5C4033]/20 bg-[#2A201B]">
              <div className="flex gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-[#FF5F56]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#FFBD2E]" />
                <span className="w-1.5 h-1.5 rounded-full bg-[#27C93F]" />
              </div>
              <span className="font-mono text-[9px] text-[#CDB39C]">learning.sh</span>
            </div>
            <div className="p-3 font-mono text-[11px] bg-[#1B130E] flex flex-wrap items-center gap-x-3 gap-y-1.5 text-left">
              <span className="text-[#71717A] select-none">$ cat learning.txt</span>
              {currentlyLearning.map(item => (
                <span key={item} className="text-[#A5C261]">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </TiltCard>
      </motion.div>
    </SectionWrapper>
  )
}
