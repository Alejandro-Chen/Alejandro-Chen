import type { Metadata } from "next"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CompetitionSection } from "@/components/competition-section"
import { ProjectSection } from "@/components/project-section"
import { SkillsSection } from "@/components/skills-section"
import { TimelineSection } from "@/components/timeline-section"
import { AIChatAssistant } from "@/components/ai-chat-assistant"

export const metadata: Metadata = {
  title: "陈淇 | 机械工程师 · 机器人竞赛导师",
  description: "专注机器人设计与竞技，2026 FRC夏威夷赛区冠军导师。拥有FRC/RM/睿抗多项赛事经验，具备从概念设计到实车调试的完整能力。",
  keywords: ["机械工程师", "机器人", "FRC", "RoboMaster", "睿抗", "SolidWorks", "机械设计"],
  authors: [{ name: "陈淇" }],
  openGraph: {
    title: "陈淇 | 机械工程师 · 机器人竞赛导师",
    description: "专注机器人设计与竞技，用实践验证设计",
    type: "website",
  },
}

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Navigation */}
      <Navigation />

      {/* Hero Section */}
      <HeroSection />

      {/* About Section */}
      <div id="about">
        <AboutSection />
      </div>

      {/* Competition Section */}
      <div id="competitions">
        <CompetitionSection />
      </div>

      {/* Project Section */}
      <div id="projects">
        <ProjectSection />
      </div>

      {/* Skills Section */}
      <div id="skills">
        <SkillsSection />
      </div>

      {/* Timeline Section */}
      <div id="timeline">
        <TimelineSection />
      </div>

      {/* Footer */}
      <footer className="py-12 bg-slate-950 border-t border-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <p className="text-slate-400 mb-2">陈淇 | 机械工程师 · 机器人竞赛导师</p>
            <p className="text-slate-500 text-sm">
              专注机器人设计与竞技，用实践验证设计
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
                简历下载
              </a>
              <span className="text-slate-700">|</span>
              <a href="#" className="text-slate-500 hover:text-cyan-400 transition-colors">
                联系我
              </a>
            </div>
            <p className="text-slate-600 text-xs mt-8">
              © 2026 Chen Qi. All rights reserved.
            </p>
          </div>
        </div>
      </footer>

      {/* AI Chat Assistant */}
      <AIChatAssistant />
    </main>
  )
}
