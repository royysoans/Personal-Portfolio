import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props {
  id: string
  children: ReactNode
  className?: string
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export default function SectionWrapper({ id, children, className = '' }: Props) {
  return (
    <motion.section
      id={id}
      className={`section-padding max-w-6xl mx-auto px-4 sm:px-6 ${className}`}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </motion.section>
  )
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <motion.div variants={itemVariants} className="flex items-center justify-center gap-2 mb-2">
      <span className="w-1.5 h-1.5 rounded-full bg-[#B87F50] animate-pulse shadow-[0_0_8px_rgba(184,127,80,0.8)]" />
      <p className="section-label mb-0 text-center">{children}</p>
      <span className="w-1.5 h-1.5 rounded-full bg-[#B87F50] animate-pulse shadow-[0_0_8px_rgba(184,127,80,0.8)]" />
    </motion.div>
  )
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <div className="relative inline-block text-center w-full">
      {/* Ambient title glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 sm:w-72 h-16 bg-[#B87F50]/06 blur-3xl rounded-full pointer-events-none" />
      <motion.h2
        variants={itemVariants}
        className="relative z-10 text-2xl sm:text-3xl md:text-4xl font-bold text-[#18181B] mb-4 sm:mb-5 leading-tight text-center"
        style={{ letterSpacing: '-0.025em' }}
      >
        {children}
      </motion.h2>
    </div>
  )
}

export function SectionSubtitle({ children }: { children: ReactNode }) {
  return (
    <motion.p variants={itemVariants}
      className="text-[#71717A] text-base md:text-lg max-w-2xl leading-relaxed text-center mx-auto">
      {children}
    </motion.p>
  )
}
