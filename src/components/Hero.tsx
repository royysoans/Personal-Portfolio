import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'
import TiltCard from './TiltCard'

const CODE_LINES = [
  { tokens: [{ t: 'const ', c: 'code-keyword' }, { t: 'developer', c: 'code-variable' }, { t: ' = {', c: 'code-bracket' }] },
  { tokens: [{ t: '  name', c: 'code-property' }, { t: ': ', c: 'code-plain' }, { t: '"Royston"', c: 'code-string' }, { t: ',', c: 'code-plain' }] },
  { tokens: [{ t: '  role', c: 'code-property' }, { t: ': ', c: 'code-plain' }, { t: '"Full-Stack Web Developer"', c: 'code-string' }, { t: ',', c: 'code-plain' }] },
  { tokens: [{ t: '  loves', c: 'code-property' }, { t: ': [', c: 'code-bracket' }] },
  { tokens: [{ t: '    ', c: 'code-plain' }, { t: '"Web Development"', c: 'code-string' }, { t: ',', c: 'code-plain' }] },
  { tokens: [{ t: '    ', c: 'code-plain' }, { t: '"React"', c: 'code-string' }, { t: ',', c: 'code-plain' }] },
  { tokens: [{ t: '    ', c: 'code-plain' }, { t: '"C++"', c: 'code-string' }, { t: ',', c: 'code-plain' }] },
  { tokens: [{ t: '    ', c: 'code-plain' }, { t: '"TypeScript"', c: 'code-string' }] },
  { tokens: [{ t: '  ]', c: 'code-bracket' }, { t: ',', c: 'code-plain' }] },
  { tokens: [{ t: '  open', c: 'code-property' }, { t: ': ', c: 'code-plain' }, { t: 'true', c: 'code-keyword' }] },
  { tokens: [{ t: '}', c: 'code-bracket' }] },
]

function CodeWindow() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  useEffect(() => {
    if (visibleLines >= CODE_LINES.length) return
    const t = setTimeout(() => setVisibleLines(v => v + 1), visibleLines === 0 ? 600 : 100)
    return () => clearTimeout(t)
  }, [visibleLines])

  useEffect(() => {
    const t = setInterval(() => setShowCursor(v => !v), 530)
    return () => clearInterval(t)
  }, [])

  return (
    <TiltCard glowColor="rgba(232, 152, 94, 0.08)">
      <div
        className="w-full rounded-lg overflow-hidden border border-[#5C4033]/30 dark-code-window shadow-xl"
        style={{ background: '#1B130E', boxShadow: '0 8px 32px rgba(27,19,14,0.3)' }}
        aria-label="Code preview"
      >
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[#5C4033]/20 bg-[#2A201B]">
        <span className="w-2 h-2 rounded-full bg-[#FF5F56]" />
        <span className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
        <span className="w-2 h-2 rounded-full bg-[#27C93F]" />
        <span className="ml-3 font-mono text-[10px] text-[#CDB39C]">developer.ts</span>
      </div>

      {/* Code body */}
      <div className="p-4 sm:p-5 font-mono text-[12px] sm:text-[13px] leading-6 min-h-[200px] sm:min-h-[240px] text-[#EAD7C6] bg-[#1B130E]">
        {CODE_LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="flex">
            <span className="select-none text-[#5C4033] w-7 shrink-0 text-right mr-4 text-[11px] leading-6">{i + 1}</span>
            <span>
              {line.tokens.map((token, j) => (
                <span key={j} className={token.c}>{token.t}</span>
              ))}
              {i === visibleLines - 1 && visibleLines < CODE_LINES.length && (
                <span className="inline-block w-[2px] h-[14px] ml-0.5 align-middle bg-[#EAD7C6]"
                  style={{ opacity: showCursor ? 1 : 0, transition: 'opacity 0.1s' }} />
              )}
            </span>
          </div>
        ))}
        {visibleLines >= CODE_LINES.length && (
          <div className="flex">
            <span className="select-none text-[#D4D4D8] w-7 shrink-0 text-right mr-4 text-[11px] leading-6">{CODE_LINES.length + 1}</span>
            <span className="inline-block w-[2px] h-[14px] align-middle bg-[#18181B]"
              style={{ opacity: showCursor ? 1 : 0, transition: 'opacity 0.1s' }} />
          </div>
        )}
      </div>
    </div>
    </TiltCard>
  )
}

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }
const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 w-full pt-20 sm:pt-24 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-center">
          <motion.div variants={containerVariants} initial="hidden" animate="visible">
            {/* Name */}
            <motion.h1 variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight leading-[1.05] mb-5 sm:mb-6 text-[#18181B]"
              style={{ letterSpacing: '-0.03em' }}>
              Royston<br />Soans
            </motion.h1>

            {/* Tagline */}
            <motion.div variants={itemVariants} className="mb-6 sm:mb-8">
              <p className="text-base sm:text-lg text-[#71717A] leading-relaxed">Software Engineer & Full-Stack Web Developer.</p>
              <p className="text-base sm:text-lg text-[#71717A] leading-relaxed">Building thoughtful digital products.</p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-8 sm:mb-10">
              <button id="hero-view-work-btn"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary">
                View work <ArrowRight size={13} />
              </button>
              <a href="/resume.pdf" download="Royston_Soans_Resume.pdf" id="hero-resume-btn" className="btn-secondary">
                <Download size={13} /> Resume
              </a>
            </motion.div>

            {/* Social row */}
            <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 sm:gap-5">
              {[
                { icon: GithubIcon, href: 'https://github.com/royysoans', label: 'GitHub' },
                { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/royston-soans-3b14b3329/', label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="flex items-center gap-2 text-[#A1A1AA] hover:text-[#18181B] transition-colors duration-200">
                  <Icon size={16} />
                  <span className="text-xs font-medium">{label}</span>
                </a>
              ))}
              <a href="mailto:roystonsoans3@gmail.com" aria-label="Email"
                className="flex items-center gap-2 text-[#A1A1AA] hover:text-[#18181B] transition-colors duration-200">
                <span className="text-xs font-mono hidden sm:inline">roystonsoans3@gmail.com</span>
                <span className="text-xs font-mono sm:hidden">Email me</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Code window */}
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="w-full">
            <CodeWindow />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — hide on very small screens */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block">
        <motion.div animate={{ y: [0, 6, 0] }} transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1.5">
          <span className="font-mono text-[10px] text-[#A1A1AA] uppercase tracking-widest">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#A1A1AA] to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
