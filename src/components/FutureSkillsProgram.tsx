import React from "react";
import { motion } from "framer-motion";
import { 
  MapPin, Users, GraduationCap, TrendingUp,
  Calendar, Wrench, Code, Gift, ArrowRight,
  ShieldCheck, UserCheck, Star, Sparkles, Lightbulb, Bot
} from "lucide-react";
import roboWithStudentsImg from "../assets/robo with students.png";

interface FutureSkillsProgramProps {
  onBookTrial: () => void;
}

export const FutureSkillsProgram: React.FC<FutureSkillsProgramProps> = ({ onBookTrial }) => {
  const quickBenefits = [
    { icon: MapPin, text: "At our nearest center", color: "text-[#FF7711]" },
    { icon: Users, text: "Learn with peers", color: "text-[#A855F7]" },
    { icon: GraduationCap, text: "Build skills for tomorrow", color: "text-[#10B981]" },
    { icon: TrendingUp, text: "Guided by experts", color: "text-[#F59E0B]" },
  ];

  const classHighlights = [
    { icon: Wrench, title: "Hands-on learning", color: "text-[#10B981]" },
    { icon: Users, title: "Small Batch — 12 Students", color: "text-[#8B5CF6]" },
    { icon: Code, title: "Real World Projects", color: "text-[#F59E0B]" },
    { icon: Gift, title: "Free Kit with Program", color: "text-[#EC4899]" },
  ];

  return (
    <section id="future-skills-program" className="relative w-full py-12 lg:py-16 bg-[#080808] overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#FF7711]/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-[400px] h-[300px] bg-[#3B82F6]/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Banner Card */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#161616] to-[#0D0D0D] border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.8)] p-6 sm:p-8 lg:p-10 overflow-hidden">
          
          {/* Subtle grid background pattern */}
          <div 
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage: "radial-gradient(#FFFFFF 1px, transparent 1px)",
              backgroundSize: "24px 24px"
            }}
          />

          {/* Top Main Section: Content (Left) + Robot & Students (Right) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center relative z-10 mb-8 lg:mb-10">
            
            {/* Left Content (7 cols) */}
            <div className="lg:col-span-7 flex flex-col text-left">
              
              {/* Badge: Offline - Class 3 Onwards */}
              <div className="inline-flex items-center space-x-2.5 px-4 py-2 rounded-full bg-[#1A1A1A] border border-[#FF7711]/40 w-fit mb-5 shadow-lg shadow-black/40 group hover:border-[#FF7711] transition-all">
                <div className="w-6 h-6 rounded-full bg-[#FF7711] flex items-center justify-center text-black">
                  <MapPin className="w-3.5 h-3.5 fill-black text-black" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-white tracking-wide">
                  Offline — <span className="text-[#FF7711]">Class 3 Onwards</span>
                </span>
                <span className="text-sm">✨</span>
              </div>

              {/* Main Headline */}
              <h2 className="text-3xl sm:text-5xl lg:text-5xl font-black text-white tracking-tight leading-[1.08] mb-3">
                Future Skills <br />
                <span className="bg-gradient-to-r from-[#FF7711] via-[#FFA149] to-[#FF5500] bg-clip-text text-transparent">
                  Continuous Program
                </span>
              </h2>

              {/* Technology Topics List */}
              <p className="text-xs sm:text-sm text-[#A3A3A3] font-mono font-medium leading-relaxed mb-1">
                Robotics <span className="text-[#FF7711]">|</span> Coding <span className="text-[#FF7711]">|</span> AI <span className="text-[#FF7711]">|</span> 3D-Design <span className="text-[#FF7711]">|</span> IoT <span className="text-[#FF7711]">|</span> AR/VR <span className="text-[#FF7711]">|</span> Drone
              </p>
              <p className="text-xs sm:text-sm text-[#A3A3A3] font-mono font-medium leading-relaxed mb-3">
                Entrepreneurial mindset <span className="text-[#FF7711]">|</span> Emerging Tech — All Year Round
              </p>

              {/* Tagline */}
              <p className="text-base sm:text-lg font-bold text-[#38BDF8] tracking-tight mb-6">
                Small Batches, Big Possibilities.
              </p>

              {/* 4 Feature Benefit Chips */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3">
                {quickBenefits.map((b, idx) => {
                  const Icon = b.icon;
                  return (
                    <div
                      key={idx}
                      className="flex items-center space-x-2 p-2.5 sm:p-3 rounded-xl bg-white/[0.04] border border-white/10 hover:border-white/20 transition-all backdrop-blur-sm"
                    >
                      <Icon className={`w-4 h-4 sm:w-5 sm:h-5 ${b.color} shrink-0`} />
                      <span className="text-[11px] sm:text-xs font-semibold text-[#E5E5E5] leading-snug">
                        {b.text}
                      </span>
                    </div>
                  );
                })}
              </div>

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
                  Learn • Build • Create • Lead
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
                  The Future is Yours!
                </span>
              </motion.div>

              {/* Main Image Container */}
              <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-gradient-to-b from-[#1C1C1C] to-[#121212] w-full max-w-[480px]">
                <img
                  src={roboWithStudentsImg}
                  alt="Students building intelligent robot in hands-on lab"
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
                  <span className="text-[11px] font-black text-amber-950">Small Ideas</span>
                  <span className="text-[10px] font-bold text-amber-900">Big Futures</span>
                </div>
              </motion.div>

            </div>

          </div>

          {/* Bottom Card: Weekly Classes & Pricing Strip */}
          <div className="rounded-2xl bg-[#101010]/95 border border-white/10 p-5 sm:p-6 shadow-xl relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
              
              {/* Left Details (7 cols) */}
              <div className="lg:col-span-7 flex flex-col text-left">
                
                {/* Header info */}
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-9 h-9 rounded-xl bg-[#3B82F6]/20 border border-[#3B82F6]/40 flex items-center justify-center text-[#38BDF8]">
                    <Calendar className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-white tracking-tight">
                      Weekly Classes
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-[#D4D4D4] font-medium mb-4">
                  Three age-mapped tiers —{" "}
                  <span className="text-[#FF7711] font-bold">Junior (7–9 Y)</span>,{" "}
                  <span className="text-[#FF7711] font-bold">Middle (10–13 Y)</span>,{" "}
                  <span className="text-[#FF7711] font-bold">Senior (14–18 Y)</span>
                </p>

                {/* 4 Feature Badges */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5">
                  {classHighlights.map((c, idx) => {
                    const Icon = c.icon;
                    return (
                      <div
                        key={idx}
                        className="flex items-center space-x-2 p-2 rounded-lg bg-black/50 border border-white/10 text-left"
                      >
                        <Icon className={`w-4 h-4 ${c.color} shrink-0`} />
                        <span className="text-[10px] sm:text-[11px] font-semibold text-[#E5E5E5] leading-tight">
                          {c.title}
                        </span>
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* Right Pricing & Action (5 cols) */}
              <div className="lg:col-span-5 flex flex-col items-center lg:items-end text-center lg:text-right pt-4 lg:pt-0 border-t lg:border-t-0 lg:border-l border-white/10 lg:pl-6">
                
                {/* Price tag */}
                <div className="flex items-center space-x-2 mb-1">
                  <span className="text-2xl sm:text-3xl font-black text-[#FF7711] tracking-tight">
                    ₹ 2,000
                  </span>
                  <span className="text-sm font-bold text-white/80">/ Month</span>
                </div>
                <p className="text-xs text-[#A3A3A3] mb-3">
                  Value learning. A brighter future.
                </p>

                {/* Book Free Trial Button */}
                <button
                  onClick={onBookTrial}
                  className="w-full sm:w-auto px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#FF7711] via-[#FF5500] to-[#E11D48] text-white font-bold text-sm tracking-wide shadow-[0_4px_20px_rgba(255,119,17,0.45)] hover:shadow-[0_4px_30px_rgba(255,119,17,0.7)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer mb-3"
                >
                  <span>Book a Free Trial Class</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* Trust Badges */}
                <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-3 gap-y-1 text-[10px] sm:text-[11px] text-[#A3A3A3]">
                  <span className="flex items-center space-x-1">
                    <ShieldCheck className="w-3 h-3 text-[#10B981]" />
                    <span>Safe Environment</span>
                  </span>
                  <span className="text-white/20">•</span>
                  <span className="flex items-center space-x-1">
                    <UserCheck className="w-3 h-3 text-[#38BDF8]" />
                    <span>Experienced Mentors</span>
                  </span>
                  <span className="text-white/20">•</span>
                  <span className="flex items-center space-x-1">
                    <Star className="w-3 h-3 text-[#F59E0B]" />
                    <span>Project Showcase</span>
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
