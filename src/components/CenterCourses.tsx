import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Laptop,
  CheckCircle2,
  Rocket,
  MapPin,
  Calendar,
  PhoneCall,
  Award,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { starterCourses, learnerCourses, performerCourses } from "../assets/data/centersPageData";
import { companyDetails } from "../assets/data/navigation";
import { TrialClassModal } from "./TrialClassModal";

export const CenterCourses: React.FC = () => {
  const [activeCourseLevel, setActiveCourseLevel] = useState<"STARTER" | "LEARNER" | "PERFORMER">("STARTER");
  const [isTrialModalOpen, setIsTrialModalOpen] = useState(false);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragScrollLeft = useRef(0);

  const getActiveCourseList = () => {
    switch (activeCourseLevel) {
      case "STARTER":
        return starterCourses;
      case "LEARNER":
        return learnerCourses;
      case "PERFORMER":
        return performerCourses;
      default:
        return starterCourses;
    }
  };

  const activeCourseList = getActiveCourseList();

  // Smooth continuous automatic scroll loop
  useEffect(() => {
    if (activeCourseLevel === "PERFORMER") return;

    let animationFrameId: number;
    const speed = 0.8; // px per frame

    const autoScroll = () => {
      if (!isPaused && !isDragging && scrollContainerRef.current) {
        const container = scrollContainerRef.current;
        container.scrollLeft += speed;

        // Loop seamlessly when reached halfway
        const halfWidth = container.scrollWidth / 2;
        if (container.scrollLeft >= halfWidth) {
          container.scrollLeft -= halfWidth;
        }
      }
      animationFrameId = requestAnimationFrame(autoScroll);
    };

    animationFrameId = requestAnimationFrame(autoScroll);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPaused, isDragging, activeCourseLevel]);

  // Reset scroll on level switch
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = 0;
    }
  }, [activeCourseLevel]);

  // Drag to scroll handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsDragging(true);
    dragStartX.current = e.pageX - scrollContainerRef.current.offsetLeft;
    dragScrollLeft.current = scrollContainerRef.current.scrollLeft;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - dragStartX.current) * 1.5;
    scrollContainerRef.current.scrollLeft = dragScrollLeft.current - walk;
  };

  const handleMouseUpOrLeave = () => {
    setIsDragging(false);
  };

  return (
    <section id="our-courses" className="w-full bg-[#0B0B0B] border-b border-[#222222] py-12 sm:py-14 lg:py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-10"
        >
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#272727] mb-3">
            <Laptop className="w-3.5 h-3.5 text-[#FF7711]" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF7711] font-bold">
              HANDS-ON CURRICULUM
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.08] mb-3">
            OUR{" "}
            <span className="bg-gradient-to-r from-[#FF7711] via-[#FFA149] to-[#FF5500] bg-clip-text text-transparent">
              COURSES
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#A1A1A1] leading-relaxed">
            Explore our structured 3-tier learning tracks designed for foundational discovery, intermediate mastery, and advanced capstone innovation.
          </p>
        </motion.div>

        {/* Level Switcher (STARTER vs LEARNER vs PERFORMER) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center justify-center mb-8"
        >
          <div className="inline-flex flex-wrap items-center justify-center p-1.5 rounded-2xl bg-[#141414] border border-[#2B2B2B] shadow-2xl gap-1.5 sm:gap-2">
            <button
              onClick={() => setActiveCourseLevel("STARTER")}
              className={`px-5 sm:px-7 py-2 sm:py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all cursor-pointer flex flex-col items-center justify-center text-center ${
                activeCourseLevel === "STARTER"
                  ? "bg-[#FF7711] text-black shadow-lg shadow-[#FF7711]/25 scale-[1.02]"
                  : "text-[#A1A1A1] hover:text-white hover:bg-[#1C1C1C]"
              }`}
            >
              <span>🌱 STARTER</span>
              <span className="text-[10px] opacity-80 font-normal mt-0.5">(Grades 1–4)</span>
            </button>

            <button
              onClick={() => setActiveCourseLevel("LEARNER")}
              className={`px-5 sm:px-7 py-2 sm:py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all cursor-pointer flex flex-col items-center justify-center text-center ${
                activeCourseLevel === "LEARNER"
                  ? "bg-[#38BDF8] text-black shadow-lg shadow-[#38BDF8]/25 scale-[1.02]"
                  : "text-[#A1A1A1] hover:text-white hover:bg-[#1C1C1C]"
              }`}
            >
              <span>⚡ LEARNER</span>
              <span className="text-[10px] opacity-80 font-normal mt-0.5">(Grades 5–8)</span>
            </button>

            <button
              onClick={() => setActiveCourseLevel("PERFORMER")}
              className={`px-5 sm:px-7 py-2 sm:py-2.5 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all cursor-pointer flex flex-col items-center justify-center text-center ${
                activeCourseLevel === "PERFORMER"
                  ? "bg-[#4ADE80] text-black shadow-lg shadow-[#4ADE80]/25 scale-[1.02]"
                  : "text-[#A1A1A1] hover:text-white hover:bg-[#1C1C1C]"
              }`}
            >
              <span>🏆 PERFORMER</span>
              <span className="text-[10px] opacity-80 font-normal mt-0.5">(Grades 9–12)</span>
            </button>
          </div>

        </motion.div>

      </div>

      {/* Automatic & Manually Scrollable Cards Track (Only for STARTER & LEARNER) */}
      {activeCourseLevel !== "PERFORMER" && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative w-full overflow-hidden py-4 group/carousel rounded-3xl">
    

            {/* Horizontally Scrollable & Draggable Track */}
            <div
              ref={scrollContainerRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => {
                setIsPaused(false);
                handleMouseUpOrLeave();
              }}
              onMouseDown={handleMouseDown}
              onMouseMove={handleMouseMove}
              onMouseUp={handleMouseUpOrLeave}
              onTouchStart={() => setIsPaused(true)}
              onTouchEnd={() => setIsPaused(false)}
              className={`flex overflow-x-auto scrollbar-none space-x-6 px-12 sm:px-16 select-none ${
                isDragging ? "cursor-grabbing" : "cursor-grab"
              }`}
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
            {/* Duplicated list for infinite seamless wrap-around */}
            {[...activeCourseList, ...activeCourseList, ...activeCourseList].map((course, idx) => {
              const slideDirections = [
                "translate-y-full group-hover:translate-y-0",
                "-translate-x-full group-hover:translate-x-0",
                "translate-x-full group-hover:translate-x-0",
                "-translate-y-full group-hover:translate-y-0",
              ];
              const slideClass = slideDirections[idx % slideDirections.length];

              return (
                <div
                  key={`${course.id}-${idx}`}
                  className="group relative h-[420px] w-[320px] sm:w-[350px] shrink-0 rounded-2xl overflow-hidden border border-white/15 hover:border-[#FF7711]/70 transition-all duration-500 shadow-2xl bg-[#101010]"
                >
                  {/* Background Image */}
                  <img
                    src={course.image}
                    alt={course.title}
                    draggable={false}
                    className="absolute inset-0 w-full h-full object-cover filter brightness-[0.92] contrast-[1.03] group-hover:scale-110 group-hover:brightness-[0.98] transition-transform duration-700 ease-out pointer-events-none"
                  />

                  {/* Localized Bottom Gradient Mask only behind title */}
                  <div className="absolute bottom-0 inset-x-0 h-28 bg-gradient-to-t from-black/95 via-black/60 to-transparent pointer-events-none" />

                  {/* Default Bottom Content (Title only, slides out on hover) */}
                  <div className="absolute bottom-0 inset-x-0 p-5 z-10 transition-all duration-300 transform group-hover:opacity-0 group-hover:-translate-y-3 pointer-events-none">
                    <h4 className="text-lg font-bold text-white tracking-tight leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                      {course.title}
                    </h4>
                  </div>

                  {/* Hover Overlay: Directional Slide-in Drawer */}
                  <div
                    className={`absolute inset-0 p-5 z-20 flex flex-col justify-end bg-gradient-to-t from-black/98 via-black/90 to-black/40 backdrop-blur-[3px] opacity-0 group-hover:opacity-100 transition-transform duration-500 ease-out transform ${slideClass}`}
                  >
                    <div className="flex items-center space-x-1.5 mb-1">
                      <span className="text-base">{course.emoji}</span>
                      <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF7711]">
                        {course.domain}
                      </span>
                    </div>

                    <h4 className="text-base font-bold text-white tracking-tight leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)] mb-1">
                      {course.title}
                    </h4>

                    <p className="text-xs text-[#FFA149] font-medium leading-relaxed mb-3 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                      {course.detail}
                    </p>

                    {/* Students Learn (if present) */}
                    {course.learn && course.learn.length > 0 && (
                      <div className="mb-2.5 pt-2.5 border-t border-white/20">
                        <span className="text-[10px] font-mono uppercase text-[#A1A1A1] block mb-1 font-semibold">
                          Students Learn:
                        </span>
                        <div className="flex flex-wrap gap-1">
                          {course.learn.map((item) => (
                            <span
                              key={item}
                              className="px-2 py-0.5 rounded bg-white/10 text-[10px] font-mono text-white border border-white/15"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Students Build / Create */}
                    <div className="pt-2 border-t border-white/20">
                      <span className="text-[10px] font-mono uppercase text-[#FF7711] block mb-1 font-bold">
                        {course.buildLabel}
                      </span>
                      <div className="flex flex-wrap gap-1">
                        {course.build.map((bItem) => (
                          <span
                            key={bItem}
                            className="inline-flex items-center space-x-1 px-2 py-0.5 rounded bg-[#FF7711]/15 text-[10px] font-mono text-[#FFA149] border border-[#FF7711]/30 font-medium"
                          >
                            <CheckCircle2 className="w-3 h-3 text-[#FF7711] shrink-0" />
                            <span>{bItem}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </div>
      </div>
    )}

      {/* SPECIAL PERFORMER TAB: CENTER VISIT INVITATION & DIRECT CTAS */}
      <AnimatePresence>
        {activeCourseLevel === "PERFORMER" && (
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.97, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97, y: -20 }}
              transition={{ duration: 0.4 }}
              className="relative p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-[#122216]/90 via-[#0F1411] to-[#0A0A0A] border-2 border-[#4ADE80]/30 shadow-2xl overflow-hidden"
            >
              {/* Subtle ambient glow */}
              <div className="absolute -top-24 -right-24 w-72 h-72 bg-[#4ADE80]/15 rounded-full blur-3xl pointer-events-none" />

              <div className="relative z-10">
                {/* Header Badge */}
                <div className="flex flex-wrap items-center gap-2.5 mb-4">
                  <span className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#4ADE80]/15 border border-[#4ADE80]/30 text-[#4ADE80] font-mono text-xs font-bold uppercase tracking-wider">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>In-Person Lab Incubation Required</span>
                  </span>
                  <span className="text-[11px] font-mono text-[#A1A1A1]">
                    Patna Center • Kankarbagh Lab
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  {/* Left Column: Contextual Message */}
                  <div className="lg:col-span-7">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-snug mb-3">
                      Ready for High-Impact Innovation? <br />
                      <span className="text-[#4ADE80]">Visit Our Innovation Center in Patna</span>
                    </h3>

                    <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed mb-5">
                      <strong className="text-white">Performer Level (Grades 9–12 & Advanced Innovators)</strong> delves into advanced robotics kinematics, Edge AI accelerators, custom UAV builds, and provisional patent drafting. Because these modules require specialized industrial hardware benches and rigorous 1-on-1 mentor guidance, we invite parents and students to visit our offline center for a free technical consultation and hands-on lab walkthrough.
                    </p>

                    {/* 3 Core Highlights */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-start space-x-2.5">
                        <Cpu className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold text-white block">Dedicated Lab Access</span>
                          <span className="text-[10px] text-[#999999] leading-tight block">FDM 3D Printers, Jetson Edge AI, Drone Bays</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-start space-x-2.5">
                        <Award className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold text-white block">1-on-1 Skill Audit</span>
                          <span className="text-[10px] text-[#999999] leading-tight block">Personalized capstone roadmap & career mentorship</span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-black/40 border border-white/10 flex items-start space-x-2.5">
                        <Rocket className="w-4 h-4 text-[#4ADE80] shrink-0 mt-0.5" />
                        <div>
                          <span className="text-xs font-bold text-white block">Patent & Hackathons</span>
                          <span className="text-[10px] text-[#999999] leading-tight block">ATL Marathon, SIH, and verified portfolio building</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right Column: Prominent Call-to-Action Deck */}
                  <div className="lg:col-span-5 flex flex-col justify-center space-y-3 p-5 sm:p-6 rounded-2xl bg-[#0B0F0C] border border-[#4ADE80]/30 shadow-inner">
                    <span className="text-xs font-mono uppercase tracking-wider text-[#4ADE80] font-bold">
                      Book Your Exclusive Visit
                    </span>

                    <p className="text-xs text-[#A1A1A1] leading-relaxed">
                      Schedule a 45-minute offline lab demo and meet our senior research mentors this week.
                    </p>

                    <div className="flex flex-col space-y-2.5 pt-2">
                      <button
                        onClick={() => setIsTrialModalOpen(true)}
                        className="btn-orange-primary w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shadow-lg hover:shadow-orange-glow transition-all text-center cursor-pointer"
                      >
                        <Calendar className="w-4 h-4" />
                        <span>Book 45-Min Center Visit</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>

                      <a
                        href={`tel:${companyDetails.phone.replace(/\s+/g, "")}`}
                        className="w-full py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider bg-[#1A1A1A] hover:bg-[#252525] border border-white/15 text-white flex items-center justify-center space-x-2 transition-all cursor-pointer"
                      >
                        <PhoneCall className="w-4 h-4 text-[#4ADE80]" />
                        <span>Call Helpline: {companyDetails.phone}</span>
                      </a>

                      <a
                        href="https://maps.google.com/?q=Gayatri+Shaktipith+Kankarbagh+Patna"
                        target="_blank"
                        rel="noreferrer"
                        className="w-full py-2 rounded-xl text-[11px] font-mono text-[#A1A1A1] hover:text-[#4ADE80] flex items-center justify-center space-x-1.5 transition-colors"
                      >
                        <MapPin className="w-3.5 h-3.5 text-[#4ADE80]" />
                        <span>View Patna Center on Map (Kankarbagh)</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Quick Enquire CTA Bar (Standard) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="p-6 rounded-2xl bg-[#141414] border border-[#262626] flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <h4 className="text-base font-bold text-white">
              Interested in enrolling your child in a specialized track?
            </h4>
            <p className="text-xs text-[#A1A1A1]">
              Our mentors evaluate the student's background and map the best level for optimal growth.
            </p>
          </div>
          <button
            onClick={() => setIsTrialModalOpen(true)}
            className="btn-orange-primary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shrink-0 cursor-pointer shadow-lg hover:shadow-orange-glow transition-all"
          >
            Request Syllabus & Trial
          </button>
        </motion.div>
      </div>

      {/* Trial Class / Syllabus Request Modal with WhatsApp Redirection */}
      <TrialClassModal
        isOpen={isTrialModalOpen}
        onClose={() => setIsTrialModalOpen(false)}
      />
    </section>
  );
};
