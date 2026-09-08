import React from "react";
import { Shield, Target, Sparkles } from "lucide-react";
import { philosophyPillars } from "../data/pedagogy";
import { media } from "../data/media";

export const Philosophy: React.FC = () => {
  const iconLookup: Record<string, React.ElementType> = {
    Shield,
    Target,
    Sparkles,
  };

  return (
    <section className="w-full bg-[#080808] border-b border-[#272727] py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left: Photograph with Dark Editorial Overlay */}
          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-[#272727] bg-[#111111] group shadow-xl">
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={media.philosophy}
                  alt="Students focused on real-world engineering problem solving"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  loading="lazy"
                />
              </div>

              <div className="p-4 bg-[#111111] border-t border-[#272727] flex items-center justify-between text-xs font-mono">
                <span className="text-[#FF7711] font-bold">EXPERIMENTAL CONFIDENCE</span>
                <span className="text-[#707070]">TINKERING LABS</span>
              </div>
            </div>
          </div>

          {/* Right: Narrative + 3 Compact Pillars */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="text-[11px] font-mono tracking-widest text-[#FF7711] font-semibold uppercase mb-2">
              02 / CORE PHILOSOPHY
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F1F1] tracking-tight leading-tight mb-4">
              Knowledge becomes valuable when students can use it.
            </h2>

            <p className="text-sm sm:text-base text-[#A1A1A1] leading-relaxed mb-6">
              Modern learning must transcend theoretical memorization. When students formulate hypotheses, wire physical components, write functional code, and iterate through real design constraints, abstract science turns into intuitive mastery.
            </p>

            {/* 3 Compact Pillars */}
            <div className="space-y-4">
              {philosophyPillars.map((pillar) => {
                const Icon = iconLookup[pillar.iconName] || Sparkles;
                return (
                  <div
                    key={pillar.id}
                    className="p-4 rounded-xl bg-[#151515] border border-[#272727] hover:border-[#FF7711]/50 transition-all flex items-start space-x-3.5 group"
                  >
                    <div className="p-2 rounded-lg bg-[#080808] border border-[#272727] text-[#FF7711] shrink-0 mt-0.5 group-hover:border-[#FF7711]/60 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h3 className="text-sm font-bold text-[#F1F1F1] group-hover:text-[#FF7711] transition-colors">
                          {pillar.title}
                        </h3>
                        <span className="text-[10px] font-mono px-2 py-0.2 rounded bg-[#080808] border border-[#272727] text-[#FF7711]">
                          {pillar.badge}
                        </span>
                      </div>
                      <p className="text-xs text-[#A1A1A1] mt-1 leading-relaxed">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
