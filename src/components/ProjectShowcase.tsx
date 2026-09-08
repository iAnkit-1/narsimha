import React from "react";
import { ArrowUpRight } from "lucide-react";
import { media } from "../data/media";

export const ProjectShowcase: React.FC = () => {
  return (
    <section className="w-full bg-[#0D0D0D] border-b border-[#272727] py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#151515] border border-[#272727] mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7711]" />
              <span className="text-[11px] font-mono tracking-widest text-[#FF7711] font-semibold uppercase">
                STUDENT PROTOTYPES
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F1F1] tracking-tight">
              From idea to prototype.
            </h2>
          </div>
          <div className="mt-3 md:mt-0 text-left md:text-right">
            <span className="text-xs font-mono text-[#FF7711] font-semibold uppercase tracking-wider block">
              AUTHENTIC LAB BUILDS
            </span>
            <p className="text-xs text-[#707070] font-mono mt-0.5">
              Tangible machines and software created by students
            </p>
          </div>
        </div>

        {/* Magazine-Style Irregular Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Project 1: Large Featured (7 cols) */}
          <div className="md:col-span-7 bg-[#151515] border border-[#272727] hover:border-[#FF7711]/60 rounded-2xl overflow-hidden group transition-all flex flex-col justify-between">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#080808]">
              <img
                src={media.projects[0].image}
                alt={media.projects[0].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 rounded bg-[#080808]/90 text-[#FF7711] border border-[#FF7711]/40 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-sm">
                  {media.projects[0].category}
                </span>
              </div>
            </div>

            <div className="p-6 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#707070] uppercase">
                  {media.projects[0].tag}
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-[#F1F1F1] group-hover:text-[#FF7711] transition-colors">
                  {media.projects[0].title}
                </h3>
              </div>
              <div className="p-2 rounded-lg bg-[#080808] border border-[#272727] text-[#FF7711] group-hover:border-[#FF7711] transition-colors shrink-0 ml-4">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>

          {/* Project 2: High-density card (5 cols) */}
          <div className="md:col-span-5 bg-[#151515] border border-[#272727] hover:border-[#FF7711]/60 rounded-2xl overflow-hidden group transition-all flex flex-col justify-between">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#080808]">
              <img
                src={media.projects[1].image}
                alt={media.projects[1].title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent" />
              
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 rounded bg-[#080808]/90 text-[#FF7711] border border-[#FF7711]/40 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-sm">
                  {media.projects[1].category}
                </span>
              </div>
            </div>

            <div className="p-6 flex items-center justify-between">
              <div>
                <span className="text-[11px] font-mono text-[#707070] uppercase">
                  {media.projects[1].tag}
                </span>
                <h3 className="text-base sm:text-lg font-bold text-[#F1F1F1] group-hover:text-[#FF7711] transition-colors">
                  {media.projects[1].title}
                </h3>
              </div>
              <div className="p-2 rounded-lg bg-[#080808] border border-[#272727] text-[#FF7711] group-hover:border-[#FF7711] transition-colors shrink-0 ml-4">
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </div>
          </div>

          {/* Projects 3, 4, 5, 6: 4 Columns on large screen / 2 on tablet */}
          {media.projects.slice(2).map((proj) => (
            <div
              key={proj.id}
              className="md:col-span-6 lg:col-span-3 bg-[#151515] border border-[#272727] hover:border-[#FF7711]/60 rounded-2xl overflow-hidden group transition-all flex flex-col justify-between"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#080808]">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#151515] via-transparent to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <span className="px-2 py-0.5 rounded bg-[#080808]/90 text-[#FF7711] border border-[#FF7711]/40 text-[10px] font-mono font-bold uppercase tracking-wider backdrop-blur-sm">
                    {proj.category}
                  </span>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-[#707070] uppercase block mb-1">
                    {proj.tag}
                  </span>
                  <h4 className="text-sm font-bold text-[#F1F1F1] group-hover:text-[#FF7711] transition-colors leading-snug">
                    {proj.title}
                  </h4>
                </div>

                <div className="mt-3 pt-2.5 border-t border-[#272727] flex items-center justify-between text-[11px] font-mono text-[#707070]">
                  <span>Lab Prototyping</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#FF7711]" />
                </div>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};
