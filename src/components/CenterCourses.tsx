import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Laptop,
  CheckCircle2,
  Bot,
  Code2,
  BrainCircuit,
  Printer,
  Compass,
  Coins,
  Rocket,
  Sparkles,
} from "lucide-react";
import { starterCourses, learnerCourses } from "../assets/data/centersPageData";

export const CenterCourses: React.FC = () => {
  const [activeCourseLevel, setActiveCourseLevel] = useState<"STARTER" | "LEARNER">("STARTER");
  const activeCourseList = activeCourseLevel === "STARTER" ? starterCourses : learnerCourses;

  const getCourseDomainIcon = (domain: string) => {
    switch (domain.toUpperCase()) {
      case "ROBOTICS":
        return Bot;
      case "CODING":
        return Code2;
      case "AI / ML":
        return BrainCircuit;
      case "3D PRINTING":
        return Printer;
      case "DRONE TECHNOLOGY":
        return Compass;
      case "FINANCIAL LITERACY":
        return Coins;
      case "ENTREPRENEUR MINDSET":
        return Rocket;
      default:
        return Sparkles;
    }
  };

  return (
    <section id="our-courses" className="w-full bg-[#0B0B0B] border-b border-[#222222] py-20 lg:py-28 relative overflow-hidden">
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

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight mb-3">
            OUR <span className="font-serif italic font-normal text-[#FF7711]">COURSES</span>
          </h2>

          <p className="text-sm sm:text-base text-[#A1A1A1] leading-relaxed">
            Explore our structured learning tracks designed for foundational discovery and advanced innovation.
          </p>
        </motion.div>

        {/* Level Switcher (STARTER vs LEARNER) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-col items-center justify-center mb-8"
        >
          <div className="inline-flex p-1.5 rounded-2xl bg-[#141414] border border-[#2B2B2B] shadow-2xl">
            <button
              onClick={() => setActiveCourseLevel("STARTER")}
              className={`px-6 sm:px-8 py-3 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center space-x-2 ${
                activeCourseLevel === "STARTER"
                  ? "bg-[#FF7711] text-black shadow-lg shadow-[#FF7711]/20"
                  : "text-[#A1A1A1] hover:text-white hover:bg-[#1C1C1C]"
              }`}
            >
              <span>🌱 STARTER</span>
              <span className="text-[10px] opacity-80">(Foundation)</span>
            </button>

            <button
              onClick={() => setActiveCourseLevel("LEARNER")}
              className={`px-6 sm:px-8 py-3 rounded-xl font-mono text-xs sm:text-sm font-bold transition-all cursor-pointer flex items-center space-x-2 ${
                activeCourseLevel === "LEARNER"
                  ? "bg-[#38BDF8] text-black shadow-lg shadow-[#38BDF8]/20"
                  : "text-[#A1A1A1] hover:text-white hover:bg-[#1C1C1C]"
              }`}
            >
              <span>⚡ LEARNER</span>
              <span className="text-[10px] opacity-80">(Advanced)</span>
            </button>
          </div>

          <span className="text-[11px] font-mono text-white/50 mt-4">
            ✨ Hover over any card to pause scroll and view full details
          </span>
        </motion.div>

      </div>

      {/* Automatic Horizontally Moving Cards Track */}
      <div className="relative w-full overflow-hidden py-4">
        {/* Side Gradient Masks for Smooth Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#0B0B0B] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#0B0B0B] to-transparent z-20 pointer-events-none" />

        {/* Continuous Marquee Track */}
        <div className="flex animate-marquee-scroll space-x-6 px-4">
          {[...activeCourseList, ...activeCourseList].map((course, idx) => {
            const DomainIcon = getCourseDomainIcon(course.domain);
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
                className="group relative h-[420px] w-[320px] sm:w-[350px] shrink-0 rounded-2xl overflow-hidden border border-white/15 hover:border-[#FF7711]/70 transition-all duration-500 shadow-2xl cursor-pointer bg-[#101010]"
              >
                {/* Background Image */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="absolute inset-0 w-full h-full object-cover filter brightness-[0.85] contrast-[1.05] group-hover:scale-110 group-hover:brightness-[0.95] transition-transform duration-700 ease-out"
                />

                {/* Gentle gradient scrim */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/15 pointer-events-none" />

                {/* Top Badges */}
                <div className="absolute top-3.5 inset-x-3.5 flex items-center justify-between z-10">
                  <div className="w-9 h-9 rounded-xl bg-black/70 backdrop-blur-md border border-white/25 flex items-center justify-center shadow-lg text-[#FF7711]">
                    <DomainIcon className="w-4 h-4" />
                  </div>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-black/80 border border-white/20 text-white font-bold backdrop-blur-md shadow-sm">
                    {course.domain}
                  </span>
                </div>

                {/* Default Bottom Content (Visible by default, slides out on hover) */}
                <div className="absolute bottom-0 inset-x-0 p-5 z-10 transition-all duration-300 transform group-hover:opacity-0 group-hover:-translate-y-3 pointer-events-none">
                  <div className="flex items-center space-x-1.5 mb-1">
                    <span className="text-base drop-shadow-md">{course.emoji}</span>
                    <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#FF7711]">
                      {course.domain}
                    </span>
                  </div>
                  <h4 className="text-lg font-bold text-white tracking-tight leading-snug drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] mb-1.5">
                    {course.title}
                  </h4>
                  <p className="text-xs text-[#E5E5E5] line-clamp-2 leading-relaxed drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
                    {course.detail}
                  </p>
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        {/* Quick Enquire CTA Bar */}
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
          <a
            href="#book-visit"
            className="btn-orange-primary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shrink-0"
          >
            Request Syllabus & Trial
          </a>
        </motion.div>
      </div>
    </section>
  );
};
