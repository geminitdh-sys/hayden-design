import React from "react";
import { User, GraduationCap, Target, Wrench, FileText, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { assetUrl } from "../lib/assetUrl";

export default function AboutSection() {
  const { language } = useLanguage();

  const labels = {
    en: {
      badge: "Profile & Academic Background",
      title: "ABOUT HAYDEN",
      tagline: "From mechatronics engineering to industrial design, I explore how technical systems interact with human perception, operation, and experience.",
      p1: "I am Hayden. My undergraduate background in mechatronics engineering trained me to understand structure, control, sensing, and system implementation. Over time, I realized that technical products should not only function correctly, but also be understandable, operable, and usable in real contexts.",
      p2: "This led me to shift toward industrial design during my graduate studies at Ocean University of China. My current focus includes maritime HMI, visual attention, human factors, and interface design for intelligent equipment. I am especially interested in how people perceive information, make decisions, and complete tasks within complex systems.",
      p3: "In my design process, I combine engineering thinking, task analysis, eye-tracking experiments, interface layout research, and tools such as UE5, Python, Figma, and Codex. I aim to translate human factors needs into concrete design variables and move projects from research analysis toward prototypes and presentable outcomes.",
      more: "Explore More About Me",
      download: "Download Design Resume",
      role: "Industrial Design Graduate Student",
      subTitle: "Industrial Design / HMI / UIUX",
      regIndex: "Academic Background Index",
      profile: "Profile",
      pName: "Name",
      pIdent: "Identity",
      edu: "Educational Background",
      edu1Title: "Bachelor of Engineering",
      edu1Desc: "Mechatronic Engineering, Chongqing Technology and Business University",
      edu2Title: "Master of Engineering",
      edu2Desc: "Industrial Design Engineering, Ocean University of China",
      focus: "Primary Focus",
      focusTags: ["Industrial Design", "HMI Design", "UI/UX Design", "Visual Attention", "Prototype Implementation"],
      tools: "Tools"
    },
    zh: {
      badge: "人物简历与学科背景",
      title: "关于谭德海",
      tagline: "从机械电子工程到工业设计，探索技术系统与人的交互关系。",
      p1: "我是谭德海，本科阶段学习机械电子工程，建立了对结构、控制、传感与系统实现的理解。后来我逐渐意识到，许多技术产品不仅需要被制造出来，也需要被人清楚地理解、稳定地操作，并在真实环境中形成良好的使用体验。",
      p2: "因此，我在硕士阶段转向工业设计工程，研究方向集中在船舶 HMI、视觉注意力、人因工程与智能装备界面设计。我的关注点从“功能如何实现”进一步延伸到“人在复杂系统中如何感知信息、做出判断并完成操作”。",
      p3: "在设计过程中，我会结合工程思维、用户任务分析、眼动实验、界面布局研究、UE5 / Python / Figma / Codex 等工具，将人因需求转化为具体的设计变量，并推动方案从研究分析走向原型与展示。",
      more: "更多关于我",
      download: "下载设计简历",
      role: "工业设计专业研究生",
      subTitle: "工业设计 / HMI / UIUX",
      regIndex: "教育背景索引",
      profile: "个人信息",
      pName: "姓名",
      pIdent: "专业身份",
      edu: "学科教育背景",
      edu1Title: "本科：工学学士",
      edu1Desc: "机械电子工程，重庆工商大学",
      edu2Title: "研究生：工学硕士",
      edu2Desc: "工业设计工程，中国海洋大学",
      focus: "研究与设计方向",
      focusTags: ["工业设计", "HMI 设计", "UI/UX 设计", "视觉注意力", "原型实现"],
      tools: "常用工具"
    }
  };

  const t = language === "en" ? labels.en : labels.zh;

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-20 bg-background relative z-20 border-t border-border/20">
      {/* Background ambient glow matching the tech aesthetic */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/3 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/2 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header section name */}
        <div className="flex items-center gap-2 mb-4">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span className="text-primary text-xs uppercase tracking-[0.2em] font-medium font-mono">{t.badge}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Story, Philosophy & Actions */}
          <div className="lg:col-span-7 space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4 uppercase">
                {t.title}
              </h2>
              <p className="text-primary text-sm md:text-base font-mono tracking-wide uppercase font-semibold mb-6">
                {t.tagline}
              </p>
            </div>

            <div className="space-y-6 text-muted-foreground text-sm md:text-base font-light leading-relaxed">
              <p>{t.p1}</p>
              <p>{t.p2}</p>
              <p>{t.p3}</p>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-wrap gap-4 pt-6">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary/10 hover:bg-primary/20 border border-primary/30 hover:border-primary/50 text-white text-xs md:text-sm font-mono uppercase tracking-widest px-6 py-3.5 rounded-lg transition-all font-semibold cursor-pointer group"
              >
                <span>{t.more}</span>
                <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
              </a>
              
              <a
                href={assetUrl("/resume-hayden.pdf")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-secondary/25 hover:bg-secondary/40 border border-border/60 hover:border-white/20 text-white/90 hover:text-white text-xs md:text-sm font-mono uppercase tracking-widest px-6 py-3.5 rounded-lg transition-all font-semibold cursor-pointer"
              >
                <FileText className="w-4 h-4 text-muted-foreground" />
                <span>{language === "en" ? "Download Resume" : "下载简历"}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Structured Information Cards & Interactive Blueprint */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Visual Profile Avatar Card */}
            <div className="relative w-full rounded-lg bg-secondary/15 hover:bg-secondary/25 border border-border/30 p-6 flex flex-col sm:flex-row items-center gap-6 overflow-hidden group transition-all duration-300">
              {/* Profile photo */}
              <div className="relative w-[6.4rem] h-[10.4rem] md:w-[7.2rem] md:h-[10.4rem] shrink-0 rounded-xl bg-black/60 border border-primary/20 group-hover:border-primary/40 flex items-center justify-center overflow-hidden transition-colors">
                <img
                  src={assetUrl("/self-photo.png")}
                  alt={language === "en" ? "Portrait of Hayden" : "谭德海头像"}
                  className="h-full w-full object-cover object-[center_18%] scale-[1.03] grayscale-[18%] contrast-105 saturate-90 transition-transform duration-500 group-hover:scale-[1.07]"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-transparent to-black/35 pointer-events-none" />
                <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:10px_10px] opacity-45 mix-blend-overlay pointer-events-none" />
                
                {/* Active Indicator Pulse Ring */}
                <span className="absolute top-2.5 right-2.5 flex h-2 w-2 animate-pulse">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary/80 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                </span>
              </div>

              {/* Text Info */}
              <div className="space-y-3 relative z-10 text-center sm:text-left">
                <div className="space-y-1">
                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    <h3 className="text-2xl font-bold tracking-tight text-white uppercase font-sora">
                      {language === "en" ? "Hayden" : "谭德海"}
                    </h3>
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  </div>
                  <p className="text-xs uppercase tracking-widest text-primary font-mono font-bold leading-relaxed">
                    {t.role}
                  </p>
                </div>
                <div className="space-y-1 text-xs text-muted-foreground font-mono leading-relaxed">
                  <div className="text-white/80">{t.subTitle}</div>
                  {language === "en" ? (
                    <div className="text-[10px] text-muted-foreground/50 uppercase tracking-widest">{t.regIndex}</div>
                  ) : null}
                </div>
              </div>

              {/* Background grid accent */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:16px_16px] pointer-events-none" />
            </div>

            {/* Profile & Info Cards */}
            <div className="space-y-4 font-mono">
              
              {/* Card 1: Profile */}
              <div className="bg-secondary/10 border border-border/20 rounded-lg p-5 hover:border-primary/20 transition-colors">
                <div className="flex items-center gap-2.5 mb-3 text-white">
                  <User className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest">{t.profile}</span>
                </div>
                <div className="space-y-2 text-xs md:text-sm text-muted-foreground pl-6.5">
                  <div className="flex justify-between items-center py-0.5 border-b border-white/5">
                    <span>{t.pName}</span>
                    <span className="text-white font-medium">{language === "en" ? "Hayden" : "谭德海"}</span>
                  </div>
                  <div className="flex justify-between items-center py-0.5 border-b border-white/5">
                    <span>{t.pIdent}</span>
                    <span className="text-white font-medium">{language === "en" ? "Industrial Design Graduate Student" : "工业设计硕士研究生"}</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Education */}
              <div className="bg-secondary/10 border border-border/20 rounded-lg p-5 hover:border-primary/20 transition-colors">
                <div className="flex items-center gap-2.5 mb-3 text-white">
                  <GraduationCap className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest">{t.edu}</span>
                </div>
                <div className="space-y-3.5 text-xs text-muted-foreground pl-6.5">
                  <div className="space-y-1">
                    <div className="text-white font-medium text-xs md:text-sm">{t.edu1Title}</div>
                    <div className="font-sans font-light text-muted-foreground text-xs">
                      {t.edu1Desc}
                    </div>
                  </div>
                  <div className="space-y-1 pt-2 border-t border-white/5">
                    <div className="text-white font-medium text-xs md:text-sm">{t.edu2Title}</div>
                    <div className="font-sans font-light text-muted-foreground text-xs">
                      {t.edu2Desc}
                    </div>
                  </div>
                </div>
              </div>

              {/* Card 3: Focus & Core Modules */}
              <div className="bg-secondary/10 border border-border/20 rounded-lg p-5 hover:border-primary/20 transition-colors">
                <div className="flex items-center gap-2.5 mb-3 text-white">
                  <Target className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest">{t.focus}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 pl-6.5">
                  {t.focusTags.map((item) => (
                    <span
                      key={item}
                      className="text-[10px] uppercase font-mono bg-primary/5 hover:bg-primary/10 border border-primary/25 text-primary tracking-wide px-2 py-0.5 rounded-sm"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Card 4: Tools Stack */}
              <div className="bg-secondary/10 border border-border/20 rounded-lg p-5 hover:border-primary/20 transition-colors">
                <div className="flex items-center gap-2.5 mb-3 text-white">
                  <Wrench className="w-4 h-4 text-primary" />
                  <span className="text-xs font-bold uppercase tracking-widest">{t.tools}</span>
                </div>
                <div className="pl-6.5">
                  <div className="flex flex-wrap gap-x-2 gap-y-1 text-xs text-muted-foreground font-mono leading-relaxed">
                    {[
                      "Figma",
                      "Rhino",
                      "3D Max",
                      "Unreal Engine",
                      "Python",
                      "Adobe Illustrator",
                      "Codex"
                    ].map((tool, idx, arr) => (
                      <span key={tool} className="flex items-center">
                        <span className="text-white hover:text-primary transition-colors">{tool}</span>
                        {idx < arr.length - 1 && <span className="text-primary/30 mx-2">&middot;</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
