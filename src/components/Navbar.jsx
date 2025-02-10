import { motion } from "framer-motion"
import { Bot, Menu } from "lucide-react"
import NavLink from "./NavLink"
import React from "react"
function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="flex items-center justify-between px-6 py-4 backdrop-blur-sm border-b border-white/10"
    >
      <a href="/" className="flex items-center space-x-2">
        <Bot className="w-8 h-8 text-purple-500" />
        <span className="text-white font-medium text-xl">ResearchAI</span>
      </a>

      <div className="hidden md:flex items-center space-x-8">
        <NavLink href="/features">Features</NavLink>
        <NavLink href="/how-it-works">How it Works</NavLink>
        <NavLink href="/examples">Examples</NavLink>
        <NavLink href="/pricing">Pricing</NavLink>
      </div>

      <div className="hidden md:flex items-center space-x-4">
        <button className="text-white hover:text-purple-400">Sign In</button>
        <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded">Get Started</button>
      </div>

      <button className="md:hidden text-white">
        <Menu className="w-6 h-6" />
      </button>
    </motion.nav>
  )
}

export default Navbar


