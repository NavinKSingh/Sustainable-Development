"use client"

import { useEffect, useRef } from "react"

export function ParticleBackground() {
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

    // Particle class
    class Particle {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
      originalX: number
      originalY: number
      density: number

      constructor(x: number, y: number) {
        this.x = x
        this.y = y
        this.originalX = x
        this.originalY = y
        this.size = Math.random() * 2 + 0.5
        this.speedX = 0
        this.speedY = 0
        this.density = Math.random() * 30 + 1

        // Colors for dark theme
        const colors = [
          "rgba(45, 212, 191, 0.7)", // Teal
          "rgba(168, 85, 247, 0.7)", // Purple
          "rgba(59, 130, 246, 0.7)", // Blue
          "rgba(249, 115, 22, 0.7)", // Orange
        ]
        this.color = colors[Math.floor(Math.random() * colors.length)]
      }

      draw() {
        ctx!.beginPath()
        ctx!.arc(this.x, this.y, this.size, 0, Math.PI * 2)
        ctx!.fillStyle = this.color
        ctx!.fill()
      }

      update() {
        // Calculate distance between mouse and particle
        const dx = mouse.x - this.x
        const dy = mouse.y - this.y
        const distance = Math.sqrt(dx * dx + dy * dy)

        // Move particles away from mouse
        if (distance < 100) {
          const forceDirectionX = dx / distance
          const forceDirectionY = dy / distance
          const maxDistance = 100
          const force = (maxDistance - distance) / maxDistance
          const directionX = forceDirectionX * force * this.density * -0.6
          const directionY = forceDirectionY * force * this.density * -0.6

          this.speedX = directionX
          this.speedY = directionY
        } else {
          // Return particles to original position
          const dx = this.originalX - this.x
          const dy = this.originalY - this.y
          this.speedX = dx * 0.05
          this.speedY = dy * 0.05
        }

        this.x += this.speedX
        this.y += this.speedY
      }
    }

    // Create particle array
    const particleArray: Particle[] = []
    const particleCount = 150

    const init = () => {
      for (let i = 0; i < particleCount; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height
        particleArray.push(new Particle(x, y))
      }
    }

    init()

    // Mouse position
    const mouse = {
      x: undefined as number | undefined,
      y: undefined as number | undefined,
    }

    canvas.addEventListener("mousemove", (e) => {
      mouse.x = e.x
      mouse.y = e.y
    })

    canvas.addEventListener("mouseleave", () => {
      mouse.x = undefined
      mouse.y = undefined
    })

    // Animation loop
    const animate = () => {
      ctx!.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particleArray.length; i++) {
        particleArray[i].update()
        particleArray[i].draw()
      }

      // Connect particles with lines
      connectParticles()

      requestAnimationFrame(animate)
    }

    // Connect nearby particles with lines
    const connectParticles = () => {
      for (let a = 0; a < particleArray.length; a++) {
        for (let b = a; b < particleArray.length; b++) {
          const dx = particleArray[a].x - particleArray[b].x
          const dy = particleArray[a].y - particleArray[b].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx!.beginPath()
            ctx!.strokeStyle = `rgba(45, 212, 191, ${0.1 - distance / 1200})`
            ctx!.lineWidth = 0.5
            ctx!.moveTo(particleArray[a].x, particleArray[a].y)
            ctx!.lineTo(particleArray[b].x, particleArray[b].y)
            ctx!.stroke()
          }
        }
      }
    }

    animate()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return <canvas ref={canvasRef} className="fixed inset-0 z-0 pointer-events-none" />
}

