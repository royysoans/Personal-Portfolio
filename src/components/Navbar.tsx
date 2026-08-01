import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/data/nav'
import { GithubIcon, LinkedinIcon } from './BrandIcons'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 140) { setActive(id); break }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (href: string) => {
    setMobileOpen(false)
    document.getElementById(href.replace('#', ''))?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'border-b border-black/[0.06] bg-[#DCC5B0]/92 backdrop-blur-md shadow-sm'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a
            href="#home"
            onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
            className="font-mono text-sm font-bold text-[#18181B] hover:text-[#1A3B8B] transition-colors duration-200 tracking-tight"
            aria-label="Home"
          >
            RS
          </a>

          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-7" aria-label="Main navigation">
              {navLinks.map(link => {
                const id = link.href.replace('#', '')
                const isActive = active === id
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={e => { e.preventDefault(); handleNav(link.href) }}
                    className={`relative text-sm font-medium transition-colors duration-200 pb-0.5 ${
                      isActive ? 'text-[#18181B]' : 'text-[#71717A] hover:text-[#18181B]'
                    }`}
                  >
                    {link.label}
                    <span className={`absolute bottom-0 left-0 right-0 h-px bg-[#18181B] transition-transform duration-200 origin-left ${isActive ? 'scale-x-100' : 'scale-x-0'}`} />
                  </a>
                )
              })}
            </nav>

            <div className="flex items-center gap-1 pl-2 border-l border-black/[0.08] hidden sm:flex">
              {[
                { href: 'https://github.com/royysoans', label: 'GitHub', Icon: GithubIcon },
                { href: 'https://www.linkedin.com/in/royston-soans-3b14b3329/', label: 'LinkedIn', Icon: LinkedinIcon },
              ].map(({ href, label, Icon }) => (
                <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}
                  className="p-1.5 rounded text-[#71717A] hover:text-[#18181B] hover:bg-black/[0.04] transition-all duration-200">
                  <Icon size={16} />
                </a>
              ))}
            </div>

            <button
              className="md:hidden p-1.5 text-[#71717A] hover:text-[#18181B] transition-colors"
              onClick={() => setMobileOpen(v => !v)}
              aria-label="Toggle menu" aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.18 }}
            className="fixed top-14 left-0 right-0 z-40 bg-[#DCC5B0]/96 backdrop-blur-md border-b border-black/[0.06] md:hidden"
          >
            <nav className="flex flex-col px-6 py-4 gap-1" aria-label="Mobile navigation">
              {navLinks.map(link => (
                <a key={link.href} href={link.href}
                  onClick={e => { e.preventDefault(); handleNav(link.href) }}
                  className="py-2.5 text-sm font-medium text-[#71717A] hover:text-[#18181B] transition-colors border-b border-black/[0.04] last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex items-center gap-4 pt-3 mt-1">
                <a href="https://github.com/royysoans" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-[#71717A] hover:text-[#18181B]">
                  <GithubIcon size={14} /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/royston-soans-3b14b3329/" target="_blank" rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs font-mono text-[#71717A] hover:text-[#18181B]">
                  <LinkedinIcon size={14} /> LinkedIn
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
