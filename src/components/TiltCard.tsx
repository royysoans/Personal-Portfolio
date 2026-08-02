import { useState, useRef, type ReactNode, type MouseEvent } from 'react'

interface GlowCardProps {
  children: ReactNode
  className?: string
  style?: React.CSSProperties
  glowColor?: string
}

export default function TiltCard({
  children,
  className = '',
  style = {},
  glowColor = 'rgba(184, 127, 80, 0.08)',
}: GlowCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50, opacity: 0 })

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    setGlowPos({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 1,
    })
  }

  const handleMouseLeave = () => {
    setGlowPos(prev => ({ ...prev, opacity: 0 }))
  }

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`relative ${className}`}
      style={style}
    >
      {/* Subtle Lighter Cursor Glow Overlay */}
      <div
        className="pointer-events-none absolute inset-0 rounded-[inherit] transition-opacity duration-300 z-20"
        style={{
          opacity: glowPos.opacity,
          background: `radial-gradient(350px circle at ${glowPos.x}% ${glowPos.y}%, ${glowColor}, transparent 70%)`,
        }}
        aria-hidden="true"
      />
      {children}
    </div>
  )
}
