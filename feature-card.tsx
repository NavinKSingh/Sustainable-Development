"use client"

import type { ReactNode } from "react"
import { motion } from "framer-motion"

interface FeatureCardProps {
  icon: ReactNode
  title: string
  description: string
  color: "teal" | "purple" | "blue" | "orange"
}

const FeatureCard = ({ icon, title, description, color }: FeatureCardProps) => {
  const colorClasses = {
    teal: "border-teal-800 bg-teal-900/20 hover:border-teal-600 glow",
    purple: "border-purple-800 bg-purple-900/20 hover:border-purple-600 glow-purple",
    blue: "border-blue-800 bg-blue-900/20 hover:border-blue-600 glow-blue",
    orange: "border-orange-800 bg-orange-900/20 hover:border-orange-600 glow-orange",
  }

  return (
    <motion.div
      className={`flex flex-col items-center space-y-4 rounded-lg border ${colorClasses[color]} p-6 transition-all duration-300 hover:shadow-lg`}
      whileHover={{ y: -5, scale: 1.02 }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className={`rounded-full bg-${color}-900/30 border border-${color}-800 p-3`}>{icon}</div>
      <h3 className="text-lg font-medium text-white">{title}</h3>
      <p className="text-center text-gray-400">{description}</p>
    </motion.div>
  )
}

export default FeatureCard

