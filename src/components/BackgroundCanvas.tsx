import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  vx: number
  vy: number
  radius: number
  alpha: number
}

export default function BackgroundCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const mouse = { x: -1000, y: -1000 }
    let lastScrollY = window.scrollY
    let scrollVelocity = 0

    const handleResize = () => {
      if (!canvas) return
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const handleScroll = () => {
      const currentScrollY = window.scrollY
      scrollVelocity = (currentScrollY - lastScrollY) * 0.25
      lastScrollY = currentScrollY
    }

    window.addEventListener('resize', handleResize)
    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('scroll', handleScroll, { passive: true })

    // Calculate node density based on screen resolution
    const particleCount = Math.floor((width * height) / 16000)
    const particles: Particle[] = []

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: Math.random() * 1.5 + 1,
        alpha: Math.random() * 0.4 + 0.2,
      })
    }

    const draw = () => {
      ctx.clearRect(0, 0, width, height)

      // Decay scroll velocity smoothly
      scrollVelocity *= 0.92

      // Render nodes & links
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i]

        // Move with velocity + scroll response
        p1.x += p1.vx
        p1.y += p1.vy - scrollVelocity

        // Wrap edges smoothly
        if (p1.x < 0) p1.x = width
        if (p1.x > width) p1.x = 0
        if (p1.y < 0) p1.y = height
        if (p1.y > height) p1.y = 0

        // Draw particle dot
        ctx.beginPath()
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(92, 64, 51, ${p1.alpha * 0.5})`
        ctx.fill()

        // Connect node to mouse
        const dxMouse = mouse.x - p1.x
        const dyMouse = mouse.y - p1.y
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse)
        const mouseRadius = 140

        if (distMouse < mouseRadius) {
          const lineAlpha = (1 - distMouse / mouseRadius) * 0.35
          ctx.beginPath()
          ctx.moveTo(p1.x, p1.y)
          ctx.lineTo(mouse.x, mouse.y)
          ctx.strokeStyle = `rgba(92, 64, 51, ${lineAlpha})`
          ctx.lineWidth = 1
          ctx.stroke()
        }

        // Connect to neighboring nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j]
          const dx = p1.x - p2.x
          const dy = p1.y - p2.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          const connectionRadius = 110

          if (dist < connectionRadius) {
            const opacity = (1 - dist / connectionRadius) * 0.18
            ctx.beginPath()
            ctx.moveTo(p1.x, p1.y)
            ctx.lineTo(p2.x, p2.y)
            ctx.strokeStyle = `rgba(92, 64, 51, ${opacity})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }

      animationFrameId = requestAnimationFrame(draw)
    }

    draw()

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('scroll', handleScroll)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      aria-hidden="true"
    />
  )
}
