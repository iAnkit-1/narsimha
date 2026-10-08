import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Lightbulb,
  PenTool,
  Cog,
  RefreshCw,
  Presentation,
  Trophy,
  Target,
} from "lucide-react";
import stairsImg from "../assets/stairs.png";

export const CenterLearningJourney: React.FC = () => {
  return (
    <div className="mb-12 sm:mb-14">
      {/* Top Heading & Description */}
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
            LEARNING JOURNEY
          </span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-3">
          Path From Curious Learner to{" "}
          <span className="bg-gradient-to-r from-[#FF7711] via-[#FFA149] to-[#FF5500] bg-clip-text text-transparent">
            Future-Ready Creator
          </span>
        </h2>

        <p className="text-sm sm:text-base text-[#A1A1A1] leading-relaxed">
          Every child starts with curiosity. At Narasimha Skill Sphere, we transform that curiosity into practical skills, confidence, and career-oriented capabilities.
        </p>
      </motion.div>

      {/* Central Stairs Layout: Left (01-03) • Center (Image) • Right (04-06) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center mb-10">
        
        {/* Left Column: Steps 01, 02, 03 */}
        <div className="lg:col-span-4 space-y-4">
          {[
            {
              num: "01",
              step: "Think",
              icon: Lightbulb,
              desc: "Identify challenges, ask curious questions, and brainstorm original solutions.",
              color: "text-[#FF7711]",
              bg: "bg-[#FF7711]/10",
              border: "border-[#FF7711]/30",
              hoverBorder: "hover:border-[#FF7711]/70",
            },
            {
              num: "02",
              step: "Design",
              icon: PenTool,
              desc: "Blueprint mechanisms, sketch architectural schemas, and model system workflows.",
              color: "text-[#EC4899]",
              bg: "bg-[#EC4899]/10",
              border: "border-[#EC4899]/30",
              hoverBorder: "hover:border-[#EC4899]/70",
            },
            {
              num: "03",
              step: "Create",
              icon: Cog,
              desc: "Assemble physical robotics, wire sensors & microchips, and write executable code.",
              color: "text-[#A855F7]",
              bg: "bg-[#A855F7]/10",
              border: "border-[#A855F7]/30",
              hoverBorder: "hover:border-[#A855F7]/70",
            },
          ].map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: idx * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`p-4 sm:p-5 rounded-2xl bg-[#121212]/95 border border-white/10 ${step.hoverBorder} transition-all duration-300 group flex items-start space-x-3.5 shadow-lg hover:-translate-y-0.5`}
              >
                <div className={`w-10 h-10 rounded-xl ${step.bg} border ${step.border} flex items-center justify-center ${step.color} shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xs font-mono text-[#FF7711] font-bold">
                      {step.num}.
                    </span>
                    <h3 className={`text-base font-bold text-white group-hover:${step.color} transition-colors`}>
                      {step.step}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Center Column: Stairs Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-4 flex items-center justify-center relative py-4 lg:py-0"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#FF7711]/15 via-[#38BDF8]/10 to-[#A855F7]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="relative w-full max-w-[420px] flex items-center justify-center">
            <img
              src={stairsImg}
              alt="Learning Journey Stairs - Think, Design, Create, Improve, Explain, Showcase"
              className="w-full h-auto max-h-[460px] object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.9)] hover:scale-105 transition-transform duration-500"
            />
          </div>
        </motion.div>

        {/* Right Column: Steps 04, 05, 06 */}
        <div className="lg:col-span-4 space-y-4">
          {[
            {
              num: "04",
              step: "Improve",
              icon: RefreshCw,
              desc: "Test prototypes under stress, debug glitches, and iteratively refine performance.",
              color: "text-[#3B82F6]",
              bg: "bg-[#3B82F6]/10",
              border: "border-[#3B82F6]/30",
              hoverBorder: "hover:border-[#3B82F6]/70",
            },
            {
              num: "05",
              step: "Explain",
              icon: Presentation,
              desc: "Articulate computational logic, explain how it works, and build communication mastery.",
              color: "text-[#06B6D4]",
              bg: "bg-[#06B6D4]/10",
              border: "border-[#06B6D4]/30",
              hoverBorder: "hover:border-[#06B6D4]/70",
            },
            {
              num: "06",
              step: "Showcase",
              icon: Trophy,
              desc: "Present working innovations at tech expos, school fests, and competitive hackathons.",
              color: "text-[#10B981]",
              bg: "bg-[#10B981]/10",
              border: "border-[#10B981]/30",
              hoverBorder: "hover:border-[#10B981]/70",
            },
          ].map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: 60 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.65,
                  delay: idx * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`p-4 sm:p-5 rounded-2xl bg-[#121212]/95 border border-white/10 ${step.hoverBorder} transition-all duration-300 group flex items-start space-x-3.5 shadow-lg hover:-translate-y-0.5`}
              >
                <div className={`w-10 h-10 rounded-xl ${step.bg} border ${step.border} flex items-center justify-center ${step.color} shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex flex-col min-w-0">
                  <div className="flex items-center space-x-2 mb-1">
                    <span className="text-xs font-mono text-[#FF7711] font-bold">
                      {step.num}.
                    </span>
                    <h3 className={`text-base font-bold text-white group-hover:${step.color} transition-colors`}>
                      {step.step}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-[#A3A3A3] leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>

      {/* The Goal Bar */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl mx-auto rounded-2xl bg-gradient-to-r from-[#171717] via-[#141414] to-[#171717] border-l-4 border-l-[#FF7711] border border-white/10 p-4 sm:p-5 shadow-lg"
      >
        <div className="flex items-start sm:items-center space-x-3">
          <Target className="w-5 h-5 text-[#FF7711] shrink-0 mt-0.5 sm:mt-0" />
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF7711]">
              The Goal:
            </span>
            <p className="text-xs sm:text-sm font-semibold text-[#F1F1F1] leading-relaxed">
              Learn skills. Build projects. Develop confidence. Prepare for the future.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
