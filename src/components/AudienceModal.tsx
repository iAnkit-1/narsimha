import React from "react";
import { 
  Building2, 
  Sparkles, 
  ArrowRight, 
  X 
} from "lucide-react";
import { media } from "../data/media";

interface AudienceModalProps {
  isOpen: boolean;
  onSelectRole: (role: "school" | "student") => void;
}

export const AudienceModal: React.FC<AudienceModalProps> = ({ isOpen, onSelectRole }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/80 backdrop-blur-xl animate-in fade-in duration-300">
      
      {/* Subtle Outer Neon Ambient Glow */}
      <div className="absolute w-[500px] h-[320px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-orange-500/10 blur-[110px] rounded-full pointer-events-none" />

      {/* Compact Glassmorphic Modal */}
      <div className="relative w-full max-w-3xl bg-[#0D0D11]/95 backdrop-blur-2xl border border-white/10 rounded-2xl sm:rounded-3xl overflow-hidden shadow-[0_16px_50px_rgba(0,0,0,0.85)] grid grid-cols-1 md:grid-cols-12 z-10">
        
        {/* Close Button */}
        <button
          onClick={() => onSelectRole("school")}
          className="absolute top-3.5 right-3.5 z-20 w-7 h-7 rounded-full bg-white/5 border border-white/10 text-white/50 hover:text-white hover:bg-white/10 flex items-center justify-center transition-all cursor-pointer"
          title="Close modal"
        >
          <X className="w-3.5 h-3.5" />
        </button>

        {/* ========================================================================= */}
        {/* LEFT BRANDING PANEL (5 cols)                                              */}
        {/* ========================================================================= */}
        <div className="md:col-span-5 bg-gradient-to-br from-[#121218] via-[#0E0E14] to-[#0A0A0E] border-b md:border-b-0 md:border-r border-white/10 p-5 sm:p-6 flex flex-col justify-between relative overflow-hidden">
          
          {/* Subtle Cyber Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
          <div className="absolute -top-12 -left-12 w-40 h-40 bg-cyan-500/15 blur-[60px] rounded-full pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-orange-500/15 blur-[60px] rounded-full pointer-events-none" />

          <div className="relative z-10">
            {/* Logo & Brand Header */}
            <div className="flex items-center space-x-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-white/5 backdrop-blur-md border border-white/15 p-1 flex items-center justify-center shadow-inner">
                <img 
                  src={media.logo} 
                  alt="Narasimha Skill Sphere" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <div>
                <span className="font-extrabold text-xs tracking-wide text-white block leading-tight">
                  NARASIMHA
                </span>
                <span className="text-[9px] font-mono tracking-widest text-[#FF7711] font-bold uppercase">
                  SKILL SPHERE
                </span>
              </div>
            </div>

            {/* Tagline Pill */}
            <div className="inline-flex items-center space-x-1.5 px-2.5 py-0.5 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono text-cyan-300 font-medium mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <span>EXPERIENTIAL STEM LABS</span>
            </div>

            {/* Headline */}
            <h2 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight leading-tight mb-2">
              Where Curiosity <br />
              Becomes{" "}
              <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-cyan-400 bg-clip-text text-transparent">
                Creation.
              </span>
            </h2>

            <p className="text-[11px] text-white/65 leading-relaxed font-normal">
              Empowering students, parents, and schools through hands-on Robotics, Coding, AI, and 3D Prototyping.
            </p>
          </div>

          {/* Compact bottom indicator */}
          <div className="relative z-10 mt-6 pt-3 border-t border-white/10 text-[10px] font-mono text-white/40 flex items-center justify-between">
            <span>NEP 2020 Aligned</span>
            <span>K-12 Pathways</span>
          </div>

        </div>

        {/* ========================================================================= */}
        {/* RIGHT SELECTION PANEL (7 cols)                                            */}
        {/* ========================================================================= */}
        <div className="md:col-span-7 bg-[#0A0A0E]/95 p-5 sm:p-6 flex flex-col justify-center relative">
          
          {/* Header */}
          <div className="mb-4">
            <span className="text-[9px] font-mono font-bold tracking-widest text-white/50 uppercase block mb-0.5">
              EXPLORE WITH US
            </span>
            <h3 className="text-lg sm:text-xl font-extrabold text-white tracking-tight">
              Choose your path
            </h3>
          </div>

          {/* 2 Clean Balanced Option Cards */}
          <div className="space-y-3">
            
            {/* Option 1: SCHOOL */}
            <button
              onClick={() => onSelectRole("school")}
              className="w-full text-left p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-cyan-500/50 transition-all duration-200 flex items-center justify-between group cursor-pointer shadow-md hover:shadow-[0_0_24px_rgba(6,182,212,0.12)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="flex items-center space-x-3.5 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-105 group-hover:bg-cyan-500 group-hover:text-black transition-all shrink-0">
                  <Building2 className="w-5 h-5" />
                </div>

                <div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-cyan-400 block mb-0.5">
                    FOR INSTITUTIONS
                  </span>
                  <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors leading-tight">
                    School / Institution
                  </h4>
                  <p className="text-[11px] text-white/60 mt-0.5 leading-snug">
                    Turnkey Atal Tinkering Labs (ATL), faculty development & STEM curriculum.
                  </p>
                </div>
              </div>

              <div className="pl-3 relative z-10 shrink-0">
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-cyan-400 group-hover:border-cyan-500/40 group-hover:translate-x-0.5 transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </button>

            {/* Option 2: STUDENT / PARENT */}
            <button
              onClick={() => onSelectRole("student")}
              className="w-full text-left p-4 rounded-xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-purple-500/50 transition-all duration-200 flex items-center justify-between group cursor-pointer shadow-md hover:shadow-[0_0_24px_rgba(168,85,247,0.12)] relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/5 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />

              <div className="flex items-center space-x-3.5 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 group-hover:scale-105 group-hover:bg-purple-500 group-hover:text-black transition-all shrink-0">
                  <Sparkles className="w-5 h-5" />
                </div>

                <div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-purple-400 block mb-0.5">
                    FOR LEARNERS & FAMILIES
                  </span>
                  <h4 className="text-base font-bold text-white group-hover:text-purple-300 transition-colors leading-tight">
                    Student / Parent
                  </h4>
                  <p className="text-[11px] text-white/60 mt-0.5 leading-snug">
                    Hands-on center sessions, robotics, AI & coding courses & free trials.
                  </p>
                </div>
              </div>

              <div className="pl-3 relative z-10 shrink-0">
                <div className="w-7 h-7 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/50 group-hover:text-purple-400 group-hover:border-purple-500/40 group-hover:translate-x-0.5 transition-all">
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </button>

          </div>

          {/* Micro Footer Notice */}
          <div className="mt-3 pt-2 text-center text-[10px] font-mono text-white/35">
            Switch anytime from the navigation bar
          </div>

        </div>

      </div>
    </div>
  );
};
