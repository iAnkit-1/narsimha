import React from "react";
import { ArrowDown, Building2, FileSpreadsheet, Wrench, Cpu, Trophy } from "lucide-react";
import { schoolImplementationSteps } from "../data/programs";
import { media } from "../data/media";

export const SchoolFlow: React.FC = () => {
  const iconMap: Record<string, React.ElementType> = {
    Building2,
    FileSpreadsheet,
    Wrench,
    Cpu,
    Trophy,
  };

  return (
    <section id="atl" className="w-full bg-[#0D0D0D] border-b border-[#272727] py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#151515] border border-[#272727] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7711]" />
            <span className="text-[11px] font-mono tracking-widest text-[#FF7711] font-semibold uppercase">
              INSTITUTIONAL INTEGRATION
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F1F1] tracking-tight">
            How we partner with schools.
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1A1] mt-3">
            A turnkey 5-stage implementation flow from initial setup to public innovation showcases.
          </p>
        </div>

        {/* 2-Column: 5-Stage Diagram + Real Photograph */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: 5 Sequential Stages (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-3.5">
            {schoolImplementationSteps.map((step, idx) => {
              const Icon = iconMap[step.iconName] || Wrench;
              return (
                <div key={step.step} className="relative">
                  <div className="p-4 sm:p-5 rounded-xl bg-[#151515] border border-[#272727] hover:border-[#FF7711]/50 transition-all flex items-start space-x-4 group">
                    <div className="flex flex-col items-center shrink-0">
                      <span className="font-mono text-xs font-bold text-[#FF7711] bg-[#080808] px-2 py-1 rounded border border-[#272727] mb-1.5">
                        {step.step}
                      </span>
                      <div className="p-2 rounded-lg bg-[#080808] border border-[#272727] text-[#FF7711] group-hover:border-[#FF7711]/60 transition-colors">
                        <Icon className="w-4 h-4" />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-base font-bold text-[#F1F1F1] group-hover:text-[#FF7711] transition-colors">
                          {step.title}
                        </h3>
                        <span className="text-[10px] font-mono text-[#707070] uppercase">
                          Stage 0{idx + 1}
                        </span>
                      </div>
                      <p className="text-xs sm:text-sm text-[#A1A1A1] mt-1 leading-relaxed">
                        {step.detail}
                      </p>
                    </div>
                  </div>

                  {/* Connecting Arrow for sequential progression */}
                  {idx < schoolImplementationSteps.length - 1 && (
                    <div className="flex justify-center my-0.5 text-[#FF7711]/40">
                      <ArrowDown className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right: Real Photograph + Implementation Highlights (5 cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
            <div className="relative rounded-2xl overflow-hidden border border-[#272727] bg-[#111111] flex-1 min-h-[300px] group shadow-xl">
              <img
                src={media.schoolImplementation}
                alt="Teacher facilitating students with hands-on maker tools"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
              
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#080808]/90 border border-[#272727] backdrop-blur-sm">
                <span className="text-[10px] font-mono text-[#FF7711] uppercase font-bold tracking-wider block mb-1">
                  FACULTY & LAB ECOSYSTEM
                </span>
                <p className="text-xs text-[#F1F1F1]">
                  Trained STEM trainers and specialized kits provided on-site for frictionless execution.
                </p>
              </div>
            </div>

            {/* Quick Metrics / Guarantees */}
            <div className="p-5 rounded-xl bg-[#151515] border border-[#272727] grid grid-cols-2 gap-4 text-xs font-mono">
              <div>
                <span className="text-[#707070] block">CURRICULAR FIT</span>
                <span className="text-[#F1F1F1] font-bold">K-12 Integrated</span>
              </div>
              <div>
                <span className="text-[#707070] block">ATL / TINKERING</span>
                <span className="text-[#FF7711] font-bold">Full Lab Support</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
