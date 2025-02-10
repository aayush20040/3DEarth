import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import SparklesCore from "./components/SparklesCore"
import React from "react"
function App() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <SparklesCore />
      <div className="relative z-10">
        <Navbar />
        <Hero />
      </div>
    </main>
  )
}

export default App

