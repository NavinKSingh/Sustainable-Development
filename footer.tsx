import Link from "next/link"
import { Leaf, Twitter, Github, Linkedin, Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  return (
    <footer className="bg-dark-400 border-t border-dark-300">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <div className="rounded-full bg-teal-600 p-1">
                <Leaf className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">AgriTech AI</span>
            </Link>
            <p className="text-sm text-gray-400">
              Revolutionizing farming with multi-agent AI technology to promote sustainability and optimize resource
              usage.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-teal-400 transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#features" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#agents" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                  AI Agents
                </Link>
              </li>
              <li>
                <Link href="#dashboard" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="#testimonials" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-sm text-gray-400 hover:text-teal-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <Mail className="h-5 w-5 text-teal-400 mt-0.5" />
                <span className="text-sm text-gray-400">info@agritechai.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="h-5 w-5 text-teal-400 mt-0.5" />
                <span className="text-sm text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-teal-400 mt-0.5" />
                <span className="text-sm text-gray-400">123 AgriTech Plaza, Silicon Valley, CA</span>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-lg font-medium text-white">Subscribe</h3>
            <p className="text-sm text-gray-400">Stay updated with our latest news and features</p>
            <form className="flex flex-col space-y-2">
              <input
                className="flex h-10 w-full rounded-md border border-dark-100 bg-dark-300 px-3 py-2 text-sm text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="Your email"
                type="email"
                required
              />
              <Button className="bg-teal-600 hover:bg-teal-700">Subscribe</Button>
            </form>
          </div>
        </div>
        <div className="mt-8 border-t border-dark-300 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-500">© 2025 AgriTech AI. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="#" className="text-xs text-gray-500 hover:text-teal-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-teal-400 transition-colors">
              Terms of Service
            </Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-teal-400 transition-colors">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

