import { motion } from 'framer-motion'
import { Code2, TrendingUp } from 'lucide-react'
import SectionWrapper, { SectionLabel, SectionTitle, itemVariants } from './SectionWrapper'

const leetcodeStats = {
  solved: 50,
  easy: 30,
  medium: 18,
  hard: 2,
  streak: 7,
}

export default function CompetitiveProgramming() {
  return (
    <SectionWrapper id="competitive" className="border-t border-white/[0.04] flex flex-col items-center">
      <div className="mb-8 text-center">
        <SectionLabel>Problem Solving</SectionLabel>
        <SectionTitle>Competitive Programming</SectionTitle>
      </div>

      {/* Centered, shortened LeetCode Stats block */}
      <motion.div
        variants={itemVariants}
        className="rounded-lg border border-white/[0.07] overflow-hidden w-full max-w-md mx-auto"
        style={{ background: '#0f0f0f' }}
      >
        <div className="px-5 py-3.5 border-b border-white/[0.05] flex items-center justify-center gap-2">
          <Code2 size={14} style={{ color: '#FFA116' }} />
          <span className="text-[#EBEBEB] text-sm font-medium">LeetCode Statistics</span>
        </div>
        <div className="p-6 text-center">
          <div className="mb-4">
            <span className="text-4xl font-bold text-[#EBEBEB] tracking-tight">{leetcodeStats.solved}</span>
            <span className="text-[#555555] text-xs font-mono uppercase tracking-wider block mt-1">Total Solved</span>
          </div>

          {/* Difficulty breakdown */}
          <div className="grid grid-cols-3 gap-2.5 mb-5">
            {[
              { label: 'Easy',   value: leetcodeStats.easy,   color: '#10b981' },
              { label: 'Medium', value: leetcodeStats.medium, color: '#f59e0b' },
              { label: 'Hard',   value: leetcodeStats.hard,   color: '#ef4444' },
            ].map(d => (
              <div
                key={d.label}
                className="text-center py-2 rounded border border-white/[0.06]"
                style={{ background: '#111111' }}
              >
                <p className="font-bold text-sm" style={{ color: d.color }}>{d.value}</p>
                <p className="text-[#444444] text-[9px] font-mono uppercase tracking-wider mt-0.5">{d.label}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-1.5 text-xs text-[#888888] mb-5 font-mono">
            <TrendingUp size={12} style={{ color: '#f97316' }} />
            <span>Active LeetCode Streak:</span>
            <span style={{ color: '#f97316' }} className="font-semibold">{leetcodeStats.streak} Days</span>
          </div>

          <a
            href="https://leetcode.com/royysoans"
            target="_blank"
            rel="noopener noreferrer"
            id="leetcode-profile-link"
            className="btn-primary text-xs w-full justify-center py-2"
          >
            View LeetCode Profile
          </a>
        </div>
      </motion.div>
    </SectionWrapper>
  )
}
