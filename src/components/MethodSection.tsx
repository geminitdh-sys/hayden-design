import React from "react";
import { ArrowRight, CornerDownRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface Phase {
  number: string;
  titleEn: string;
  titleZh: string;
  descriptionEn: string;
  descriptionZh: string;
  keywordsEn: string[];
  keywordsZh: string[];
}

const phases: Phase[] = [
  {
    number: "01",
    titleEn: "Design Problem Framing",
    titleZh: "设计问题拆解",
    descriptionEn: "I break down ambiguous design requirements into concrete use scenarios, target users, core tasks, environmental constraints, and evaluation criteria to clarify the real problem the design needs to solve.",
    descriptionZh: "将模糊的设计需求拆解为具体的使用场景、目标用户、核心任务、环境限制与评价指标，明确设计真正需要解决的问题。",
    keywordsEn: ["Use Scenarios", "User Tasks", "Design Constraints", "Evaluation Criteria"],
    keywordsZh: ["使用场景", "用户任务", "设计约束", "评价指标"],
  },
  {
    number: "02",
    titleEn: "Cross-Domain Case Referencing",
    titleZh: "跨领域案例借鉴",
    descriptionEn: "I look for references from adjacent industries and mature cases, such as automotive HMI, medical devices, industrial control systems, consumer electronics, and app UI, then transfer relevant interaction logic and visual organization methods into the current project.",
    descriptionZh: "从相近行业与成熟案例中寻找参考，例如汽车 HMI、医疗设备、工业控制台、消费电子与 App UI，将可迁移的交互逻辑和视觉组织方式用于当前项目。",
    keywordsEn: ["Case Study", "Benchmarking", "Design Transfer", "Interaction Reference"],
    keywordsZh: ["案例研究", "行业对标", "设计迁移", "交互参考"],
  },
  {
    number: "03",
    titleEn: "Translating Human Factors Needs into Design Variables",
    titleZh: "人因需求转化为设计变量",
    descriptionEn: "I translate human factors needs such as visual attention, task load, operating distance, and information priority into adjustable design variables, including layout regions, component scale, visual encoding, information hierarchy, and spacing density, to guide HMI and UI iterations.",
    descriptionZh: "将视觉注意力、任务负荷、操作距离、信息优先级等人因需求，转化为布局区域、组件尺度、视觉编码、信息层级与间距密度等可调整的设计变量，用于指导 HMI 与 UI 方案迭代。",
    keywordsEn: ["Visual Attention", "Task Load", "Design Variables", "Parameter Space"],
    keywordsZh: ["视觉注意力", "任务负荷", "设计变量", "参数空间"],
  },
  {
    number: "04",
    titleEn: "System Structure & Information Hierarchy",
    titleZh: "系统结构与信息层级梳理",
    descriptionEn: "In complex HMI or UI systems, I organize module relationships, information priority, and user operation paths, ensuring that the design does not only improve local visual appearance but also supports readability, decision efficiency, and continuity of use.",
    descriptionZh: "在复杂 HMI 或 UI 系统中梳理模块关系、信息优先级与用户操作路径，避免只优化局部视觉效果，而忽略整体系统的可读性、判断效率与使用连续性。",
    keywordsEn: ["Module Relationships", "Information Hierarchy", "Operation Paths", "System Structure"],
    keywordsZh: ["模块关系", "信息层级", "操作路径", "系统结构"],
  },
  {
    number: "05",
    titleEn: "Case References & Professional Judgment",
    titleZh: "案例参考与专业判断",
    descriptionEn: "Based on mature references, I combine use context, industry standards, brand character, and aesthetic judgment to select a suitable design language for the project, rather than directly copying visual forms.",
    descriptionZh: "在参考成熟案例的基础上，结合使用场景、行业规范、品牌气质与审美判断，筛选适合当前项目的设计语言，而不是直接照搬视觉形式。",
    keywordsEn: ["Case References", "Industry Standards", "Design Language", "Aesthetic Judgment"],
    keywordsZh: ["案例参考", "行业规范", "设计语言", "审美判断"],
  },
  {
    number: "06",
    titleEn: "AI-Assisted Prototyping & Implementation",
    titleZh: "AI 辅助原型与实现",
    descriptionEn: "Using tools such as Codex, Figma, UE5, Python, and React / Vite, I turn design ideas into UI prototypes, interaction components, simulation scenes, data analysis outputs, and front-end pages more efficiently, improving the speed of iteration and implementation.",
    descriptionZh: "使用 Codex、Figma、UE5、Python 与 React / Vite 等工具，将设计思路快速转化为 UI 原型、交互组件、仿真场景、数据分析结果与前端页面，提高方案迭代和落地效率。",
    keywordsEn: ["Codex", "Figma", "UE5", "Python", "React / Vite"],
    keywordsZh: ["Codex", "Figma", "UE5", "Python", "React / Vite"],
  },
];

export default function MethodSection() {
  const { language } = useLanguage();

  const labels = {
    en: {
      badge: "Design Process Framework",
      titlePart1: "From Problem Framing",
      titlePart2: "to Design Implementation",
      titlePart3: "",
      desc: "I usually begin by breaking down design problems into specific use scenarios, user tasks, environmental constraints, and evaluation criteria. I then combine human factors research, case references, design-variable modeling, and AI-assisted tools to support iterative design development. This process is mainly applied to complex HMI, UI/UX, industrial interface, and interaction prototype design.",
      inLabel: "Input: Ambiguous Needs / Use Scenarios / User Tasks",
      strucLabel: "Analysis: Human Factors Research / Case References / Design Variables",
      midLabel: "Judgment: Information Hierarchy / Usability / Aesthetic Evaluation",
      outLabel: "Output: Interface Solutions / Interaction Prototypes / Front-End Implementation / Presentation Materials"
    },
    zh: {
      badge: "设计流程框架",
      titlePart1: "从问题拆解到",
      titlePart2: "设计实现的流程",
      titlePart3: "",
      desc: "我习惯先把设计问题拆解为具体的使用场景、用户任务、环境限制与评价指标，再结合人因研究、案例参考、设计变量建模与 AI 工具推进方案迭代。这个流程主要服务于复杂 HMI、UI/UX、工业产品界面与交互原型设计。",
      inLabel: "输入端：模糊需求 / 使用场景 / 用户任务",
      strucLabel: "分析端：人因研究 / 案例参考 / 设计变量",
      midLabel: "判断端：信息层级 / 可用性 / 审美判断",
      outLabel: "输出端：界面方案 / 交互原型 / 前端实现 / 展示物料"
    }
  };

  const t = language === "en" ? labels.en : labels.zh;

  return (
    <section id="method" className="py-24 px-6 md:px-12 lg:px-20 bg-hero-bg relative z-20 border-t border-border/25">
      {/* Background neon ambient line */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-primary/2 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Title & Methodology Abstract */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <div className="flex items-center gap-2 mb-4">
              <span className="font-mono text-xs text-primary tracking-[0.25em] font-semibold uppercase">{t.badge}</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 uppercase leading-[1.1]">
              {t.titlePart1} <br />
              <span className="text-primary font-bold">{t.titlePart2}</span>
              {t.titlePart3 && (
                <>
                  <br />
                  {t.titlePart3}
                </>
              )}
            </h2>
            
            <p className="text-muted-foreground text-sm lg:text-base font-light mb-8 leading-relaxed">
              {t.desc}
            </p>

            {/* Graphic node schema pointing down/right to express progressive transformation */}
            <div className="hidden lg:flex flex-col gap-3 font-mono text-[10px] text-muted-foreground/40 border-l border-primary/20 pl-4 py-2 mt-6">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary/40" />
                <span>{t.inLabel}</span>
              </div>
              <CornerDownRight className="w-4 h-4 ml-2 text-primary/30" />
              <div className="flex items-center gap-2 pl-4">
                <span className="w-1.5 h-1.5 rounded-full bg-white/20" />
                <span>{t.strucLabel}</span>
              </div>
              <CornerDownRight className="w-4 h-4 ml-6 text-primary/30" />
              <div className="flex items-center gap-2 text-primary/70 font-semibold pl-8">
                <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                <span>{t.midLabel}</span>
              </div>
              <CornerDownRight className="w-4 h-4 ml-10 text-primary/30" />
              <div className="flex items-center gap-2 pl-12">
                <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
                <span>{t.outLabel}</span>
              </div>
            </div>
          </div>

          {/* Right Column: 3x2 Grid of Phases */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {phases.map((phase) => {
                const keywords = language === "en" ? phase.keywordsEn : phase.keywordsZh;
                return (
                  <div
                    key={phase.number}
                    className="relative group bg-secondary/10 hover:bg-secondary/25 border-l-2 border-border hover:border-primary/60 p-6 md:p-8 transition-all duration-300 rounded-r-md flex flex-col justify-between"
                  >
                    <div>
                      {/* Index Number & Connecting Line Style */}
                      <div className="flex justify-between items-center mb-4">
                        <span className="font-mono text-sm font-bold text-primary/60 group-hover:text-primary transition-colors">
                          [ {language === "en" ? `PHASE ${phase.number}` : `阶段 ${phase.number}`} ]
                        </span>
                        
                        {/* Flow feedback symbol */}
                        <span className="text-[10px] font-mono text-muted-foreground/40 group-hover:text-primary/50 transition-colors font-medium">
                          {phase.number} / 06
                        </span>
                      </div>

                      {/* Phase Title */}
                      <h3 className="text-base md:text-lg font-bold text-white mb-3 group-hover:text-primary transition-colors duration-300">
                        {language === "en" ? phase.titleEn : phase.titleZh}
                      </h3>

                      {/* Description */}
                      <p className="text-muted-foreground text-xs md:text-sm font-light mb-6 leading-relaxed">
                        {language === "en" ? phase.descriptionEn : phase.descriptionZh}
                      </p>
                    </div>

                    {/* Keywords Tags Footer */}
                    <div className="pt-4 border-t border-white/5 flex flex-wrap gap-x-2 gap-y-1">
                      {keywords.map((kw, kwIdx) => (
                        <span key={kw} className="text-[10px] font-mono text-muted-foreground/50 flex items-center tracking-wider">
                          <span className="group-hover:text-white/75 transition-colors">{kw}</span>
                          {kwIdx < keywords.length - 1 && (
                            <span className="w-1 h-1 rounded-full bg-border/80 mx-1.5" />
                          )}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
