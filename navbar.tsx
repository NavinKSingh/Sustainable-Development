"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X, Leaf } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const { toast } = useToast()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLogin = () => {
    toast({
      title: "Login functionality",
      description: "This would connect to your authentication system.",
    })
  }

  const handleSignUp = () => {
    toast({
      title: "Sign up functionality",
      description: "This would redirect to your registration flow.",
    })
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-dark-400/80 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <div className="rounded-full bg-teal-600 p-1">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">AgriTech AI</span>
            </Link>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-sm text-gray-300 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#agents" className="text-sm text-gray-300 hover:text-white transition-colors">
              AI Agents
            </Link>
            <Link href="#dashboard" className="text-sm text-gray-300 hover:text-white transition-colors">
              Dashboard
            </Link>
            <Link href="#testimonials" className="text-sm text-gray-300 hover:text-white transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm text-gray-300 hover:text-white transition-colors">
              Contact
            </Link>
          </nav>
          <div className="hidden md:flex items-center space-x-2">
            <Button variant="ghost" className="text-gray-300 hover:text-white" onClick={handleLogin}>
              Login
            </Button>
            <Button className="bg-teal-600 hover:bg-teal-700" onClick={handleSignUp}>
              Sign Up
            </Button>
          </div>
          <button
            className="md:hidden text-gray-300 hover:text-white"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-dark-300 border-t border-dark-100">
          <div className="container mx-auto px-4 py-4 space-y-4">
            <Link
              href="#features"
              className="block text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#agents"
              className="block text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              AI Agents
            </Link>
            <Link
              href="#dashboard"
              className="block text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              href="#testimonials"
              className="block text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#contact"
              className="block text-gray-300 hover:text-white transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-4 border-t border-dark-100 flex flex-col space-y-2">
              <Button variant="ghost" className="justify-start" onClick={handleLogin}>
                Login
              </Button>
              <Button className="bg-teal-600 hover:bg-teal-700" onClick={handleSignUp}>
                Sign Up
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

