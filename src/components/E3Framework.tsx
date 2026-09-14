import React from "react";
import { ArrowRight } from "lucide-react";
import pedagogyImg from "../assets/OUR PEDAGOGY.png";

interface E3FrameworkProps {
  onPartnerClick?: () => void;
}

export const E3Framework: React.FC<E3FrameworkProps> = ({ onPartnerClick }) => {
  const e3Points = [
    {
      emoji: "🎮",
      title: "Enjoyable",
      description: "We replace boredom with excitement. Using gamified elements and interactive tools, we spark the initial curiosity that makes a student want to learn.",
      accent: "border-amber-500/40",
    },
    {
      emoji: "⚡",
      title: "Engaging",
      description: "Hands-on activity takes center stage. Students move from passive listening to active building—soldering, coding, and assembling robots.",
      accent: "border-orange-500/40",
    },
    {
      emoji: "🧳",
      title: "Experiential",
      description: "Real-world application. Students tackle actual industry problems, preparing them for future careers with practical, job-ready skills.",
      accent: "border-emerald-500/40",
    },
  ];

  return (
    <section id="e3-pedagogy" className="w-full bg-[#080808] border-b border-[#222222] py-16 lg:py-24 relative overflow-hidden">
      
      {/* Background Ambience Glow */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[350px] bg-[#FF7711]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-[#38BDF8]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#FF7711]/40 mb-3.5 shadow-md">
            <span className="text-sm">⚡</span>
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF7711] font-bold">
              OUR PEDAGOGY
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-3">
            The{" "}
            <span className="bg-gradient-to-r from-[#FF7711] via-[#FFA149] to-[#FF5500] bg-clip-text text-transparent">
              E³ Approach
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
            We bridge the gap between traditional education and future readiness through a structured, three-stage transformation process.
          </p>
        </div>

        {/* 2-Column: 3 Stage Cards (Left) | Clean Pedagogy Diagram (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column (6 cols): 3 Stage Cards */}
          <div className="lg:col-span-6 space-y-4 text-left">
            {e3Points.map((point) => (
              <div
                key={point.title}
                className="p-5 sm:p-6 rounded-2xl bg-[#121212] border border-white/10 hover:border-[#FF7711]/50 transition-all duration-300 shadow-xl group hover:-translate-y-0.5"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <span className="text-2xl group-hover:scale-110 transition-transform">{point.emoji}</span>
                  <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-[#FF7711] transition-colors">
                    {point.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#CCCCCC] leading-relaxed pl-9 font-normal">
                  {point.description}
                </p>
              </div>
            ))}

            {onPartnerClick && (
              <div className="pt-2 pl-1">
                <button
                  onClick={onPartnerClick}
                  className="btn-orange-primary px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center space-x-2 shadow-lg hover:shadow-orange-glow transition-all cursor-pointer"
                >
                  <span>Implement E³ In Your School</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            )}
          </div>

          {/* Right Column (6 cols): Direct Diagram without container borders */}
          <div className="lg:col-span-6 flex items-center justify-center p-2">
            <div className="w-full max-w-[440px] flex items-center justify-center">
              <img
                src={pedagogyImg}
                alt="Our Pedagogy Blueprint - The E³ Approach"
                className="w-full h-auto max-h-[460px] object-contain filter drop-shadow-[0_15px_35px_rgba(0,0,0,0.9)] hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
