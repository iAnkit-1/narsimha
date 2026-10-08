import React from "react";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Target } from "lucide-react";

import starterImg from "../assets/starter.jpg";
import learnerImg from "../assets/learner.png";
import performerImg from "../assets/performer.jpg";

export const CenterLearningLevels: React.FC = () => {
  const levels = [
    {
      id: "starter",
      image: starterImg,
      target: "Grades 1–5 • Ages 6–10",
      tagline: "Explore • Learn • Create",
      description: "Hands-on foundation with mechanics, visual block logic, and tactile maker kits.",
      accentColor: "#FF7711",
      badgeStyle: "text-[#FF7711] bg-[#FF7711]/10 border-[#FF7711]/30",
      gradient: "from-[#FF7711]/15 via-[#141414] to-[#0A0A0A]",
      keySkills: [
        "Visual Block Coding & Logic",
        "LEGO-style Modular Robotics",
        "3D Doodling & Basic Circuits",
      ],
      outcome: "Sparks creative curiosity and an early maker mindset.",
    },
    {
      id: "learner",
      image: learnerImg,
      target: "Grades 6–9 • Ages 11–14",
      tagline: "Build • Apply • Innovate",
      description: "Applying concepts to real hardware, microcontrollers, and smart sensors.",
      accentColor: "#38BDF8",
      badgeStyle: "text-[#38BDF8] bg-[#38BDF8]/10 border-[#38BDF8]/30",
      gradient: "from-[#38BDF8]/15 via-[#141414] to-[#0A0A0A]",
      keySkills: [
        "Arduino C++ & Microcontrollers",
        "Smart Sensor & IoT Interfacing",
        "Autonomous Rovers & Drones",
      ],
      outcome: "Transforms theory into functional prototypes & competition projects.",
    },
    {
      id: "performer",
      image: performerImg,
      target: "Grades 10+ & College • Ages 15+",
      tagline: "Master • Build • Career-Ready",
      description: "Advanced engineering, applied AI, IoT ecosystems, and portfolio building.",
      accentColor: "#10B981",
      badgeStyle: "text-[#10B981] bg-[#10B981]/10 border-[#10B981]/30",
      gradient: "from-[#10B981]/15 via-[#141414] to-[#0A0A0A]",
      keySkills: [
        "Python & Applied Computer Vision",
        "3D CAD Prototyping & Fabrication",
        "Industry Capstones & Tech Portfolios",
      ],
      outcome: "Builds resume-worthy engineering capstones & career pathways.",
    },
  ];

  return (
    <div className="pt-10 sm:pt-12 border-t border-[#222222]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-3xl mx-auto mb-10"
      >
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#FF7711]/40 mb-3.5 shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-[#FF7711]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF7711] font-bold">
            LEARNING LEVELS
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.1] mb-3">
          One Journey. Three Levels.{" "}
          <span className="bg-gradient-to-r from-[#FF7711] via-[#FFA149] to-[#FF5500] bg-clip-text text-transparent">
            A Future of Possibilities.
          </span>
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          A structured 3-tier milestone roadmap mapping every learner from playful discovery to industry-level innovation.
        </p>
      </motion.div>

      {/* 3 Level Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
        {levels.map((lvl, idx) => (
          <motion.div
            key={lvl.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: idx * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className={`group relative rounded-3xl bg-gradient-to-b ${lvl.gradient} border border-white/10 hover:border-white/25 p-5 sm:p-6 flex flex-col justify-between shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden`}
            style={{
              boxShadow: `0 12px 40px rgba(0,0,0,0.6)`,
            }}
          >
            {/* Top Accent Line */}
            <div
              className="absolute top-0 inset-x-8 h-1 rounded-b-full opacity-60 group-hover:opacity-100 transition-opacity"
              style={{
                backgroundColor: lvl.accentColor,
                boxShadow: `0 0 14px ${lvl.accentColor}`,
              }}
            />

            <div>
              {/* Level Image Banner (Uniform Fixed Height & Object-Cover) */}
              <div className="relative w-full h-48 sm:h-52 md:h-56 rounded-2xl overflow-hidden border border-white/10 mb-4 group-hover:border-white/20 transition-all bg-black/80 shadow-lg">
                <img
                  src={lvl.image}
                  alt={lvl.tagline}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.04]"
                  loading="lazy"
                />
              </div>

              {/* Target & Tagline Row */}
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className={`text-[10px] sm:text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${lvl.badgeStyle}`}>
                  {lvl.target}
                </span>
                <span
                  className="text-xs font-mono font-bold tracking-wide"
                  style={{ color: lvl.accentColor }}
                >
                  {lvl.tagline}
                </span>
              </div>

              {/* Short Summary Description */}
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                {lvl.description}
              </p>

              {/* Key Skill Pills */}
              <div className="space-y-1.5 mb-5">
                {lvl.keySkills.map((skill, sIdx) => (
                  <div
                    key={sIdx}
                    className="flex items-center space-x-2 text-xs text-slate-200 bg-white/[0.04] border border-white/5 px-2.5 py-1.5 rounded-xl"
                  >
                    <CheckCircle2
                      className="w-3.5 h-3.5 shrink-0"
                      style={{ color: lvl.accentColor }}
                    />
                    <span className="font-medium truncate">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Outcome Target Box */}
            <div
              className="p-3.5 sm:p-4 rounded-2xl bg-black/60 border border-white/10 mt-auto"
              style={{ borderLeft: `3px solid ${lvl.accentColor}` }}
            >
              <div className="flex items-center space-x-1.5 mb-1">
                <Target className="w-3.5 h-3.5" style={{ color: lvl.accentColor }} />
                <span
                  className="text-[10px] font-mono font-bold uppercase tracking-wider"
                  style={{ color: lvl.accentColor }}
                >
                  Key Outcome
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-normal">
                {lvl.outcome}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
