import React, { useState } from "react";
import {
  Rocket,
  BookOpenCheck,
  Cpu,
  Building2,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  Layers,
  Wrench,
  GraduationCap,
  Award,
} from "lucide-react";
import { media } from "../assets/data/media";

interface WhyNarasimhaProps {
  onPartnerClick?: () => void;
}

export const WhyNarasimha: React.FC<WhyNarasimhaProps> = ({ onPartnerClick }) => {
  const [activePillar, setActivePillar] = useState<number | null>(null);
  const [hoveredPillar, setHoveredPillar] = useState<number | null>(null);

  const pillars = [
    {
      num: "01",
      icon: Rocket,
      title: "Beyond Books",
      subtitle: "Experiential Learning",
      description:
        "Transform abstract STEM theory into physical prototypes, experiments, and working models.",
      metric: "Real Working Models",
      accent: "#FF7711",
      badgeColor: "text-[#FF7711] bg-[#FF7711]/10 border-[#FF7711]/30",
      highlights: [
        "Hands-on hardware & sensor prototyping",
        "Active problem solving over rote memorization",
      ],
    },
    {
      num: "02",
      icon: BookOpenCheck,
      title: "NEP 2020 Aligned",
      subtitle: "Future-Ready Skills",
      description:
        "Structured around national guidelines to build 21st-century computational & critical thinking.",
      metric: "National Standard",
      accent: "#38BDF8",
      badgeColor: "text-[#38BDF8] bg-[#38BDF8]/10 border-[#38BDF8]/30",
      highlights: [
        "Inquiry-driven computational thinking",
        "Continuous holistic progress & certification",
      ],
    },
    {
      num: "03",
      icon: Cpu,
      title: "70% Practical • 30% Theory",
      subtitle: "Learn → Build → Apply",
      description:
        "Maximum lab time dedicated to hands-on wiring, coding, testing, and iterative design cycles.",
      metric: "70:30 Ratio",
      accent: "#10B981",
      badgeColor: "text-[#10B981] bg-[#10B981]/10 border-[#10B981]/30",
      highlights: [
        "Immediate hardware verification of concepts",
        "Structured trial-and-error engineering",
      ],
    },
    {
      num: "04",
      icon: Building2,
      title: "Tailored for Schools",
      subtitle: "Turnkey STEM Setup",
      description:
        "Customized lab layouts, grade-specific curriculum, and complete faculty upskilling.",
      metric: "100% Customized",
      accent: "#A855F7",
      badgeColor: "text-[#A855F7] bg-[#A855F7]/10 border-[#A855F7]/30",
      highlights: [
        "Flexible infrastructure & curriculum roadmap",
        "Dedicated mentor support & faculty training",
      ],
    },
  ];

  const statPills = [
    { icon: Wrench, label: "70:30 Hands-On", desc: "Build & Test First" },
    { icon: Award, label: "NEP 2020", desc: "National Framework" },
    { icon: Layers, label: "Turnkey Labs", desc: "Hardware + Curriculum" },
    { icon: GraduationCap, label: "Faculty Upskilling", desc: "Certified Mentorship" },
  ];

  return (
    <section id="why-narasimha" className="w-full py-12 sm:py-14 lg:py-16 relative overflow-hidden bg-[#080808]">
      
      {/* Background Brand Logo Ambient Glow (Subtle opacity watermark) */}
      <div className="absolute inset-0 z-0 flex items-center justify-center overflow-hidden pointer-events-none">
        <div className="relative w-[450px] h-[450px] sm:w-[600px] sm:h-[600px] lg:w-[750px] lg:h-[750px] flex items-center justify-center opacity-10 select-none">
          <img
            src={media.logo || "/logo.png"}
            alt="Narasimha Skill Sphere Logo"
            className="w-full h-full object-contain filter drop-shadow-[0_0_60px_rgba(255,119,17,0.2)]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808]/80 via-transparent to-[#080808]/80 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 mb-3.5 shadow-lg">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7711]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF7711] font-bold">
              WHY NARASIMHA?
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.08] mb-3">
            Transforming STEM from{" "}
            <span className="bg-gradient-to-r from-[#FF7711] via-[#FFA149] to-[#FF5500] bg-clip-text text-transparent">
              Textbooks to Tangible Innovation
            </span>
          </h2>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto font-normal">
            Bridging abstract concepts and practical engineering through our customized, NEP 2020-aligned experiential ecosystem.
          </p>
        </div>

        {/* 4 Interactive Feature Pillars in a Modern Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 mb-8">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            const isSelected = activePillar === idx;
            const isHovered = hoveredPillar === idx;
            const isActiveState = isSelected || isHovered;

            return (
              <div
                key={pillar.num}
                onClick={() => setActivePillar((prev) => (prev === idx ? null : idx))}
                onMouseEnter={() => setHoveredPillar(idx)}
                onMouseLeave={() => setHoveredPillar(null)}
                className={`relative rounded-2xl p-5 sm:p-6 transition-all duration-300 cursor-pointer flex flex-col justify-between group backdrop-blur-xl border ${
                  isActiveState
                    ? "bg-white/[0.10] shadow-[0_16px_40px_rgba(0,0,0,0.8)] -translate-y-1.5"
                    : "bg-white/[0.03] border-white/10 hover:bg-white/[0.06]"
                }`}
                style={{
                  borderColor: isActiveState ? pillar.accent : "rgba(255,255,255,0.1)",
                  boxShadow: isActiveState ? `0 16px 40px rgba(0,0,0,0.8), 0 0 20px ${pillar.accent}20` : undefined,
                }}
              >
                {/* Active & Hover Glowing Indicator Top Accent Bar */}
                <div
                  className={`absolute top-0 inset-x-6 h-1 rounded-b-full transition-opacity duration-300 ${
                    isActiveState ? "opacity-100" : "opacity-0"
                  }`}
                  style={{
                    backgroundColor: pillar.accent,
                    boxShadow: `0 0 12px ${pillar.accent}`,
                  }}
                />

                <div>
                  {/* Top Row: Icon + Metric Tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isActiveState
                          ? "shadow-lg text-black font-bold scale-105"
                          : "bg-white/[0.06] border border-white/15 text-slate-300"
                      }`}
                      style={{
                        backgroundColor: isActiveState ? pillar.accent : undefined,
                        borderColor: isActiveState ? pillar.accent : undefined,
                        color: isActiveState ? "#000000" : undefined,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>

                    <span
                      className={`text-[10px] font-mono font-bold px-2.5 py-1 rounded-full border transition-all ${
                        isActiveState ? "border-current" : ""
                      } ${pillar.badgeColor}`}
                    >
                      {pillar.metric}
                    </span>
                  </div>

                  {/* Title & Subtitle */}
                  <div className="mb-2.5">
                    <span className="text-[10px] font-mono text-slate-400 font-bold block mb-0.5">
                      PILLAR {pillar.num}
                    </span>
                    <h3
                      className={`text-base sm:text-lg font-bold tracking-tight transition-colors ${
                        isActiveState ? "text-white" : "text-slate-100 group-hover:text-white"
                      }`}
                    >
                      {pillar.title}
                    </h3>
                    <span className="text-xs font-semibold text-slate-400 block mt-0.5">
                      {pillar.subtitle}
                    </span>
                  </div>

                  {/* Short Summary Description */}
                  <p className="text-xs text-slate-300 leading-relaxed mb-4">
                    {pillar.description}
                  </p>
                </div>

                {/* Key Points */}
                <div className="space-y-1.5 pt-3 border-t border-white/10">
                  {pillar.highlights.map((h, i) => (
                    <div key={i} className="flex items-start space-x-2 text-[11px] text-slate-300">
                      <CheckCircle2
                        className="w-3.5 h-3.5 shrink-0 mt-0.5"
                        style={{ color: pillar.accent }}
                      />
                      <span className="leading-tight">{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Streamlined Stats Strip + Action Bar */}
        <div className="rounded-2xl bg-gradient-to-r from-white/[0.05] via-white/[0.08] to-white/[0.03] backdrop-blur-xl border border-white/15 p-4 sm:p-5 flex flex-col lg:flex-row items-center justify-between gap-4 shadow-xl">
          
          {/* Quick Metrics Icons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full lg:w-auto">
            {statPills.map((stat, i) => {
              const StatIcon = stat.icon;
              return (
                <div
                  key={i}
                  className="flex items-center space-x-2.5 px-3 py-2 rounded-xl bg-black/40 border border-white/10"
                >
                  <StatIcon className="w-4 h-4 text-[#FF7711] shrink-0" />
                  <div className="text-left">
                    <span className="text-xs font-bold text-white block leading-tight">
                      {stat.label}
                    </span>
                    <span className="text-[10px] text-slate-400 block leading-tight">
                      {stat.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Partnership CTA Button */}
          {onPartnerClick && (
            <button
              onClick={onPartnerClick}
              className="w-full lg:w-auto btn-orange-primary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center space-x-2 cursor-pointer shadow-lg hover:shadow-orange-glow transition-all shrink-0"
            >
              <span>Setup STEM Lab in Your School</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

      </div>
    </section>
  );
};
