"use client"

import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const HeroAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = canvas.offsetWidth
    canvas.height = canvas.offsetHeight

    // Create a futuristic farm landscape visualization
    const drawLandscape = () => {
      // Background gradient
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      bgGradient.addColorStop(0, "#0f172a") // Dark blue
      bgGradient.addColorStop(1, "#1e293b") // Slightly lighter blue
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      // Add stars
      for (let i = 0; i < 100; i++) {
        const x = Math.random() * canvas.width
        const y = Math.random() * canvas.height * 0.6
        const size = Math.random() * 1.5
        ctx.beginPath()
        ctx.arc(x, y, size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.random() * 0.8 + 0.2})`
        ctx.fill()
      }

      // Moon
      ctx.beginPath()
      ctx.arc(canvas.width * 0.8, canvas.height * 0.2, 40, 0, Math.PI * 2)
      const moonGradient = ctx.createRadialGradient(
        canvas.width * 0.8,
        canvas.height * 0.2,
        10,
        canvas.width * 0.8,
        canvas.height * 0.2,
        40,
      )
      moonGradient.addColorStop(0, "#f8fafc")
      moonGradient.addColorStop(1, "#94a3b8")
      ctx.fillStyle = moonGradient
      ctx.fill()

      // Distant mountains
      ctx.beginPath()
      ctx.moveTo(0, canvas.height * 0.5)
      ctx.lineTo(canvas.width * 0.2, canvas.height * 0.4)
      ctx.lineTo(canvas.width * 0.4, canvas.height * 0.45)
      ctx.lineTo(canvas.width * 0.6, canvas.height * 0.35)
      ctx.lineTo(canvas.width * 0.8, canvas.height * 0.4)
      ctx.lineTo(canvas.width, canvas.height * 0.38)
      ctx.lineTo(canvas.width, canvas.height * 0.5)
      ctx.closePath()
      ctx.fillStyle = "#334155"
      ctx.fill()

      // Fields with futuristic grid
      const fieldGradient = ctx.createLinearGradient(0, canvas.height * 0.5, 0, canvas.height)
      fieldGradient.addColorStop(0, "#0f766e") // Dark teal
      fieldGradient.addColorStop(1, "#064e3b") // Darker teal
      ctx.fillStyle = fieldGradient
      ctx.fillRect(0, canvas.height * 0.5, canvas.width, canvas.height * 0.5)

      // Draw grid lines
      ctx.strokeStyle = "rgba(45, 212, 191, 0.3)" // Teal with transparency
      ctx.lineWidth = 1

      // Horizontal grid lines
      for (let i = 0; i <= 10; i++) {
        const y = canvas.height * 0.5 + ((canvas.height * 0.5) / 10) * i
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.bezierCurveTo(
          canvas.width * 0.25,
          y + 5 * Math.sin(i / 5),
          canvas.width * 0.75,
          y - 5 * Math.sin(i / 5),
          canvas.width,
          y,
        )
        ctx.stroke()
      }

      // Vertical grid lines
      for (let i = 0; i <= 20; i++) {
        const x = (canvas.width / 20) * i
        ctx.beginPath()
        ctx.moveTo(x, canvas.height * 0.5)
        ctx.bezierCurveTo(
          x + 5 * Math.sin(i / 5),
          canvas.height * 0.75,
          x - 5 * Math.sin(i / 5),
          canvas.height * 0.9,
          x,
          canvas.height,
        )
        ctx.stroke()
      }

      // Draw futuristic structures
      drawFuturisticStructure(canvas.width * 0.2, canvas.height * 0.6, 60)
      drawFuturisticStructure(canvas.width * 0.7, canvas.height * 0.55, 80)
      drawFuturisticStructure(canvas.width * 0.5, canvas.height * 0.7, 70)

      // Draw data visualization elements
      drawDataPoints()
    }

    const drawFuturisticStructure = (x: number, y: number, size: number) => {
      // Base
      ctx.fillStyle = "#1e293b"
      ctx.fillRect(x - size / 4, y - size / 2, size / 2, size / 2)

      // Dome
      ctx.beginPath()
      ctx.arc(x, y - size / 2, size / 4, 0, Math.PI, true)
      ctx.fillStyle = "rgba(56, 189, 248, 0.3)" // Light blue with transparency
      ctx.fill()
      ctx.strokeStyle = "#0ea5e9"
      ctx.lineWidth = 2
      ctx.stroke()

      // Glowing elements
      ctx.beginPath()
      ctx.arc(x, y - size / 2, size / 6, 0, Math.PI * 2)
      ctx.fillStyle = "rgba(45, 212, 191, 0.6)" // Teal with transparency
      ctx.fill()

      // Light beams
      ctx.beginPath()
      ctx.moveTo(x, y - size / 2)
      ctx.lineTo(x - size / 3, y - size)
      ctx.lineTo(x + size / 3, y - size)
      ctx.closePath()
      const beamGradient = ctx.createLinearGradient(x, y - size / 2, x, y - size)
      beamGradient.addColorStop(0, "rgba(45, 212, 191, 0.8)")
      beamGradient.addColorStop(1, "rgba(45, 212, 191, 0)")
      ctx.fillStyle = beamGradient
      ctx.fill()
    }

    // Data points and connections to represent AI analysis
    const dataPoints: { x: number; y: number; size: number; color: string; speed: number }[] = []
    for (let i = 0; i < 30; i++) {
      dataPoints.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 4 + 2,
        color: [
          "rgba(45, 212, 191, 0.8)", // Teal
          "rgba(168, 85, 247, 0.8)", // Purple
          "rgba(59, 130, 246, 0.8)", // Blue
          "rgba(249, 115, 22, 0.8)", // Orange
        ][Math.floor(Math.random() * 4)],
        speed: Math.random() * 0.5 + 0.1,
      })
    }

    const drawDataPoints = () => {
      // Draw connections between points
      for (let i = 0; i < dataPoints.length; i++) {
        for (let j = i + 1; j < dataPoints.length; j++) {
          const distance = Math.sqrt(
            Math.pow(dataPoints[i].x - dataPoints[j].x, 2) + Math.pow(dataPoints[i].y - dataPoints[j].y, 2),
          )

          if (distance < 100) {
            ctx.beginPath()
            ctx.moveTo(dataPoints[i].x, dataPoints[i].y)
            ctx.lineTo(dataPoints[j].x, dataPoints[j].y)
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 - distance / 500})`
            ctx.lineWidth = 0.5
            ctx.stroke()
          }
        }
      }

      // Draw data points
      for (const point of dataPoints) {
        ctx.beginPath()
        ctx.arc(point.x, point.y, point.size, 0, Math.PI * 2)
        ctx.fillStyle = point.color
        ctx.fill()

        // Add glow effect
        ctx.shadowColor = point.color
        ctx.shadowBlur = 10
        ctx.fill()
        ctx.shadowBlur = 0
      }
    }

    // Animation loop
    let animationFrame: number
    const animate = () => {
      // Update data point positions for animation
      for (const point of dataPoints) {
        point.x += (Math.random() - 0.5) * point.speed
        point.y += (Math.random() - 0.5) * point.speed

        // Keep points within bounds
        if (point.x < 0) point.x = 0
        if (point.x > canvas.width) point.x = canvas.width
        if (point.y < 0) point.y = 0
        if (point.y > canvas.height) point.y = canvas.height
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height)
      drawLandscape()

      animationFrame = requestAnimationFrame(animate)
    }

    animate()

    const handleResize = () => {
      canvas.width = canvas.offsetWidth
      canvas.height = canvas.offsetHeight
    }

    window.addEventListener("resize", handleResize)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <motion.div
      className="w-full h-full rounded-lg overflow-hidden shadow-xl border border-dark-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <canvas ref={canvasRef} className="w-full h-full bg-dark-300" />
    </motion.div>
  )
}

export default HeroAnimation

