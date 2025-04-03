"use client"

import { useEffect, useRef } from "react"

const SmokeyCursor = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Set canvas to full screen
    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    handleResize()
    window.addEventListener("resize", handleResize)

    // Particle class for smoke effect
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      opacity: number
      hue: number
      saturation: number
      lightness: number
      growing: boolean

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.size = Math.random() * 15 + 5
        this.speedX = Math.random() * 2 - 1
        this.speedY = Math.random() * 2 - 1

        // More vibrant color palette for dark theme
        this.hue = Math.random() * 60 + 160 // Teal to blue range
        this.saturation = Math.random() * 30 + 70 // High saturation
        this.lightness = Math.random() * 20 + 50 // Medium lightness
        this.color = `hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`
        this.opacity = 1
        this.growing = Math.random() > 0.5
      }

      update() {
        this.x += this.speedX
        this.y += this.speedY

        // Pulsating size effect
        if (this.growing) {
          this.size += 0.1
          if (this.size > 20) this.growing = false
        } else {
          this.size -= 0.1
          if (this.size < 5) this.growing = true
        }

        // Gradually change color
        this.hue += 0.5
        if (this.hue > 360) this.hue = 0
        this.color = `hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`

        this.opacity -= 0.008
      }

      draw(ctx: CanvasRenderingContext2D) {
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx.fillStyle = this.color
        ctx.globalAlpha = this.opacity
        ctx.fill()

        // Add glow effect
        ctx.shadowColor = this.color
        ctx.shadowBlur = 15
        ctx.fill()
        ctx.shadowBlur = 0

        ctx.globalAlpha = 1
      }
    }

    // Mouse tracking
    let mouseX = 0
    let mouseY = 0
    const particles: Particle[] = []

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY

      // Add particles on mouse move
      for (let i = 0; i < 3; i++) {
        particles.push(new Particle(mouseX, mouseY))
      }
    }

    window.addEventListener("mousemove", handleMouseMove)

    // Animation loop
    const animate = () => {
      // Create a semi-transparent layer for trail effect
      ctx.fillStyle = "rgba(3, 7, 18, 0.1)"
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        particles[i].update()
        particles[i].draw(ctx)

        // Remove particles when they fade out
        if (particles[i].opacity <= 0.1) {
          particles.splice(i, 1)
          i--
        }
      }

      requestAnimationFrame(animate)
    }

    animate()

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  return (
    <canvas ref={canvasRef} className="pointer-events-none fixed inset-0 z-50" style={{ mixBlendMode: "screen" }} />
  )
}

export default SmokeyCursor

