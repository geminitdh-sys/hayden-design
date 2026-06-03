import React, { ComponentType } from "react";
import { Cpu, Eye, Layout, PenTool } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface Capability {
  id: string;
  number: string;
  titleEn: string;
  titleZh: string;
  descriptionEn: string;
  descriptionZh: string;
  keywordsEn: string[];
  keywordsZh: string[];
  icon: ComponentType<{ className?: string }>;
}

const capabilities: Capability[] = [
  {
    id: "cap-01",
    number: "01",
    titleEn: "Industrial Product & Hardware Form Design",
    titleZh: "工业产品与硬件形态设计",
    descriptionEn: "I focus on product function, structure, installation context, and human interaction in real-use environments, developing hardware design work from external form and structural expression to 3D modeling and rendered presentation.",
    descriptionZh: "关注产品在真实使用环境中的功能、结构、安装方式与人机操作关系，完成从外观形态、结构表达到三维建模与渲染展示的硬件设计工作。",
    keywordsEn: ["Rhino", "UE5", "Structural Expression", "CMF", "Scenario Rendering"],
    keywordsZh: ["Rhino", "UE5", "结构表达", "CMF", "场景化渲染"],
    icon: PenTool,
  },
  {
    id: "cap-02",
    number: "02",
    titleEn: "Complex HMI & Interface System Design",
    titleZh: "复杂 HMI 与界面系统设计",
    descriptionEn: "For high-information-density scenarios such as maritime navigation and industrial monitoring, I organize task flows, information hierarchy, and interface module relationships to build complex HMI design solutions guided by visual attention management.",
    descriptionZh: "面向航海驾驶、工业监控等高信息密度场景，梳理任务流程、信息层级与界面模块关系，构建基于视觉注意力管控的复杂 HMI 界面设计方案。",
    keywordsEn: ["Information Architecture", "Task Scenarios", "Interface Layout", "Conning Display", "Figma"],
    keywordsZh: ["信息架构", "任务场景", "界面布局", "Conning Display", "Figma"],
    icon: Layout,
  },
  {
    id: "cap-03",
    number: "03",
    titleEn: "Human Factors Research & Eye-Tracking Data Analysis",
    titleZh: "人因研究与眼动数据分析",
    descriptionEn: "Using Tobii Pro Lab, I conduct eye-tracking experiment design, AOI definition, and metric export, analyzing fixation duration, fixation count, and task performance across different interface layouts to quantify visual attention distribution and support design evaluation.",
    descriptionZh: "基于 Tobii Pro Lab 进行眼动实验设计、AOI 划分与指标导出，分析不同界面布局下的注视时间、注视次数与任务表现，用数据量化视觉注意力分布并支持设计评价。",
    keywordsEn: ["Tobii Pro Lab", "AOI Analysis", "Fixation Metrics", "Task Performance", "Python"],
    keywordsZh: ["Tobii Pro Lab", "AOI Analysis", "Fixation Metrics", "Task Performance", "Python"],
    icon: Eye,
  },
  {
    id: "cap-04",
    number: "04",
    titleEn: "AI-Assisted Design & Prototype Implementation",
    titleZh: "AI 辅助设计与原型实现",
    descriptionEn: "I use Codex and AI tools to support product concept breakdown, page structure planning, UI prototype generation, and front-end implementation, improving the iteration efficiency from initial ideas to presentable design outcomes.",
    descriptionZh: "使用 Codex 与 AI 工具辅助完成产品概念拆解、页面结构规划、UI 原型生成与前端页面实现，提高从想法到可展示作品的迭代效率。",
    keywordsEn: ["Codex", "Vibe Coding", "React / Vite", "Figma", "UI Prototype"],
    keywordsZh: ["Codex", "Vibe Coding", "React / Vite", "Figma", "UI Prototype"],
    icon: Cpu,
  },
];

export default function CapabilitiesSection() {
  const { language } = useLanguage();

  const labels = {
    en: {
      badge: "Capability Overview",
      title: "Core Capabilities",
      subtitle: "Centered on product form, human factors research, complex HMI interfaces, and AI-assisted prototyping, my practice combines eye-tracking analysis, 3D modeling, parametric design, and front-end implementation to support the full process from research to design iteration."
    },
    zh: {
      badge: "能力概览",
      title: "核心能力",
      subtitle: "围绕产品形态、人因研究、复杂 HMI 界面与 AI 辅助原型构建，结合眼动分析、三维建模、参数化设计与前端实现，推进从研究到设计迭代的完整流程。"
    }
  };

  const t = language === "en" ? labels.en : labels.zh;

  return (
    <section id="capabilities" className="py-24 px-6 md:px-12 lg:px-20 bg-background/95 relative z-20 border-t border-border/20">
      {/* Subtle background element */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-80 h-80 bg-primary/2 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Title + Subtitle */}
        <div className="mb-16 md:mb-20 max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-1 w-6 bg-primary/60" />
            <span className="text-primary text-xs uppercase tracking-[0.2em] font-medium font-mono">{t.badge}</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6 uppercase">
            {t.title}
          </h2>
          <p className="text-muted-foreground text-sm md:text-base lg:text-lg font-light leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        {/* 2x2 Grid of Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {capabilities.map((cap) => {
            const Icon = cap.icon;
            const keywords = language === "en" ? cap.keywordsEn : cap.keywordsZh;
            return (
              <div
                key={cap.id}
                className="group relative flex flex-col justify-between bg-transparent hover:bg-secondary/15 rounded-md p-6 md:p-8 border border-border/30 hover:border-primary/20 transition-all duration-300"
              >
                <div>
                  {/* Card Header: Number & Subtle Icon */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-xs font-mono text-primary/70 font-bold bg-primary/5 border border-primary/10 px-2 py-0.5 rounded-xs">
                      CAP &middot; {cap.number}
                    </span>
                    <Icon className="w-5 h-5 text-muted-foreground/45 group-hover:text-primary transition-colors duration-300" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg md:text-xl font-bold tracking-tight text-white mb-3 group-hover:text-primary transition-colors duration-300 uppercase">
                    {language === "en" ? cap.titleEn : cap.titleZh}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground/80 text-xs md:text-sm font-light mb-6 leading-relaxed">
                    {language === "en" ? cap.descriptionEn : cap.descriptionZh}
                  </p>
                </div>

                {/* Keywords footer for the capability card */}
                <div className="pt-4 border-t border-border/20">
                  <div className="flex flex-wrap gap-x-1.5 gap-y-1 text-[11px] font-mono text-muted-foreground/50">
                    {keywords.map((kw, idx) => (
                      <span key={kw} className="flex items-center">
                        <span className="group-hover:text-white/80 transition-colors uppercase tracking-wider text-[10px]">{kw}</span>
                        {idx < keywords.length - 1 && (
                          <span className="text-primary/30 mx-1.5">&middot;</span>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
