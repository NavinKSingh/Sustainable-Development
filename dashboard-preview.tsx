"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { CloudRain, Sun, Droplet, Wind, Thermometer, Calendar, Filter, Download, RefreshCw } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { useToast } from "@/components/ui/use-toast"

const DashboardPreview = () => {
  const [activeView, setActiveView] = useState("overview")
  const [timeRange, setTimeRange] = useState("month")
  const { toast } = useToast()

  const handleRefresh = () => {
    toast({
      title: "Dashboard Refreshed",
      description: "The latest data has been loaded.",
    })
  }

  const handleDownload = () => {
    toast({
      title: "Report Downloaded",
      description: "Your report has been downloaded as PDF.",
    })
  }

  const handleFilter = () => {
    toast({
      title: "Filters Applied",
      description: "The dashboard has been updated with your filter settings.",
    })
  }

  // Sample data for charts
  const cropYieldData = [
    { name: "Jan", current: 4000, previous: 2400 },
    { name: "Feb", current: 3000, previous: 1398 },
    { name: "Mar", current: 2000, previous: 9800 },
    { name: "Apr", current: 2780, previous: 3908 },
    { name: "May", current: 1890, previous: 4800 },
    { name: "Jun", current: 2390, previous: 3800 },
    { name: "Jul", current: 3490, previous: 4300 },
  ]

  const resourceUsageData = [
    { name: "Water", traditional: 65, optimized: 35 },
    { name: "Fertilizer", traditional: 59, optimized: 28 },
    { name: "Pesticides", traditional: 80, optimized: 20 },
    { name: "Energy", traditional: 55, optimized: 45 },
  ]

  const cropDistributionData = [
    { name: "Corn", value: 35 },
    { name: "Wheat", value: 25 },
    { name: "Soybeans", value: 20 },
    { name: "Vegetables", value: 15 },
    { name: "Other", value: 5 },
  ]

  const COLORS = ["#2dd4bf", "#a78bfa", "#60a5fa", "#fb923c", "#94a3b8"]

  return (
    <div className="bg-dark-400 p-6">
      <div className="flex flex-col space-y-4">
        {/* Dashboard Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h2 className="text-xl font-bold text-white">Farm Analytics Dashboard</h2>
            <p className="text-sm text-gray-400">Real-time insights and recommendations for your farm</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <Select defaultValue={timeRange} onValueChange={setTimeRange}>
              <SelectTrigger className="w-[120px] bg-dark-300 border-dark-100">
                <SelectValue placeholder="Time Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">This Quarter</SelectItem>
                <SelectItem value="year">This Year</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline" size="icon" onClick={handleFilter}>
              <Filter className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleDownload}>
              <Download className="h-4 w-4" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleRefresh}>
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Dashboard Tabs */}
        <Tabs defaultValue="overview" onValueChange={setActiveView} className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="crops">Crops</TabsTrigger>
            <TabsTrigger value="resources">Resources</TabsTrigger>
          </TabsList>

          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Sidebar */}
              <div className="md:col-span-1 space-y-4">
                <motion.div
                  className="bg-dark-300 rounded-lg p-4 border border-dark-100"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium text-white">Farm Overview</h3>
                    <Calendar className="h-4 w-4 text-gray-400" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Total Area:</span>
                      <span className="font-medium text-white">120 acres</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Active Crops:</span>
                      <span className="font-medium text-white">4</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Soil Health:</span>
                      <div className="flex items-center">
                        <span className="font-medium text-green-400 mr-1">Good</span>
                        <div className="w-2 h-2 rounded-full bg-green-400"></div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Water Usage:</span>
                      <span className="font-medium text-green-400">-15%</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-400">Carbon Footprint:</span>
                      <span className="font-medium text-green-400">-22%</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-dark-300 rounded-lg p-4 border border-dark-100"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium text-white">AI Recommendations</h3>
                    <div className="animate-pulse-slow">
                      <div className="w-2 h-2 rounded-full bg-teal-400"></div>
                    </div>
                  </div>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2 bg-teal-900/20 p-2 rounded border border-teal-800/50">
                      <div className="h-2 w-2 rounded-full bg-teal-400 mt-2"></div>
                      <span className="text-sm text-gray-300">
                        Reduce irrigation in Field 2 by 10% to optimize water usage
                      </span>
                    </li>
                    <li className="flex items-start gap-2 bg-blue-900/20 p-2 rounded border border-blue-800/50">
                      <div className="h-2 w-2 rounded-full bg-blue-400 mt-2"></div>
                      <span className="text-sm text-gray-300">
                        Apply organic fertilizer to Field 3 within the next 5 days
                      </span>
                    </li>
                    <li className="flex items-start gap-2 bg-yellow-900/20 p-2 rounded border border-yellow-800/50">
                      <div className="h-2 w-2 rounded-full bg-yellow-400 mt-2"></div>
                      <span className="text-sm text-gray-300">
                        Consider planting soybeans next season for better soil health
                      </span>
                    </li>
                    <li className="flex items-start gap-2 bg-purple-900/20 p-2 rounded border border-purple-800/50">
                      <div className="h-2 w-2 rounded-full bg-purple-400 mt-2"></div>
                      <span className="text-sm text-gray-300">
                        Implement cover crops in Field 1 to improve soil structure
                      </span>
                    </li>
                  </ul>
                </motion.div>

                <motion.div
                  className="bg-dark-300 rounded-lg p-4 border border-dark-100"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-medium text-white">Weather Forecast</h3>
                    <CloudRain className="h-4 w-4 text-blue-400" />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center bg-dark-200 p-2 rounded">
                      <span className="text-gray-300">Today</span>
                      <div className="flex items-center space-x-2">
                        <CloudRain className="h-4 w-4 text-blue-400" />
                        <span className="text-white">72°F</span>
                        <Droplet className="h-3 w-3 text-blue-400" />
                        <span className="text-xs text-gray-400">60%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center bg-dark-200 p-2 rounded">
                      <span className="text-gray-300">Tomorrow</span>
                      <div className="flex items-center space-x-2">
                        <CloudRain className="h-4 w-4 text-blue-400" />
                        <span className="text-white">68°F</span>
                        <Droplet className="h-3 w-3 text-blue-400" />
                        <span className="text-xs text-gray-400">75%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center bg-dark-200 p-2 rounded">
                      <span className="text-gray-300">Wednesday</span>
                      <div className="flex items-center space-x-2">
                        <Sun className="h-4 w-4 text-yellow-400" />
                        <span className="text-white">75°F</span>
                        <Wind className="h-3 w-3 text-gray-400" />
                        <span className="text-xs text-gray-400">5mph</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center bg-dark-200 p-2 rounded">
                      <span className="text-gray-300">Thursday</span>
                      <div className="flex items-center space-x-2">
                        <Sun className="h-4 w-4 text-yellow-400" />
                        <span className="text-white">78°F</span>
                        <Thermometer className="h-3 w-3 text-orange-400" />
                        <span className="text-xs text-gray-400">High</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Main content */}
              <div className="md:col-span-2 space-y-6">
                <motion.div
                  className="bg-dark-300 rounded-lg p-4 border border-dark-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-medium text-white mb-4">Crop Yield Comparison</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={cropYieldData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="name" stroke="#94a3b8" />
                        <YAxis stroke="#94a3b8" />
                        <Tooltip
                          contentStyle={{ backgroundColor: "#1e293b", borderColor: "#334155" }}
                          labelStyle={{ color: "#f8fafc" }}
                        />
                        <Legend />
                        <Line type="monotone" dataKey="current" stroke="#2dd4bf" name="Current Year" strokeWidth={2} />
                        <Line
                          type="monotone"
                          dataKey="previous"
                          stroke="#94a3b8"
                          name="Previous Year"
                          strokeWidth={2}
                        />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-dark-300 rounded-lg p-4 border border-dark-100"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <h3 className="text-lg font-medium text-white mb-4">Resource Usage Optimization</h3>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={resourceUsageData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                        <XAxis dataKey="name" stroke="#94a3b8" />
                        <YAxis stroke="#94a3b8" />
                        <Tooltip
                          contentStyle={{ backgroundColor: "#1e293b", borderColor: "#334155" }}
                          labelStyle={{ color: "#f8fafc" }}
                        />
                        <Legend />
                        <Bar dataKey="traditional" fill="#fb923c" name="Traditional Methods" />
                        <Bar dataKey="optimized" fill="#2dd4bf" name="AI Optimized" />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>

                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-dark-300 rounded-lg p-4 border border-dark-100">
                    <h3 className="text-lg font-medium text-white mb-4">Carbon Footprint</h3>
                    <div className="flex items-center justify-between">
                      <div className="w-20 h-20 rounded-full border-4 border-teal-500 flex items-center justify-center">
                        <span className="text-xl font-bold text-white">-25%</span>
                      </div>
                      <div className="ml-4 flex-1">
                        <p className="text-sm text-gray-300">
                          Your farm's carbon footprint has decreased by 25% since implementing our AI recommendations.
                        </p>
                        <div className="mt-2 w-full bg-dark-200 rounded-full h-2.5">
                          <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: "75%" }}></div>
                        </div>
                        <div className="flex justify-between mt-1 text-xs text-gray-400">
                          <span>Previous: 120 tons CO₂</span>
                          <span>Current: 90 tons CO₂</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-dark-300 rounded-lg p-4 border border-dark-100">
                    <h3 className="text-lg font-medium text-white mb-4">Profitability</h3>
                    <div className="flex items-center justify-between">
                      <div className="w-20 h-20 rounded-full border-4 border-teal-500 flex items-center justify-center">
                        <span className="text-xl font-bold text-white">+18%</span>
                      </div>
                      <div className="ml-4 flex-1">
                        <p className="text-sm text-gray-300">
                          Your farm's profitability has increased by 18% through optimized resource usage and
                          market-aligned crop selection.
                        </p>
                        <div className="mt-2 w-full bg-dark-200 rounded-full h-2.5">
                          <div className="bg-teal-500 h-2.5 rounded-full" style={{ width: "68%" }}></div>
                        </div>
                        <div className="flex justify-between mt-1 text-xs text-gray-400">
                          <span>Previous: $85,000</span>
                          <span>Current: $100,300</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="crops">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-1 bg-dark-300 rounded-lg p-4 border border-dark-100">
                <h3 className="text-lg font-medium text-white mb-4">Crop Distribution</h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={cropDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {cropDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip
                        contentStyle={{ backgroundColor: "#1e293b", borderColor: "#334155" }}
                        labelStyle={{ color: "#f8fafc" }}
                      />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>

              <div className="md:col-span-2 bg-dark-300 rounded-lg p-4 border border-dark-100">
                <h3 className="text-lg font-medium text-white mb-4">Crop Performance</h3>
                <div className="space-y-4">
                  {cropDistributionData.map((crop, index) => (
                    <div key={index} className="space-y-1">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-300">{crop.name}</span>
                        <span className="text-gray-300">{crop.value}%</span>
                      </div>
                      <div className="w-full bg-dark-200 rounded-full h-2.5">
                        <div
                          className="h-2.5 rounded-full"
                          style={{ width: `${crop.value * 2}%`, backgroundColor: COLORS[index % COLORS.length] }}
                        ></div>
                      </div>
                      <div className="flex justify-between text-xs text-gray-400">
                        <span>Yield: {Math.floor(crop.value * 0.8 + 20)} bu/acre</span>
                        <span>Profit: ${Math.floor(crop.value * 12 + 100)}/acre</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="resources">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-dark-300 rounded-lg p-4 border border-dark-100">
                <h3 className="text-lg font-medium text-white mb-4">Water Usage</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <Droplet className="h-5 w-5 text-blue-400 mr-2" />
                      <span className="text-gray-300">Total Usage</span>
                    </div>
                    <span className="text-white">1,250,000 gallons</span>
                  </div>
                  <div className="w-full bg-dark-200 rounded-full h-2.5">
                    <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: "65%" }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Target: 1,500,000 gallons</span>
                    <span>Savings: 250,000 gallons</span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-dark-200 p-3 rounded-lg">
                      <div className="text-xs text-gray-400">Field 1</div>
                      <div className="text-lg font-semibold text-white">450,000 gal</div>
                      <div className="text-xs text-green-400">-10% vs last month</div>
                    </div>
                    <div className="bg-dark-200 p-3 rounded-lg">
                      <div className="text-xs text-gray-400">Field 2</div>
                      <div className="text-lg font-semibold text-white">320,000 gal</div>
                      <div className="text-xs text-green-400">-15% vs last month</div>
                    </div>
                    <div className="bg-dark-200 p-3 rounded-lg">
                      <div className="text-xs text-gray-400">Field 3</div>
                      <div className="text-lg font-semibold text-white">280,000 gal</div>
                      <div className="text-xs text-red-400">+5% vs last month</div>
                    </div>
                    <div className="bg-dark-200 p-3 rounded-lg">
                      <div className="text-xs text-gray-400">Field 4</div>
                      <div className="text-lg font-semibold text-white">200,000 gal</div>
                      <div className="text-xs text-green-400">-8% vs last month</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-dark-300 rounded-lg p-4 border border-dark-100">
                <h3 className="text-lg font-medium text-white mb-4">Fertilizer Usage</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-300">Total Usage</span>
                    <span className="text-white">4,200 lbs</span>
                  </div>
                  <div className="w-full bg-dark-200 rounded-full h-2.5">
                    <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: "70%" }}></div>
                  </div>
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>Target: 6,000 lbs</span>
                    <span>Savings: 1,800 lbs</span>
                  </div>

                  <div className="mt-6">
                    <h4 className="text-sm font-medium text-white mb-2">Fertilizer Composition</h4>
                    <div className="space-y-3">
                      <div className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-300">Nitrogen (N)</span>
                          <span className="text-xs text-gray-300">45%</span>
                        </div>
                        <div className="w-full bg-dark-200 rounded-full h-1.5">
                          <div className="bg-blue-500 h-1.5 rounded-full" style={{ width: "45%" }}></div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-300">Phosphorus (P)</span>
                          <span className="text-xs text-gray-300">30%</span>
                        </div>
                        <div className="w-full bg-dark-200 rounded-full h-1.5">
                          <div className="bg-purple-500 h-1.5 rounded-full" style={{ width: "30%" }}></div>
                        </div>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-300">Potassium (K)</span>
                          <span className="text-xs text-gray-300">25%</span>
                        </div>
                        <div className="w-full bg-dark-200 rounded-full h-1.5">
                          <div className="bg-orange-500 h-1.5 rounded-full" style={{ width: "25%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

export default DashboardPreview

