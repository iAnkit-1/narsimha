import React from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { schoolPillars } from "../data/programs";
import { media } from "../data/media";

interface SchoolSectionProps {
  onPartnerClick: () => void;
}

export const SchoolSection: React.FC<SchoolSectionProps> = ({ onPartnerClick }) => {
  return (
    <section id="school-program" className="w-full bg-[#080808] border-b border-[#272727] py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Header Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12 lg:mb-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#111111] border border-[#272727] mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7711]" />
              <span className="text-[11px] font-mono tracking-widest text-[#FF7711] font-semibold uppercase">
                FOR SCHOOLS & INSTITUTIONS
              </span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-[#F1F1F1] tracking-tight leading-tight">
              Bring practical technology learning into your school.
            </h2>
          </div>

          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-2">
            <p className="text-base text-[#A1A1A1] leading-relaxed mb-5">
              We work with schools to complement classroom education through practical STEM, technology and skill-development experiences.
            </p>
            <div>
              <button
                onClick={onPartnerClick}
                className="btn-orange-primary inline-flex items-center space-x-2 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* B2B Split Layout: Large Photograph + 3 Supporting Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left: Large Realistic Classroom / STEM Lab Photograph (5 cols) */}
          <div className="lg:col-span-5 relative rounded-2xl overflow-hidden border border-[#272727] bg-[#111111] group flex flex-col justify-between shadow-xl min-h-[360px]">
            <img
              src={media.schoolPartnership}
              alt="Students participating in hands-on school STEM lab learning"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90 contrast-105"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
            
            {/* Overlay B2B Badge */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#080808]/90 border border-[#272727] backdrop-blur-sm">
              <div className="flex items-center justify-between text-xs font-mono text-[#A1A1A1] mb-1">
                <span className="text-[#FF7711] font-bold">INSTITUTIONAL ENABLEMENT</span>
                <span>55+ PARTNER SCHOOLS</span>
              </div>
              <p className="text-xs text-[#F1F1F1] font-medium">
                Structured turn-key robotics, ATL facilitation & lab ecosystems.
              </p>
            </div>
          </div>

          {/* Right: 3 Supporting Areas (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-4">
            {schoolPillars.map((pillar) => (
              <div
                key={pillar.number}
                className="p-6 rounded-2xl bg-[#151515] border border-[#272727] hover:border-[#FF7711]/50 transition-all flex flex-col justify-between group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center space-x-3">
                    <span className="font-mono text-xs font-bold text-[#FF7711] bg-[#080808] px-2.5 py-1 rounded border border-[#272727]">
                      {pillar.number}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-[#F1F1F1] group-hover:text-[#FF7711] transition-colors">
                        {pillar.title}
                      </h3>
                      <span className="text-xs font-mono text-[#A1A1A1]">
                        {pillar.subtitle}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#A1A1A1] leading-relaxed mb-4">
                  {pillar.description}
                </p>

                {/* Features Pill List */}
                <div className="pt-3 border-t border-[#272727] flex flex-wrap gap-2">
                  {pillar.features.map((feat) => (
                    <div
                      key={feat}
                      className="flex items-center space-x-1.5 text-xs text-[#F1F1F1] font-mono bg-[#0D0D0D] px-2.5 py-1 rounded border border-[#272727]"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7711]" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
