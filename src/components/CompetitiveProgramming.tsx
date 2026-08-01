import { motion } from 'framer-motion'
import { Code2, TrendingUp } from 'lucide-react'
import { GithubIcon } from './BrandIcons'
import SectionWrapper, { SectionLabel, SectionTitle, itemVariants } from './SectionWrapper'

const leetcodeStats = {
  solved: 50,
  easy: 30,
  medium: 18,
  hard: 2,
  streak: 7,
}

const githubStats = {
  repos: 10,
  topLangs: ['TypeScript', 'JavaScript', 'Python'],
}

export default function CompetitiveProgramming() {
  return (
    <SectionWrapper id="competitive" className="border-t border-white/[0.04]">
      <div className="mb-10">
        <SectionLabel>Problem Solving</SectionLabel>
        <SectionTitle>Competitive Programming</SectionTitle>
      </div>

      <div className="grid md:grid-cols-2 gap-5 max-w-2xl">
        {/* LeetCode card */}
        <motion.div
          variants={itemVariants}
          className="rounded-lg border border-white/[0.07] overflow-hidden"
          style={{ background: '#0f0f0f' }}
        >
          <div className="px-5 py-4 border-b border-white/[0.05] flex items-center gap-2">
            <Code2 size={14} style={{ color: '#FFA116' }} />
            <span className="text-[#EBEBEB] text-sm font-medium">LeetCode</span>
          </div>
          <div className="p-5">
            <div className="mb-4">
              <span className="text-3xl font-bold text-[#EBEBEB] tracking-tight">{leetcodeStats.solved}</span>
              <span className="text-[#555555] text-sm ml-2">problems solved</span>
            </div>

            {/* Difficulty breakdown */}
            <div className="grid grid-cols-3 gap-2 mb-4">
              {[
                { label: 'Easy',   value: leetcodeStats.easy,   color: '#10b981' },
                { label: 'Medium', value: leetcodeStats.medium, color: '#f59e0b' },
                { label: 'Hard',   value: leetcodeStats.hard,   color: '#ef4444' },
              ].map(d => (
                <div
                  key={d.label}
                  className="text-center py-2.5 rounded-md border border-white/[0.06]"
                  style={{ background: '#111111' }}
                >
                  <p className="font-bold text-[15px]" style={{ color: d.color }}>{d.value}</p>
                  <p className="text-[#444444] text-[10px] font-mono uppercase tracking-wider mt-0.5">{d.label}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-1.5 text-xs text-[#555555] mb-4">
              <TrendingUp size={11} style={{ color: '#f97316' }} />
              <span>Streak:</span>
              <span style={{ color: '#f97316' }} className="font-medium">{leetcodeStats.streak} days</span>
            </div>

            <a
              href="https://leetcode.com/royysoans"
              target="_blank"
              rel="noopener noreferrer"
              id="leetcode-profile-link"
              className="btn-secondary text-xs w-full justify-center"
            >
              View profile
            </a>
          </div>
        </motion.div>

        {/* GitHub card */}
        <motion.div
          variants={itemVariants}
          className="rounded-lg border border-white/[0.07] overflow-hidden"
          style={{ background: '#0f0f0f' }}
        >
          <div className="px-5 py-4 border-b border-white/[0.05] flex items-center gap-2">
            <GithubIcon size={14} />
            <span className="text-[#EBEBEB] text-sm font-medium">GitHub</span>
          </div>
          <div className="p-5">
            <div className="mb-4">
              <span className="text-3xl font-bold text-[#EBEBEB] tracking-tight">{githubStats.repos}</span>
              <span className="text-[#555555] text-sm ml-2">public repos</span>
            </div>

            <div className="mb-4">
              <p className="font-mono text-[10px] text-[#444444] uppercase tracking-wider mb-2">Top languages</p>
              <div className="flex flex-wrap gap-1.5">
                {githubStats.topLangs.map(lang => (
                  <span key={lang} className="tag">{lang}</span>
                ))}
              </div>
            </div>

            {/* Contribution graph placeholder — minimal */}
            <div
              className="rounded-md p-3 mb-4 border border-dashed border-white/[0.06] text-center"
            >
              <p className="font-mono text-[10px] text-[#333333]">
                // contribution graph · API coming soon
              </p>
            </div>

            <a
              href="https://github.com/royysoans"
              target="_blank"
              rel="noopener noreferrer"
              id="github-profile-link"
              className="btn-secondary text-xs w-full justify-center"
            >
              <GithubIcon size={11} />
              View profile
            </a>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
