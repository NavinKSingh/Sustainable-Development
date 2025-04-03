"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { User, CloudRain, BarChart2, ArrowRight, Check, AlertCircle, Zap } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

const AgentSection = () => {
  const [activeTab, setActiveTab] = useState("farmer")
  const { toast } = useToast()

  const handleActivate = (agentType: string) => {
    toast({
      title: `${agentType} Agent Activated`,
      description: "The agent is now analyzing your farm data and will provide recommendations shortly.",
    })
  }

  const agents = [
    {
      id: "farmer",
      title: "Farmer Advisor",
      icon: <User className="h-8 w-8 text-teal-400" />,
      description:
        "Provides actionable insights by analyzing input from the farmer about land, crop preferences, and financial goals.",
      features: [
        "Personalized crop recommendations",
        "Resource optimization strategies",
        "Sustainable farming practices",
        "Financial planning assistance",
      ],
      color: "teal",
      status: "Active",
      statusColor: "text-green-400",
      metrics: [
        { label: "Accuracy", value: "94%", trend: "up" },
        { label: "Recommendations", value: "128", trend: "up" },
        { label: "Response Time", value: "1.2s", trend: "down" },
      ],
    },
    {
      id: "weather",
      title: "Weather Station",
      icon: <CloudRain className="h-8 w-8 text-blue-400" />,
      description:
        "Analyzes historical and forecast weather data to optimize planting, irrigation, and harvesting schedules.",
      features: [
        "Precise weather forecasting",
        "Climate trend analysis",
        "Irrigation scheduling",
        "Frost and extreme weather alerts",
      ],
      color: "blue",
      status: "Active",
      statusColor: "text-green-400",
      metrics: [
        { label: "Accuracy", value: "91%", trend: "up" },
        { label: "Data Points", value: "1.2M", trend: "up" },
        { label: "Alerts", value: "12", trend: "neutral" },
      ],
    },
    {
      id: "market",
      title: "Market Researcher",
      icon: <BarChart2 className="h-8 w-8 text-purple-400" />,
      description:
        "Analyzes regional market trends, crop pricing, and demand forecasts to suggest the most profitable crops to plant.",
      features: [
        "Real-time market price tracking",
        "Demand forecasting",
        "Supply chain optimization",
        "Export opportunity identification",
      ],
      color: "purple",
      status: "Active",
      statusColor: "text-green-400",
      metrics: [
        { label: "Accuracy", value: "89%", trend: "up" },
        { label: "Markets Tracked", value: "47", trend: "up" },
        { label: "Price Alerts", value: "8", trend: "up" },
      ],
    },
  ]

  const renderTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <ArrowRight className="h-3 w-3 text-green-400 transform rotate-45" />
      case "down":
        return <ArrowRight className="h-3 w-3 text-red-400 transform rotate-135" />
      default:
        return <ArrowRight className="h-3 w-3 text-gray-400 transform rotate-90" />
    }
  }

  return (
    <div className="w-full">
      <Tabs defaultValue="farmer" onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3 mb-8">
          {agents.map((agent) => (
            <TabsTrigger key={agent.id} value={agent.id} className="text-sm md:text-base">
              {agent.title}
            </TabsTrigger>
          ))}
        </TabsList>

        {agents.map((agent) => (
          <TabsContent key={agent.id} value={agent.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="grid gap-6 md:grid-cols-3"
            >
              <Card className={`border-${agent.color}-800 bg-dark-300`}>
                <CardHeader className={`bg-${agent.color}-900/20 border-b border-${agent.color}-800`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`rounded-full bg-${agent.color}-900/30 border border-${agent.color}-800 p-3`}>
                        {agent.icon}
                      </div>
                      <div>
                        <CardTitle>{agent.title}</CardTitle>
                        <div className="flex items-center mt-1">
                          <span className={`text-xs ${agent.statusColor} flex items-center`}>
                            <Check className="h-3 w-3 mr-1" /> {agent.status}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button
                      size="sm"
                      className={`bg-${agent.color}-600 hover:bg-${agent.color}-700`}
                      onClick={() => handleActivate(agent.title)}
                    >
                      <Zap className="h-4 w-4 mr-1" /> Activate
                    </Button>
                  </div>
                </CardHeader>
                <CardContent className="pt-6">
                  <CardDescription className="mb-4">{agent.description}</CardDescription>
                  <div className="space-y-4">
                    <div className="grid grid-cols-3 gap-2">
                      {agent.metrics.map((metric, index) => (
                        <div key={index} className="bg-dark-400 rounded-lg p-3 text-center">
                          <div className="text-xs text-gray-400">{metric.label}</div>
                          <div className="text-lg font-semibold text-white mt-1">{metric.value}</div>
                          <div className="flex justify-center mt-1">{renderTrendIcon(metric.trend)}</div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-dark-400 rounded-lg p-4">
                      <h4 className="text-sm font-medium text-white mb-2">Recent Activity</h4>
                      <ul className="space-y-2 text-xs text-gray-400">
                        <li className="flex items-start gap-2">
                          <Check className="h-3 w-3 text-green-400 mt-1" />
                          <span>Analyzed soil moisture data from Field 3</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <Check className="h-3 w-3 text-green-400 mt-1" />
                          <span>Generated crop rotation recommendation</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <AlertCircle className="h-3 w-3 text-orange-400 mt-1" />
                          <span>Detected potential pest risk in Field 2</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className={`border-${agent.color}-800 bg-dark-300 md:col-span-2`}>
                <CardHeader className={`bg-${agent.color}-900/20 border-b border-${agent.color}-800`}>
                  <CardTitle>Key Features</CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="grid gap-4 md:grid-cols-2">
                    <div>
                      <h4 className="text-sm font-medium text-white mb-3">Capabilities</h4>
                      <ul className="space-y-2">
                        {agent.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className={`h-2 w-2 rounded-full bg-${agent.color}-500`}></div>
                            <span className="text-gray-300">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-6">
                        <h4 className="text-sm font-medium text-white mb-3">Integration</h4>
                        <div className="flex flex-wrap gap-2">
                          <span className="inline-flex items-center rounded-full bg-dark-200 px-2.5 py-0.5 text-xs text-gray-300">
                            Weather API
                          </span>
                          <span className="inline-flex items-center rounded-full bg-dark-200 px-2.5 py-0.5 text-xs text-gray-300">
                            Soil Sensors
                          </span>
                          <span className="inline-flex items-center rounded-full bg-dark-200 px-2.5 py-0.5 text-xs text-gray-300">
                            Market Data
                          </span>
                          <span className="inline-flex items-center rounded-full bg-dark-200 px-2.5 py-0.5 text-xs text-gray-300">
                            Drone Imagery
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className={`bg-${agent.color}-900/10 rounded-lg p-4 border border-${agent.color}-800/50`}>
                      <h4 className="text-sm font-medium text-white mb-3">How It Works</h4>
                      <p className="text-gray-400 text-sm mb-4">
                        Our {agent.title.toLowerCase()} AI agent collects and analyzes data from multiple sources, using
                        advanced machine learning algorithms to provide personalized recommendations that optimize your
                        farming operations and increase sustainability.
                      </p>

                      <div className="space-y-3">
                        <div className="relative pt-1">
                          <div className="flex items-center justify-between mb-1">
                            <div className="text-xs text-gray-400">Data Collection</div>
                            <div className="text-xs text-gray-400">100%</div>
                          </div>
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-dark-200">
                            <div className={`w-full bg-${agent.color}-500`}></div>
                          </div>
                        </div>
                        <div className="relative pt-1">
                          <div className="flex items-center justify-between mb-1">
                            <div className="text-xs text-gray-400">Analysis</div>
                            <div className="text-xs text-gray-400">85%</div>
                          </div>
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-dark-200">
                            <div className={`w-[85%] bg-${agent.color}-500`}></div>
                          </div>
                        </div>
                        <div className="relative pt-1">
                          <div className="flex items-center justify-between mb-1">
                            <div className="text-xs text-gray-400">Recommendation</div>
                            <div className="text-xs text-gray-400">92%</div>
                          </div>
                          <div className="overflow-hidden h-2 text-xs flex rounded bg-dark-200">
                            <div className={`w-[92%] bg-${agent.color}-500`}></div>
                          </div>
                        </div>
                      </div>

                      <div className="mt-4">
                        <Button
                          variant="outline"
                          className={`w-full border-${agent.color}-600 text-${agent.color}-400 hover:bg-${agent.color}-950`}
                        >
                          View Detailed Report
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

export default AgentSection

