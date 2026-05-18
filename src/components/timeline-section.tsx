"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  GraduationCap, 
  Trophy, 
  Briefcase,
  Calendar,
  MapPin
} from "lucide-react"

interface TimelineItem {
  year: string
  title: string
  subtitle?: string
  location?: string
  description: string
  type: "education" | "competition" | "work"
  icon: React.ElementType
}

const timelineItems: TimelineItem[] = [
  {
    year: "2026",
    title: "FRC 导师",
    subtitle: "夏威夷赛区冠军导师",
    location: "美国·夏威夷",
    description: "作为导师带领队伍参加FRC 2026赛季，获得夏威夷赛区冠军。负责机械设计指导、团队管理和临场策略制定。",
    type: "work",
    icon: Briefcase
  },
  {
    year: "2026",
    title: "RoboMaster 参赛",
    subtitle: "RMMUL 非甲级战队 3V3对抗赛",
    location: "中国",
    description: "作为机械设计师参与RoboMaster机甲大师RMMUL联赛，获得非甲级战队3V3对抗赛三等奖。",
    type: "competition",
    icon: Trophy
  },
  {
    year: "2025-2026",
    title: "睿抗 CAIR 参赛",
    subtitle: "工程竞技赛道 智慧果园",
    location: "中国",
    description: "参加睿抗机器人竞赛CAIR工程竞技赛道，担任机械设计师，设计自适应夹爪机构，获得国赛三等奖。",
    type: "competition",
    icon: Trophy
  },
  {
    year: "2024",
    title: "机械工程学习",
    subtitle: "专业基础积累",
    location: "中国",
    description: "系统学习机械设计、制造工艺、仿真分析等专业课程，打下扎实的理论基础。",
    type: "education",
    icon: GraduationCap
  },
  {
    year: "早期",
    title: "机器人兴趣启蒙",
    subtitle: "初识机械与编程",
    location: "",
    description: "从拼装玩具到简单机器人设计，开始了对机械工程的探索之旅。",
    type: "education",
    icon: GraduationCap
  }
]

function getTypeColor(type: string) {
  switch (type) {
    case "education":
      return "from-blue-500 to-cyan-500"
    case "competition":
      return "from-purple-500 to-pink-500"
    case "work":
      return "from-amber-500 to-orange-500"
    default:
      return "from-slate-500 to-slate-600"
  }
}

function getTypeLabel(type: string) {
  switch (type) {
    case "education":
      return "学习经历"
    case "competition":
      return "竞赛经历"
    case "work":
      return "工作经历"
    default:
      return ""
  }
}

export function TimelineSection() {
  return (
    <section className="py-24 bg-slate-900/50">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-cyan-500/50 text-cyan-400">
            TIMELINE
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">经历时间线</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            从兴趣启蒙到专业竞赛，每一步都是成长
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-slate-700 transform md:-translate-x-1/2"></div>

            {/* Timeline Items */}
            <div className="space-y-8">
              {timelineItems.map((item, index) => (
                <div 
                  key={item.title + index}
                  className={`relative flex items-start gap-6 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute left-8 md:left-1/2 w-4 h-4 rounded-full bg-gradient-to-br ${getTypeColor(item.type)} transform -translate-x-1/2 z-10 shadow-lg shadow-cyan-500/30`}></div>

                  {/* Content Card */}
                  <div className={`ml-16 md:ml-0 md:w-[calc(50%-3rem)] ${
                    index % 2 === 0 ? "md:text-right md:pr-8" : "md:text-left md:pl-8"
                  }`}>
                    <Card className="bg-slate-800/50 border-slate-700/50 card-glow hover:scale-[1.02] transition-transform">
                      <CardContent className="p-6">
                        {/* Year Badge */}
                        <div className="flex items-center gap-2 mb-3">
                          <Badge 
                            className={`bg-gradient-to-r ${getTypeColor(item.type)} text-white border-0`}
                          >
                            <Calendar className="w-3 h-3 mr-1" />
                            {item.year}
                          </Badge>
                          <Badge variant="outline" className="border-slate-600 text-slate-400">
                            {getTypeLabel(item.type)}
                          </Badge>
                        </div>

                        {/* Icon and Title */}
                        <div className={`flex items-center gap-3 mb-2 ${
                          index % 2 === 0 ? "md:justify-end" : ""
                        }`}>
                          <div className={`p-2 rounded-lg bg-gradient-to-br ${getTypeColor(item.type)}`}>
                            <item.icon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                            {item.subtitle && (
                              <p className="text-sm text-cyan-400">{item.subtitle}</p>
                            )}
                          </div>
                        </div>

                        {/* Location */}
                        {item.location && (
                          <div className={`flex items-center gap-1 text-sm text-slate-500 mb-3 ${
                            index % 2 === 0 ? "md:justify-end" : ""
                          }`}>
                            <MapPin className="w-3 h-3" />
                            {item.location}
                          </div>
                        )}

                        {/* Description */}
                        <p className="text-sm text-slate-400 leading-relaxed">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
