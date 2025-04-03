import { Suspense } from "react"
import Link from "next/link"
import { ArrowRight, Leaf, BarChart3, Cloud, Users, Droplet, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroAnimation from "@/components/hero-animation"
import SmokeyCursor from "@/components/smokey-cursor"
import FeatureCard from "@/components/feature-card"
import AgentSection from "@/components/agent-section"
import DashboardPreview from "@/components/dashboard-preview"
import { TestimonialSlider } from "@/components/testimonial-slider"
import { StatsCounter } from "@/components/stats-counter"
import { ParticleBackground } from "@/components/particle-background"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      <SmokeyCursor />
      <ParticleBackground />

      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern opacity-5"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="inline-block rounded-lg bg-teal-900/30 border border-teal-800 px-3 py-1 text-sm text-teal-400">
                Sustainable Agriculture AI
              </div>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Revolutionizing Farming with <span className="gradient-text">Multi-Agent AI</span>
              </h1>
              <p className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our AI system brings together farmers, weather stations, and agricultural experts to optimize farming
                practices, reduce environmental impact, and improve livelihoods.
              </p>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" className="bg-teal-600 hover:bg-teal-700 glow">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-teal-600 text-teal-400 hover:bg-teal-950">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] w-full">
              <Suspense fallback={<div className="h-[400px] w-full bg-dark-200 rounded-lg animate-pulse"></div>}>
                <HeroAnimation />
              </Suspense>
            </div>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Link href="#features" className="text-gray-400 hover:text-white">
              <ChevronDown className="h-8 w-8" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-dark-300">
        <div className="container px-4 md:px-6">
          <StatsCounter />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-dark-400" id="features">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-teal-900/30 border border-teal-800 px-3 py-1 text-sm text-teal-400">
                Features
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Sustainable Farming Solutions
              </h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our AI-powered platform offers comprehensive tools to optimize your agricultural practices
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
            <FeatureCard
              icon={<Leaf className="h-10 w-10 text-teal-400" />}
              title="Sustainable Practices"
              description="Reduce environmental impact with AI-recommended farming techniques that conserve resources."
              color="teal"
            />
            <FeatureCard
              icon={<BarChart3 className="h-10 w-10 text-purple-400" />}
              title="Market Analysis"
              description="Get real-time market insights to maximize profitability and plan your crop selection."
              color="purple"
            />
            <FeatureCard
              icon={<Cloud className="h-10 w-10 text-blue-400" />}
              title="Weather Integration"
              description="Access precise weather forecasts and climate data to optimize planting and harvesting."
              color="blue"
            />
            <FeatureCard
              icon={<Users className="h-10 w-10 text-orange-400" />}
              title="Expert Network"
              description="Connect with agricultural experts for personalized advice and best practices."
              color="orange"
            />
            <FeatureCard
              icon={<Droplet className="h-10 w-10 text-blue-400" />}
              title="Water Management"
              description="Optimize irrigation schedules to reduce water usage while maintaining crop health."
              color="blue"
            />
            <FeatureCard
              icon={<ArrowRight className="h-10 w-10 text-orange-400" />}
              title="Carbon Footprint"
              description="Track and reduce your farm's carbon emissions with actionable recommendations."
              color="orange"
            />
          </div>
        </div>
      </section>

      {/* Agents Section */}
      <section className="py-20 bg-dark-300" id="agents">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-teal-900/30 border border-teal-800 px-3 py-1 text-sm text-teal-400">
                Multi-Agent System
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Meet Your AI Team</h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Our platform brings together specialized AI agents that work collaboratively to optimize your farming
                operations
              </p>
            </div>
          </div>
          <div className="mt-12">
            <AgentSection />
          </div>
        </div>
      </section>

      {/* Dashboard Preview */}
      <section className="py-20 bg-dark-400" id="dashboard">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-teal-900/30 border border-teal-800 px-3 py-1 text-sm text-teal-400">
                Dashboard
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Powerful Analytics Dashboard
              </h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Get a comprehensive view of your farm's performance and AI-powered recommendations
              </p>
            </div>
          </div>
          <div className="mt-12 overflow-hidden rounded-lg border border-dark-100 shadow-lg">
            <DashboardPreview />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-dark-300" id="testimonials">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <div className="inline-block rounded-lg bg-teal-900/30 border border-teal-800 px-3 py-1 text-sm text-teal-400">
                Success Stories
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Farmers Are Saying</h2>
              <p className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from farmers who have transformed their operations with our AI platform
              </p>
            </div>
          </div>
          <div className="mt-12">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-900 to-blue-900" id="contact">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center text-white">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Ready to Transform Your Farm?
              </h2>
              <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed opacity-90">
                Join thousands of farmers who are already benefiting from our AI-powered platform
              </p>
            </div>
            <div className="w-full max-w-sm space-y-2">
              <form className="flex flex-col space-y-4">
                <input
                  className="flex h-10 w-full rounded-md border border-teal-400 bg-dark-300 px-3 py-2 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-400 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  placeholder="Enter your email"
                  type="email"
                  required
                />
                <Button className="bg-white text-teal-600 hover:bg-gray-100">Get Started</Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </main>
  )
}

