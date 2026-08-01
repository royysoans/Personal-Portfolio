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
      <div className="mb-8">
        <SectionLabel>Stack & Expertise</SectionLabel>
        <SectionTitle>Technologies I Enjoy Working With</SectionTitle>
      </div>

      {/* Category filter — minimal mono tab bar */}
      <motion.div variants={itemVariants} className="flex flex-wrap gap-2 mb-6 border-b border-white/[0.07] pb-3">
        {skillCategories.map(cat => {
          const count = cat === 'All' ? skills.length : skills.filter(s => s.category === cat).length
          const isActive = activeCategory === cat
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`flex items-center gap-2 px-2.5 py-1 rounded-md text-xs font-mono transition-all duration-150 border ${
                isActive
                  ? 'border-[#4DA8DA] text-[#EBEBEB] bg-[#4DA8DA]/10'
                  : 'border-white/[0.06] text-[#666666] hover:text-[#888888] hover:border-white/[0.12] bg-[#0c0c0c]'
              }`}
            >
              <span>{cat}</span>
              <span className={`text-[9px] px-1 py-0.1 rounded ${
                isActive ? 'bg-[#4DA8DA]/20 text-[#4DA8DA]' : 'bg-white/[0.05] text-[#555555]'
              }`}>
                {count}
              </span>
            </button>
          )
        })}
      </motion.div>

      {/* Skills list — rendered as compact tags rather than big card blocks */}
      <motion.div
        layout
        className="flex flex-wrap gap-2 mb-8 max-w-4xl"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map(skill => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="flex items-center gap-2 px-3 py-1.5 rounded border border-white/[0.07] hover:border-[#4DA8DA]/30 transition-all duration-150 group"
              style={{ background: '#0e0e0e' }}
              title={skill.description}
            >
              {skill.icon ? (
                <img src={skill.icon} alt={skill.name} className="w-3.5 h-3.5 object-contain shrink-0 filter brightness-90 group-hover:brightness-100 transition-all" loading="lazy" />
              ) : (
                <span className="w-1.5 h-1.5 rounded-full bg-[#4DA8DA]/60 group-hover:bg-[#4DA8DA] transition-colors" />
              )}
              <span className="text-xs font-medium text-[#888888] group-hover:text-[#EBEBEB] transition-colors">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Currently learning */}
      <motion.div
        variants={itemVariants}
        className="p-4 rounded border border-white/[0.06] bg-[#0a0a0a] max-w-2xl"
      >
        <p className="font-mono text-[10px] text-[#4DA8DA] uppercase tracking-widest mb-2 flex items-center gap-1.5">
          <span className="w-1 h-1 rounded-full bg-[#4DA8DA] animate-pulse" />
          Currently Learning
        </p>
        <div className="flex flex-wrap gap-1.5 mb-2">
          {currentlyLearning.map(item => (
            <span key={item} className="tag text-[11px] py-0.5 px-2">{item}</span>
          ))}
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
