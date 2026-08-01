import { motion, useScroll } from 'framer-motion'

export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-px origin-left z-[100]"
      style={{ scaleX: scrollYProgress, background: '#1A3B8B', opacity: 0.6 }}
    />
  )
}
