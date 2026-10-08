import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Sparkles, Compass, Cpu, Bot } from "lucide-react";
import centerHeroVid from "../assets/center_hero.mp4";

interface CenterHeroProps {
  onExploreCourses?: () => void;
  onBookVisit?: () => void;
}

export const CenterHero: React.FC<CenterHeroProps> = () => {
  return (
    <section className="relative w-full min-h-[640px] lg:min-h-[720px] overflow-hidden flex flex-col justify-between pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 lg:pb-20">

      {/* 1. Full-Width Background Video Player with Contrast Gradient Overlays */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="w-full h-full object-cover filter brightness-[0.92] contrast-[1.08] saturate-[1.1] scale-100 transition-all bg-[#080808]"
        >
          <source src={centerHeroVid} type="video/mp4" />
        </video>

        {/* Multi-layered translucent gradient to ensure crisp text contrast over live video */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/60 to-black/35" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#080808]/90 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#080808] to-transparent" />
      </div>

      {/* 2. Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full flex flex-col justify-center text-left my-auto">
        <div className="max-w-3xl flex flex-col items-start text-left">

          {/* Eyebrow Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#111111]/90 border border-[#FF7711]/50 w-fit mb-5 backdrop-blur-md shadow-lg shadow-black/60"
          >
            <span className="w-2 h-2 rounded-full bg-[#FF7711] animate-ping" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF7711] font-bold">
              OUR CENTER
            </span>
            <span className="text-xs text-white/50">•</span>
            <span className="text-xs font-mono text-white/80">Offline Innovation Lab</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl lg:text-[54px] xl:text-[60px] font-black text-white tracking-tight leading-[1.08] mb-4 drop-shadow-[0_3px_12px_rgba(0,0,0,0.95)]"
          >
            Where Curiosity <br />
            <span className="bg-gradient-to-r from-[#FF7711] via-[#FFA149] to-[#FF5500] bg-clip-text text-transparent">
              Becomes Creation.
            </span>
          </motion.h1>

          {/* Subhead Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-base sm:text-xl font-bold text-[#38BDF8] tracking-tight mb-4 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]"
          >
            Learning by Doing. Building Skills for Tomorrow
          </motion.p>

          {/* Primary Textual Content */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="space-y-2 mb-8 max-w-2xl"
          >
           
            <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed font-normal drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
              From Robotics and Coding with AI to 3D Printing, our center provides a hands-on environment where young learners explore, experiment, solve problems, and create.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
            className="flex flex-wrap items-center gap-4 mb-8"
          >
            <a
              href="#our-courses"
              className="btn-orange-primary px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center space-x-2 shadow-[0_4px_20px_rgba(255,119,17,0.45)] hover:shadow-[0_4px_30px_rgba(255,119,17,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer"
            >
              <span>Explore Our Courses</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="#book-visit"
              className="btn-dark-secondary px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center space-x-2 hover:border-[#FF7711] backdrop-blur-md bg-black/40 transition-all cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#FF7711]" />
              <span>Visit Our Center</span>
            </a>
          </motion.div>

          {/* Quick Pillar Highlights Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10 text-xs font-mono text-white/80"
          >
            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-black/50 border border-white/10 backdrop-blur-sm">
              <Bot className="w-3.5 h-3.5 text-[#FF7711]" />
              <span>Robotics & Drone Lab</span>
            </div>
            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-black/50 border border-white/10 backdrop-blur-sm">
              <Cpu className="w-3.5 h-3.5 text-[#38BDF8]" />
              <span>AI & Coding Workbench</span>
            </div>
            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-black/50 border border-white/10 backdrop-blur-sm">
              <Compass className="w-3.5 h-3.5 text-[#4ADE80]" />
              <span>3D Printing & Making</span>
            </div>
            <div className="flex items-center space-x-1.5 px-3 py-1 rounded-lg bg-black/50 border border-white/10 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#F59E0B]" />
              <span>100% Hands-On</span>
            </div>
          </motion.div>

        </div>
      </div>

    </section>
  );
};
