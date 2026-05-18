"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Monitor, 
  Cog, 
  BarChart3, 
  Users, 
  Sparkles,
  Zap
} from "lucide-react"

interface SkillCategory {
  title: string
  icon: React.ElementType
  skills: { name: string; level: "expert" | "proficient" | "familiar" }[]
  color: string
}

const skillCategories: SkillCategory[] = [
  {
    title: "机械设计",
    icon: Monitor,
    skills: [
      { name: "SolidWorks", level: "expert" },
      { name: "CATIA", level: "proficient" },
      { name: "CAD制图", level: "expert" },
      { name: "结构设计", level: "expert" },
      { name: "传动设计", level: "proficient" },
    ],
    color: "from-blue-500 to-cyan-500"
  },
  {
    title: "加工制造",
    icon: Cog,
    skills: [
      { name: "3D打印", level: "expert" },
      { name: "CNC加工", level: "proficient" },
      { name: "钣金工艺", level: "proficient" },
      { name: "装配调试", level: "expert" },
    ],
    color: "from-purple-500 to-pink-500"
  },
  {
    title: "仿真分析",
    icon: BarChart3,
    skills: [
      { name: "运动仿真", level: "proficient" },
      { name: "有限元分析", level: "familiar" },
      { name: "Adams仿真", level: "familiar" },
    ],
    color: "from-green-500 to-emerald-500"
  },
  {
    title: "竞赛指导",
    icon: Users,
    skills: [
      { name: "FRC规则解读", level: "expert" },
      { name: "机器人策略", level: "proficient" },
      { name: "团队协作", level: "expert" },
      { name: "临场应变", level: "proficient" },
    ],
    color: "from-orange-500 to-amber-500"
  },
  {
    title: "其他兴趣",
    icon: Sparkles,
    skills: [
      { name: "AI辅助设计", level: "proficient" },
      { name: "Vibe Coding", level: "familiar" },
    ],
    color: "from-cyan-500 to-blue-500"
  }
]

function getLevelBadge(level: string) {
  switch (level) {
    case "expert":
      return <span className="text-xs text-cyan-400">● 精通</span>
    case "proficient":
      return <span className="text-xs text-blue-400">● 熟练</span>
    case "familiar":
      return <span className="text-xs text-slate-400">● 了解</span>
    default:
      return null
  }
}

export function SkillsSection() {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-cyan-500/50 text-cyan-400">
            SKILLS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">技能专长</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            理论与实践结合，持续学习新技术
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {skillCategories.map((category) => (
            <Card 
              key={category.title} 
              className="bg-slate-800/50 border-slate-700/50 card-glow"
            >
              <CardHeader className="pb-2">
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-lg bg-gradient-to-br ${category.color}`}>
                    <category.icon className="h-5 w-5 text-white" />
                  </div>
                  <CardTitle className="text-lg text-white">{category.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {category.skills.map((skill) => (
                    <div 
                      key={skill.name} 
                      className="flex items-center justify-between p-2 rounded-lg bg-slate-900/50 hover:bg-slate-900 transition-colors"
                    >
                      <span className="text-sm text-slate-300">{skill.name}</span>
                      {getLevelBadge(skill.level)}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Legend */}
        <div className="flex justify-center gap-8 mt-8">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
            <span className="text-sm text-slate-400">精通</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400"></span>
            <span className="text-sm text-slate-400">熟练</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-slate-400"></span>
            <span className="text-sm text-slate-400">了解</span>
          </div>
        </div>
      </div>
    </section>
  )
}
