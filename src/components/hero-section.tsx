"use client"

import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Download, Mail, MessageCircle, ChevronDown } from "lucide-react"
import { useState, useEffect } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-[128px]"></div>
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-[128px]"></div>

      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Badge */}
          <Badge variant="outline" className="px-4 py-1.5 text-sm border-cyan-500/50 text-cyan-400 bg-cyan-500/10 animate-fade-in">
            <span className="mr-2">🚀</span>
            开放求职中 | 机械工程师
          </Badge>

          {/* Main Title */}
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="text-white">陈淇</span>
              <span className="gradient-text"> Chen Qi</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-400 font-medium">
              机械工程师 / 机器人竞赛导师
            </p>
          </div>

          {/* Tagline */}
          <div className="max-w-2xl">
            <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
              专注机器人设计与竞技，用实践验证设计
            </p>
            <p className="text-base text-slate-500 mt-2">
              2026 FRC夏威夷赛区冠军导师 | FRC/RM/睿抗多赛事经验
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0 shadow-lg shadow-cyan-500/25">
              <Download className="mr-2 h-4 w-4" />
              下载简历
            </Button>
            <Button size="lg" variant="outline" className="border-slate-600 hover:bg-slate-800 hover:border-slate-500">
              <Mail className="mr-2 h-4 w-4" />
              联系我
            </Button>
            <Button size="lg" variant="ghost" className="text-cyan-400 hover:text-cyan-300 hover:bg-cyan-500/10" onClick={() => document.getElementById('ai-chat')?.scrollIntoView({ behavior: 'smooth' })}>
              <MessageCircle className="mr-2 h-4 w-4" />
              和AI助手聊聊
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12">
            {[
              { label: "竞赛奖项", value: "3+" },
              { label: "设计项目", value: "5+" },
              { label: "带队经验", value: "2年" },
              { label: "技术专长", value: "10+" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center" style={{ animationDelay: `${index * 100}ms` }}>
                <div className="text-3xl md:text-4xl font-bold gradient-text">{mounted ? stat.value : "0"}</div>
                <div className="text-sm text-slate-500 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown className="h-8 w-8 text-slate-500" />
          </div>
        </div>
      </div>
    </section>
  )
}
