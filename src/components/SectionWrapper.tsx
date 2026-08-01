import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props {
  id: string
  children: ReactNode
  className?: string
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
}

export const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
}

export default function SectionWrapper({ id, children, className = '' }: Props) {
  return (
    <motion.section
      id={id}
      className={`section-padding max-w-6xl mx-auto ${className}`}
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
    <motion.p
      variants={itemVariants}
      className="section-label text-center"
    >
      {children}
    </motion.p>
  )
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <motion.h2
      variants={itemVariants}
      className="text-3xl md:text-4xl font-bold text-[#EBEBEB] mb-5 leading-tight text-center"
      style={{ letterSpacing: '-0.025em' }}
    >
      {children}
    </motion.h2>
  )
}

export function SectionSubtitle({ children }: { children: ReactNode }) {
  return (
    <motion.p
      variants={itemVariants}
      className="text-[#888888] text-base md:text-lg max-w-2xl leading-relaxed text-center mx-auto"
    >
      {children}
    </motion.p>
  )
}
