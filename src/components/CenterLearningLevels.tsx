import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";

export const CenterLearningLevels: React.FC = () => {
  return (
    <div className="pt-14 border-t border-[#222222]">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        className="text-center max-w-3xl mx-auto mb-14"
      >
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#FF7711]/40 mb-3.5 shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-[#FF7711]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF7711] font-bold">
            LEARNING LEVELS
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-4">
          One Journey. Three Levels.{" "}
          <span className="bg-gradient-to-r from-[#FF7711] via-[#FFA149] to-[#FF5500] bg-clip-text text-transparent">
            A Future of Possibilities.
          </span>
        </h2>

        <p className="text-sm sm:text-base text-[#D4D4D4] leading-relaxed mb-2 font-medium">
          Learning should grow with the learner — from curiosity to skills, and from skills to careers.
        </p>
        <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed">
          At Narasimha Skill Sphere, our three progressive levels help learners build foundations, develop practical skills, create projects, and become career-ready.
        </p>
      </motion.div>

      {/* 3 Level Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {[
          {
            id: "starter",
            level: "LEVEL 01",
            name: "STARTER",
            tagline: "Explore • Learn • Create",
            description:
              "Students begin their learning journey by exploring technology through hands-on activities, experiments, creativity, and guided projects.",
            goal: "Build strong foundations, develop curiosity, and create a “learning by doing” mindset.",
            accentColor: "text-[#FF7711]",
            bgGradient: "from-[#FF7711]/15 via-[#141414] to-[#0D0D0D]",
            borderColor: "border-[#FF7711]/30 hover:border-[#FF7711]/70",
            badgeBg: "bg-[#FF7711]/10 text-[#FF7711] border-[#FF7711]/30",
            goalBg: "bg-black/60 border-[#FF7711]/30",
          },
          {
            id: "learner",
            level: "LEVEL 02",
            name: "LEARNER",
            tagline: "Build • Apply • Innovate",
            description:
              "Students move beyond the basics and begin applying their knowledge through meaningful projects, teamwork, experimentation, and real-world problem-solving.",
            goal: "Turn learning into practical skills, innovation, and impressive projects.",
            accentColor: "text-[#38BDF8]",
            bgGradient: "from-[#38BDF8]/15 via-[#141414] to-[#0D0D0D]",
            borderColor: "border-[#38BDF8]/30 hover:border-[#38BDF8]/70",
            badgeBg: "bg-[#38BDF8]/10 text-[#38BDF8] border-[#38BDF8]/30",
            goalBg: "bg-black/60 border-[#38BDF8]/30",
          },
          {
            id: "performer",
            level: "LEVEL 03",
            name: "PERFORMER",
            tagline: "Master • Build • Get Career-Ready",
            description:
              "Learners take their skills further through advanced projects, professional skill development, portfolio building, industry-oriented training, and real-world problem-solving.",
            goal: "Transform technical skills into strong portfolios, professional confidence, internship opportunities, and job & placement readiness.",
            accentColor: "text-[#4ADE80]",
            bgGradient: "from-[#4ADE80]/15 via-[#141414] to-[#0D0D0D]",
            borderColor: "border-[#4ADE80]/30 hover:border-[#4ADE80]/70",
            badgeBg: "bg-[#4ADE80]/10 text-[#4ADE80] border-[#4ADE80]/30",
            goalBg: "bg-black/60 border-[#4ADE80]/30",
          },
        ].map((lvl, idx) => (
          <motion.div
            key={lvl.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ delay: idx * 0.14, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className={`p-7 sm:p-8 rounded-3xl bg-gradient-to-b ${lvl.bgGradient} border ${lvl.borderColor} flex flex-col justify-between shadow-2xl relative overflow-hidden group hover:-translate-y-1.5 transition-all duration-300`}
          >
            <div>
              {/* Level Badge */}
              <div className="flex items-center justify-between mb-5">
                <span className={`text-[11px] font-mono font-bold uppercase tracking-wider px-3 py-1 rounded-full border ${lvl.badgeBg}`}>
                  {lvl.level}
                </span>
              </div>

              {/* Level Title */}
              <h3 className="text-2xl sm:text-3xl font-black text-white mb-1.5 tracking-tight">
                {lvl.name}
              </h3>
              
              {/* Tagline */}
              <p className={`text-sm font-mono font-bold mb-5 ${lvl.accentColor}`}>
                {lvl.tagline}
              </p>

              {/* Description */}
              <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed mb-8 font-normal">
                {lvl.description}
              </p>
            </div>

            {/* Goal Box */}
            <div className={`p-4 sm:p-5 rounded-2xl ${lvl.goalBg} border`}>
              <span className={`text-xs font-mono font-bold uppercase tracking-wider block mb-1.5 ${lvl.accentColor}`}>
                Goal:
              </span>
              <p className="text-xs sm:text-sm text-[#E2E8F0] font-medium leading-relaxed">
                {lvl.goal}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
