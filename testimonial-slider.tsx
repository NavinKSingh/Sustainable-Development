"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "John Farmer",
    role: "Corn & Soybean Farmer",
    location: "Iowa, USA",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "Since implementing the AgriTech AI system, my water usage has decreased by 20% while crop yields have increased by 15%. The AI recommendations are spot-on and have transformed how I manage my farm.",
  },
  {
    id: 2,
    name: "Maria Rodriguez",
    role: "Organic Vegetable Farmer",
    location: "California, USA",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "The multi-agent approach is revolutionary. Having specialized AI agents for weather, market analysis, and farming practices working together has helped me make better decisions and increase my farm's sustainability.",
  },
  {
    id: 3,
    name: "Robert Chen",
    role: "Rice Farmer",
    location: "Thailand",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "The predictive analytics for weather patterns have been incredibly accurate. I've been able to prepare for changing conditions and protect my crops from extreme weather events that would have caused significant damage.",
  },
  {
    id: 4,
    name: "Sarah Johnson",
    role: "Dairy Farmer",
    location: "Wisconsin, USA",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "The resource optimization features have helped me reduce costs while maintaining high-quality production. The ROI on this system was achieved within the first year, and now it's pure profit improvement.",
  },
]

export function TestimonialSlider() {
  const [current, setCurrent] = useState(0)
  const [autoplay, setAutoplay] = useState(true)

  useEffect(() => {
    if (!autoplay) return

    const interval = setInterval(() => {
      setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
    }, 5000)

    return () => clearInterval(interval)
  }, [autoplay])

  const next = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))
  }

  const prev = () => {
    setAutoplay(false)
    setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))
  }

  return (
    <div className="relative overflow-hidden bg-dark-300 rounded-lg border border-dark-100 p-6">
      <div className="absolute top-6 left-6 text-teal-400">
        <Quote className="h-8 w-8 opacity-50" />
      </div>

      <div className="relative h-[300px] md:h-[250px]">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center"
          >
            <p className="text-gray-300 italic mb-6 pt-8">{testimonials[current].quote}</p>
            <div className="flex flex-col items-center">
              <img
                src={testimonials[current].image || "/placeholder.svg"}
                alt={testimonials[current].name}
                className="w-16 h-16 rounded-full border-2 border-teal-500 mb-3"
              />
              <h4 className="text-white font-medium">{testimonials[current].name}</h4>
              <p className="text-gray-400 text-sm">{testimonials[current].role}</p>
              <p className="text-gray-500 text-xs">{testimonials[current].location}</p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex justify-center items-center space-x-2 mt-4">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setAutoplay(false)
              setCurrent(index)
            }}
            className={`w-2 h-2 rounded-full ${index === current ? "bg-teal-500" : "bg-gray-600"}`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>

      <button
        onClick={prev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-dark-200 rounded-full p-2 text-gray-400 hover:text-white hover:bg-dark-100 transition-colors"
        aria-label="Previous testimonial"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        onClick={next}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-dark-200 rounded-full p-2 text-gray-400 hover:text-white hover:bg-dark-100 transition-colors"
        aria-label="Next testimonial"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  )
}

