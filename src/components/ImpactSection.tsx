import React from "react";
import { Building2, Users, CheckCircle2, ShieldCheck, ArrowRight } from "lucide-react";
import { impactStats } from "../data/stats";

interface ImpactSectionProps {
  onPartnerClick?: () => void;
}

export const ImpactSection: React.FC<ImpactSectionProps> = ({ onPartnerClick }) => {
  const iconLookup: Record<string, React.ElementType> = {
    Building2,
    Users,
    CheckCircle2,
    ShieldCheck,
  };

  return (
    <section className="w-full bg-[#080808] border-b border-[#272727] py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#111111] border border-[#272727] mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF7711]" />
            <span className="text-[11px] font-mono tracking-widest text-[#FF7711] font-semibold uppercase">
              MEASURABLE TRACK RECORD
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F1F1] tracking-tight">
            Learning that leaves a mark.
          </h2>
          <p className="text-sm sm:text-base text-[#A1A1A1] mt-3">
            Verified impact across schools, maker spaces, and student communities.
          </p>
        </div>

        {/* Restrained Visual Data Design Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {impactStats.map((stat) => {
            const Icon = iconLookup[stat.iconName] || CheckCircle2;
            return (
              <div
                key={stat.id}
                className="p-6 rounded-2xl bg-[#151515] border border-[#272727] hover:border-[#FF7711]/50 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="p-2 rounded-lg bg-[#080808] border border-[#272727] text-[#FF7711] group-hover:border-[#FF7711]/60 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono text-[#707070] uppercase">
                      VERIFIED DATA
                    </span>
                  </div>

                  <div className="text-3xl sm:text-4xl font-extrabold text-[#F1F1F1] font-mono tracking-tight group-hover:text-[#FF7711] transition-colors mb-2">
                    {stat.value}
                  </div>

                  <h3 className="text-sm font-bold text-[#F1F1F1] tracking-tight">
                    {stat.label}
                  </h3>
                </div>

                <div className="pt-4 mt-4 border-t border-[#272727] text-xs text-[#707070] font-mono flex items-center justify-between">
                  <span>{stat.sublabel}</span>
                  {onPartnerClick && (
                    <button
                      onClick={onPartnerClick}
                      className="text-[#FF7711] hover:underline"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
