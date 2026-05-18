"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Target, Users, Lightbulb, Trophy } from "lucide-react"

const aboutItems = [
  {
    icon: Target,
    title: "专注领域",
    description: "机械工程背景，专注于机器人设计与竞技，拥有从概念设计到实车调试的完整能力"
  },
  {
    icon: Users,
    title: "赛事经验",
    description: "FRC/RM/睿抗多项赛事经验，具备国际赛事视野和本土实战能力"
  },
  {
    icon: Trophy,
    title: "冠军导师",
    description: "2026年作为导师带领队伍获得FRC夏威夷赛区冠军，培养新一代工程师"
  },
  {
    icon: Lightbulb,
    title: "设计理念",
    description: "以工程思维驱动设计创新，用数据验证方案，追求可靠性与性能的平衡"
  }
]

export function AboutSection() {
  return (
    <section className="py-24 bg-slate-900/50">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4 border-cyan-500/50 text-cyan-400">
              ABOUT ME
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">关于我</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full"></div>
          </div>

          {/* Content */}
          <div className="grid md:grid-cols-2 gap-6">
            {aboutItems.map((item, index) => (
              <Card key={item.title} className="bg-slate-800/50 border-slate-700/50 card-glow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-cyan-500/10 text-cyan-400">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Quote */}
          <Card className="mt-8 bg-gradient-to-r from-slate-800 to-slate-800/50 border-slate-700/50">
            <CardContent className="p-8 text-center">
              <p className="text-xl md:text-2xl text-slate-300 italic leading-relaxed">
                &ldquo;设计的价值在于实践，竞赛是最好的检验场&rdquo;
              </p>
              <p className="text-slate-500 mt-4">—— 来自无数次调试与迭代的感悟</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
