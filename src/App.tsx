import { useEffect, useRef } from 'react'
import ScrollProgress from './components/ScrollProgress'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Resume from './components/Resume'
import Footer from './components/Footer'
import BackgroundCanvas from './components/BackgroundCanvas'

export default function App() {
  const spotlightRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`)
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`)
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="relative min-h-screen grid-bg overflow-x-hidden">
      {/* Interactive Constellation Network Canvas */}
      <BackgroundCanvas />

      {/* Cursor spotlight overlay */}
      <div ref={spotlightRef} className="cursor-spotlight" aria-hidden="true" />

      <ScrollProgress />
      <Navbar />

      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Resume />
      </main>

      <Footer />
    </div>
  )
}
