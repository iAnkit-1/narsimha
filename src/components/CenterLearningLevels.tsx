import React from "react";
import { motion } from "framer-motion";
import { Sparkles, GitBranch, Compass, Cpu, Trophy } from "lucide-react";

export const CenterLearningLevels: React.FC = () => {
  const levels = [
    {
      id: "starter",
      levelNumber: "LEVEL 01",
      name: "Starter",
      branchName: "Branch 01",
      branchLabel: "Foundation & Discovery",
      tagline: "Build strong foundations, develop curiosity, and cultivate a “learning by doing” mindset.",
      targetAudience: "Grades K–5 & Beginners",
      accentColor: "#FF7711",
      icon: Compass,
      phrases: [
        "Build strong foundations",
        "Develop curiosity",
        "Create a “learning by doing” mindset",
      ],
      keyTools: ["Robotics Exploration", "Block Coding", "3D Printing Pens"],
    },
    {
      id: "learner",
      levelNumber: "LEVEL 02",
      name: "Learner",
      branchName: "Branch 02",
      branchLabel: "Application & Innovation",
      tagline: "Turn learning into practical engineering skills, creative coding, and impressive working projects.",
      targetAudience: "Grades 6–8 & Intermediate",
      accentColor: "#38BDF8",
      icon: Cpu,
      phrases: [
        "Turn learning into practical skills",
        "Drive innovation",
        "Build impressive projects",
      ],
      keyTools: ["Arduino C++ & Sensors", "IoT Automation", "3D CAD Modeling"],
    },
    {
      id: "performer",
      levelNumber: "LEVEL 03",
      name: "Performer",
      branchName: "Branch 03",
      branchLabel: "Mastery & Placement",
      tagline: "Transform technical mastery into verified portfolios, professional confidence, and career readiness.",
      targetAudience: "Grades 9–12 & Advanced",
      accentColor: "#10B981",
      icon: Trophy,
      phrases: [
        "Transform technical skills into strong portfolios",
        "Develop professional confidence",
        "Internship opportunities and job & placement readiness",
      ],
      keyTools: ["Applied AI & Python", "National Hackathons", "Industry Portfolio"],
    },
  ];

  return (
    <div className="pt-10 sm:pt-14 border-t border-[#222222] relative">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-3xl mx-auto mb-6"
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
            A Future of Possibilities
          </span>
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          A structured 3-tier milestone roadmap branching directly from foundational discovery to industry-level innovation.
        </p>
      </motion.div>

      {/* Central Branching Hub / Origin */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="flex flex-col items-center justify-center relative z-20"
      >
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-[#141414] border border-[#FF7711]/40 shadow-[0_0_25px_rgba(255,119,17,0.2)] text-xs font-mono font-bold text-white">
          <GitBranch className="w-4 h-4 text-[#FF7711]" />
          <span className="uppercase tracking-widest text-[#F1F1F1]">Learning Levels Origin</span>
        </div>
      </motion.div>

      {/* Desktop SVG Branching Tree Connector (hidden on mobile, visible on lg) */}
      <div className="hidden lg:block relative w-full max-w-6xl mx-auto h-20 -mt-1 pointer-events-none z-10">
        <svg
          viewBox="0 0 1000 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full overflow-visible"
        >
          <defs>
            <linearGradient id="branch1-grad" x1="500" y1="18" x2="157" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF7711" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#FF7711" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="branch2-grad" x1="500" y1="18" x2="500" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF7711" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#38BDF8" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#38BDF8" stopOpacity="1" />
            </linearGradient>
            <linearGradient id="branch3-grad" x1="500" y1="18" x2="843" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF7711" stopOpacity="0.8" />
              <stop offset="60%" stopColor="#10B981" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#10B981" stopOpacity="1" />
            </linearGradient>
            <filter id="branch-glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Center trunk from hub down to fork point */}
          <path
            d="M 500 0 L 500 20"
            stroke="#FF7711"
            strokeWidth="2.5"
            strokeLinecap="round"
          />

          {/* Fork Junction Point */}
          <circle cx="500" cy="20" r="4.5" fill="#FF7711" />
          <circle cx="500" cy="20" r="8" stroke="#FF7711" strokeWidth="1.2" opacity="0.4" />

          {/* Branch 1 (Starter - Left) */}
          <path
            d="M 500 20 C 500 52, 157 28, 157 78"
            stroke="url(#branch1-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#branch-glow)"
          />
          <circle cx="157" cy="78" r="4" fill="#FF7711" />
          <circle cx="157" cy="78" r="7.5" stroke="#FF7711" strokeWidth="1.5" opacity="0.5" className="animate-pulse" />

          {/* Branch 2 (Learner - Center) */}
          <path
            d="M 500 20 L 500 78"
            stroke="url(#branch2-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#branch-glow)"
          />
          <circle cx="500" cy="78" r="4" fill="#38BDF8" />
          <circle cx="500" cy="78" r="7.5" stroke="#38BDF8" strokeWidth="1.5" opacity="0.5" className="animate-pulse" />

          {/* Branch 3 (Performer - Right) */}
          <path
            d="M 500 20 C 500 52, 843 28, 843 78"
            stroke="url(#branch3-grad)"
            strokeWidth="2.5"
            strokeLinecap="round"
            filter="url(#branch-glow)"
          />
          <circle cx="843" cy="78" r="4" fill="#10B981" />
          <circle cx="843" cy="78" r="7.5" stroke="#10B981" strokeWidth="1.5" opacity="0.5" className="animate-pulse" />
        </svg>
      </div>

      {/* Mobile Branch Stem (visible only on mobile) */}
      <div className="lg:hidden flex flex-col items-center my-4">
        <div className="w-0.5 h-6 bg-gradient-to-b from-[#FF7711] to-white/20" />
      </div>

      {/* 3 Level Branch Cards (No Images) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6 relative z-10">
        {levels.map((lvl, idx) => {
          const Icon = lvl.icon;
          return (
            <motion.div
              key={lvl.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ delay: idx * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="group relative rounded-2xl bg-[#111111]/95 border border-white/10 hover:border-white/30 pt-4 pb-4 px-4 sm:pt-5 sm:pb-5 sm:px-5 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden backdrop-blur-sm"
              style={{
                boxShadow: `0 4px 20px -5px ${lvl.accentColor}18`,
              }}
            >
              {/* Top Accent Line */}
              <div
                className="absolute top-0 inset-x-0 h-1 transition-all duration-300 opacity-80 group-hover:opacity-100"
                style={{
                  backgroundColor: lvl.accentColor,
                  boxShadow: `0 0 16px ${lvl.accentColor}`,
                }}
              />

              {/* Branch Connection Top Dot (hidden on mobile, visible on desktop) */}
              <div
                className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full border-2 border-black hidden lg:block"
                style={{
                  backgroundColor: lvl.accentColor,
                  boxShadow: `0 0 10px ${lvl.accentColor}`,
                }}
              />

              <div>
                {/* Branch Origin Pill & Level Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="inline-flex items-center space-x-1.5 px-2.5 py-1 rounded-full bg-black/60 border border-white/10 text-[11px] font-mono font-bold uppercase tracking-wider text-white">
                    <GitBranch
                      className="w-3.5 h-3.5"
                      style={{ color: lvl.accentColor }}
                    />
                  </div>

                  <span
                    className="text-[10px] font-mono font-bold px-2 py-0.5 rounded-md uppercase tracking-wider"
                    style={{
                      backgroundColor: `${lvl.accentColor}18`,
                      color: lvl.accentColor,
                      border: `1px solid ${lvl.accentColor}35`,
                    }}
                  >
                    {lvl.levelNumber}
                  </span>
                </div>

                {/* Level Title + Icon */}
                <div className="flex items-center space-x-3 mb-2.5">
                  <div
                    className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-105 transition-transform"
                    style={{
                      backgroundColor: `${lvl.accentColor}15`,
                      border: `1px solid ${lvl.accentColor}40`,
                      color: lvl.accentColor,
                    }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
                      {lvl.name}
                    </h3>
                    <p className="text-[11px] font-mono text-white/60">
                      {lvl.targetAudience}
                    </p>
                  </div>
                </div>

                {/* Branch Mission Tagline */}
                <p className="text-xs sm:text-[13px] text-white/80 leading-relaxed font-normal mb-3.5">
                  {lvl.tagline}
                </p>

                {/* 3 Core Milestone Phrases */}
                <div className="space-y-2">
                  {lvl.phrases.map((phrase, pIdx) => (
                    <div
                      key={pIdx}
                      className="flex items-start space-x-2.5 py-2 px-2.5 rounded-xl bg-white/[0.03] border border-white/5 group-hover:border-white/15 transition-all duration-200"
                    >
                      <div
                        className="w-5 h-5 rounded-md flex items-center justify-center shrink-0 mt-0.5 text-[11px] font-mono font-bold"
                        style={{
                          backgroundColor: `${lvl.accentColor}18`,
                          color: lvl.accentColor,
                          border: `1px solid ${lvl.accentColor}35`,
                        }}
                      >
                        0{pIdx + 1}
                      </div>
                      <p className="text-xs sm:text-[13px] font-medium text-[#E2E8F0] leading-snug">
                        {phrase}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

