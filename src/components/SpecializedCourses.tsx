import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Bot, Code2, BrainCircuit, Printer, Palette, Lightbulb, 
  ArrowRight 
} from "lucide-react";
import { specializedCourses, journeyStageDetails } from "../data/specializedCourses";
import type { JourneyLevel, Course } from "../data/specializedCourses";

interface SpecializedCoursesProps {
  onSelectCourse?: (course: Course) => void;
}

export const SpecializedCourses: React.FC<SpecializedCoursesProps> = ({ onSelectCourse }) => {
  const [activeLevel, setActiveLevel] = useState<JourneyLevel>("STARTER");

  const iconLookup: Record<string, React.ElementType> = {
    Bot,
    Code2,
    BrainCircuit,
    Printer,
    Palette,
    Lightbulb,
  };

  const currentLevelInfo = journeyStageDetails[activeLevel];

  // Filter courses that are available for the selected level
  const filteredCourses = specializedCourses.filter((course) =>
    course.levels.includes(activeLevel)
  );

  const levels: JourneyLevel[] = ["STARTER", "LEARNER", "PERFORMER"];

  return (
    <section className="w-full bg-[#0D0D0D] border-b border-[#272727] py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#151515] border border-[#272727] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7711]" />
            <span className="text-[11px] font-mono tracking-widest text-[#FF7711] font-semibold uppercase">
              SPECIALIZED COURSES & TRACKS
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F1F1] tracking-tight">
            Where are you in your journey?
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1A1] mt-3">
            Select your current proficiency stage to reveal structured courses and practical toolkits.
          </p>
        </div>

        {/* Journey Level Selector Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1.5 rounded-2xl bg-[#111111] border border-[#272727] shadow-xl">
            {levels.map((lvl) => {
              const isSelected = activeLevel === lvl;
              return (
                <button
                  key={lvl}
                  onClick={() => setActiveLevel(lvl)}
                  className={`relative px-5 sm:px-8 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-bold tracking-wider transition-all cursor-pointer focus:outline-none ${
                    isSelected
                      ? "bg-[#FF7711] text-[#080808] shadow-[0_0_20px_rgba(255,119,17,0.3)]"
                      : "text-[#A1A1A1] hover:text-[#F1F1F1] hover:bg-[#151515]"
                  }`}
                >
                  {lvl}
                </button>
              );
            })}
          </div>
        </div>

        {/* Level Overview Banner */}
        <div className="mb-10 p-6 rounded-2xl bg-[#151515] border border-[#272727] flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-xs font-mono font-bold text-[#FF7711] uppercase">
                {currentLevelInfo.badge}
              </span>
              <span className="text-[#707070]">•</span>
              <span className="text-sm font-semibold text-[#F1F1F1]">
                {currentLevelInfo.subtitle}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#A1A1A1] max-w-2xl leading-relaxed">
              {currentLevelInfo.description}
            </p>
          </div>

          <div className="text-xs font-mono text-[#707070] shrink-0">
            Showing <span className="text-[#FF7711] font-bold">{filteredCourses.length}</span> Active Courses
          </div>
        </div>

        {/* Dynamic Courses Grid with Framer Motion */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => {
              const Icon = iconLookup[course.iconName] || Bot;
              return (
                <motion.div
                  key={course.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.25 }}
                  onClick={() => onSelectCourse?.(course)}
                  className="p-6 rounded-2xl bg-[#151515] border border-[#272727] hover:border-[#FF7711]/60 transition-all flex flex-col justify-between group cursor-pointer shadow-lg hover:bg-[#1A1A1A]"
                >
                  <div>
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-2.5 rounded-xl bg-[#080808] border border-[#272727] text-[#FF7711] group-hover:border-[#FF7711]/60 transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#080808] border border-[#272727] text-[#A1A1A1] uppercase">
                        {course.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-[#F1F1F1] group-hover:text-[#FF7711] transition-colors mb-2">
                      {course.title}
                    </h3>

                    <p className="text-xs text-[#A1A1A1] leading-relaxed mb-5">
                      {course.description}
                    </p>

                    {/* Skills Learned */}
                    <div className="space-y-1 mb-5">
                      <span className="text-[10px] font-mono text-[#707070] uppercase tracking-wider block">
                        SKILLS LEARNED:
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {course.skillsLearned.map((s) => (
                          <span
                            key={s}
                            className="px-2 py-0.5 rounded bg-[#0D0D0D] border border-[#272727] text-[10px] font-mono text-[#F1F1F1]"
                          >
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tools & CTA */}
                  <div className="pt-4 border-t border-[#272727]">
                    <div className="flex items-center justify-between text-xs font-mono">
                      <span className="text-[#707070] truncate max-w-[180px]">
                        Tools: {course.tools.slice(0, 2).join(", ")}
                      </span>
                      <span className="text-[#FF7711] font-semibold flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                        <span>Details</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};
