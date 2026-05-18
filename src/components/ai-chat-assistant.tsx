"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { 
  Send, 
  Bot, 
  User, 
  X, 
  MessageCircle,
  Sparkles,
  Loader2
} from "lucide-react"

interface Message {
  id: string
  role: "user" | "assistant"
  content: string
  timestamp: Date
}

const SYSTEM_PROMPT = `你是陈淇的数字代表，你是一名机械工程师，有FRC/RM/睿抗比赛经验。

请用第一人称回答问题。你可以介绍：
- 我的比赛经历和获奖情况
- 我的项目设计思路和亮点
- 我的技能特长
- 我对机械设计的理解

对话风格：专业但不生硬，能聊技术细节，也可以分享一些比赛中的趣事。

关于陈淇的基本信息：
- 2026 FRC夏威夷赛区冠军导师
- 睿抗CAIR工程竞技赛道国赛三等奖
- Robomaster RMMUL非甲级战队3V3对抗赛三等奖
- 擅长：SolidWorks、CATIA、机械结构设计、传动设计、3D打印、CNC加工
- 设计理念：设计的价值在于实践，竞赛是最好的检验场

请用简洁、有条理的方式回答，适当使用emoji增加亲和力。`

const WELCOME_MESSAGE = `你好！我是陈淇的AI助手 🦾

你可以问我关于：
- 陈淇的比赛经历和获奖情况
- 他的项目设计细节和技术亮点
- 他的技能特长和工具使用
- 他对机械设计和竞赛的理解

有什么想了解的？直接问我吧！`

export function AIChatAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages])

  const handleSend = async () => {
    if (!input.trim() || isLoading) return

    const userMessage: Message = {
      id: Date.now().toString(),
      role: "user",
      content: input.trim(),
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // 使用 DeepSeek API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          messages: [
            { role: "system", content: SYSTEM_PROMPT },
            ...messages.map(m => ({ role: m.role, content: m.content })),
            { role: "user", content: input.trim() }
          ]
        })
      })

      if (!response.ok) {
        throw new Error("API request failed")
      }

      const data = await response.json()
      
      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: data.content || "抱歉，我现在无法回答这个问题。请稍后再试。",
        timestamp: new Date()
      }

      setMessages(prev => [...prev, assistantMessage])
    } catch (error) {
      // Fallback response
      const fallbackMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: "assistant",
        content: "抱歉，API暂时不可用。你可以尝试询问关于陈淇的基本信息：\n\n🏆 2026 FRC夏威ien赛区冠军导师\n🥈 睿抗CAIR国赛三等奖\n🥉 RoboMaster RMMUL三等奖\n\n请问我他的项目经验或技能特长吧！",
        timestamp: new Date()
      }
      setMessages(prev => [...prev, fallbackMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 transition-all duration-300 hover:scale-110 ${
          isOpen ? "scale-0 opacity-0" : "scale-100 opacity-100"
        }`}
        aria-label="打开AI助手"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
      </button>

      {/* Chat Window */}
      <div 
        id="ai-chat"
        className={`fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] max-w-md transition-all duration-300 ${
          isOpen 
            ? "translate-y-0 opacity-100" 
            : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <Card className="bg-slate-900 border-slate-700 shadow-2xl shadow-cyan-500/10">
          <CardHeader className="p-4 border-b border-slate-700 bg-gradient-to-r from-slate-800 to-slate-800/50">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600">
                  <Sparkles className="h-5 w-5 text-white" />
                </div>
                <div>
                  <CardTitle className="text-lg text-white">陈淇的AI助手</CardTitle>
                  <Badge variant="outline" className="border-green-500/50 text-green-400 bg-green-500/10 mt-1">
                    在线
                  </Badge>
                </div>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsOpen(false)}
                className="text-slate-400 hover:text-white hover:bg-slate-700"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="p-0">
            {/* Messages Area */}
            <ScrollArea className="h-[400px] p-4" ref={scrollRef}>
              {messages.length === 0 && (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="p-4 rounded-full bg-cyan-500/10 mb-4">
                    <Bot className="h-12 w-12 text-cyan-400" />
                  </div>
                  <p className="text-slate-300 mb-2">👋 你好！我是陈淇的数字代表</p>
                  <p className="text-slate-500 text-sm max-w-xs">
                    可以问我关于他的比赛经历、项目设计、技能特长等任何问题
                  </p>
                </div>
              )}
              
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.role === "user" ? "flex-row-reverse" : ""}`}
                  >
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.role === "user" 
                        ? "bg-blue-600" 
                        : "bg-gradient-to-r from-cyan-500 to-blue-600"
                    }`}>
                      {message.role === "user" ? (
                        <User className="h-4 w-4 text-white" />
                      ) : (
                        <Bot className="h-4 w-4 text-white" />
                      )}
                    </div>
                    <div className={`flex-1 max-w-[80%] ${message.role === "user" ? "text-right" : ""}`}>
                      <div className={`inline-block p-3 rounded-lg ${
                        message.role === "user"
                          ? "bg-blue-600 text-white rounded-tr-none"
                          : "bg-slate-800 text-slate-200 rounded-tl-none"
                      }`}>
                        <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                      </div>
                      <p className="text-xs text-slate-500 mt-1">
                        {message.timestamp.toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" })}
                      </p>
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-slate-800 p-3 rounded-lg rounded-tl-none">
                      <div className="flex items-center gap-2 text-slate-400">
                        <Loader2 className="h-4 w-4 animate-spin" />
                        <span className="text-sm">思考中...</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Input Area */}
            <div className="p-4 border-t border-slate-700 bg-slate-800/50">
              <div className="flex gap-2">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyPress}
                  placeholder="输入你的问题..."
                  className="flex-1 bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-sm text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent resize-none"
                  rows={1}
                />
                <Button 
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white border-0"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
              <p className="text-xs text-slate-500 mt-2 text-center">
                AI助手由 DeepSeek API 驱动
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
