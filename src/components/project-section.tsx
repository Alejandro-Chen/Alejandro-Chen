"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { 
  Cpu, 
  Crosshair, 
  Settings, 
  Lightbulb, 
  Wrench,
  ChevronRight,
  Layers
} from "lucide-react"

interface Project {
  id: string
  name: string
  type: string
  description: string
  tags: string[]
  role: string
  work: string[]
  highlights: string[]
  color: string
  icon: React.ElementType
}

const projects: Project[] = [
  {
    id: "gripper",
    name: "果园自适应夹爪",
    type: "机器人末端执行器设计",
    description: "为睿抗CAIR智慧果园赛题设计的自适应抓取机构，能够识别果实位置并实现无损抓取，适用于不同尺寸和形状的水果。",
    tags: ["SolidWorks", "3D打印", "气动控制", "视觉识别"],
    role: "机械设计师",
    work: [
      "设计气动驱动的自适应夹爪机构，实现果实的柔顺抓取",
      "优化夹爪结构，降低对果实的损伤率",
      "集成视觉系统反馈，实现自动定位抓取",
      "完成从概念设计到实物制作的全流程"
    ],
    highlights: [
      "创新的双指自适应结构，可适应40-80mm直径果实",
      "气动驱动响应速度快，夹取周期<0.5s",
      "结合视觉识别，定位精度达±2mm"
    ],
    color: "from-green-500 to-emerald-600",
    icon: Cpu
  },
  {
    id: "launcher",
    name: "RM2026 英雄机器人发射机构",
    type: "高速发射与云台系统",
    description: "RoboMaster机甲大师英雄机器人的核心机构，负责弹丸的高速发射与精准打击，需要在高对抗环境下保持稳定性和精度。",
    tags: ["CATIA", "运动仿真", "电机控制", "云台设计"],
    role: "发射机构设计 + 云台设计",
    work: [
      "设计摩擦轮式高速发射机构，实现弹丸初速≥30m/s",
      "优化云台结构，确保射击精度与响应速度",
      "进行运动仿真验证机构可靠性",
      "完成机构调试与赛场维护"
    ],
    highlights: [
      "双摩擦轮结构，弹丸初速稳定在30-35m/s",
      "云台响应时间<0.3s，支持快速瞄准",
      "优化的散热结构，保证长时间对抗中的稳定性"
    ],
    color: "from-purple-500 to-indigo-600",
    icon: Crosshair
  },
  {
    id: "frc-robot",
    name: "FRC 整车设计",
    type: "FRC竞赛机器人整机构型",
    description: "FRC 2026赛季竞赛机器人的完整机械系统设计，涵盖底盘、传动、升降、末端执行器等全部机构，需要满足赛季规则的各项要求。",
    tags: ["SolidWorks", "底盘设计", "传动系统", "赛事规则"],
    role: "机械指导 / 结构设计",
    work: [
      "设计Swerve四轮全向底盘，实现灵活机动",
      "规划传动系统布局，优化重量分配",
      "设计升降机构，满足赛季任务需求",
      "协调团队完成整机构型与调试"
    ],
    highlights: [
      "Swerve驱动系统，360°全向移动能力",
      "整车重量控制在54kg规则限制内",
      "模块化设计，便于快速维护与调整"
    ],
    color: "from-red-500 to-orange-500",
    icon: Settings
  }
]

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="bg-slate-800/50 border-slate-700/50 card-glow hover:scale-[1.02] transition-all duration-300">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className={`p-3 rounded-lg bg-gradient-to-br ${project.color}`}>
            <project.icon className="h-8 w-8 text-white" />
          </div>
          <Badge variant="outline" className="border-slate-600 text-slate-400">
            {project.type}
          </Badge>
        </div>
        <CardTitle className="text-xl text-white mt-4">{project.name}</CardTitle>
        <CardDescription className="text-slate-400">
          {project.role}
        </CardDescription>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Description */}
        <p className="text-sm text-slate-300 leading-relaxed">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <Badge key={tag} variant="secondary" className="bg-slate-700/50 text-slate-300">
              {tag}
            </Badge>
          ))}
        </div>

        {/* Details Dialog */}
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline" className="w-full border-slate-600 hover:bg-slate-700">
              查看详情
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="bg-slate-900 border-slate-700 max-w-2xl max-h-[80vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center gap-3 mb-2">
                <div className={`p-2 rounded-lg bg-gradient-to-br ${project.color}`}>
                  <project.icon className="h-6 w-6 text-white" />
                </div>
                <DialogTitle className="text-2xl text-white">{project.name}</DialogTitle>
              </div>
              <DialogDescription className="text-slate-400">
                {project.role}
              </DialogDescription>
            </DialogHeader>
            
            <div className="space-y-6 mt-4">
              {/* Overview */}
              <div>
                <h4 className="text-lg font-semibold text-white flex items-center gap-2 mb-3">
                  <Layers className="h-5 w-5 text-cyan-400" />
                  项目概述
                </h4>
                <p className="text-slate-300 leading-relaxed">{project.description}</p>
              </div>

              {/* Work */}
              <div>
                <h4 className="text-lg font-semibold text-white flex items-center gap-2 mb-3">
                  <Wrench className="h-5 w-5 text-cyan-400" />
                  我的设计工作
                </h4>
                <ul className="space-y-2">
                  {project.work.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-300">
                      <span className="text-cyan-400 mt-1">▹</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Highlights */}
              <div>
                <h4 className="text-lg font-semibold text-white flex items-center gap-2 mb-3">
                  <Lightbulb className="h-5 w-5 text-yellow-400" />
                  设计亮点 / 创新点
                </h4>
                <div className="space-y-3">
                  {project.highlights.map((highlight, i) => (
                    <div key={i} className="p-3 rounded-lg bg-slate-800/50 border border-slate-700/50">
                      <p className="text-slate-300 text-sm">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tech Stack */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-3">技术栈</h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} className="bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Image Placeholder */}
              <div className="rounded-lg bg-slate-800 border-2 border-dashed border-slate-700 h-48 flex items-center justify-center">
                <div className="text-center text-slate-500">
                  <project.icon className="h-12 w-12 mx-auto mb-2 opacity-50" />
                  <p>项目图片占位符</p>
                </div>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </CardContent>
    </Card>
  )
}

export function ProjectSection() {
  return (
    <section className="py-24 bg-slate-900/50">
      <div className="container px-4 md:px-8 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 border-cyan-500/50 text-cyan-400">
            PROJECTS
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">项目经验</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            从末端执行器到整车设计，每一个项目都是一次完整的工程实践
          </p>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm">
            完整项目资料和设计文档可向本人索取
          </p>
        </div>
      </div>
    </section>
  )
}
