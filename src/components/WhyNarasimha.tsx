import React, { useState } from "react";
import {
  Rocket,
  BookOpenCheck,
  Cpu,
  Building2,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  ChevronRight,
  Hammer,
  Award,
  GraduationCap,
} from "lucide-react";
import { media } from "../assets/data/media";

interface WhyNarasimhaProps {
  onPartnerClick?: () => void;
}

export const WhyNarasimha: React.FC<WhyNarasimhaProps> = ({ onPartnerClick }) => {
  const [activePillar, setActivePillar] = useState<number>(0);

  const pillars = [
    {
      num: "01",
      icon: Rocket,
      title: "Beyond Books",
      subtitle: "Learn by Doing. Build by Creating.",
      description:
        "We transform STEM concepts into real learning experiences through experiments, working models, projects and problem-solving activities—helping students move from understanding concepts to applying them.",
      tags: ["HANDS-ON", "EXPERIENTIAL", "PROJECT-BASED"],
      metric: "Real Working Models",
      accent: "#FF7711",
      badgeColor: "text-[#FF7711] bg-[#FF7711]/15 border-[#FF7711]/40",
      keyHighlights: [
        "Hands-on experiments with physical hardware & sensors",
        "Project-first mindset with working prototypes",
        "Active problem solving replacing passive memorization",
      ],
    },
    {
      num: "02",
      icon: BookOpenCheck,
      title: "NEP 2020 Aligned",
      subtitle: "Education That Builds Future-Ready Skills",
      description:
        "Our learning approach supports the NEP 2020 vision of experiential learning, conceptual understanding, creativity, critical thinking, technology exposure and skill development—making STEM learning more relevant beyond examinations.",
      tags: ["NEP 2020", "SKILL DEVELOPMENT", "FUTURE READY"],
      metric: "National Standard",
      accent: "#38BDF8",
      badgeColor: "text-[#38BDF8] bg-[#38BDF8]/15 border-[#38BDF8]/40",
      keyHighlights: [
        "Aligned with National Education Policy (NEP 2020)",
        "Focus on 21st-century computational & critical thinking",
        "Continuous holistic progress tracking & certification",
      ],
    },
    {
      num: "03",
      icon: Cpu,
      title: "70% Practical • 30% Theory",
      subtitle: "Learn → Build → Apply",
      description:
        "Our programs place a strong emphasis on hands-on learning, with a 70:30 practical-to-theory approach. Students learn concepts and immediately apply them through experiments, prototypes, challenges and real-world projects.",
      tags: ["70% PRACTICAL", "30% THEORY", "REAL-WORLD APPLICATION"],
      metric: "70:30 Ratio",
      accent: "#10B981",
      badgeColor: "text-[#10B981] bg-[#10B981]/15 border-[#10B981]/40",
      keyHighlights: [
        "70% time dedicated to coding, building & testing",
        "Learn concepts and instantly test on hardware",
        "Structured trial-and-error design cycles",
      ],
    },
    {
      num: "04",
      icon: Building2,
      title: "Customized for Every Institution",
      subtitle: "Your School. Your Needs. Your STEM Ecosystem.",
      description:
        "No two schools are the same. We customize the learning pathway, curriculum, infrastructure, activities and implementation model around each institution's available resources, student needs and educational goals.",
      tags: ["CUSTOMIZED", "FLEXIBLE", "SCALABLE"],
      metric: "100% Tailored",
      accent: "#A855F7",
      badgeColor: "text-[#A855F7] bg-[#A855F7]/15 border-[#A855F7]/40",
      keyHighlights: [
        "Customized lab layouts & infrastructure setups",
        "Flexible grade-specific module selection",
        "Continuous mentor support and faculty upskilling",
      ],
    },
  ];

  const current = pillars[activePillar];
  const CurrentIcon = current.icon;

  const methodCards = [
    {
      num: "01",
      icon: Hammer,
      title: "Hands-on First",
      detail: "70% Practical, 30% Theory. Students learn by building, testing and experimenting.",
      metric: "70/30 Ratio",
    },
    {
      num: "02",
      icon: Award,
      title: "Structured Grading",
      detail: "Monthly assessments and certification for every student.",
      metric: "Monthly Audit",
    },
    {
      num: "03",
      icon: Cpu,
      title: "Real-World Projects",
      detail: "Students work on actual problems instead of only assembling kits.",
      metric: "Industry Relevant",
    },
    {
      num: "04",
      icon: GraduationCap,
      title: "Teacher Training",
      detail: "Faculty are upskilled so the school can sustain the innovation ecosystem.",
      metric: "FDP Certified",
    },
  ];

  return (
    <section id="why-narasimha" className="w-full py-20 lg:py-28 relative overflow-hidden bg-[#080808]">

      {/* ========================================================================= */}
      {/* 1. BRAND LOGO BACKGROUND (CLEAR VISIBILITY, NO BLINKING)                  */}
      {/* ========================================================================= */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
        {/* Large Centered Logo Background */}
        <div className="relative w-[480px] h-[480px] sm:w-[650px] sm:h-[650px] lg:w-[850px] lg:h-[850px] flex items-center justify-center opacity-40 select-none">
          <img
            src={media.logo || "/logo.png"}
            alt="Narasimha Skill Sphere Logo"
            className="w-full h-full object-contain filter drop-shadow-[0_0_60px_rgba(255,119,17,0.3)]"
          />
        </div>

        {/* Very soft vignette at top and bottom edges only */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/50 via-transparent to-[#080808]/60 pointer-events-none" />

        {/* Section Top & Bottom separator border lines */}
        <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* ========================================================================= */}
        {/* 2. SECTION HEADER                                                         */}
        {/* ========================================================================= */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-4 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7711]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF7711] font-bold">
              WHY NARASIMHA?
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4 drop-shadow-md">
            Transforming STEM from{" "}
            <span className="bg-gradient-to-r from-[#FF7711] via-[#FFA149] to-[#FF5500] bg-clip-text text-transparent">
              Textbooks
            </span>{" "}
            to Tangible Innovation
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal drop-shadow-sm">
            We bridge the gap between abstract academic theory and practical 21st-century engineering skills through our customized, NEP 2020-aligned experiential learning ecosystem.
          </p>
        </div>

        {/* ========================================================================= */}
        {/* 3. INTERACTIVE 4 PILLAR TABS + LIVE SPOTLIGHT DECK (GLASSMORPHIC)         */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-10">

          {/* Left Column: 4 Frosted Glass Pillar Tabs (5 cols) */}
          <div className="lg:col-span-5 flex flex-col space-y-3 justify-start">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isSelected = activePillar === idx;

              return (
                <button
                  key={pillar.num}
                  onClick={() => setActivePillar(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 relative cursor-pointer group flex items-center justify-between backdrop-blur-xl ${
                    isSelected
                      ? "bg-white/[0.12] border-white/30 shadow-[0_12px_32px_rgba(0,0,0,0.6)] translate-x-1.5"
                      : "bg-white/[0.04] border-white/10 hover:border-white/20 hover:bg-white/[0.08]"
                  }`}
                >
                  {/* Glowing Active Border Line */}
                  {isSelected && (
                    <div
                      className="absolute left-0 top-3 bottom-3 w-1 rounded-r-full shadow-[0_0_12px]"
                      style={{
                        backgroundColor: pillar.accent,
                        boxShadow: `0 0 12px ${pillar.accent}`,
                      }}
                    />
                  )}

                  <div className="flex items-center space-x-3.5 min-w-0 pl-1">
                    {/* Icon Badge */}
                    <div
                      className={`w-10 h-10 rounded-xl border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isSelected
                          ? "shadow-lg text-black font-bold scale-105"
                          : "bg-white/[0.06] border-white/15 text-slate-300 group-hover:text-white group-hover:border-white/30"
                      }`}
                      style={{
                        backgroundColor: isSelected ? pillar.accent : undefined,
                        borderColor: isSelected ? pillar.accent : undefined,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Title & Subtitle */}
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-mono text-slate-400 font-bold">
                          {pillar.num}
                        </span>
                        <h3
                          className={`text-sm sm:text-base font-bold truncate transition-colors ${
                            isSelected ? "text-white" : "text-slate-200 group-hover:text-white"
                          }`}
                        >
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-xs text-slate-400 truncate mt-0.5 font-medium">
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Right Chevron */}
                  <div
                    className={`shrink-0 ml-2 p-1.5 rounded-xl transition-all duration-300 ${
                      isSelected
                        ? "text-white bg-white/10 translate-x-0.5"
                        : "text-slate-500 group-hover:text-slate-300"
                    }`}
                  >
                    <ChevronRight className="w-4 h-4" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Elevated Glass Spotlight Panel (7 cols) */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-3xl bg-gradient-to-br from-white/[0.12] via-white/[0.05] to-black/60 backdrop-blur-2xl border border-white/25 hover:border-white/35 p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-[0_25px_60px_rgba(0,0,0,0.75)] relative overflow-hidden group transition-all duration-300">

              {/* Glowing Top Edge Highlight */}
              <div
                className="absolute top-0 inset-x-8 h-1 transition-all duration-500"
                style={{
                  background: `linear-gradient(to right, transparent, ${current.accent}, transparent)`,
                }}
              />

              {/* Corner Watermark Number */}
              <div className="absolute top-4 right-6 font-mono text-7xl sm:text-8xl font-black text-white/[0.05] select-none pointer-events-none">
                {current.num}
              </div>

              {/* Top Row: Tags & Metric Pill */}
              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {current.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] font-mono font-bold px-3 py-1 rounded-full border backdrop-blur-md shadow-sm ${current.badgeColor}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metric Pill */}
                  <div className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-mono text-white flex items-center space-x-2 shadow-sm">
                    <span
                      className="w-2 h-2 rounded-full shadow-[0_0_8px]"
                      style={{
                        backgroundColor: current.accent,
                        boxShadow: `0 0 8px ${current.accent}`,
                      }}
                    />
                    <span className="font-bold">{current.metric}</span>
                  </div>
                </div>

                {/* Main Headline & Subtitle */}
                <div className="flex items-center space-x-3 mb-2.5">
                  <div
                    className="w-11 h-11 rounded-2xl flex items-center justify-center text-black font-bold shadow-lg shrink-0"
                    style={{ backgroundColor: current.accent }}
                  >
                    <CurrentIcon className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                    {current.title}
                  </h3>
                </div>

                <p className="text-sm sm:text-base font-semibold text-amber-200/90 mb-4">
                  {current.subtitle}
                </p>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 font-normal">
                  {current.description}
                </p>

                {/* Key Bullet Highlights Glass Box */}
                <div className="space-y-2.5 mb-6 p-4 sm:p-5 rounded-2xl bg-black/40 backdrop-blur-md border border-white/10">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 font-bold block mb-1">
                    Key Advantages
                  </span>
                  {current.keyHighlights.map((highlight) => (
                    <div key={highlight} className="flex items-start space-x-2.5 text-xs sm:text-[13px] text-slate-200">
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: current.accent }}
                      />
                      <span className="leading-snug">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Footer Action Strip */}
              <div className="pt-4 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-4 relative z-10">
                <div className="flex items-center space-x-3">
                  <img
                    src={media.highTechLab}
                    alt="Active Lab"
                    className="w-12 h-12 rounded-xl object-cover border border-white/20 shadow-md shrink-0"
                  />
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold text-white">
                      Built for Indian Classrooms & Labs
                    </span>
                    <span className="text-[11px] text-slate-400">
                      Turnkey Setup • Trained Mentors • LMS Integrated
                    </span>
                  </div>
                </div>

                {onPartnerClick && (
                  <button
                    onClick={onPartnerClick}
                    className="w-full sm:w-auto btn-orange-primary px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center space-x-2 cursor-pointer shadow-lg hover:shadow-orange-glow transition-all shrink-0"
                  >
                    <span>Partner With Us</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

            </div>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* 4. FOUR BOTTOM METHOD CARDS (GLASS GRID)                                  */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {methodCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="p-5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-xl border border-white/10 hover:border-[#FF7711]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-3.5">
                    <div className="w-9 h-9 rounded-xl bg-white/[0.08] border border-white/15 flex items-center justify-center text-[#FF7711] group-hover:bg-[#FF7711] group-hover:text-black transition-all shadow-sm">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-slate-400 group-hover:text-white font-bold">
                      {card.num}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5 group-hover:text-[#FF7711] transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed font-normal">
                    {card.detail}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#FF7711]">
                    {card.metric}
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#FF7711] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
