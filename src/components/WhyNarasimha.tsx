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
import { media } from "../data/media";

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
      badgeColor: "text-[#FF7711] bg-[#FF7711]/10 border-[#FF7711]/30",
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
      badgeColor: "text-[#38BDF8] bg-[#38BDF8]/10 border-[#38BDF8]/30",
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
      badgeColor: "text-[#10B981] bg-[#10B981]/10 border-[#10B981]/30",
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
      badgeColor: "text-[#A855F7] bg-[#A855F7]/10 border-[#A855F7]/30",
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
    <section id="why-narasimha" className="w-full bg-[#080808] border-b border-[#222222] py-18 lg:py-28 relative overflow-hidden">
      
      {/* Dynamic Ambient Background Glow */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[450px] blur-[150px] rounded-full pointer-events-none transition-all duration-700 opacity-20"
        style={{ backgroundColor: current.accent }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 lg:mb-18">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#FF7711]/40 mb-4 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7711]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF7711] font-bold">
              WHY NARASIMHA?
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
            Transforming STEM from{" "}
            <span className="bg-gradient-to-r from-[#FF7711] via-[#FFA149] to-[#FF5500] bg-clip-text text-transparent">
              Textbooks
            </span>{" "}
            to Tangible Innovation
          </h2>

          <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed max-w-2xl mx-auto">
            We bridge the gap between abstract academic theory and practical 21st-century engineering skills through our customized, NEP 2020-aligned experiential learning ecosystem.
          </p>
        </div>

        {/* Creative Interactive Showcase: 4 Horizontal Pillar Tabs + Live Interactive Spotlight Deck */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch mb-10">
          
          {/* Left Column: 4 Interactive Pillars Selection List (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col space-y-2.5 justify-start">
            {pillars.map((pillar, idx) => {
              const Icon = pillar.icon;
              const isSelected = activePillar === idx;

              return (
                <button
                  key={pillar.num}
                  onClick={() => setActivePillar(idx)}
                  className={`w-full text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-300 relative cursor-pointer group flex items-center justify-between ${
                    isSelected
                      ? "bg-[#141414] border-white/25 shadow-2xl shadow-black/60 translate-x-1"
                      : "bg-[#0E0E0E] border-white/5 hover:border-white/15 hover:bg-[#121212]"
                  }`}
                >
                  {/* Left Accent Bar when active */}
                  {isSelected && (
                    <div
                      className="absolute left-0 top-2.5 bottom-2.5 w-1 rounded-r-full"
                      style={{ backgroundColor: pillar.accent }}
                    />
                  )}

                  <div className="flex items-center space-x-3.5 min-w-0">
                    {/* Number / Icon */}
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-lg border flex items-center justify-center shrink-0 transition-all duration-300 ${
                        isSelected
                          ? "shadow-md text-black"
                          : "bg-[#161616] border-white/10 text-[#A3A3A3] group-hover:text-white group-hover:border-white/20"
                      }`}
                      style={{
                        backgroundColor: isSelected ? pillar.accent : undefined,
                        borderColor: isSelected ? pillar.accent : undefined,
                      }}
                    >
                      <Icon className="w-4 h-4 sm:w-4.5 sm:h-4.5" />
                    </div>

                    {/* Title & Subtitle */}
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center space-x-2">
                        <span className="text-[10px] font-mono text-[#666666] font-bold">
                          {pillar.num}
                        </span>
                        <h3
                          className={`text-sm font-bold truncate transition-colors ${
                            isSelected ? "text-white" : "text-[#D4D4D4] group-hover:text-white"
                          }`}
                        >
                          {pillar.title}
                        </h3>
                      </div>
                      <p className="text-[11px] sm:text-xs text-[#888888] truncate mt-0.5 font-medium">
                        {pillar.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Arrow Indicator */}
                  <div
                    className={`shrink-0 ml-2 p-1 rounded-lg transition-transform duration-300 ${
                      isSelected
                        ? "text-white translate-x-0.5"
                        : "text-[#555555] group-hover:text-[#A3A3A3]"
                    }`}
                  >
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Featured Spotlight Panel (lg:col-span-7) */}
          <div className="lg:col-span-7">
            <div className="h-full rounded-3xl bg-gradient-to-br from-[#151515] to-[#0E0E0E] border border-white/15 p-6 sm:p-8 lg:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden group">
              
              {/* Corner Watermark Number */}
              <div className="absolute top-4 right-6 font-mono text-7xl sm:text-8xl font-black text-white/[0.03] select-none pointer-events-none">
                {current.num}
              </div>

              {/* Top Row: Tags & Metric Badge */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                  {/* Tag Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {current.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border ${current.badgeColor}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Metric Pill */}
                  <div className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-white/90 flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full" style={{ backgroundColor: current.accent }} />
                    <span className="font-bold">{current.metric}</span>
                  </div>
                </div>

                {/* Main Headline & Subtitle */}
                <div className="flex items-center space-x-3 mb-2">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-black font-bold shadow-md shrink-0"
                    style={{ backgroundColor: current.accent }}
                  >
                    <CurrentIcon className="w-5 h-5 text-black" />
                  </div>
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight">
                    {current.title}
                  </h3>
                </div>

                <p className="text-sm font-semibold text-[#E5E5E5] mb-4">
                  {current.subtitle}
                </p>

                {/* Full Description */}
                <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed mb-6">
                  {current.description}
                </p>

                {/* Key Bullet Highlights */}
                <div className="space-y-2.5 mb-6 pt-5 border-t border-white/10">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-[#666666] font-bold block mb-2">
                    Key Advantages
                  </span>
                  {current.keyHighlights.map((highlight) => (
                    <div key={highlight} className="flex items-start space-x-2.5 text-xs text-[#CCCCCC]">
                      <CheckCircle2
                        className="w-4 h-4 shrink-0 mt-0.5"
                        style={{ color: current.accent }}
                      />
                      <span className="leading-snug">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Footer CTA Card inside Spotlight */}
              <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center space-x-3">
                  <img
                    src={media.highTechLab}
                    alt="Active Lab"
                    className="w-12 h-12 rounded-xl object-cover border border-white/10 shrink-0"
                  />
                  <div className="flex flex-col text-left">
                    <span className="text-xs font-bold text-white">
                      Built for Indian Classrooms & Labs
                    </span>
                    <span className="text-[11px] text-[#888888]">
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

        {/* 4 Bottom Method Cards (Summarized Pillars Grid) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {methodCards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="p-5 rounded-2xl bg-[#111111] border border-white/5 hover:border-[#FF7711]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 rounded-xl bg-[#181818] border border-white/10 flex items-center justify-center text-[#FF7711] group-hover:bg-[#FF7711] group-hover:text-black transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-[#666666] group-hover:text-[#A3A3A3] font-bold">
                      {card.num}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5 group-hover:text-[#FF7711] transition-colors">
                    {card.title}
                  </h4>
                  <p className="text-xs text-[#A3A3A3] leading-relaxed">
                    {card.detail}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-[#FF7711]">
                    {card.metric}
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#555555] group-hover:text-[#FF7711] transition-colors" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

