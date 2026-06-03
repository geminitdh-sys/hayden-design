import React, { Suspense, useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { assetUrl } from "../lib/assetUrl";

const Spline = React.lazy(() => import("@splinetool/react-spline"));
const MOBILE_POINTER_QUERY = "(hover: none), (pointer: coarse)";

export default function HeroSection() {
  const { language } = useLanguage();
  const [isMobilePointer, setIsMobilePointer] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia(MOBILE_POINTER_QUERY);
    const updateMobilePointer = () => setIsMobilePointer(mediaQuery.matches);

    updateMobilePointer();
    mediaQuery.addEventListener("change", updateMobilePointer);

    return () => {
      mediaQuery.removeEventListener("change", updateMobilePointer);
    };
  }, []);

  const preservePageScroll = (event: React.WheelEvent<HTMLElement>) => {
    event.stopPropagation();
  };

  const content = {
    en: {
      heading: "HAYDEN",
      headingAccent: "DESIGN",
      tagline: "Industrial Design · HMI · AI-assisted Design",
      intro: "I am Hayden Tan",
      subheading: "I design human-centered products and interfaces through research, systems thinking, and visual storytelling.",
      viewProjects: "View Projects",
      downloadResume: "Download Resume",
      footerNote: "Selected works in industrial design, maritime HMI, AI-assisted UI, and product visualization."
    },
    zh: {
      heading: "Tan Dehai",
      headingAccent: "DESIGN",
      tagline: "工业设计 · 人机交互 (HMI) · AI辅助设计",
      intro: "我是谭德海",
      subheading: "关注工业产品、智能界面与人因体验之间的关系，并通过研究驱动的方式构建设计方案。",
      viewProjects: "查看相关项目",
      downloadResume: "下载设计简历",
      footerNote: "涵盖工业硬件设计、船舶人机交互(HMI)、AI辅助UI设计及高保真产品视觉化作品。"
    }
  };

  const t = language === "en" ? content.en : content.zh;

  return (
    <section
      className="relative min-h-screen flex items-end bg-hero-bg overflow-hidden"
      onWheelCapture={preservePageScroll}
    >
      <svg width="0" height="0" aria-hidden="true" focusable="false" className="absolute">
        <filter id="hero-blue-shift" colorInterpolationFilters="sRGB">
          <feColorMatrix
            type="matrix"
            values="
              1    0    0    0 0
              0    .72  0    0 0
              0    .48  1.08 0 0
              0    0    0    1 0
            "
          />
        </filter>
      </svg>

      {/* Spline 3D Background */}
      <div
        className={`absolute inset-0 w-full h-full z-0 hero-spline-background ${isMobilePointer ? "hero-spline-background-mobile pointer-events-none" : ""}`}
        style={{ filter: "hue-rotate(259deg) saturate(1.8) contrast(1.05) url(#hero-blue-shift)" }}
      >
        <Suspense fallback={<div className="absolute inset-0 bg-hero-bg animate-pulse" />}>
          <Spline
            scene="https://prod.spline.design/Slk6b8kz3LRlKiyk/scene.splinecode"
            className={`w-full h-full ${isMobilePointer ? "pointer-events-none" : ""}`}
          />
        </Suspense>
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/30 z-[1] pointer-events-none" />

      {/* Content container */}
      <div className="relative z-10 pointer-events-none w-full max-w-[90%] sm:max-w-md lg:max-w-2xl px-6 md:px-10 pb-10 md:pb-16 pt-32 select-none">
        
        {/* Heading */}
        <h1
          className="text-[clamp(3rem,8vw,6rem)] font-bold leading-[1.05] tracking-[-0.05em] text-foreground mb-1 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          {t.heading} <span className="text-primary font-bold">{t.headingAccent}</span>
        </h1>

        {/* Industrial Design · HMI · AI-assisted Design Label */}
        <p
          className="text-primary text-xs md:text-sm tracking-[0.15em] font-medium uppercase mb-3 md:mb-5 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.3s" }}
        >
          {t.tagline}
        </p>

        {/* Intro */}
        <p
          className="text-foreground/90 text-[clamp(1.125rem,2.2vw,1.75rem)] font-normal leading-relaxed mb-2 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.4s" }}
        >
          {t.intro}
        </p>

        {/* Subheading */}
        <p
          className="text-foreground/90 text-[clamp(1.125rem,2.2vw,1.75rem)] font-light leading-relaxed mb-4 md:mb-6 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.45s" }}
        >
          {t.subheading}
        </p>

        {/* Two CTA buttons */}
        <div
          className="flex flex-wrap gap-3 font-semibold mb-6 md:mb-8 opacity-0 animate-fade-up"
          style={{ animationDelay: "0.6s" }}
        >
          <a
            href="#projects"
            className="bg-primary text-primary-foreground px-6 py-3 md:px-8 md:py-4 text-sm font-bold rounded-sm cursor-pointer hover:brightness-110 active:scale-[0.97] transition-all pointer-events-auto uppercase tracking-wider shadow-[0_4px_20px_rgba(235,92,32,0.15)]"
          >
            {t.viewProjects}
          </a>
          <a
            href={assetUrl("/resume-hayden.pdf")}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-background px-6 py-3 md:px-8 md:py-4 text-sm font-bold rounded-sm cursor-pointer hover:brightness-90 active:scale-[0.97] transition-all pointer-events-auto uppercase tracking-wider text-center"
          >
            {language === "en" ? "Download Resume" : "下载简历"}
          </a>
        </div>

        {/* Trust line */}
        <p
          className="text-muted-foreground/60 text-xs md:text-sm font-light mt-4 md:mt-6 opacity-0 animate-fade-up leading-relaxed"
          style={{ animationDelay: "0.75s" }}
        >
          {t.footerNote}
        </p>
      </div>
    </section>
  );
}
