import { ArrowLeft } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { getProjectBySlug } from "../data/projects";
import { useLanguage } from "../context/LanguageContext";
import type { Language } from "../context/LanguageContext";
import LanguageSwitcher from "../components/LanguageSwitcher";

type DetailBlockProps = {
  label: string;
  text?: string;
};

type InfoItemProps = {
  key?: string;
  label: string;
  value?: string | string[];
};

export default function ProjectDetail() {
  const { slug } = useParams();
  const { language } = useLanguage();
  const project = getProjectBySlug(slug);
  const isEnglish = language === "en";
  const labels = isEnglish
    ? {
        projectInfo: "Project Info",
        overview: "Overview",
        challenge: "Challenge",
        caseStudyImages: "Case Study Images",
        portfolioPages: "Portfolio Pages",
        outcome: "Outcome",
        reflection: "Reflection",
        imageAlt: "case study page",
        imagePage: "Page",
        imageTotal: "of",
        role: "Role",
        tools: "Tools",
        category: "Category",
        year: "Year",
      }
    : {
        projectInfo: "项目信息",
        overview: "总览",
        challenge: "挑战",
        caseStudyImages: "项目图片",
        portfolioPages: "作品展示",
        outcome: "结果",
        reflection: "反思",
        imageAlt: "项目展示页",
        imagePage: "第",
        imageTotal: "页 / 共",
        role: "职责",
        tools: "工具",
        category: "类别",
        year: "年份",
      };

  if (!project) {
    return (
      <main className="min-h-screen bg-background text-foreground px-6 py-24">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between gap-6">
            <BackLink to="/" label={isEnglish ? "Back to home" : "返回首页"} />
            <LanguageSwitcher className="shrink-0" />
          </div>
          <h1 className="mt-12 text-4xl md:text-6xl font-bold uppercase">
            {isEnglish ? "Project not found" : "未找到项目"}
          </h1>
        </div>
      </main>
    );
  }

  const tags = getLocalizedArray(project, "tags", language);
  const title = getLocalizedText(project, "title", language);
  const subtitle = getLocalizedText(project, "subtitle", language);
  const description = getLocalizedText(project, "description", language);
  const overview = getLocalizedText(project, "overview", language);
  const challenge = getLocalizedText(project, "challenge", language);
  const outcome = getLocalizedText(project, "outcome", language);
  const reflection = getLocalizedText(project, "reflection", language);
  const tools = getLocalizedArray(project, "tools", language) ?? getLocalizedArray(project, "methods", language);
  const category = getLocalizedText(project, "category", language) ?? tags?.join(" / ");
  const cover = project.hideDetailCover ? null : project.cover ?? project.heroImage;
  const caseImages = project.pages ?? project.gallery ?? [];
  const projectInfo = getLocalizedArray(project, "info", language) ?? [
    { label: labels.role, value: getLocalizedText(project, "role", language) },
    { label: labels.tools, value: tools },
    { label: labels.category, value: category },
    { label: labels.year, value: project.year },
  ];

  return (
    <main className="min-h-screen bg-background text-foreground">
      <section className="px-6 md:px-12 lg:px-20 pt-28 pb-16 border-b border-border/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between gap-6">
            <BackLink
              to="/#projects"
              label={isEnglish ? "Back to Selected Projects" : "返回精选项目"}
            />
            <LanguageSwitcher className="shrink-0" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[0.88fr_1.12fr] gap-10 lg:gap-16 mt-12 items-end">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <span className="text-primary font-mono text-sm">NO. {project.number}</span>
                <span className="h-px w-12 bg-primary/40" />
                <span className="text-muted-foreground text-xs uppercase tracking-[0.2em] font-mono">
                  {project.slug}
                </span>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight uppercase leading-[0.98]">
                {title}
              </h1>

              {subtitle ? (
                <p className="mt-5 text-lg md:text-2xl text-foreground/80 font-light">
                  {subtitle}
                </p>
              ) : null}
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-5">
                {tags?.map((tag: string) => (
                  <span
                    key={tag}
                    className="text-[10px] uppercase tracking-wider text-primary bg-primary/10 border border-primary/20 px-2.5 py-1 rounded-sm font-medium"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <p className="text-muted-foreground text-base md:text-lg leading-relaxed font-light">
                {description}
              </p>
            </div>
          </div>

          {cover ? (
            <div className="mt-14 bg-secondary/25 border border-border/40 rounded-lg overflow-hidden">
              <img
                src={cover}
                alt={title}
                className="w-full max-h-[720px] object-contain bg-hero-bg"
              />
            </div>
          ) : null}
        </div>
      </section>

      <section className="px-6 md:px-12 lg:px-20 py-16 border-b border-border/30">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[0.72fr_1.28fr] gap-12 lg:gap-16">
          <div>
            <p className="text-primary text-xs uppercase tracking-[0.22em] font-mono mb-4">
              {labels.projectInfo}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
              {projectInfo.map((item: InfoItemProps) => (
                <InfoItem key={item.label} label={item.label} value={item.value} />
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <DetailBlock label={labels.overview} text={overview} />
            <DetailBlock label={labels.challenge} text={challenge} />
          </div>
        </div>
      </section>

      {caseImages.length > 0 ? (
        <section className="px-4 md:px-8 lg:px-12 py-16 md:py-20 border-b border-border/30">
          <div className="max-w-7xl mx-auto mb-10 px-2 md:px-4">
            <p className="text-primary text-xs uppercase tracking-[0.22em] font-mono mb-4">
              {labels.caseStudyImages}
            </p>
            <h2 className="text-2xl md:text-4xl font-bold uppercase tracking-tight">
              {labels.portfolioPages}
            </h2>
          </div>

          <div className="flex flex-col items-center gap-10 md:gap-14">
            {caseImages.map((image: string, index: number) => (
              <figure key={image} className="w-full max-w-[1120px] mx-auto">
                <img
                  src={image}
                  alt={`${title} ${labels.imageAlt} ${index + 1}`}
                  loading="lazy"
                  className="w-full h-auto object-contain border border-border/30 bg-secondary/20 shadow-2xl"
                />
                <figcaption className="mt-3 text-center text-[10px] md:text-xs uppercase tracking-[0.18em] font-mono text-muted-foreground/70">
                  {isEnglish
                    ? `${labels.imagePage} ${formatPageNumber(index + 1)} ${labels.imageTotal} ${formatPageNumber(caseImages.length)}`
                    : `${labels.imagePage} ${formatPageNumber(index + 1)} ${labels.imageTotal} ${formatPageNumber(caseImages.length)} 页`}
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      ) : null}

      <section className="px-6 md:px-12 lg:px-20 py-16 md:py-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16">
          <DetailBlock label={labels.outcome} text={outcome} />
          <DetailBlock label={labels.reflection} text={reflection} />
        </div>

        <div className="max-w-7xl mx-auto mt-14 pt-8 border-t border-border/30">
          <BackLink
            to="/#projects"
            label={isEnglish ? "Back to Projects" : "返回项目列表"}
          />
        </div>
      </section>
    </main>
  );
}

function BackLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-primary hover:underline underline-offset-4"
    >
      <ArrowLeft className="w-4 h-4" />
      {label}
    </Link>
  );
}

function InfoItem({ label, value }: InfoItemProps) {
  if (!value || (Array.isArray(value) && value.length === 0)) return null;

  return (
    <div className="border border-border/40 bg-secondary/20 rounded-lg p-5">
      <p className="text-white/40 uppercase text-[10px] tracking-widest font-mono mb-3">
        {label}
      </p>
      {Array.isArray(value) ? (
        <div className="flex flex-wrap gap-2">
          {value.map((item) => (
            <span
              key={item}
              className="text-xs text-foreground/80 border border-border/50 px-3 py-1 rounded-sm"
            >
              {item}
            </span>
          ))}
        </div>
      ) : (
        <p className="text-sm md:text-base text-foreground/85 leading-relaxed">{value}</p>
      )}
    </div>
  );
}

function DetailBlock({ label, text }: DetailBlockProps) {
  if (!text) return null;

  return (
    <div>
      <h2 className="text-primary text-xs uppercase tracking-[0.22em] font-mono mb-3">
        {label}
      </h2>
      <p className="text-muted-foreground text-sm md:text-base leading-relaxed font-light">
        {text}
      </p>
    </div>
  );
}

function getLocalizedText(project: any, key: string, language: Language): string | undefined {
  const value = project[key];

  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[language] ?? value.en ?? value.zh;
  }

  if (language === "en") {
    return project[`${key}En`] ?? (typeof value === "string" ? value : undefined) ?? project[`${key}Zh`];
  }

  return project[`${key}Zh`] ?? (typeof value === "string" ? value : undefined) ?? project[`${key}En`];
}

function getLocalizedArray(project: any, key: string, language: Language) {
  const value = project[key];

  if (value && typeof value === "object" && !Array.isArray(value)) {
    return value[language] ?? value.en ?? value.zh;
  }

  if (language === "en") {
    return project[`${key}En`] ?? (Array.isArray(value) ? value : undefined) ?? project[`${key}Zh`];
  }

  return project[`${key}Zh`] ?? (Array.isArray(value) ? value : undefined) ?? project[`${key}En`];
}

function formatPageNumber(page: number) {
  return String(page).padStart(2, "0");
}
