import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Bot,
  Lightbulb,
  Wrench,
  Zap,
  Code,
  Target,
  Layers,
  Rocket,
  Trophy,
} from "lucide-react";
import roboWithStudentsImg from "../assets/robo with students.png";

export const CenterWeeklyOffline: React.FC = () => {
  return (
    <section id="weekly-offline" className="relative w-full py-16 lg:py-24 bg-[#080808] border-b border-[#222222] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF7711]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[300px] bg-[#3B82F6]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Main Hero Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative rounded-3xl bg-gradient-to-b from-[#161616] to-[#0D0D0D] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] p-6 sm:p-8 lg:p-10 overflow-hidden mb-12"
        >

          {/* Subtle radial grid background pattern */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#FFFFFF 1px, transparent 1px)",
              backgroundSize: "24px 24px"
            }}
          />

          {/* Top Main Section: Content (Left) + Robot & Students (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center relative z-10 mb-8 lg:mb-10">

            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col text-left">

              {/* Badge: WEEKLY OFFLINE */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1A] border border-[#FF7711]/40 w-fit mb-5 shadow-lg shadow-black/40">
                <Sparkles className="w-3.5 h-3.5 text-[#FF7711]" />
                <span className="text-xs font-mono font-bold tracking-widest text-[#FF7711] uppercase">
                  WEEKLY OFFLINE
                </span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black text-white tracking-tight leading-[1.08] mb-3">
                Learning Happens <br />
                <span className="bg-gradient-to-r from-[#FF7711] via-[#FFA149] to-[#FF5500] bg-clip-text text-transparent">
                  Beyond the Screen.
                </span>
              </h2>

              {/* Subheading */}
              <p className="text-base sm:text-lg font-bold text-[#38BDF8] tracking-tight mb-4">
                Every Week. Every Project. Every Learner.
              </p>

              {/* Paragraph Description */}
              <p className="text-sm sm:text-base text-[#D4D4D4] leading-relaxed mb-3">
                Our offline sessions give students the opportunity to move from learning concepts to building things with their own hands.
              </p>

              <p className="text-sm sm:text-base text-[#A1A1A1] leading-relaxed">
                Students work with real components, tools and technology while receiving guidance from mentors.
              </p>

            </div>

            {/* Right Visual Image & Floating Badges (5 cols) */}
            <div className="lg:col-span-5 relative flex items-center justify-center pt-4 lg:pt-0">

              {/* Glow background behind students */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#FF7711]/20 via-[#3B82F6]/15 to-transparent rounded-3xl blur-2xl pointer-events-none" />

              {/* Floating Doodle Sticker 1 (Top Left) */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-4, 4, -4] }}
                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                className="absolute top-2 left-0 sm:left-2 z-20 px-3 py-1.5 rounded-xl bg-[#181818]/90 border border-[#38BDF8]/40 shadow-xl backdrop-blur-md flex items-center space-x-1.5"
              >
                <Bot className="w-4 h-4 text-[#38BDF8]" />
                <span className="text-[10px] sm:text-[11px] font-bold text-white tracking-wide">
                  Weekly Offline
                </span>
              </motion.div>

              {/* Floating Doodle Sticker 2 (Top Right) */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [4, -4, 4] }}
                transition={{ repeat: Infinity, duration: 3.5, ease: "easeInOut" }}
                className="absolute top-2 right-0 sm:right-2 z-20 px-3 py-1.5 rounded-xl bg-[#181818]/90 border border-[#F59E0B]/40 shadow-xl backdrop-blur-md flex items-center space-x-1.5"
              >
                <Lightbulb className="w-4 h-4 text-[#F59E0B]" />
                <span className="text-[10px] sm:text-[11px] font-bold text-[#F59E0B] tracking-wide">
                  Hands-On
                </span>
              </motion.div>

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-b from-[#1C1C1C] to-[#121212] w-full max-w-[480px]">
                <img
                  src={roboWithStudentsImg}
                  alt="Learning Happens Beyond the Screen"
                  className="w-full h-auto object-cover filter brightness-[1.02] contrast-[1.05]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D]/60 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Sticky Note (Bottom Right) */}
              <motion.div
                initial={{ rotate: 3 }}
                animate={{ rotate: [3, 0, 3] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                className="absolute -bottom-3 right-2 sm:right-4 z-20 px-3.5 py-2 rounded-xl bg-gradient-to-br from-[#FEF08A] to-[#FDE047] text-black shadow-2xl border border-yellow-200/50 flex items-center space-x-1.5 font-sans"
              >
                <Sparkles className="w-4 h-4 text-amber-900" />
                <div className="flex flex-col text-left leading-tight">
                  <span className="text-[11px] font-black text-amber-950">Every Project</span>
                  <span className="text-[10px] font-bold text-amber-900">Every Learner</span>
                </div>
              </motion.div>

            </div>

          </div>

          {/* Bottom Card: 100% Hands-On Learning Highlight */}
          <div className="rounded-2xl bg-[#101010]/95 border border-[#FF7711]/40 p-5 sm:p-6 shadow-xl relative z-10">
            <div className="flex items-start sm:items-center space-x-4">
              <div className="w-12 h-12 rounded-2xl bg-[#FF7711]/20 border border-[#FF7711] flex items-center justify-center text-[#FF7711] shrink-0">
                <Wrench className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  100% Hands-On Learning
                </h3>
                <p className="text-sm sm:text-base text-[#CCCCCC] font-normal">
                  Students don't simply watch a project being made. <strong className="text-white font-semibold">They build it themselves.</strong>
                </p>
              </div>
            </div>
          </div>

        </motion.div>

        {/* What Happens in Our Weekly Sessions? */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-3 mb-8"
          >
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white">
              What Happens in Our Weekly Sessions?
            </h3>
            <div className="h-[1px] flex-1 bg-[#262626]" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5">
            {[
              { number: "01", title: "Hands-on electronics & robotics", icon: Zap, color: "text-[#FF7711]", border: "hover:border-[#FF7711]/60" },
              { number: "02", title: "Coding & programming activities", icon: Code, color: "text-[#38BDF8]", border: "hover:border-[#38BDF8]/60" },
              { number: "03", title: "Robot building and automation", icon: Bot, color: "text-[#4ADE80]", border: "hover:border-[#4ADE80]/60" },
              { number: "04", title: "Problem-solving challenges", icon: Target, color: "text-[#FACC15]", border: "hover:border-[#FACC15]/60" },
              { number: "05", title: "3D design & printing", icon: Layers, color: "text-[#C084FC]", border: "hover:border-[#C084FC]/60" },
              { number: "06", title: "Real-world project development", icon: Rocket, color: "text-[#FB7185]", border: "hover:border-[#FB7185]/60" },
              { number: "07", title: "Project presentation & demonstration", icon: Trophy, color: "text-[#38BDF8]", border: "hover:border-[#38BDF8]/60" },
            ].map((item, idx) => {
              const ItemIcon = item.icon;
              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{
                    duration: 0.5,
                    delay: idx * 0.07,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className={`group relative p-5 rounded-2xl bg-[#121212] border border-[#242424] ${item.border} transition-all duration-300 flex flex-col justify-between hover:-translate-y-1 shadow-lg`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-[#888888]">
                      {item.number}
                    </span>
                    <div className={`w-9 h-9 rounded-xl bg-[#181818] border border-[#282828] flex items-center justify-center ${item.color} group-hover:scale-110 transition-transform`}>
                      <ItemIcon className="w-4 h-4" />
                    </div>
                  </div>
                  <h4 className="text-sm sm:text-base font-bold text-white group-hover:text-[#FF7711] transition-colors leading-snug">
                    {item.title}
                  </h4>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
