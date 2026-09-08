import React from "react";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { ageGroups } from "../data/ageGroups";
import type { AgeGroup } from "../data/ageGroups";

interface AgeGroupsProps {
  onSelectGroup?: (group: AgeGroup) => void;
}

export const AgeGroups: React.FC<AgeGroupsProps> = ({ onSelectGroup }) => {
  return (
    <section className="w-full bg-[#080808] border-b border-[#272727] py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#111111] border border-[#272727] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7711]" />
            <span className="text-[11px] font-mono tracking-widest text-[#FF7711] font-semibold uppercase">
              TIERED LEARNING PATHWAY
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F1F1] tracking-tight">
            A learning path for every stage.
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1A1] mt-3">
            Developmentally tailored curriculums designed to grow alongside student maturity and cognitive depth.
          </p>
        </div>

        {/* 3 Image-Led Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {ageGroups.map((group) => (
            <div
              key={group.id}
              onClick={() => onSelectGroup?.(group)}
              className="bg-[#151515] border border-[#272727] hover:border-[#FF7711]/60 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 flex flex-col justify-between shadow-xl"
            >
              {/* Photo Container */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-[#0D0D0D]">
                <img
                  src={group.image}
                  alt={group.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent" />
                
                {/* Grade Badge */}
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded bg-[#080808]/90 text-[#FF7711] border border-[#FF7711]/40 text-xs font-mono font-bold tracking-wider uppercase backdrop-blur-sm">
                    {group.grades}
                  </span>
                </div>

                <div className="absolute bottom-3 right-3">
                  <span className="px-2 py-0.5 rounded bg-[#111111]/90 text-[#A1A1A1] border border-[#272727] text-[10px] font-mono uppercase backdrop-blur-sm">
                    {group.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-[#F1F1F1] group-hover:text-[#FF7711] transition-colors mb-2">
                    {group.name}
                  </h3>

                  <p className="text-xs text-[#A1A1A1] leading-relaxed mb-4">
                    {group.tagline}
                  </p>

                  {/* Focus List */}
                  <div className="space-y-1.5 mb-5">
                    <span className="text-[10px] font-mono text-[#707070] uppercase tracking-wider block">
                      CORE FOCUS:
                    </span>
                    {group.focus.map((item) => (
                      <div key={item} className="flex items-start space-x-2 text-xs text-[#F1F1F1]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7711] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Sample Projects Footer */}
                <div className="pt-4 border-t border-[#272727]">
                  <span className="text-[10px] font-mono text-[#707070] uppercase block mb-1.5">
                    SAMPLE BUILDS:
                  </span>
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {group.keyProjects.map((p) => (
                      <span
                        key={p}
                        className="px-2 py-0.5 rounded bg-[#0D0D0D] border border-[#272727] text-[10px] font-mono text-[#A1A1A1]"
                      >
                        {p}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-xs font-mono text-[#FF7711] font-semibold group-hover:translate-x-1 transition-transform">
                    <span>Explore Grade Track</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
