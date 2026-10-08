import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  CheckCircle2,
  Cog,
  Trophy,
  Award,
  BarChart3,
  Users,
} from "lucide-react";
import { studentPortfolioProfiles } from "../assets/data/centersPageData";

interface CenterStudentPortfolioProps {
  onOpenPartnerModal: () => void;
}

export const CenterStudentPortfolio: React.FC<CenterStudentPortfolioProps> = ({
  onOpenPartnerModal,
}) => {
  const [selectedStudentIndex, setSelectedStudentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const AUTO_PLAY_INTERVAL = 5000; // 5 seconds per student

  // Automatic slide rotation
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setSelectedStudentIndex((prev) =>
        prev === studentPortfolioProfiles.length - 1 ? 0 : prev + 1
      );
    }, AUTO_PLAY_INTERVAL);

    return () => clearInterval(timer);
  }, [isPaused, selectedStudentIndex]);

  const handlePrevStudent = () => {
    setSelectedStudentIndex((prev) =>
      prev === 0 ? studentPortfolioProfiles.length - 1 : prev - 1
    );
  };

  const handleNextStudent = () => {
    setSelectedStudentIndex((prev) =>
      prev === studentPortfolioProfiles.length - 1 ? 0 : prev + 1
    );
  };

  const currentStudent = studentPortfolioProfiles[selectedStudentIndex] || studentPortfolioProfiles[0];

  return (
    <section className="w-full bg-[#080808] border-b border-[#222222] py-12 sm:py-14 lg:py-16 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#FF7711]/5 blur-[160px] pointer-events-none rounded-full" />
      <div className="absolute top-10 left-10 w-96 h-96 bg-[#38BDF8]/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-4xl mx-auto mb-12"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#272727] mb-4 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#38BDF8] font-bold">
              STUDENT PORTFOLIO
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight mb-4">
            Don't Just Tell <span className="text-[#38BDF8]">Us What You Learned.</span><br />
            Show Us What You <span className="text-[#FF7711]">Built.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#A1A1A1] max-w-3xl mx-auto leading-relaxed">
            Every student creates a learning journey of their own. Our Student Portfolio section documents the student's projects, progress, achievements and growth throughout their time at Narasimha Skill Sphere.
          </p>
        </motion.div>

        {/* Featured Student Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="relative max-w-6xl mx-auto mb-8"
        >
          {/* Top Auto-Rotation Micro Indicator */}
          <div className="flex items-center justify-between px-2 mb-2">
    

            {/* Micro progress pill bars */}
            <div className="flex items-center space-x-1.5">
              {studentPortfolioProfiles.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setSelectedStudentIndex(i)}
                  aria-label={`Go to student profile ${i + 1}`}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    selectedStudentIndex === i
                      ? "w-7 bg-[#38BDF8] shadow-sm shadow-[#38BDF8]/50"
                      : "w-2 bg-[#222222] hover:bg-[#444444]"
                  }`}
                />
              ))}
            </div>
          </div>
          {/* Desktop Left / Right Floating Circular Navigation Buttons */}
          <button
            onClick={handlePrevStudent}
            aria-label="Previous Student Portfolio"
            className="hidden md:flex absolute -left-5 lg:-left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-[#1A1A1A] border border-[#333333] hover:border-[#38BDF8] hover:text-[#38BDF8] text-white items-center justify-center transition-all shadow-2xl cursor-pointer hover:scale-110 active:scale-95"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNextStudent}
            aria-label="Next Student Portfolio"
            className="hidden md:flex absolute -right-5 lg:-right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-[#1A1A1A] border border-[#333333] hover:border-[#38BDF8] hover:text-[#38BDF8] text-white items-center justify-center transition-all shadow-2xl cursor-pointer hover:scale-110 active:scale-95"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Main Card Frame */}
          <motion.div
            key={currentStudent.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="bg-[#121212] border border-[#272727] rounded-3xl p-5 sm:p-7 shadow-2xl relative overflow-hidden"
          >
            {/* Subtle ambient gradient highlights */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[#38BDF8]/5 blur-[120px] pointer-events-none rounded-full" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF7711]/5 blur-[120px] pointer-events-none rounded-full" />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch relative z-10">
              
              {/* Column 1: Student Portrait & Quote Box (4 cols) */}
              <div className="lg:col-span-4 flex flex-col justify-between bg-[#151515] border border-[#262626] rounded-2xl overflow-hidden relative min-h-[380px] lg:min-h-[420px] shadow-lg">
                <div className="relative w-full h-full min-h-[360px] overflow-hidden flex flex-col justify-end p-3.5">
                  <img
                    src={currentStudent.avatar}
                    alt={currentStudent.name}
                    className="absolute inset-0 w-full h-full object-cover object-center filter brightness-[0.92] contrast-[1.05]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                  {/* Bottom Testimonial Quote Overlay Card */}
                  <div className="relative z-10 p-3.5 rounded-xl bg-[#0B1528]/90 backdrop-blur-md border border-[#1E3A5F]/80 shadow-2xl">
                    <div className="flex items-start space-x-2">
                      <span className="text-xl font-serif text-[#38BDF8] leading-none shrink-0 font-black">
                        “
                      </span>
                      <div>
                        <p className="text-xs text-[#E2E8F0] font-medium leading-snug mb-1">
                          {currentStudent.quote}
                        </p>
                        <span className="text-[11px] font-mono font-bold text-[#38BDF8] block">
                          — {currentStudent.name}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Column 2: Completed & Currently Working On Projects (5 cols) */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                {/* Top Student Header Row */}
                <div className="pb-3 border-b border-[#242424]">
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-none mb-2">
                    {currentStudent.name}
                  </h3>
                  <div className="flex items-center space-x-2">
                    <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-md border font-bold ${currentStudent.tierColor}`}>
                      🛡️ {currentStudent.tier}
                    </span>
                    <span className="text-[#555555] font-bold">|</span>
                    <span className={`text-[11px] font-mono px-2.5 py-0.5 rounded-md border font-bold flex items-center space-x-1 ${currentStudent.domainColor}`}>
                      <span>{currentStudent.domainEmoji}</span>
                      <span>{currentStudent.domain}</span>
                    </span>
                  </div>
                </div>

                {/* Completed Project Box */}
                <div className="p-3.5 rounded-2xl bg-[#171717] border border-[#272727] flex flex-col sm:flex-row gap-3.5 items-center hover:border-emerald-500/40 transition-colors">
                  <div className="flex-1">
                    <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 text-[10px] font-mono font-bold mb-1.5">
                      <CheckCircle2 className="w-3 h-3" />
                      <span>Completed Project</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-1 leading-snug">
                      {currentStudent.completedProject.title}
                    </h4>
                    <p className="text-xs text-[#9CA3AF] leading-relaxed">
                      {currentStudent.completedProject.description}
                    </p>
                  </div>
                  <div className="relative w-full sm:w-44 h-28 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-black">
                    <img
                      src={currentStudent.completedProject.image}
                      alt={currentStudent.completedProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                    <span className="absolute bottom-1 inset-x-1 text-[8px] font-mono text-white truncate text-center px-1 font-semibold bg-black/70 rounded py-0.5">
                      {currentStudent.completedProject.caption}
                    </span>
                  </div>
                </div>

                {/* Currently Working On Box */}
                <div className="p-3.5 rounded-2xl bg-[#171717] border border-[#272727] flex flex-col sm:flex-row gap-3.5 items-center hover:border-orange-500/40 transition-colors">
                  <div className="flex-1">
                    <div className="inline-flex items-center space-x-1 px-2.5 py-0.5 rounded-full bg-orange-500/15 text-orange-400 border border-orange-500/30 text-[10px] font-mono font-bold mb-1.5">
                      <Cog className="w-3 h-3 animate-spin" />
                      <span>Currently Working On</span>
                    </div>
                    <h4 className="text-sm sm:text-base font-bold text-white mb-1 leading-snug">
                      {currentStudent.workingOnProject.title}
                    </h4>
                    <p className="text-xs text-[#9CA3AF] leading-relaxed">
                      {currentStudent.workingOnProject.description}
                    </p>
                  </div>
                  <div className="relative w-full sm:w-44 h-28 rounded-xl overflow-hidden shrink-0 border border-white/10 bg-black">
                    <img
                      src={currentStudent.workingOnProject.image}
                      alt={currentStudent.workingOnProject.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent" />
                    <span className="absolute bottom-1 inset-x-1 text-[8px] font-mono text-white truncate text-center px-1 font-semibold bg-black/70 rounded py-0.5">
                      {currentStudent.workingOnProject.caption}
                    </span>
                  </div>
                </div>
              </div>

              {/* Column 3: Achievements & Progress Bars (3 cols) */}
              <div className="lg:col-span-3 flex flex-col justify-between space-y-3.5">
                {/* Achievements Box */}
                <div className="p-4 rounded-2xl bg-[#1A1813] border border-amber-500/25 shadow-md flex-1 flex flex-col justify-between">
                  <div className="flex items-center space-x-2 text-amber-400 text-xs font-mono font-bold uppercase tracking-wider mb-2.5">
                    <Trophy className="w-4 h-4 text-amber-400" />
                    <span>Achievements</span>
                  </div>

                  <div className="space-y-2">
                    {currentStudent.achievements.map((ach) => (
                      <div
                        key={ach.title}
                        className="p-2.5 rounded-xl bg-[#231F16] border border-amber-500/20 flex items-center space-x-2.5 hover:border-amber-400/40 transition-colors"
                      >
                        <Award className="w-4 h-4 text-amber-400 shrink-0" />
                        <span className="text-xs text-[#E2E8F0] font-semibold leading-tight">
                          {ach.title}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Progress Metrics Box */}
                <div className="p-4 rounded-2xl bg-[#0E1624] border border-blue-500/25 shadow-md flex-1 flex flex-col justify-between">
                  <div className="flex items-center space-x-2 text-[#38BDF8] text-xs font-mono font-bold uppercase tracking-wider mb-2.5">
                    <BarChart3 className="w-4 h-4 text-[#38BDF8]" />
                    <span>Progress</span>
                  </div>

                  <div className="space-y-2.5">
                    {currentStudent.progress.map((prog) => (
                      <div key={prog.label}>
                        <div className="flex justify-between text-xs font-mono mb-1">
                          <span className="text-[#CBD5E1] text-[11px]">{prog.label}</span>
                          <span className="text-white font-bold text-[11px]">{prog.value}%</span>
                        </div>
                        <div className="w-full h-2 rounded-full bg-[#1A2638] overflow-hidden">
                          <div
                            className={`h-full rounded-full ${prog.color} transition-all duration-700`}
                            style={{ width: `${prog.value}%` }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </motion.div>

        {/* Quick Student Selector Tabs Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="flex flex-wrap items-center justify-center gap-3 mt-8 mb-8"
        >
          {studentPortfolioProfiles.map((student, idx) => (
            <button
              key={student.id}
              onClick={() => setSelectedStudentIndex(idx)}
              className={`px-3.5 py-2 rounded-2xl border transition-all cursor-pointer flex items-center space-x-2.5 shadow-md ${
                selectedStudentIndex === idx
                  ? "bg-[#162235] border-[#38BDF8] text-white shadow-lg shadow-[#38BDF8]/20 scale-105"
                  : "bg-[#131313] border-[#262626] text-[#A1A1A1] hover:text-white hover:bg-[#181818]"
              }`}
            >
              <img
                src={student.avatar}
                alt={student.name}
                className="w-7 h-7 rounded-full object-cover border border-white/20 shrink-0"
              />
              <div className="text-left">
                <span className="text-xs font-bold block text-white leading-tight">
                  {student.name}
                </span>
                <span className="text-[10px] font-mono text-[#38BDF8]">
                  {student.domain}
                </span>
              </div>
            </button>
          ))}

          <button
            onClick={onOpenPartnerModal}
            className="px-4 py-2 rounded-2xl border border-[#333333] bg-[#141414] hover:bg-[#1C1C1C] hover:border-[#38BDF8]/60 text-white transition-all cursor-pointer flex items-center space-x-2 text-xs font-mono shadow-md"
          >
            <Users className="w-3.5 h-3.5 text-[#38BDF8]" />
            <span>Many More Innovators...</span>
          </button>
        </motion.div>

      </div>
    </section>
  );
};
