import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Download } from 'lucide-react'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

// ── Code window content ─────────────────────────────────────────────────────
const CODE_LINES = [
  { tokens: [{ t: 'const ', c: 'code-keyword' }, { t: 'developer', c: 'code-variable' }, { t: ' = {', c: 'code-bracket' }] },
  { tokens: [{ t: '  name', c: 'code-property' }, { t: ': ', c: 'code-plain' }, { t: '"Royston"', c: 'code-string' }, { t: ',', c: 'code-plain' }] },
  { tokens: [{ t: '  role', c: 'code-property' }, { t: ': ', c: 'code-plain' }, { t: '"Full-Stack Web Developer"', c: 'code-string' }, { t: ',', c: 'code-plain' }] },
  { tokens: [{ t: '  loves', c: 'code-property' }, { t: ': [', c: 'code-bracket' }] },
  { tokens: [{ t: '    ', c: 'code-plain' }, { t: '"Web Development"', c: 'code-string' }, { t: ',', c: 'code-plain' }] },
  { tokens: [{ t: '    ', c: 'code-plain' }, { t: '"React"', c: 'code-string' }, { t: ',', c: 'code-plain' }] },
  { tokens: [{ t: '    ', c: 'code-plain' }, { t: '"C++"', c: 'code-string' }, { t: ',', c: 'code-plain' }] },
  { tokens: [{ t: '    ', c: 'code-plain' }, { t: '"AI"', c: 'code-string' }, { t: ',', c: 'code-plain' }] },
  { tokens: [{ t: '    ', c: 'code-plain' }, { t: '"TypeScript"', c: 'code-string' }] },
  { tokens: [{ t: '  ]', c: 'code-bracket' }, { t: ',', c: 'code-plain' }] },
  { tokens: [{ t: '  open', c: 'code-property' }, { t: ': ', c: 'code-plain' }, { t: 'true', c: 'code-keyword' }] },
  { tokens: [{ t: '}', c: 'code-bracket' }] },
]

function CodeWindow() {
  const [visibleLines, setVisibleLines] = useState(0)
  const [showCursor, setShowCursor] = useState(true)

  // Reveal lines one at a time with typewriter feel
  useEffect(() => {
    if (visibleLines >= CODE_LINES.length) return
    const delay = visibleLines === 0 ? 600 : 100
    const t = setTimeout(() => setVisibleLines(v => v + 1), delay)
    return () => clearTimeout(t)
  }, [visibleLines])

  // Blinking cursor
  useEffect(() => {
    const t = setInterval(() => setShowCursor(v => !v), 530)
    return () => clearInterval(t)
  }, [])

  return (
    <div
      className="w-full rounded-lg overflow-hidden border border-white/[0.08]"
      style={{ background: '#0D0D0D' }}
      aria-label="Code preview"
    >
      {/* Window chrome */}
      <div
        className="flex items-center gap-1.5 px-4 py-3 border-b border-white/[0.06]"
        style={{ background: '#111111' }}
      >
        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
        <span className="w-2.5 h-2.5 rounded-full bg-white/10" />
        <span
          className="ml-3 font-mono text-[10px] text-[#444444]"
        >
          developer.ts
        </span>
      </div>

      {/* Code body */}
      <div className="p-5 font-mono text-[13px] leading-6 min-h-[240px]">
        {CODE_LINES.slice(0, visibleLines).map((line, i) => (
          <div key={i} className="flex">
            <span className="select-none text-[#333333] w-7 shrink-0 text-right mr-4 text-[11px] leading-6">
              {i + 1}
            </span>
            <span>
              {line.tokens.map((token, j) => (
                <span key={j} className={token.c}>
                  {token.t}
                </span>
              ))}
              {/* Blinking cursor on last visible line */}
              {i === visibleLines - 1 && visibleLines < CODE_LINES.length && (
                <span
                  className="inline-block w-[2px] h-[14px] ml-0.5 align-middle bg-[#4DA8DA]"
                  style={{ opacity: showCursor ? 1 : 0, transition: 'opacity 0.1s' }}
                />
              )}
            </span>
          </div>
        ))}
        {/* Idle cursor after full render */}
        {visibleLines >= CODE_LINES.length && (
          <div className="flex">
            <span className="select-none text-[#333333] w-7 shrink-0 text-right mr-4 text-[11px] leading-6">
              {CODE_LINES.length + 1}
            </span>
            <span
              className="inline-block w-[2px] h-[14px] align-middle bg-[#4DA8DA]"
              style={{ opacity: showCursor ? 1 : 0, transition: 'opacity 0.1s' }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

// ── Hero ────────────────────────────────────────────────────────────────────
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center"
    >
      <div className="max-w-6xl mx-auto px-6 w-full pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ── Left column: typography ── */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Availability badge */}
            <motion.div variants={itemVariants} className="mb-8">
              <span className="inline-flex items-center gap-2 font-mono text-[11px] text-[#888888] border border-white/[0.08] px-3 py-1.5 rounded-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-[#4DA8DA]" style={{ boxShadow: '0 0 6px #4DA8DA' }} />
                Open to internship opportunities · 2026
              </span>
            </motion.div>

            {/* Name — the hero */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
              style={{ letterSpacing: '-0.03em' }}
            >
              <span style={{ color: '#EBEBEB' }}>Royston</span>
              <br />
              <span style={{ color: '#EBEBEB' }}>Soans</span>
            </motion.h1>

            {/* Tagline */}
            <motion.div variants={itemVariants} className="mb-8">
              <p className="text-lg text-[#888888] leading-relaxed">
                Software Engineer & Full-Stack Web Developer.
              </p>
              <p className="text-lg text-[#888888] leading-relaxed">
                Building thoughtful digital products.
              </p>
            </motion.div>

            {/* CTAs */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-3 mb-10">
              <button
                id="hero-view-work-btn"
                onClick={() => scrollToSection('projects')}
                className="btn-primary"
              >
                View work
                <ArrowRight size={13} />
              </button>
              <a
                href="/resume.pdf"
                download="Royston_Soans_Resume.pdf"
                id="hero-resume-btn"
                className="btn-secondary"
              >
                <Download size={13} />
                Resume
              </a>
            </motion.div>

            {/* Social row */}
            <motion.div variants={itemVariants} className="flex items-center gap-5">
              {[
                { icon: GithubIcon, href: 'https://github.com/royysoans', label: 'GitHub' },
                { icon: LinkedinIcon, href: 'https://www.linkedin.com/in/royston-soans-3b14b3329/', label: 'LinkedIn' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex items-center gap-2 text-[#444444] hover:text-[#EBEBEB] transition-colors duration-200"
                >
                  <Icon size={16} />
                  <span className="text-xs font-medium">{label}</span>
                </a>
              ))}
              <a
                href="mailto:roystonsoans3@gmail.com"
                aria-label="Email"
                className="flex items-center gap-2 text-[#444444] hover:text-[#EBEBEB] transition-colors duration-200"
              >
                <span className="text-xs font-mono">roystonsoans3@gmail.com</span>
              </a>
            </motion.div>
          </motion.div>

          {/* ── Right column: code window ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          >
            <CodeWindow />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="font-mono text-[10px] text-[#333333] uppercase tracking-widest">scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-[#333333] to-transparent" />
        </motion.div>
      </div>
    </section>
  )
}
