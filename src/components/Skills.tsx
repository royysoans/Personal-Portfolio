import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionWrapper, { SectionLabel, SectionTitle, itemVariants } from './SectionWrapper'
import { skills, skillCategories, currentlyLearning, type SkillCategory } from '@/data/skills'

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>('All')

  const filtered = activeCategory === 'All'
    ? skills
    : skills.filter(s => s.category === activeCategory)

  return (
    <SectionWrapper id="skills" className="border-t border-white/[0.04]">
      {/* Header */}
      <div className="mb-10">
        <SectionLabel>Stack & Expertise</SectionLabel>
        <SectionTitle>Technologies I Enjoy<br />Working With</SectionTitle>
      </div>

      {/* Category filter — minimal mono tab bar */}
      <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-8 border-b border-white/[0.07] pb-3">
        {skillCategories.map(cat => {
          const count = cat === 'All' ? skills.length : skills.filter(s => s.category === cat).length
          const isActive = activeCategory === cat
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-xs font-mono transition-all duration-180 border ${
                isActive
                  ? 'border-[#4DA8DA] text-[#EBEBEB] bg-[#4DA8DA]/10'
                  : 'border-white/[0.06] text-[#666666] hover:text-[#888888] hover:border-white/[0.12] bg-[#0c0c0c]'
              }`}
            >
              <span>{cat}</span>
              <span className={`text-[10px] px-1.5 py-0.2 rounded ${
                isActive ? 'bg-[#4DA8DA]/20 text-[#4DA8DA]' : 'bg-white/[0.05] text-[#555555]'
              }`}>
                {count}
              </span>
            </button>
          )
        })}
      </motion.div>

      {/* Skills grid */}
      <motion.div
        layout
        className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mb-12"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map(skill => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.2 }}
              className="p-3.5 rounded-lg border border-white/[0.08] hover:border-[#4DA8DA]/40 transition-all duration-200 group flex flex-col justify-between"
              style={{ background: '#0e0e0e' }}
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    {skill.icon ? (
                      <img src={skill.icon} alt={skill.name} className="w-4 h-4 object-contain shrink-0" loading="lazy" />
                    ) : (
                      <span className="w-4 h-4 rounded-xs bg-[#4DA8DA]/15 border border-[#4DA8DA]/30 flex items-center justify-center font-mono text-[9px] text-[#4DA8DA] shrink-0">
                        {skill.name[0]}
                      </span>
                    )}
                    <span className="text-sm font-medium text-[#EBEBEB] group-hover:text-[#4DA8DA] transition-colors">
                      {skill.name}
                    </span>
                  </div>
                </div>
                {skill.description && (
                  <p className="text-[11px] text-[#555555] font-mono leading-tight">
                    {skill.description}
                  </p>
                )}
              </div>

              <div className="mt-3 pt-2 border-t border-white/[0.04] flex items-center justify-between">
                <span className="font-mono text-[9px] uppercase tracking-wider text-[#444444]">
                  {skill.category}
                </span>
                <span className="w-1 h-1 rounded-full bg-white/10 group-hover:bg-[#4DA8DA] transition-colors" />
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Currently learning */}
      <motion.div
        variants={itemVariants}
        className="p-5 rounded-lg border border-white/[0.07] bg-[#0c0c0c]"
      >
        <div className="flex items-center justify-between mb-3">
          <p className="font-mono text-[11px] text-[#4DA8DA] uppercase tracking-widest flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#4DA8DA] animate-pulse" />
            Currently active learning roadmap
          </p>
          <span className="font-mono text-[10px] text-[#444444]">2026</span>
        </div>
        <div className="flex flex-wrap gap-2 mb-3">
          {currentlyLearning.map(item => (
            <span key={item} className="tag">{item}</span>
          ))}
        </div>
        <p className="text-[#444444] text-xs font-mono leading-relaxed">
          // Honest about my ongoing technical growth — continuously expanding DSA mastery & system architecture
        </p>
      </motion.div>
    </SectionWrapper>
  )
}
