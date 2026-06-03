import { Waves } from "lucide-react";
import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";
import { assetUrl } from "../lib/assetUrl";

export default function ProjectsSection() {
  const { language } = useLanguage();

  const labels = {
    en: {
      sectionBadge: "portfolio index",
      sectionTitle: "Selected Projects",
      sectionDesc:
        "Grounded in human factors and visual attention research, my work spans maritime HMI optimization, industrial equipment structure and form design, as well as AI-assisted digital product experiments.",
      methods: "Methods:",
      viewCase: "View Project",
      activeCase: "ACTIVE CASE",
    },
    zh: {
      sectionBadge: "设计目录索引",
      sectionTitle: "精选设计项目",
      sectionDesc:
        "以人因工程与视觉注意力研究为基础，作品覆盖航海 HMI 优化、工业装备结构与外观设计，以及 AI 驱动的数字产品实验。",
      methods: "工具与方法：",
      viewCase: "查看项目详情",
      activeCase: "代表案例",
    },
  };

  const t = language === "en" ? labels.en : labels.zh;
  const visibleProjects = projects.filter((project) => !project.hidden);
  const getMethods = (project) =>
    language === "en" ? project.methods : project.methodsZh ?? project.methods;
  const getMethodsLabel = (project) =>
    project.slug === "ai-assisted-portfolio"
      ? language === "en"
        ? "Tools & Methods:"
        : "工具与方法："
      : t.methods;
  const cardClassName =
    "group relative flex flex-col justify-between bg-secondary/30 rounded-lg p-6 md:p-10 border border-border/40 hover:border-primary/40 hover:bg-secondary/40 transition-all duration-500 overflow-hidden shadow-2xl";

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-20 bg-background relative z-20 border-t border-border/30">
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-primary/5 blur-3xl pointer-events-none rounded-full" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-primary/3 blur-3xl pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-16 md:mb-20 max-w-3xl">
          <div className="flex items-center gap-2 mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-primary text-xs uppercase tracking-[0.2em] font-medium font-mono">{t.sectionBadge}</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 uppercase">
            {t.sectionTitle}
          </h2>
          <p className="text-muted-foreground text-base md:text-lg lg:text-xl font-light leading-relaxed">
            {t.sectionDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {visibleProjects.map((project) => {
            const hasDetail = project.hasDetail !== false;
            const cardContent = (
              <>
              <div className="absolute inset-0 bg-radial from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

              <div>
                <div className="relative w-full h-48 md:h-64 rounded-sm bg-hero-bg overflow-hidden border border-border/30 mb-8 flex items-center justify-center">
                  {project.cover ? (
                    <img
                      src={assetUrl(project.cover)}
                      alt={language === "en" ? project.titleEn : project.titleZh}
                      className={`w-full h-full ${
                        ["conning-display", "yunchang"].includes(project.slug)
                          ? "object-contain"
                          : "object-cover"
                      } group-hover:scale-105 transition-transform duration-700`}
                    />
                  ) : null}

                  {project.visualPreset === "maritime" && !project.cover && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-85">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-background to-background group-hover:scale-110 transition-transform duration-700" />
                      <div className="w-32 h-32 rounded-full border border-dashed border-primary/20 flex items-center justify-center animate-[spin_40s_linear_infinite]" />
                      <div className="absolute w-24 h-24 rounded-full border border-primary/30 flex items-center justify-center animate-[spin_20s_linear_infinite_reverse]" />
                      <div className="absolute w-4 h-4 bg-primary/20 rounded-full animate-ping" />
                      <div className="mt-4 font-mono text-[9px] text-primary/60 tracking-widest uppercase">CONNING SIMULATOR V1</div>
                    </div>
                  )}

                  {project.visualPreset === "pet" && project.slug !== "pawmind" && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-85">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-background to-background group-hover:scale-110 transition-transform duration-700" />
                      <div className="flex items-end gap-1.5 h-16 w-40">
                        <div className="w-1 bg-primary/40 h-10 group-hover:h-12 transition-all duration-300 rounded-full" />
                        <div className="w-1 bg-primary/60 h-4 group-hover:h-8 transition-all duration-300 rounded-full" />
                        <div className="w-1 bg-primary h-14 group-hover:h-16 transition-all duration-300 rounded-full" />
                        <div className="w-1 bg-primary/80 h-8 group-hover:h-10 transition-all duration-300 rounded-full" />
                        <div className="w-1 bg-primary/30 h-16 group-hover:h-12 transition-all duration-300 rounded-full" />
                        <div className="w-1 bg-primary/50 h-6 group-hover:h-14 transition-all duration-300 rounded-full" />
                        <div className="w-1 bg-primary h-12 group-hover:h-6 transition-all duration-300 rounded-full" />
                      </div>
                      <div className="mt-3 font-mono text-[9px] text-primary/60 tracking-widest uppercase">SPEECH EMOTION GRAPH</div>
                    </div>
                  )}

                  {project.visualPreset === "radar" && project.slug !== "wave-radar" && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-85">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-background to-background group-hover:scale-110 transition-transform duration-700" />
                      <div className="relative w-40 h-32 flex items-center justify-center">
                        <div className="absolute inset-x-0 bottom-4 h-0.5 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
                        <div className="absolute w-12 h-12 rounded-full border-2 border-primary/40 rotate-45 transform skew-x-12 translate-y-2 group-hover:-translate-y-1 transition-transform duration-500" />
                        <div className="absolute w-20 h-20 rounded-full border border-white/10 rotate-12" />
                        <Waves className="w-8 h-8 text-primary/40 absolute -bottom-2 animate-pulse" />
                      </div>
                      <div className="mt-2 font-mono text-[9px] text-primary/60 tracking-widest uppercase">RADAR SENSING RIG</div>
                    </div>
                  )}

                  {project.visualPreset === "ai" && !project.cover && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-85">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-background to-background group-hover:scale-110 transition-transform duration-700" />
                      <div className="grid grid-cols-4 gap-2 w-48 h-20 opacity-40 font-mono text-[8px] text-white/60 p-2 border border-white/5 rounded-xs bg-black/40">
                        <div className="col-span-2 border border-primary/30 p-1 rounded-xs">{"{ hayden.design }"}</div>
                        <div className="border border-white/10 p-1 flex items-center justify-center">V1</div>
                        <div className="border border-white/10 p-1 flex items-center justify-center">AI</div>
                        <div className="col-span-4 bg-primary/10 text-primary border border-primary/20 p-1 rounded-xs flex items-center justify-between">
                          <span>SYSTEM_ACTIVE</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                        </div>
                      </div>
                      <div className="mt-4 font-mono text-[9px] text-primary/60 tracking-widest uppercase font-semibold">CODEX DEPLOYED SYSTEM</div>
                    </div>
                  )}

                  <div className="absolute top-4 right-4 bg-background/90 border border-border/60 text-[10px] font-mono tracking-widest px-3 py-1 uppercase text-white/80 group-hover:text-primary group-hover:border-primary/40 transition-colors">
                    {t.activeCase}
                  </div>
                </div>

                <div className="flex justify-between items-center mb-4">
                  <div className="flex flex-wrap gap-2">
                    {(language === "en" ? project.tagsEn : project.tagsZh).map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] uppercase tracking-wider text-primary/95 bg-primary/10 border border-primary/20 px-2.5 py-0.5 rounded-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <span className="text-sm font-mono text-muted-foreground/60 group-hover:text-primary transition-colors font-semibold">
                    NO. {project.number}
                  </span>
                </div>

                <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white mb-3 group-hover:text-primary transition-colors duration-300 uppercase">
                  {language === "en" ? project.titleEn : project.titleZh}
                </h3>

                <p className="text-muted-foreground/90 text-sm md:text-base font-light mb-6 leading-relaxed">
                  {language === "en" ? project.descriptionEn : project.descriptionZh}
                </p>
              </div>

              <div className="mt-auto pt-6 border-t border-border/30">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted-foreground/80 font-mono">
                    <span className="text-white/40 uppercase text-[9px] tracking-widest font-semibold">{getMethodsLabel(project)}</span>
                    {getMethods(project).map((method, idx) => (
                      <span key={method} className="flex items-center">
                        <span className="hover:text-white transition-colors">{method}</span>
                        {idx < getMethods(project).length - 1 && (
                          <span className="text-primary/40 mx-1.5">&middot;</span>
                        )}
                      </span>
                    ))}
                  </div>

                  {hasDetail ? (
                    <span className="flex items-center gap-1 text-xs font-mono font-bold uppercase tracking-widest text-white group-hover:text-primary transition-colors group-hover:underline underline-offset-4 cursor-pointer self-end sm:self-auto">
                      <span>{t.viewCase}</span>
                      <span aria-hidden="true">-&gt;</span>
                    </span>
                  ) : null}
                </div>
              </div>
              </>
            );

            return hasDetail ? (
              <Link
                key={project.id}
                to={`/projects/${project.slug}`}
                className={cardClassName}
              >
                {cardContent}
              </Link>
            ) : (
              <article key={project.id} className={cardClassName}>
                {cardContent}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
