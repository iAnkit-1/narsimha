import React from "react";
import { Hammer, Award, Cpu, GraduationCap, ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { media } from "../data/media";

interface NarasimhaMethodProps {
  onExploreMethodology?: () => void;
}

export const NarasimhaMethod: React.FC<NarasimhaMethodProps> = ({ onExploreMethodology }) => {
  const methodCards = [
    {
      num: "01",
      icon: Hammer,
      title: "Hands-on First",
      detail: "70% Practical, 30% Theory. Students learn by building, testing and experimenting.",
      metric: "70/30 Ratio",
    },
    {
      num: "02",
      icon: Award,
      title: "Structured Grading",
      detail: "Monthly assessments and certification for every student.",
      metric: "Monthly Audit",
    },
    {
      num: "03",
      icon: Cpu,
      title: "Real-World Projects",
      detail: "Students work on actual problems instead of only assembling kits.",
      metric: "Industry Relevant",
    },
    {
      num: "04",
      icon: GraduationCap,
      title: "Teacher Training",
      detail: "Faculty are upskilled so the school can sustain the innovation ecosystem.",
      metric: "FDP Certified",
    },
  ];

  return (
    <section id="narasimha-method" className="w-full bg-[#0D0D0D] border-b border-[#272727] py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Top Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#151515] border border-[#272727] mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7711]" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF7711] font-bold">
              THE NARASIMHA METHOD
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F1F1F1] tracking-tight leading-tight mb-4">
            Learning Beyond{" "}
            <span className="font-serif italic font-normal text-[#FF7711]">The Textbooks.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#A1A1A1] leading-relaxed">
            Traditional ATLs often become dusty rooms full of unused equipment. We change that by integrating technology directly into the student’s daily life through structured play.
          </p>
        </div>

        {/* 2-Column Layout: Left Image + Right 4 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Column: High Quality Photographic Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden border border-[#272727] bg-[#151515] group shadow-2xl">
              <div className="aspect-[4/3] lg:aspect-[5/6] w-full overflow-hidden relative">
                <img
                  src={media.highTechLab}
                  alt="Narasimha High-Tech Maker Lab with Active Students"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />

                {/* Floating badge inside photo */}
                <div className="absolute top-4 left-4 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/15 text-xs font-mono text-white flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF7711] animate-ping" />
                  <span>ACTIVE LAB WORKBENCH</span>
                </div>

                <div className="absolute bottom-6 inset-x-6">
                  <div className="p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-[#333333]">
                    <div className="text-[10px] font-mono text-[#FF7711] font-bold uppercase mb-1">
                      70% PRACTICAL • 30% THEORY
                    </div>
                    <p className="text-xs text-[#E2E8F0] leading-snug">
                      Students gain confidence through continuous tinkering, trial-and-error, and self-built working systems.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Method Cards + CTA */}
          <div className="lg:col-span-7 flex flex-col justify-between">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 mb-8">
              {methodCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="p-5 sm:p-6 rounded-2xl bg-[#141414] border border-[#272727] hover:border-[#FF7711]/60 transition-all duration-300 group hover:-translate-y-0.5 shadow-md flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-10 h-10 rounded-xl bg-[#1B1B1B] border border-[#2B2B2B] flex items-center justify-center text-[#FF7711] group-hover:bg-[#FF7711] group-hover:text-black transition-colors">
                          <Icon className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono text-[#666666] font-bold">
                          {card.metric}
                        </span>
                      </div>

                      <h3 className="text-base font-bold text-[#F1F1F1] group-hover:text-white mb-2">
                        {card.title}
                      </h3>

                      <p className="text-xs text-[#A1A1A1] leading-relaxed">
                        {card.detail}
                      </p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-[#202020] flex items-center space-x-1.5 text-[11px] font-mono text-[#777777] group-hover:text-[#FF7711]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7711]" />
                      <span>Verified Narasimha Standard</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Supporting CTA */}
            <div className="flex items-center justify-between p-4 sm:p-5 rounded-2xl bg-[#111111] border border-[#272727]">
              <div className="flex flex-col">
                <span className="text-sm font-bold text-[#F1F1F1]">Want to explore our entire pedagogical blueprint?</span>
                <span className="text-xs text-[#888888]">From grades 1 through 12, tailored to NEP 2020 guidelines.</span>
              </div>
              <button
                onClick={() => {
                  if (onExploreMethodology) {
                    onExploreMethodology();
                  } else {
                    const el = document.getElementById("courses-learning-path");
                    el?.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="btn-orange-primary px-4 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center space-x-2 shrink-0 cursor-pointer ml-4"
              >
                <span>Explore Full Methodology</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
