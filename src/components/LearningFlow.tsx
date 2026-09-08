import React from "react";
import { ArrowRight, Hammer, RefreshCw, Trophy, Lightbulb } from "lucide-react";
import { coreFourProgression } from "../data/learningMethod";
import learningMethodImg from "../assets/learning_method.png";

export const LearningFlow: React.FC = () => {
  const methodHighlights = [
    {
      num: "01",
      title: "Curiosity & Inquiry",
      desc: "Deconstruct real-world problems and formulate initial logic before writing code.",
      icon: Lightbulb,
    },
    {
      num: "02",
      title: "Hands-on Building",
      desc: "Assemble microcontrollers, solder components, 3D print parts, and program sensors.",
      icon: Hammer,
    },
    {
      num: "03",
      title: "Iterative Testing & Debugging",
      desc: "Analyze telemetry, troubleshoot faults, and optimize mechanical and software builds.",
      icon: RefreshCw,
    },
    {
      num: "04",
      title: "Exhibition & Public Showcase",
      desc: "Articulate working principles to mentors and peers, building lifelong presentation confidence.",
      icon: Trophy,
    },
  ];

  return (
    <section className="w-full bg-[#0D0D0D] border-b border-[#272727] py-14 lg:py-20 relative overflow-hidden">
      {/* Subtle background technical grid */}
      <div className="absolute inset-0 tech-grid opacity-20 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* 2-Column: Left Side Content | Right Side Directly Pasted learning_method.png */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column (6 cols): Relevant Editorial Content */}
          <div className="lg:col-span-6 flex flex-col justify-center text-left">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#151515] border border-[#272727] w-fit mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7711]" />
              <span className="text-[11px] font-mono tracking-widest text-[#FF7711] font-semibold uppercase">
                LEARNING PIPELINE
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F1F1] tracking-tight leading-tight mb-3">
              The Learning-by-Doing flow.
            </h2>

            <p className="text-sm sm:text-base text-[#A1A1A1] leading-relaxed mb-6 font-normal">
              Students do not just memorize technological concepts—they actively build, test, fail, iterate, and master them through structured maker cycles.
            </p>

            {/* 4 Compact Method Highlights */}
            <div className="space-y-3 mb-6">
              {methodHighlights.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.num}
                    className="p-3.5 rounded-xl bg-[#151515] border border-[#272727] hover:border-[#FF7711]/50 transition-colors flex items-start space-x-3.5 group"
                  >
                    <div className="p-2 rounded-lg bg-[#080808] border border-[#272727] text-[#FF7711] group-hover:border-[#FF7711]/60 transition-colors shrink-0 mt-0.5">
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-bold text-[#F1F1F1] group-hover:text-[#FF7711] transition-colors">
                          {item.title}
                        </h3>
                        <span className="text-[10px] font-mono font-bold text-[#707070]">
                          {item.num}
                        </span>
                      </div>
                      <p className="text-xs text-[#A1A1A1] mt-0.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom 4-Stage Outcome Progression */}
            <div className="p-3.5 rounded-xl bg-[#111111] border border-[#272727] flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
              <span className="text-[#707070] uppercase">OUTCOME:</span>
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                {coreFourProgression.map((item, idx) => (
                  <React.Fragment key={item.title}>
                    <span className="text-[#F1F1F1] font-semibold bg-[#151515] px-2 py-0.5 rounded border border-[#272727]">
                      {item.title}
                    </span>
                    {idx < coreFourProgression.length - 1 && (
                      <ArrowRight className="w-3 h-3 text-[#FF7711]" />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (6 cols): Direct Image learning_method.png without extra frame design */}
          <div className="lg:col-span-6 flex items-center justify-center">
            <img
              src={learningMethodImg}
              alt="Narasimha Skill Sphere Learning-by-Doing Methodology"
              className="w-full max-w-lg lg:max-w-xl h-auto object-contain filter drop-shadow-2xl"
              loading="lazy"
            />
          </div>

        </div>

      </div>
    </section>
  );
};
