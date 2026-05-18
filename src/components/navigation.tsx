"use client"

import { useState, useEffect } from "react"

export function Navigation() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      scrolled ? "bg-slate-950/90 backdrop-blur-md border-b border-slate-800/50" : "bg-transparent"
    }`}>
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-xl font-bold gradient-text">Chen Qi</a>
          <div className="hidden md:flex items-center gap-8">
            <a href="#about" className="text-slate-400 hover:text-white transition-colors">关于</a>
            <a href="#competitions" className="text-slate-400 hover:text-white transition-colors">比赛</a>
            <a href="#projects" className="text-slate-400 hover:text-white transition-colors">项目</a>
            <a href="#skills" className="text-slate-400 hover:text-white transition-colors">技能</a>
            <a href="#timeline" className="text-slate-400 hover:text-white transition-colors">时间线</a>
          </div>
          <div className="flex items-center gap-2">
            <button 
              onClick={() => document.getElementById('ai-chat')?.scrollIntoView({ behavior: 'smooth' })}
              className="md:hidden p-2 text-slate-400 hover:text-white"
            >
              AI
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
