import { useLanguage } from "../context/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const { language } = useLanguage();

  const navLinks = [
    { nameEn: "Projects", nameZh: "项目", slugEn: "Projects" },
    { nameEn: "Capabilities", nameZh: "能力", slugEn: "Capabilities" },
    { nameEn: "Process", nameZh: "流程", slugEn: "Process" },
    { nameEn: "About", nameZh: "关于", slugEn: "About" },
    { nameEn: "Contact", nameZh: "联系", slugEn: "Contact" },
  ];

  const getSlug = (slugEn: string) => {
    if (slugEn === "Capabilities") return "#capabilities";
    if (slugEn === "Process") return "#method";
    return `#${slugEn.toLowerCase().replace(/\s+/g, "-")}`;
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex flex-col md:flex-row md:justify-between md:items-center px-5 sm:px-8 lg:px-16 py-4 md:py-5 bg-background/90 backdrop-blur-md border-b border-border/10 pointer-events-none">
      <div className="flex w-full items-center justify-between gap-4 md:w-auto pointer-events-auto">
        <a
          href="#"
          className="block min-w-0 truncate text-foreground text-base md:text-lg font-semibold tracking-tight uppercase hover:opacity-80 transition-opacity"
        >
          HAYDEN DESIGN
        </a>
        <div className="shrink-0 md:hidden">
          <LanguageSwitcher className="rounded-sm bg-secondary/70 px-2.5 py-1.5 text-[10px]" />
        </div>
      </div>

      <div className="mt-3 flex w-full items-center gap-5 overflow-x-auto pointer-events-auto md:mt-0 md:w-auto md:overflow-visible md:gap-8">
        <div className="flex min-w-max items-center gap-4 md:gap-8">
          {navLinks.map((link) => (
            <a
              key={link.slugEn}
              href={getSlug(link.slugEn)}
              className="text-[10px] md:text-[11px] text-muted-foreground hover:text-foreground transition-all uppercase tracking-widest font-medium"
            >
              {language === "en" ? link.nameEn : link.nameZh}
            </a>
          ))}
        </div>

        <span className="hidden md:inline h-4 w-px bg-border/40" />

        <div className="hidden md:block">
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
