import React from "react";
import { X, CheckCircle2, ArrowRight, BookOpen } from "lucide-react";
import { specializedCourses } from "../data/specializedCourses";
import type { Course } from "../data/specializedCourses";

interface ProgramModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedCourse?: Course | null;
  onPartnerClick: () => void;
}

export const ProgramModal: React.FC<ProgramModalProps> = ({
  isOpen,
  onClose,
  selectedCourse,
  onPartnerClick,
}) => {
  if (!isOpen) return null;

  const course = selectedCourse || specializedCourses[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#111111] border border-[#272727] rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="p-6 bg-[#151515] border-b border-[#272727] flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="p-2.5 rounded-lg bg-[#080808] border border-[#272727] text-[#FF7711]">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-mono text-[#FF7711] font-bold uppercase tracking-wider">
                CURRICULUM SPECIFICATION
              </span>
              <h3 className="text-lg font-bold text-[#F1F1F1]">
                {course.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#A1A1A1] hover:text-[#F1F1F1] hover:bg-[#272727]/50 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          <div>
            <span className="text-xs font-mono text-[#707070] uppercase block mb-1">
              PROGRAM OVERVIEW
            </span>
            <p className="text-sm text-[#A1A1A1] leading-relaxed">
              {course.description}
            </p>
          </div>

          {/* Level Badges */}
          <div>
            <span className="text-xs font-mono text-[#707070] uppercase block mb-2">
              APPLICABLE JOURNEY TIERS
            </span>
            <div className="flex flex-wrap gap-2">
              {course.levels.map((lvl) => (
                <span
                  key={lvl}
                  className="px-3 py-1 rounded-lg bg-[#151515] border border-[#FF7711]/40 text-xs font-mono text-[#FF7711] font-bold"
                >
                  {lvl} LEVEL
                </span>
              ))}
            </div>
          </div>

          {/* Core Skills */}
          <div>
            <span className="text-xs font-mono text-[#707070] uppercase block mb-2">
              COMPETENCIES GAINED
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {course.skillsLearned.map((skill) => (
                <div
                  key={skill}
                  className="flex items-center space-x-2 text-xs text-[#F1F1F1] p-2.5 rounded-lg bg-[#151515] border border-[#272727]"
                >
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7711] shrink-0" />
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Lab Equipment & Hardware */}
          <div>
            <span className="text-xs font-mono text-[#707070] uppercase block mb-2">
              HARDWARE & TOOLING USED
            </span>
            <div className="flex flex-wrap gap-2">
              {course.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 rounded bg-[#080808] border border-[#272727] text-xs font-mono text-[#A1A1A1]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 bg-[#151515] border-t border-[#272727] flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-[#080808] border border-[#272727] text-xs font-mono text-[#A1A1A1] hover:text-[#F1F1F1]"
          >
            Close
          </button>
          <button
            onClick={() => {
              onClose();
              onPartnerClick();
            }}
            className="btn-orange-primary flex items-center space-x-2 px-5 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider"
          >
            <span>Request School / Center Info</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </div>
  );
};
