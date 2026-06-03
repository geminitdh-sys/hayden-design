import { useLanguage } from "../context/LanguageContext";

type LanguageSwitcherProps = {
  className?: string;
};

export default function LanguageSwitcher({ className = "" }: LanguageSwitcherProps) {
  const { language, setLanguage } = useLanguage();

  return (
    <div
      className={`flex items-center gap-2 font-mono text-[11px] tracking-widest select-none ${className}`}
      aria-label={language === "en" ? "Language switcher" : "语言切换"}
    >
      <button
        type="button"
        onClick={() => setLanguage("en")}
        aria-pressed={language === "en"}
        className={`transition-all duration-200 cursor-pointer uppercase ${
          language === "en"
            ? "text-primary font-bold scale-105"
            : "text-muted-foreground/50 hover:text-foreground font-normal"
        }`}
      >
        EN
      </button>
      <span className="text-muted-foreground/30 font-light">&middot;</span>
      <button
        type="button"
        onClick={() => setLanguage("zh")}
        aria-pressed={language === "zh"}
        className={`transition-all duration-200 cursor-pointer ${
          language === "zh"
            ? "text-primary font-bold scale-105"
            : "text-muted-foreground/50 hover:text-foreground font-normal"
        }`}
      >
        中
      </button>
    </div>
  );
}
