export const projects = [
  {
    id: "project-01",
    slug: "conning-display",
    number: "01",
    titleEn: "Conning Display HMI Redesign",
    titleZh: "航海 CONNING 主信息交互界面优化设计",
    subtitle: "Conning Display HMI Redesign",
    subtitleZh: "Conning Display HMI Redesign",
    category: "Human-Computer Interaction / Academic Research / Eye-tracking / HMI Design / Maritime Interface",
    categoryZh: "人机交互 / 学术研究 / 眼动测试 / HMI Design / Maritime Interface",
    year: "2026",
    role: "HMI Designer / Researcher",
    roleZh: "HMI 设计 / 研究",
    tools: ["Figma", "Tobii Pro Lab", "Python", "HTML", "CSS"],
    toolsZh: ["Figma", "Tobii Pro Lab", "Python", "HTML", "CSS"],
    tagsEn: ["HMI Design", "Maritime Interface", "Visual Attention", "Eye-tracking", "Component System"],
    tagsZh: ["人机交互", "HMI", "眼动研究", "视觉注意力"],
    descriptionEn:
      "A maritime HMI optimization project based on visual attention research, covering Conning Display information architecture, component systems, scenario-based layouts, and eye-tracking evaluation.",
    descriptionZh:
      "基于视觉注意力研究的船舶 HMI 界面优化项目，围绕 Conning Display 的信息架构、组件系统、场景化布局与眼动评估展开。",
    methods: ["Figma", "Tobii Pro Lab", "Python", "HTML", "CSS"],
    methodsZh: ["Figma", "Tobii Pro Lab", "Python", "HTML", "CSS"],
    visualPreset: "maritime",
    cover: "/projects/conning-display/Page-01.png",
    heroImage: "/projects/conning-display/Page-01.png",
    hideDetailCover: true,
    pages: [
      "/projects/conning-display/Page-01.png",
      "/projects/conning-display/Page-02.png",
      "/projects/conning-display/Page-03.png",
      "/projects/conning-display/Page-04.png",
      "/projects/conning-display/Page-05.png",
      "/projects/conning-display/Page-06.png",
      "/projects/conning-display/Page-07.png",
      "/projects/conning-display/Page-08.png",
      "/projects/conning-display/Page-09.png",
      "/projects/conning-display/Page-10.png",
    ],
    info: [
      { label: "Type", value: "HMI Design / Maritime Interface / Academic Research" },
      { label: "Role", value: "HMI Designer / Researcher" },
      { label: "Tools", value: "Figma / Tobii Pro Lab / Python / HTML / CSS" },
      { label: "Year", value: "2026" },
    ],
    infoZh: [
      { label: "项目类型", value: "人机交互 / 学术研究 / 眼动测试 / HMI Design / Maritime Interface" },
      { label: "职责", value: "HMI 设计 / 研究" },
      { label: "工具", value: "Figma / Tobii Pro Lab / Python / HTML / CSS" },
      { label: "年份", value: "2026" },
    ],
    overviewEn:
      "This project reconstructs core navigation information in a ship Conning Display through visual attention and human factors methods. It explores clearer and safer maritime HMI patterns for high-load navigation tasks.",
    overviewZh:
      "基于视觉注意力与人因工程方法，对船舶 Conning Display 的核心航行信息进行组件化重构与场景化布局优化。项目通过信息优先级、组件尺寸变体与眼动评估框架，探索高负荷航行任务下更清晰、更安全的船舶 HMI 界面设计方式。",
    challengeEn:
      "The main challenge was to balance dense navigation data with fast visual recognition, allowing operators to identify critical ship status, environmental information, and alerts under high workload.",
    challengeZh:
      "项目核心挑战是在高负荷航行任务中平衡密集航行数据与快速视觉识别，使操作者能够更稳定地读取船舶状态、环境信息与关键告警。",
    outcomeEn:
      "The final solution integrates core navigation information into a modular interface system, and adopts scenario-based layout alongside an eye-tracking evaluation framework to support subsequent algorithm-driven interface optimization and verification.",
    outcomeZh:
      "最终方案将主航行信息整合为组件化界面系统，并通过场景化布局与眼动评估框架支撑后续的算法寻优界面以及验证。",
    reflection:
      "The project helped translate human factors research into a concrete maritime interface system, connecting component design, information hierarchy, and empirical evaluation.",
    reflectionZh:
      "本项目将人因研究方法转化为具体的船舶界面系统实践，把组件设计、信息层级与实验评估连接起来，为后续航海 HMI 研究提供了可延展的设计框架。",
  },
  {
    id: "project-legacy-conning",
    slug: "conning-display-legacy",
    number: "00",
    hidden: true,
    titleEn: "Maritime Conning Display Redesign",
    titleZh: "航海 Conning 主信息交互界面优化设计",
    tagsEn: ["HMI", "Research", "Eye-tracking"],
    tagsZh: ["人机交互", "学术研究", "眼动测试"],
    descriptionEn:
      "A research-driven HMI project that uses visual attention, eye-tracking data, and task scenarios to optimize ship bridge display layouts.",
    descriptionZh:
      "通过定量眼动实验、视觉注意力分析与复杂航行任务场景，优化大型远洋船舶驾驶台关键参数布局。",
    methods: ["Eye-tracking", "AOI Analysis", "MATLAB", "Figma"],
    visualPreset: "maritime",
    heroImage: "/projects/conning-display/cover.png",
    gallery: [
      "/projects/conning-display/overview.png",
      "/projects/conning-display/interface.png",
      "/projects/conning-display/testing.png",
    ],
    overviewEn:
      "This case study belongs to the current Hayden Design website. It documents the internal project page for the maritime conning display redesign.",
    overviewZh:
      "该详情页属于当前 Hayden Design 网站内部页面，用于展示航海 Conning Display 优化设计项目。",
    challengeEn:
      "The display needed clearer hierarchy for high-pressure navigation tasks while keeping critical ship status information immediately scannable.",
    challengeZh:
      "项目核心挑战是在高压航行任务中建立更清晰的信息层级，并保证关键船舶状态参数可被快速识别。",
    outcomeEn:
      "The redesigned structure organizes primary navigation, engine, alarm, and environmental data into a more task-oriented interface system.",
    outcomeZh:
      "优化后的界面将导航、主机、报警与环境信息整合为更符合任务路径的界面系统。",
  },
  {
    id: "project-02",
    slug: "pawmind",
    number: "02",
    title: "PawMind",
    titleEn: "PawMind",
    titleZh: "爪语通",
    subtitle: "AI 宠物情绪识别与陪伴 App UI 设计",
    subtitleEn: "AI-powered pet emotion recognition and companion app UI design",
    subtitleZh: "AI 宠物情绪识别与陪伴 App UI 设计",
    category: "UI/UX Design / AI Product Concept / Pet Companion App",
    categoryZh: "UI/UX设计 / 产品概念 / 宠物陪伴App",
    year: "2026",
    role: "UI/UX Designer / Product Designer",
    roleZh: "UI/UX设计 / 产品设计",
    tools: ["Figma", "Illustrator", "Photoshop"],
    tagsEn: ["UI/UX Design", "AI Product Concept"],
    tagsZh: ["UI/UX Design", "AI 产品概念"],
    descriptionEn:
      "An AI-powered pet companion app concept that helps owners understand pets' emotional states through facial expression and sound analysis.",
    descriptionZh:
      "AI 宠物情绪识别与陪伴 App UI 设计，帮助用户通过表情与声音分析理解宠物情绪状态。",
    methods: ["Figma", "Illustrator", "Photoshop"],
    visualPreset: "pet",
    cover: "/projects/pawmind/cover.png",
    heroImage: "/projects/pawmind/cover.png",
    pages: [
      "/projects/pawmind/page-01.png",
      "/projects/pawmind/page-02.png",
      "/projects/pawmind/page-03.png",
      "/projects/pawmind/page-04.png",
      "/projects/pawmind/page-05.png",
      "/projects/pawmind/page-06.png",
      "/projects/pawmind/page-07.png",
      "/projects/pawmind/page-08.png",
      "/projects/pawmind/page-09.png",
      "/projects/pawmind/page-10.png",
    ],
    info: [
      { label: "Role", value: "UI/UX Designer / Product Designer" },
      { label: "Tools", value: "Figma / Illustrator / Photoshop" },
      { label: "Category", value: "UI/UX Design / AI Product Concept / Pet Companion App" },
      { label: "Year", value: "2026" },
    ],
    infoZh: [
      { label: "职责", value: "UI/UX设计 / 产品设计" },
      { label: "工具", value: "Figma / Illustrator / Photoshop" },
      { label: "类别", value: "UI/UX设计 / 产品概念 / 宠物陪伴App" },
      { label: "年份", value: "2026" },
    ],
    overview:
      "PawMind is an AI-powered pet companion app concept that helps owners understand their pets' emotional states through facial expression and sound analysis. The project explores how emotional data can be translated into clear, friendly, and actionable interaction experiences.",
    overviewZh:
      "爪语通是一款基于人工智能打造的宠物陪伴类应用概念产品，它通过分析宠物的面部表情与声音，帮助主人读懂宠物的情绪状态。本项目探索如何将情绪数据转化为直观易懂、亲和友好且具备实操性的交互体验。",
    challenge:
      "The key design challenge was to transform abstract pet emotion recognition into an interface that feels trustworthy, warm, and easy to understand. The product needed to balance AI-driven analysis, emotional visualization, daily companionship, and health-related records without making the experience feel overly technical.",
    challengeZh:
      "本次设计的核心难点，是把抽象的宠物情绪识别功能，转化为可信暖心、简单易懂的界面。产品需要平衡人工智能分析、情绪可视化展示、日常陪伴以及健康档案记录多项功能，同时避免使用体验充满浓重的技术感。",
    outcome:
      "The final UI system presents a pet emotion recognition workflow, emotional status visualization, interaction suggestions, and emotion-health records. Through a soft visual language and structured interaction flow, the app helps users better interpret their pets' emotional needs and respond with appropriate care.",
    outcomeZh:
      "这套最终界面体系包含宠物情绪识别流程、情绪状态可视化展示、互动建议以及情绪健康记录模块。依托柔和的视觉风格与规整有序的交互流程，该应用能帮助用户更好地读懂宠物的情绪需求，并给予贴心恰当的照料。",
    reflection:
      "This project helped me explore how AI capabilities can be translated into emotionally meaningful user experiences. Instead of presenting technology as a cold analytical tool, the design focuses on making AI feel understandable, supportive, and connected to everyday pet care.",
    reflectionZh:
      "本项目让我深入探究如何将人工智能功能转化为富有情感温度的用户体验。该设计并未把技术塑造成冰冷的分析工具，而是致力于让人工智能变得通俗易懂、贴心暖心，深度融入日常宠物照料的场景之中。",
  },
  {
    id: "project-03",
    slug: "wave-radar",
    number: "03",
    title: "Water Level & Wave Radar",
    titleEn: "Water Level & Wave Radar",
    titleZh: "水位波浪雷达产品设计",
    subtitle: "水位波浪雷达产品设计",
    subtitleEn: "Industrial design for a marine water level and wave radar device",
    subtitleZh: "水位波浪雷达产品设计",
    category: "Industrial Design / Marine Equipment / Product Visualization",
    categoryZh: "工业设计 / 海洋设备 / 产品外观",
    year: "2026",
    role: "Product Designer / Industrial Designer / Visualization Designer",
    roleZh: "产品设计 / 工业设计 / 外观设计",
    tools: ["Rhino", "UE5", "KeyShot", "Illustrator"],
    toolsZh: ["犀牛", "UE5", "Keyshot", "Illustrator"],
    tagsEn: ["Industrial Design", "Marine Equipment", "Product Visualization"],
    tagsZh: ["工业设计", "海洋设备设计", "产品外观设计"],
    descriptionEn:
      "An industrial design case study for a water level and wave radar device used in marine monitoring scenarios.",
    descriptionZh:
      "这是一份面向海洋监测场景的水位波浪雷达设备工业设计案例研究。",
    methods: ["Rhino", "UE5", "KeyShot", "Illustrator"],
    methodsZh: ["犀牛", "UE5", "Keyshot", "Illustrator"],
    visualPreset: "radar",
    cover: "/projects/wave-radar/cover.png",
    heroImage: "/projects/wave-radar/cover.png",
    pages: [
      "/projects/wave-radar/page-01.png",
      "/projects/wave-radar/page-02.png",
      "/projects/wave-radar/page-03.png",
      "/projects/wave-radar/page-04.png",
      "/projects/wave-radar/page-05.png",
      "/projects/wave-radar/page-06.png",
      "/projects/wave-radar/page-07.png",
      "/projects/wave-radar/page-08.png",
    ],
    info: [
      { label: "Role", value: "Product Designer / Industrial Designer / Visualization Designer" },
      { label: "Tools", value: "Rhino / UE5 / KeyShot / Illustrator" },
      { label: "Category", value: "Industrial Design / Marine Equipment / Product Visualization" },
      { label: "Year", value: "2026" },
    ],
    infoZh: [
      { label: "职责", value: "产品设计 / 工业设计 / 外观设计" },
      { label: "工具", value: "犀牛 / UE5 / Keyshot / Illustrator" },
      { label: "类别", value: "工业设计 / 海洋设备 / 产品外观" },
      { label: "年份", value: "2026" },
    ],
    overview:
      "This project explores the industrial design of a water level and wave radar device for marine monitoring scenarios. The design focuses on product structure, installation logic, modular component expression, and visual credibility in offshore environments.",
    overviewZh:
      "本项目针对海洋监测场景下的水位波浪雷达设备进行工业设计探究。设计重点围绕产品结构、安装逻辑、模块化组件形态呈现，以及设备在海上环境中所需具备的视觉可靠感展开。",
    challenge:
      "The main challenge was to balance technical credibility with clear product expression. The device needed to visually communicate durability, precise sensing, maintainability, and stable installation in complex marine environments.",
    challengeZh:
      "本次设计的主要难点，在于兼顾技术专业质感与清晰的产品视觉表达。这款设备需要借助外观形态，传递出自身在复杂海洋环境中具备耐用性、传感精度高、易维护以及安装稳固的特性。",
    outcome:
      "The final design presents a modular radar device with a clearly defined electronic housing, connection neck, mounting flange, and radar horn. Application renderings further demonstrate how the product can be installed and used in marine environments.",
    outcomeZh:
      "最终设计为一款模块化雷达设备，整体划分出结构分明的电气舱体、连接颈、安装法兰与雷达喇叭天线。应用效果图进一步展示了该产品在海洋环境中的安装方式与实际使用状态。",
    reflection:
      "This project helped me translate technical equipment requirements into a more legible industrial design language, especially in terms of structure, assembly logic, and environmental credibility.",
    reflectionZh:
      "本项目让我得以将工业设备的各项技术要求，转化为清晰易懂的工业设计语言，尤其在产品结构、装配逻辑以及环境适配可靠性方面收获许多。",
  },
  {
    id: "project-04",
    slug: "yunchang",
    number: "04",
    title: "云裳 / AI Wardrobe",
    titleEn: "AI Wardrobe",
    titleZh: "云裳",
    subtitle: "AI-driven personal wardrobe and styling planning app",
    subtitleEn: "AI-driven personal wardrobe and styling planning app",
    subtitleZh: "AI 驱动的个人衣橱与穿搭规划 App",
    category: "UI/UX Design · AI Product Concept",
    categoryZh: "UI/UX 设计 · AI 产品概念",
    year: "2026",
    role: "UX / UI / Visual System",
    roleZh: "UX / UI / 视觉系统",
    style: "Maison · Minimal · AI Wardrobe",
    platform: "Mobile App",
    tools: ["Figma", "HTML", "AI-assisted Design"],
    toolsZh: ["Figma", "HTML", "AI 辅助设计"],
    tagsEn: ["UI/UX Design", "AI Wardrobe", "Mobile App", "Design System"],
    tagsZh: ["UI/UX Design", "AI Wardrobe", "Mobile App", "Design System"],
    descriptionEn:
      "A personal style asset management app centered on digital wardrobe, AI styling, body profile, and outfit planning. It turns daily outfit decisions into an accumulative, previewable, and plannable style system.",
    descriptionZh:
      "一款围绕数字衣橱、AI 搭配、身材档案与穿搭日程展开的个人风格资产管理 App。通过衣物录入、智能识别、搭配生成和未来日程规划，帮助用户把“今天穿什么”的即时决策转化为可积累、可预览、可规划的风格系统。",
    methods: ["Figma", "HTML", "AI-assisted Design"],
    methodsZh: ["Figma", "HTML", "AI 辅助设计"],
    visualPreset: "wardrobe",
    cover: "/projects/yunchang/page1.png",
    heroImage: "/projects/yunchang/page1.png",
    pages: [
      "/projects/yunchang/page1.png",
      "/projects/yunchang/page2.png",
      "/projects/yunchang/page3.png",
      "/projects/yunchang/page4.png",
      "/projects/yunchang/page5.png",
      "/projects/yunchang/page6.png",
      "/projects/yunchang/page7.png",
      "/projects/yunchang/page8.png",
      "/projects/yunchang/page9.png",
    ],
    info: [
      { label: "Type", value: "UI/UX Design" },
      { label: "Platform", value: "Mobile App" },
      { label: "Role", value: "UX / UI / Visual System" },
      { label: "Style", value: "Maison · Minimal · AI Wardrobe" },
      { label: "Tools", value: "Figma / HTML / AI-assisted Design" },
    ],
    infoZh: [
      { label: "项目类型", value: "UI/UX设计" },
      { label: "平台", value: "移动端App" },
      { label: "职责", value: "UI/UX/视觉系统" },
      { label: "风格", value: "Maison·极简·AI衣橱" },
      { label: "工具", value: "Figma/HTML/AI辅助设计" },
    ],
    overview:
      "云裳是一款 AI 驱动的个人风格资产管理 App。它将衣物数字化、身材档案、AI 搭配、虚拟预览与穿搭日程连接起来，帮助用户更高效地管理衣橱、理解风格，并提前安排未来穿搭。",
    overviewEn:
      "AI Wardrobe is an AI-driven personal style asset management app. It connects digital clothing records, body profiles, AI styling, virtual preview, and outfit schedules to help users manage wardrobes, understand style, and plan future looks more efficiently.",
    overviewZh:
      "云裳是一款 AI 驱动的个人风格资产管理 App。它将衣物数字化、身材档案、AI 搭配、虚拟预览与穿搭日程连接起来，帮助用户更高效地管理衣橱、理解风格，并提前安排未来穿搭。",
    challenge:
      "The core challenge was to organize wardrobe digitization, body profile data, AI outfit generation, and future planning into a mobile experience that feels elegant, practical, and easy to scan.",
    challengeZh:
      "本次设计的核心难点，是将衣橱数字化、身形数据、AI 穿搭生成与穿搭规划功能整合进移动端产品，兼顾优雅质感、实用性与浏览便捷性。",
    outcome:
      "The final concept presents a cohesive wardrobe management and styling planning system, with clear flows for item entry, intelligent recognition, outfit generation, visual preview, and scheduled looks.",
    outcomeZh:
      "最终方案打造了一套完整的衣橱管理与穿搭规划系统，涵盖衣物录入、智能识别、穿搭生成、效果预览及穿搭日程安排等清晰流程。",
    reflection:
      "This project explores how AI-assisted product design can support everyday personal style decisions while preserving a calm, minimal, and editorial visual language.",
    reflectionZh:
      "本项目探究如何借助人工智能辅助产品设计，在打造简约雅致、兼具杂志质感的视觉风格之余，帮助人们日常完成穿搭风格选择。",
  },
  {
    id: "project-05",
    slug: "ai-assisted-portfolio",
    number: "05",
    hasDetail: false,
    titleEn: "AI-Amplified Portfolio Website System",
    titleZh: "AI 增幅作品集网站系统",
    subtitleEn: "A personal workflow for turning design ideas into live portfolio pages",
    subtitleZh: "将设计想法转化为线上作品页面的个人工作流",
    category: "AI Workflow / Design System / Front-end Implementation",
    categoryZh: "AI 工作流 / 设计系统 / 前端实现",
    year: "2026",
    role: "Designer / Front-end Builder",
    roleZh: "设计师 / 前端实现",
    tagsEn: ["AI Workflow", "Codex Components", "Design System"],
    tagsZh: ["AI 工作流", "Codex 组件", "设计系统"],
    descriptionEn:
      "A personal portfolio website system built with Codex, Figma, and structured Markdown documents, integrating project showcases, bilingual content, case pages, and deployment into a continuously updatable design system.",
    descriptionZh:
      "基于 Codex、Figma 与结构化 Markdown 文档搭建个人作品集网站，将项目展示、双语内容、作品详情与部署流程整合为可持续更新的设计系统。",
    methods: ["Codex", "Figma", "Markdown Docs", "Vibe Coding", "Netlify"],
    methodsZh: ["Codex", "Figma", "Markdown 文档", "Vibe Coding", "Netlify"],
    visualPreset: "ai",
    cover: "/projects/ai-portfolio/homepage-preview.png",
    info: [
      { label: "Type", value: "AI Workflow / Design System / Front-end Implementation" },
      { label: "Role", value: "Designer / Front-end Builder" },
      { label: "Tools", value: "Codex / Figma / Markdown Docs / Vibe Coding / Netlify" },
      { label: "Year", value: "2026" },
    ],
    infoZh: [
      { label: "项目类型", value: "AI 工作流 / 设计系统 / 前端实现" },
      { label: "职责", value: "设计师 / 前端实现" },
      { label: "工具", value: "Codex / Figma / Markdown 文档 / Vibe Coding / Netlify" },
      { label: "年份", value: "2026" },
    ],
    overviewEn:
      "This project documents the workflow behind the current Hayden Design website. It uses Codex, Figma, structured writing, and reusable interface patterns to turn portfolio ideas into navigable case-study pages.",
    overviewZh:
      "本项目记录当前 Hayden Design 网站背后的设计与实现工作流。它结合 Codex、Figma、结构化写作与可复用界面模式，将作品集想法转化为可浏览的案例页面。",
    challengeEn:
      "The main challenge was to keep the portfolio flexible enough for different project types while preserving consistent visual hierarchy, project routing, asset organization, and bilingual presentation.",
    challengeZh:
      "主要挑战是在支持不同项目类型的同时，保持作品集的视觉层级、项目路由、素材组织与中英文展示方式足够一致。",
    outcomeEn:
      "The result is a lightweight portfolio system with reusable sections, centralized project data, shared language state, and case-study pages that can grow as new design work is added.",
    outcomeZh:
      "最终成果是一套轻量级作品集系统，包含可复用页面模块、集中式项目数据、共享语言状态，以及可随着新项目持续扩展的案例详情页。",
    reflectionEn:
      "This process helped me treat AI as a practical design partner: useful for structuring content, testing interface directions, and accelerating implementation while keeping final design decisions intentional.",
    reflectionZh:
      "这个过程让我把 AI 当作务实的设计协作工具，用它来组织内容、测试界面方向并加速实现，同时保留对最终设计判断的主动控制。",
  },
];

export function getProjectBySlug(slug) {
  return projects.find((project) => project.slug === slug && project.hasDetail !== false);
}
