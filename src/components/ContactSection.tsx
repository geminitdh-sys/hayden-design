import React, { useState } from "react";
import { Mail, MapPin, Target, Send, Download, Copy, Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ContactSection() {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const emailAddresses = ["geminitdh@gmail.com", "gemini_tdh@163.com"];
  const primaryEmail = emailAddresses[0];

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(emailAddresses.join("\n"));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      // fallback
    }
  };

  const labels = {
    en: {
      badge: "Let’s Connect and Collaborate",
      title: "I’m looking forward to bringing engineering thinking, human factors research, and interface design into real-world projects.",
      desc: "My interests include industrial equipment, intelligent cockpit systems, maritime HMI, complex information interfaces, and AI-assisted prototyping. I’m open to internship opportunities, full-time roles, portfolio discussions, and interdisciplinary design collaborations.",
      contactMe: "Contact Me",
      downloadResume: "Download Resume",
      registry: "Contact Information",
      emailLabel: "Contact Email",
      geoLabel: "Resident Areas",
      geoValue: "Qingdao / Zhaoqing",
      scopeLabel: "Core Cooperation Scope",
      scopeItems: ["Product Design", "HMI", "UI/UX"],
      copiedText: "Copied",
      copyText: "Copy",
      footerDesc: "Industrial Design · HMI · UI/UX · AI-assisted Workflow",
      navItems: [
        { name: "Projects", href: "#projects" },
        { name: "Research", href: "#capabilities" },
        { name: "Method", href: "#method" },
        { name: "About", href: "#about" },
        { name: "Contact", href: "#contact" }
      ],
      rights: "All rights reserved."
    },
    zh: {
      badge: "随时联系并共同合作",
      title: "期待把工程背景、人因研究与界面设计能力带入真实项目中。",
      desc: "我关注工业装备、智能座舱、Maritime HMI、复杂信息界面与 AI 辅助原型设计。无论是实习、全职岗位、作品集交流，还是跨学科设计合作，都欢迎联系我。",
      contactMe: "联络我本人",
      downloadResume: "获取简历 PDF",
      registry: "联络信息",
      emailLabel: "项目合作邮箱",
      copiedText: "已复制",
      copyText: "一键复制",
      geoLabel: "常驻区域",
      geoValue: "青岛 / 肇庆",
      scopeLabel: "核心合作范畴",
      scopeItems: ["产品设计", "HMI", "UI/UX"],
      footerDesc: "工业造型设计 · 人机界面系统 (HMI) · UI/UX交互设计 · AI智驱工作流",
      navItems: [
        { name: "精选项目", href: "#projects" },
        { name: "研究能力", href: "#capabilities" },
        { name: "设计方法", href: "#method" },
        { name: "关于作者", href: "#about" },
        { name: "快速联络", href: "#contact" }
      ],
      rights: "版权所有。"
    }
  };

  const t = language === "en" ? labels.en : labels.zh;

  return (
    <section id="contact" className="relative bg-hero-bg z-20 border-t border-border/20">
      {/* Background radial highlight */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[350px] bg-primary/2.5 blur-[130px] rounded-full pointer-events-none" />

      {/* Main CTA Container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-20 pt-24 pb-16">
        
        {/* Upper Grid Layout: Left Title & Description, Right Info Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-20">
          
          {/* Left Column: Vision Statement & Action Buttons */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-4 h-px bg-primary" />
                <span className="text-primary text-xs uppercase tracking-[0.25em] font-mono font-bold">{t.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5.5xl font-bold tracking-tight text-white uppercase leading-[1.1] max-w-2xl font-sora">
                {t.title}
              </h2>
            </div>

            <p className="text-muted-foreground text-sm md:text-base font-light leading-relaxed max-w-xl">
              {t.desc}
            </p>

            {/* Interactive Actions */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href={`mailto:${primaryEmail}`}
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-primary-foreground text-xs md:text-sm font-mono uppercase tracking-widest px-6 py-3.5 rounded-lg transition-all font-semibold cursor-pointer group"
              >
                <Send className="w-4 h-4 text-primary-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                <span>{t.contactMe}</span>
              </a>
              
              <a
                href="/resume-hayden.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-secondary/15 hover:bg-secondary/35 border border-border/60 hover:border-white/20 text-white text-xs md:text-sm font-mono uppercase tracking-widest px-6 py-3.5 rounded-lg transition-all font-semibold cursor-pointer text-center"
              >
                <Download className="w-4 h-4 text-muted-foreground" />
                <span>{language === "en" ? "Download Resume" : "下载简历"}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Key Connection Info Card (Technical layout) */}
          <div className="lg:col-span-5">
            <div className="bg-secondary/10 border border-border/20 rounded-xl p-6 md:p-8 space-y-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/2 blur-2xl rounded-full" />
              <div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              
              <h3 className="font-mono text-xs text-primary/70 uppercase tracking-widest font-bold">
                [ {t.registry} ]
              </h3>

              {/* Data Items */}
              <div className="space-y-5">
                
                {/* Connection: Email */}
                <div className="space-y-1.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground/60 uppercase">
                    <Mail className="w-3.5 h-3.5 text-primary/65" />
                    <span>{t.emailLabel}</span>
                  </div>
                  <div className="flex items-center justify-between gap-3 bg-black/30 border border-border/15 rounded-lg px-4 py-2.5 font-mono text-xs sm:text-sm group">
                    <span className="text-white select-all break-all leading-relaxed">
                      {emailAddresses.map((email) => (
                        <span key={email} className="block">{email}</span>
                      ))}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopyEmail}
                      className="p-1 px-2 rounded hover:bg-secondary/30 text-muted-foreground hover:text-white transition-all cursor-pointer flex items-center gap-1.5"
                      title="Copy email to clipboard"
                    >
                      {copied ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-primary" />
                          <span className="text-[10px] text-primary uppercase font-bold">{t.copiedText}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="text-[10px] text-muted-foreground/50 uppercase font-bold group-hover:text-muted-foreground">{t.copyText}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Connection: Location */}
                <div className="flex items-start gap-3 pt-2">
                  <MapPin className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">{t.geoLabel}</div>
                    <div className="text-white text-xs sm:text-sm font-semibold">{t.geoValue}</div>
                  </div>
                </div>

                {/* Connection: Focus areas */}
                <div className="flex items-start gap-3 pt-1">
                  <Target className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <div className="space-y-0.5">
                    <div className="text-[10px] font-mono text-muted-foreground/60 uppercase tracking-wider">{t.scopeLabel}</div>
                    <div className="text-white text-xs sm:text-sm font-semibold flex flex-wrap gap-x-2">
                      {t.scopeItems.map((item, index) => (
                        <React.Fragment key={item}>
                          <span>{item}</span>
                          {index < t.scopeItems.length - 1 && (
                            <span className="text-primary/40">&middot;</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

              </div>

              {/* Detail indicator badge */}
              <div className="font-mono text-[9px] text-muted-foreground/35 flex items-center justify-between pt-4 border-t border-border/10">
                <span>UPDATED: 2026.05</span>
                <span>STATUS: ACTIVE & OPEN</span>
              </div>
            </div>
          </div>

        </div>

        {/* ==================== FOOTER AREA ==================== */}
        <div className="border-t border-border/20 pt-12 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 pb-10">
            
            {/* Identity Group */}
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-sora font-extrabold text-lg text-white uppercase tracking-wider">
                  HAYDEN<span className="text-primary">.DESIGN</span>
                </span>
              </div>
              <p className="text-[11px] font-mono text-muted-foreground/60 tracking-wider uppercase">
                {t.footerDesc}
              </p>
            </div>

            {/* Nav Menu */}
            <nav className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-muted-foreground font-medium">
              {t.navItems.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-primary transition-colors uppercase tracking-widest text-[11px]"
                >
                  {link.name}
                </a>
              ))}
            </nav>
          </div>

          {/* Copyright Row */}
          <div className="flex flex-col sm:flex-row justify-between items-center pt-6 border-t border-border/10 text-[11px] font-mono text-muted-foreground/45 gap-4">
            <div>
              &copy; 2026 Hayden Design. {t.rights}
            </div>
            <div className="flex gap-4">
              <span className="hover:text-white transition-colors cursor-default">PORTFOLIO V1.0</span>
              <span>&middot;</span>
              <span className="hover:text-white transition-colors cursor-default">QINGDAO / ZHAOQING</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
