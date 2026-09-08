import React from "react";
import { ArrowRight, Check } from "lucide-react";
import { media } from "../data/media";

interface AudienceModalProps {
  isOpen: boolean;
  onSelectRole: (role: "school" | "student") => void;
}

export const AudienceModal: React.FC<AudienceModalProps> = ({ isOpen, onSelectRole }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-xl animate-in fade-in duration-300">
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#0A0A0A] border border-[#272727] rounded-2xl overflow-hidden shadow-[0_0_60px_rgba(0,0,0,0.95)] grid grid-cols-1 md:grid-cols-12">
        
        {/* Left Side: Technical Grid & Welcome Banner (5 cols) */}
        <div className="md:col-span-5 bg-[#080808] border-b md:border-b-0 md:border-r border-[#222222] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
          {/* Subtle Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:24px_24px] opacity-40 pointer-events-none" />

          {/* Concentric Radar Graphic at bottom right */}
          <div className="absolute -bottom-10 -right-10 w-44 h-44 rounded-full border border-[#FF7711]/20 flex items-center justify-center pointer-events-none">
            <div className="w-32 h-32 rounded-full border border-[#FF7711]/25 flex items-center justify-center">
              <div className="w-20 h-20 rounded-full border border-[#FF7711]/30 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-[#FF7711] opacity-80" />
              </div>
            </div>
            {/* Satellite dot */}
            <div className="absolute top-6 left-8 w-2 h-2 rounded-full bg-[#FF7711]" />
          </div>

          <div className="relative z-10">
            {/* Brand Logo Header */}
            <div className="flex items-center space-x-2.5 mb-8">
              <div className="w-8 h-8 rounded-lg bg-[#141414] border border-[#2A2A2A] p-1 flex items-center justify-center">
                <img src={media.logo} alt="Narasimha Skill Sphere" className="w-full h-full object-contain" />
              </div>
              <span className="font-mono text-xs font-bold text-[#E5E5E5] tracking-widest uppercase">
                SKILL SPHERE
              </span>
            </div>

            {/* Eyebrow */}
            <div className="text-[10px] font-mono tracking-widest text-[#FF7711] font-bold uppercase mb-3">
              A BETTER STARTING POINT
            </div>

            {/* Headline */}
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#FFFFFF] tracking-tight leading-tight mb-4">
              Welcome to your{" "}
              <span className="text-[#FF7711] block font-extrabold">
                Skill Sphere.
              </span>
            </h2>

            {/* Subtitle */}
            <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed max-w-xs">
              Tell us who you are so we can show you the right experience.
            </p>
          </div>

          {/* Bottom radar label */}
          <div className="relative z-10 mt-12 flex items-center space-x-2 text-[10px] font-mono text-[#777777] tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full border border-[#FF7711] flex items-center justify-center">
              <span className="w-1 h-1 rounded-full bg-[#FF7711]" />
            </span>
            <span>START WITH CURIOSITY</span>
          </div>
        </div>

        {/* Right Side: 2 Options (7 cols) */}
        <div className="md:col-span-7 bg-[#0E0E0E] p-6 sm:p-8 flex flex-col justify-between">
          <div>
            {/* Top header row */}
            <div className="flex items-center justify-between text-xs font-mono text-[#888888] mb-6">
              <span>Choose a path to explore practical technology learning.</span>
              <span className="text-[#666666]">00 / 01</span>
            </div>

            {/* Options list */}
            <div className="space-y-4">
              
              {/* 01: SCHOOL */}
              <button
                onClick={() => onSelectRole("school")}
                className="w-full text-left p-5 sm:p-6 rounded-xl border-2 border-[#FF7711] bg-[#121212] hover:bg-[#181818] transition-all flex items-center justify-between group cursor-pointer shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <span className="text-xs font-mono font-bold text-[#FF7711] pt-1">
                    01
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#FFFFFF] tracking-tight">
                      SCHOOL
                    </h3>
                    <p className="text-xs sm:text-sm text-[#A1A1A1] mt-1 leading-snug">
                      Explore programs, centers and solutions for your institution.
                    </p>
                  </div>
                </div>

                <div className="pl-3">
                  <ArrowRight className="w-5 h-5 text-[#FF7711] group-hover:translate-x-1.5 transition-transform" />
                </div>
              </button>

              {/* 02: STUDENT / PARENT */}
              <button
                onClick={() => onSelectRole("student")}
                className="w-full text-left p-5 sm:p-6 rounded-xl bg-[#FF7711] hover:bg-[#FF8822] text-[#080808] transition-all flex items-center justify-between group cursor-pointer shadow-xl"
              >
                <div className="flex items-start space-x-4">
                  <span className="text-xs font-mono font-bold text-[#080808] pt-1">
                    02
                  </span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-extrabold text-[#080808] tracking-tight">
                      STUDENT / PARENT
                    </h3>
                    <p className="text-xs sm:text-sm text-[#222222] font-medium mt-1 leading-snug">
                      Explore learning centers, courses and opportunities for students.
                    </p>
                  </div>
                </div>

                <div className="pl-3">
                  <ArrowRight className="w-5 h-5 text-[#080808] group-hover:translate-x-1.5 transition-transform" />
                </div>
              </button>

            </div>
          </div>

          {/* Bottom Confirmation Flag */}
          <div className="mt-8 pt-4 border-t border-[#1C1C1C] flex items-center space-x-2 text-[10px] font-mono tracking-widest text-[#707070] uppercase">
            <Check className="w-3.5 h-3.5 text-[#FF7711]" />
            <span>YOUR SELECTION SHAPES THIS VISIT ONLY</span>
          </div>

        </div>

      </div>
    </div>
  );
};
