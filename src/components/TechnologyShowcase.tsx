import React from "react";
import { ArrowRight, Bot, Code2, BrainCircuit, Cpu, Printer, Compass, Globe, Palette } from "lucide-react";
import { technologyShowcase } from "../data/skills";
import type { TechCard } from "../data/skills";

interface TechnologyShowcaseProps {
  onCardClick?: (tech: TechCard) => void;
}

export const TechnologyShowcase: React.FC<TechnologyShowcaseProps> = ({ onCardClick }) => {
  const iconLookup: Record<string, React.ElementType> = {
    Bot,
    Code2,
    BrainCircuit,
    Cpu,
    Printer,
    Compass,
    Globe,
    Palette,
  };

  const featured = technologyShowcase.find((t) => t.featured) || technologyShowcase[0];
  const otherTech = technologyShowcase.filter((t) => !t.featured);

  return (
    <section className="w-full bg-[#080808] border-b border-[#272727] py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <div className="text-[11px] font-mono tracking-widest text-[#FF7711] font-semibold uppercase mb-2">
              APPLIED CAPABILITIES
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F1F1] tracking-tight">
              Skills students can build with.
            </h2>
          </div>
          <p className="text-sm text-[#A1A1A1] max-w-md mt-3 md:mt-0 font-normal">
            Every track is engineered around physical hardware, working software repositories, and tactile problem-solving.
          </p>
        </div>

        {/* Varied Editorial Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Featured Large Card: Robotics (Takes 7 cols on Desktop) */}
          <div
            onClick={() => onCardClick?.(featured)}
            className="md:col-span-12 lg:col-span-7 bg-[#151515] border border-[#272727] hover:border-[#FF7711]/60 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 flex flex-col justify-between shadow-xl"
          >
            {/* Image Container with Dark Gradient Overlay */}
            <div className="relative aspect-[16/9] sm:aspect-[16/10] w-full overflow-hidden bg-[#0D0D0D]">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-black/20" />
              
              <div className="absolute top-4 left-4">
                <span className="px-3 py-1 rounded-md bg-[#080808]/90 text-[#FF7711] border border-[#FF7711]/40 text-xs font-mono font-bold tracking-wider uppercase backdrop-blur-sm">
                  ★ FEATURED CORE DOMAIN
                </span>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <div className="flex items-center space-x-2 text-xs font-mono text-[#FF7711] mb-1.5 uppercase tracking-wider">
                  <Bot className="w-4 h-4" />
                  <span>{featured.category}</span>
                </div>
                
                <h3 className="text-2xl sm:text-3xl font-bold text-[#F1F1F1] group-hover:text-[#FF7711] transition-colors mb-3">
                  {featured.title}
                </h3>

                <p className="text-sm sm:text-base text-[#A1A1A1] leading-relaxed mb-6">
                  {featured.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded bg-[#111111] border border-[#272727] text-xs font-mono text-[#A1A1A1]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-[#272727] flex items-center justify-between text-xs font-mono text-[#F1F1F1]">
                <span className="text-[#FF7711] font-semibold group-hover:translate-x-1 transition-transform flex items-center space-x-1">
                  <span>Explore Robotics Curriculum</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
                <span className="text-[#707070]">Grades 1–12</span>
              </div>
            </div>
          </div>

          {/* Right Column (5 cols): 2 Staggered High-Impact Cards (Coding & AI) */}
          <div className="md:col-span-12 lg:col-span-5 flex flex-col gap-6">
            {otherTech.slice(0, 2).map((tech) => {
              const Icon = iconLookup[tech.iconName] || Bot;
              return (
                <div
                  key={tech.id}
                  onClick={() => onCardClick?.(tech)}
                  className="bg-[#151515] border border-[#272727] hover:border-[#FF7711]/60 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 flex-1 flex flex-col justify-between"
                >
                  <div className="grid grid-cols-12 gap-4 p-5 items-center">
                    <div className="col-span-4 sm:col-span-5 relative aspect-square rounded-xl overflow-hidden bg-[#0D0D0D] border border-[#272727]">
                      <img
                        src={tech.image}
                        alt={tech.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    </div>

                    <div className="col-span-8 sm:col-span-7 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center space-x-1.5 text-[10px] font-mono text-[#FF7711] uppercase tracking-wider mb-1">
                          <Icon className="w-3.5 h-3.5" />
                          <span>{tech.category}</span>
                        </div>
                        <h4 className="text-base font-bold text-[#F1F1F1] group-hover:text-[#FF7711] transition-colors leading-snug">
                          {tech.title}
                        </h4>
                        <p className="text-xs text-[#A1A1A1] mt-1.5 line-clamp-2">
                          {tech.description}
                        </p>
                      </div>

                      <div className="mt-3 flex items-center justify-between text-[11px] font-mono text-[#FF7711]">
                        <span className="font-semibold flex items-center space-x-1">
                          <span>View Track</span>
                          <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Bottom Row: Remaining 5 Technology Cards in Varied 3-Column Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {otherTech.slice(2).map((tech) => {
            const Icon = iconLookup[tech.iconName] || Bot;
            return (
              <div
                key={tech.id}
                onClick={() => onCardClick?.(tech)}
                className="bg-[#151515] border border-[#272727] hover:border-[#FF7711]/60 rounded-2xl overflow-hidden group cursor-pointer transition-all duration-300 flex flex-col justify-between"
              >
                <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#0D0D0D]">
                  <img
                    src={tech.image}
                    alt={tech.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 p-1.5 rounded bg-[#080808]/90 border border-[#272727] text-[#FF7711]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-mono text-[#FF7711] tracking-wider uppercase block mb-1">
                      {tech.category}
                    </span>
                    <h4 className="text-base font-bold text-[#F1F1F1] group-hover:text-[#FF7711] transition-colors mb-2">
                      {tech.title}
                    </h4>
                    <p className="text-xs text-[#A1A1A1] leading-relaxed line-clamp-3 mb-4">
                      {tech.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#272727] flex items-center justify-between text-xs font-mono">
                    <span className="text-[#FF7711] font-semibold flex items-center space-x-1 group-hover:translate-x-1 transition-transform">
                      <span>Hands-on Modules</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                    <span className="text-[#707070]">Hardware + Code</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
