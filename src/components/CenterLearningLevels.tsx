import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const CenterLearningLevels: React.FC = () => {
  const levels = [
    {
      id: "starter",
      levelNumber: "LEVEL 01",
      name: "Starter",
      image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=format&fit=crop&w=800&q=80",
      accentColor: "#FF7711",
      badgeStyle: "text-[#FF7711] bg-[#FF7711]/15 border-[#FF7711]/35",
      phrases: [
        "Build strong foundations",
        "Develop curiosity",
        "Create a “learning by doing” mindset",
      ],
    },
    {
      id: "learner",
      levelNumber: "LEVEL 02",
      name: "Learner",
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=800&q=80",
      accentColor: "#38BDF8",
      badgeStyle: "text-[#38BDF8] bg-[#38BDF8]/15 border-[#38BDF8]/35",
      phrases: [
        "Turn learning into practical skills",
        "Drive innovation",
        "Build impressive projects",
      ],
    },
    {
      id: "performer",
      levelNumber: "LEVEL 03",
      name: "Performer",
      image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80",
      accentColor: "#10B981",
      badgeStyle: "text-[#10B981] bg-[#10B981]/15 border-[#10B981]/35",
      phrases: [
        "Transform technical skills into strong portfolios",
        "Develop professional confidence",
        "Internship opportunities and job & placement readiness",
      ],
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
            A Future of Possibilities
          </span>
        </h2>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto font-normal leading-relaxed">
          A structured 3-tier milestone roadmap mapping every learner from playful discovery to industry-level innovation.
        </p>
      </motion.div>

      {/* 3 Level Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-7">
        {levels.map((lvl, idx) => (
          <motion.div
            key={lvl.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: idx * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="group relative rounded-3xl bg-[#111111] border border-white/10 hover:border-white/30 p-5 sm:p-6 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 overflow-hidden"
          >
            {/* Top Accent Line */}
            <div
              className="absolute top-0 inset-x-0 h-1 transition-all duration-300 opacity-70 group-hover:opacity-100"
              style={{
                backgroundColor: lvl.accentColor,
                boxShadow: `0 0 16px ${lvl.accentColor}`,
              }}
            />

            <div>
              {/* Visual Hero Image Container */}
              <div className="relative w-full h-48 sm:h-52 rounded-2xl overflow-hidden border border-white/10 mb-5 bg-black">
                <img
                  src={lvl.image}
                  alt={`${lvl.name} Level`}
                  className="w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05] group-hover:scale-108 group-hover:brightness-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                {/* Level Badge Overlay */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[10px] font-mono font-bold uppercase tracking-wider text-white shadow-md">
                  {lvl.levelNumber}
                </div>
              </div>

              {/* Level Title Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-black text-white tracking-tight">
                  {lvl.name}
                </h3>
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{
                    backgroundColor: lvl.accentColor,
                    boxShadow: `0 0 10px ${lvl.accentColor}`,
                  }}
                />
              </div>

              {/* 3 Core Milestone Phrases */}
              <div className="space-y-3">
                {lvl.phrases.map((phrase, pIdx) => (
                  <div
                    key={pIdx}
                    className="flex items-start space-x-3.5 p-3.5 rounded-2xl bg-white/[0.03] border border-white/5 group-hover:border-white/15 transition-all duration-200"
                  >
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-0.5 text-xs font-mono font-bold"
                      style={{
                        backgroundColor: `${lvl.accentColor}18`,
                        color: lvl.accentColor,
                        border: `1px solid ${lvl.accentColor}35`,
                      }}
                    >
                      0{pIdx + 1}
                    </div>
                    <p className="text-[13px] sm:text-sm font-medium text-[#E2E8F0] leading-snug">
                      {phrase}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
