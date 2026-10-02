import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, CheckCircle2 } from "lucide-react";

interface CenterHeroProps {
  onExploreCourses?: () => void;
  onBookVisit?: () => void;
}

export const CenterHero: React.FC<CenterHeroProps> = () => {
  return (
    <section className="relative w-full bg-[#090909] border-b border-[#222222] pt-24 pb-20 sm:pt-28 lg:pt-32 lg:pb-28 overflow-hidden">
      {/* Background glow effects & technical grid */}
      <div className="absolute inset-0 tech-grid opacity-15 pointer-events-none" />
      <div className="absolute -top-24 right-0 w-[550px] h-[550px] bg-[#FF7711]/10 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-[450px] h-[450px] bg-[#38BDF8]/5 blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* Left Content Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7"
          >
            {/* Center Badge */}
            <div className="inline-flex items-center space-x-2.5 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#2D2D2D] mb-6 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#FF7711] animate-ping" />
              <span className="text-[11px] font-mono tracking-widest text-[#FF7711] font-bold uppercase">
                OUR CENTER • OFFLINE LEARNING LAB
              </span>
            </div>

            {/* Main Headlines */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-[#FFFFFF] tracking-tight leading-[1.08] mb-4">
              Where Curiosity <br className="hidden sm:inline" />
              Becomes{" "}
              <span className="font-serif italic font-normal text-[#FF7711]">
                Creation.
              </span>
            </h1>

            {/* Subhead */}
            <p className="text-lg sm:text-xl font-medium text-[#E2E8F0] mb-5">
              Learning by Doing. Building Skills for Tomorrow.
            </p>

            {/* Description */}
            <p className="text-sm sm:text-base text-[#A1A1A1] leading-relaxed max-w-2xl font-normal mb-8">
              At Narasimha Skill Sphere, students don't just learn technology — they experience it, build with it, and turn ideas into real-world projects. From Robotics and Coding with AI to 3D Printing, our center provides a hands-on environment where young learners explore, experiment, solve problems, and create.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="#our-courses"
                className="btn-orange-primary px-7 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center space-x-2 shadow-lg hover:shadow-orange-glow transition-all cursor-pointer"
              >
                <span>Explore Our Courses</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#book-visit"
                className="btn-dark-secondary px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center space-x-2 hover:border-[#FF7711] transition-all cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-[#FF7711]" />
                <span>Visit Our Center</span>
              </a>
            </div>
          </motion.div>

          {/* Right Interactive Lab Card & Visual Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative rounded-3xl bg-gradient-to-b from-[#181818] via-[#121212] to-[#0D0D0D] border border-[#2A2A2A] p-2 shadow-2xl overflow-hidden group">

              {/* Visual Image with Overlay */}
              <div className="relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-[#181818]">
                <img
                  src="/High tech lab .png"
                  alt="Narasimha Skill Sphere Robotics & Innovation Lab"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/40 to-transparent" />

                {/* Floating Live Badge */}
                <div className="absolute top-3 left-3 inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-[#333333] text-[10px] font-mono font-bold text-[#FF7711]">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>PATNA FLAGSHIP LAB</span>
                </div>

                {/* Floating Metric Badge */}
                <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-xl bg-black/85 backdrop-blur-md border border-[#333333] text-right">
                  <span className="text-[10px] font-mono text-[#888888] block">STUDENT RATIO</span>
                  <span className="text-xs font-mono font-bold text-white">1:8 Dedicated Mentorship</span>
                </div>
              </div>

              {/* Card Features Info */}
              <div className="p-5 sm:p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-mono text-[#FF7711] font-bold tracking-wider uppercase">
                    IN-CENTER IMMERSION
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#202020] text-[#CCCCCC]">
                    Grades K – 12
                  </span>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white mb-2">
                  Robotics, IoT, 3D Printing & AI Workbenches
                </h3>

                <p className="text-xs text-[#A1A1A1] leading-relaxed mb-5">
                  Equipped with real microcontrollers, additive manufacturing 3D printers, autonomous rovers, and sensor testing enclosures.
                </p>

                {/* 4 Mini Stat Pills */}
                <div className="grid grid-cols-2 gap-2.5 pt-3 border-t border-[#222222] text-[11px] font-mono">
                  <div className="flex items-center space-x-2 p-2 rounded-lg bg-[#141414] text-[#E2E8F0]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7711] shrink-0" />
                    <span>100% Hands-On</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded-lg bg-[#141414] text-[#38BDF8] shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#38BDF8] shrink-0" />
                    <span>7 Core Tracks</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded-lg bg-[#141414] text-[#E2E8F0]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#4ADE80] shrink-0" />
                    <span>Real Hardware Kits</span>
                  </div>
                  <div className="flex items-center space-x-2 p-2 rounded-lg bg-[#141414] text-[#E2E8F0]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-400 shrink-0" />
                    <span>Hackathon Prep</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
