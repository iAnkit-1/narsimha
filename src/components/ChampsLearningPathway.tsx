import React from "react";
import { motion } from "framer-motion";
import { 
  Lightbulb, PenTool, Cog, RefreshCw, 
  Presentation, Trophy, Sparkles, Target
} from "lucide-react";
import stairsImg from "../assets/stairs.png";

export const ChampsLearningPathway: React.FC = () => {
  const pathwaySteps = [
    {
      num: "01",
      step: "Think",
      icon: Lightbulb,
      desc: "Identify challenges, ask curious questions, and brainstorm original solutions.",
      color: "text-[#FF7711]",
      bg: "bg-[#FF7711]/10",
      border: "border-[#FF7711]/30",
    },
    {
      num: "02",
      step: "Design",
      icon: PenTool,
      desc: "Blueprint mechanisms, sketch architectural schemas, and model system workflows.",
      color: "text-[#EC4899]",
      bg: "bg-[#EC4899]/10",
      border: "border-[#EC4899]/30",
    },
    {
      num: "03",
      step: "Create",
      icon: Cog,
      desc: "Assemble physical robotics, wire sensors & microchips, and write executable code.",
      color: "text-[#A855F7]",
      bg: "bg-[#A855F7]/10",
      border: "border-[#A855F7]/30",
    },
    {
      num: "04",
      step: "Improve",
      icon: RefreshCw,
      desc: "Test prototypes under stress, debug glitches, and iteratively refine performance.",
      color: "text-[#3B82F6]",
      bg: "bg-[#3B82F6]/10",
      border: "border-[#3B82F6]/30",
    },
    {
      num: "05",
      step: "Explain",
      icon: Presentation,
      desc: "Articulate computational logic, explain how it works, and build communication mastery.",
      color: "text-[#06B6D4]",
      bg: "bg-[#06B6D4]/10",
      border: "border-[#06B6D4]/30",
    },
    {
      num: "06",
      step: "Showcase",
      icon: Trophy,
      desc: "Present working innovations at tech expos, school fests, and competitive hackathons.",
      color: "text-[#10B981]",
      bg: "bg-[#10B981]/10",
      border: "border-[#10B981]/30",
    },
  ];

  return (
    <section id="champs-pathway" className="relative w-full py-16 lg:py-24 bg-[#0A0A0A] border-b border-[#222222] overflow-hidden">
      {/* Background Ambience Glow */}
      <div className="absolute top-1/3 left-10 w-[500px] h-[400px] bg-[#FF7711]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[450px] h-[350px] bg-[#A855F7]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Part (5 cols): Backgroundless Visual Diagram */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-[480px] flex items-center justify-center p-2">
              <img
                src={stairsImg}
                alt="Learning Journey - From Curious Learner to Future-Ready Creator"
                className="w-full h-auto max-h-[460px] object-contain drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)] hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Part (7 cols): Content & 6 Step Breakdown */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left">
            
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#161616] border border-[#FF7711]/40 w-fit mb-3.5 shadow-md">
              <Sparkles className="w-3.5 h-3.5 text-[#FF7711]" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF7711] font-bold">
                LEARNING JOURNEY
              </span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-3">
              From Curious Learner to <br className="hidden sm:inline" />
              <span className="bg-gradient-to-r from-[#FF7711] via-[#FFA149] to-[#FF5500] bg-clip-text text-transparent">
                Future-Ready Creator
              </span>
            </h2>

            {/* Sub-paragraph */}
            <p className="text-sm sm:text-base text-[#A1A1A1] leading-relaxed mb-4">
              Every child starts with curiosity. At Narasimha Skill Sphere, we transform that curiosity into practical skills, confidence, and career-oriented capabilities.
            </p>

            {/* 6-Step Micro Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3 my-4">
              {pathwaySteps.map((step, idx) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.num}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.06 }}
                    className="p-3 sm:p-3.5 rounded-xl bg-[#121212]/90 border border-white/10 hover:border-white/20 transition-all duration-300 group flex items-start space-x-3"
                  >
                    <div className={`w-8 h-8 rounded-lg ${step.bg} border ${step.border} flex items-center justify-center ${step.color} shrink-0 mt-0.5 group-hover:scale-110 transition-transform`}>
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col min-w-0">
                      <div className="flex items-center space-x-1.5 mb-0.5">
                        <span className="text-[10px] font-mono text-[#888888] font-bold">
                          {step.num}.
                        </span>
                        <span className={`text-sm font-bold text-white group-hover:${step.color} transition-colors`}>
                          {step.step}
                        </span>
                      </div>
                      <p className="text-xs text-[#A3A3A3] leading-snug line-clamp-2">
                        {step.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* The Goal Bar */}
            <div className="relative rounded-2xl bg-gradient-to-r from-[#171717] via-[#141414] to-[#171717] border-l-4 border-l-[#FF7711] border border-white/10 p-4 sm:p-5 shadow-lg">
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
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
