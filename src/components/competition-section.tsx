"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Medal, Users, Calendar, MapPin } from "lucide-react"

interface Competition {
  id: string
  name: string
  shortName: string
  year: string
  location: string
  award: string
  awardLevel: "champion" | "gold" | "silver" | "bronze"
  role: string
  contribution: string
  stats: {
    label: string
    value: string
  }[]
  logo: string
  color: string
}

const competitions: Competition[] = [
  {
    id: "frc-2026",
    name: "FIRST Robotics Competition",
    shortName: "FRC",
    year: "2026",
    location: "夏威夷赛区",
    award: "冠军",
    awardLevel: "champion",
    role: "导师 / 机械指导",
    contribution: "负责整车机械结构设计、传动系统选型与调试，带领队伍首次参赛即获分区冠军",
    stats: [
      { label: "分区排名", value: "#1" },
      { label: "参赛队伍", value: "48+" },
      { label: "奖项", value: "Champion" },
    ],
    logo: "FRC",
    color: "from-red-500 to-orange-500"
  },
  {
    id: "cair-2025",
    name: "睿抗机器人竞赛 CAIR 工程竞技赛道",
    shortName: "睿抗 CAIR",
    year: "2025",
    location: "全国赛",
    award: "国赛三等奖",
    awardLevel: "silver",
    role: "机械设计师",
    contribution: "设计果园自适应抓取机构，实现水果的智能识别与无损抓取，完成从方案到实物的全流程",
    stats: [
      { label: "参赛队伍", value: "200+" },
      { label: "赛题", value: "智慧果园" },
      { label: "奖项", value: "三等奖" },
    ],
    logo: "CAIR",
    color: "from-blue-500 to-cyan-500"
  },
  {
    id: "rm-2026",
    name: "RoboMaster 机甲大师 RMMUL",
    shortName: "RM 3V3",
    year: "2026",
    location: "非甲级战队",
    award: "三等奖",
    awardLevel: "bronze",
    role: "机械设计师 / 发射机构设计",
    contribution: "负责英雄机器人发射机构与云台系统的设计开发，完成弹丸高速发射与精准打击机构",
    stats: [
      { label: "赛区", value: "RMMUL" },
      { label: "赛事级别", value: "非甲级" },
      { label: "奖项", value: "三等奖" },
    ],
    logo: "RM",
    color: "from-purple-500 to-pink-500"
  }
]

function getAwardBadge(awardLevel: string) {
  switch (awardLevel) {
    case "champion":
      return <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500 text-black border-0">🏆 冠军</Badge>
    case "gold":
      return <Badge className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white border-0">🥇 一等奖</Badge>
    case "silver":
      return <Badge className="bg-gradient-to-r from-gray-300 to-gray-500 text-white border-0">🥈 二等奖</Badge>
    case "bronze":
      return <Badge className="bg-gradient-to-r from-amber-700 to-amber-900 text-white border-0">🥉 三等奖</Badge>
    default:
      return <Badge variant="outline">参与</Badge>
  }
}

export function CompetitionSection() {
  return (
    <section className="py-24">
      <div className="container px-4 md:px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-cyan-500/50 text-cyan-400">
            COMPETITIONS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">比赛成果</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            从国际赛场到国内赛场，每一场比赛都是对设计能力的检验
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Competition Cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {competitions.map((comp) => (
            <Card 
              key={comp.id} 
              className="bg-slate-800/50 border-slate-700/50 overflow-hidden card-glow hover:scale-[1.02] transition-transform duration-300"
            >
              {/* Card Header with Logo */}
              <div className={`h-32 bg-gradient-to-br ${comp.color} flex items-center justify-center relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="text-center relative z-10">
                  <div className="text-4xl font-black text-white/90 tracking-wider">{comp.logo}</div>
                  <div className="text-sm text-white/70 mt-1">{comp.year}</div>
                </div>
                <div className="absolute top-4 right-4">
                  {getAwardBadge(comp.awardLevel)}
                </div>
              </div>

              <CardHeader className="pb-2">
                <CardTitle className="text-xl text-white flex items-center gap-2">
                  <Trophy className="h-5 w-5 text-cyan-400" />
                  {comp.shortName}
                </CardTitle>
                <div className="flex items-center gap-4 text-sm text-slate-400">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3.5 w-3.5" />
                    {comp.year}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {comp.location}
                  </span>
                </div>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Role */}
                <div className="flex items-center gap-2">
                  <Medal className="h-4 w-4 text-cyan-400" />
                  <span className="text-sm text-slate-300">{comp.role}</span>
                </div>

                {/* Contribution */}
                <p className="text-sm text-slate-400 leading-relaxed">
                  {comp.contribution}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-2 pt-2">
                  {comp.stats.map((stat) => (
                    <div key={stat.label} className="text-center p-2 rounded-lg bg-slate-900/50">
                      <div className="text-lg font-bold gradient-text">{stat.value}</div>
                      <div className="text-xs text-slate-500">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm">
            <Users className="inline h-4 w-4 mr-1" />
            累计参与 3+ 项国内外机器人竞赛，涵盖 FRC、RoboMaster、睿抗等主流赛事
          </p>
        </div>
      </div>
    </section>
  )
}
