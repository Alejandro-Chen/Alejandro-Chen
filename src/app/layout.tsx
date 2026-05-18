import type { Metadata } from "next"
import "./globals.css"

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="zh-CN" className="dark">
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
