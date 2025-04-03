"use client"

import type React from "react"

import { useEffect, useState, useRef } from "react"
import { motion } from "framer-motion"
import { Leaf, Droplet, TrendingUp, Users } from "lucide-react"

interface StatProps {
  icon: React.ReactNode
  value: number
  label: string
  suffix?: string
  color: string
  duration?: number
}

const Stat = ({ icon, value, label, suffix = "", color, duration = 2000 }: StatProps) => {
  const [count, setCount] = useState(0)
  const countRef = useRef(0)
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current)
      }
    }
  }, [])

  useEffect(() => {
    if (!isInView) return

    const startTime = Date.now()
    const timer = setInterval(() => {
      const elapsedTime = Date.now() - startTime
      const progress = Math.min(elapsedTime / duration, 1)

      countRef.current = Math.floor(progress * value)
      setCount(countRef.current)

      if (progress === 1) {
        clearInterval(timer)
      }
    }, 16)

    return () => clearInterval(timer)
  }, [value, duration, isInView])

  return (
    <motion.div
      ref={ref}
      className={`flex flex-col items-center justify-center p-6 rounded-lg border border-${color}-800 bg-${color}-900/20`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className={`rounded-full bg-${color}-900/30 border border-${color}-800 p-3 mb-4`}>{icon}</div>
      <div className="text-3xl font-bold text-white">
        {count}
        {suffix}
      </div>
      <div className="text-gray-400 text-sm mt-1">{label}</div>
    </motion.div>
  )
}

export function StatsCounter() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <Stat
        icon={<Leaf className="h-6 w-6 text-teal-400" />}
        value={1250}
        label="Farms Using Our Platform"
        color="teal"
      />
      <Stat
        icon={<Droplet className="h-6 w-6 text-blue-400" />}
        value={25}
        label="Water Usage Reduction"
        suffix="%"
        color="blue"
      />
      <Stat
        icon={<TrendingUp className="h-6 w-6 text-purple-400" />}
        value={18}
        label="Average Yield Increase"
        suffix="%"
        color="purple"
      />
      <Stat
        icon={<Users className="h-6 w-6 text-orange-400" />}
        value={32}
        label="Countries Represented"
        color="orange"
      />
    </div>
  )
}

