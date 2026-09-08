import React from "react";
import { media } from "../data/media";

export const PhotoCollage: React.FC = () => {
  return (
    <section className="w-full bg-[#0D0D0D] border-b border-[#272727] py-16 lg:py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-12">
          <div>
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#151515] border border-[#272727] mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7711]" />
              <span className="text-[11px] font-mono tracking-widest text-[#FF7711] font-semibold uppercase">
                DOCUMENTARY GALLERY
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F1F1F1] tracking-tight">
              Life inside the maker labs.
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-[#A1A1A1] max-w-sm mt-3 md:mt-0 font-mono">
            Unfiltered, authentic moments of students actively prototyping, coding, and debugging.
          </p>
        </div>

        {/* Large Editorial Irregular Photography Collage */}
        <div className="grid grid-cols-12 gap-4 sm:gap-6 auto-rows-[220px] sm:auto-rows-[260px]">
          {media.collage.map((item) => (
            <div
              key={item.id}
              className={`${item.span} relative rounded-2xl overflow-hidden border border-[#272727] bg-[#151515] group shadow-xl transition-all duration-300 hover:border-[#FF7711]/60`}
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter brightness-95 contrast-105"
                loading="lazy"
              />
              
              {/* Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/90 via-black/20 to-transparent" />

              {/* Orange Tag & Title Overlay */}
              <div className="absolute top-3.5 left-3.5">
                <span className="px-2.5 py-1 rounded bg-[#080808]/90 text-[#FF7711] border border-[#FF7711]/40 text-xs font-mono font-bold uppercase tracking-wider backdrop-blur-sm">
                  {item.label}
                </span>
              </div>

              <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between">
                <span className="text-sm font-bold text-[#F1F1F1] tracking-tight">
                  {item.title}
                </span>
                <span className="text-[10px] font-mono text-[#707070] uppercase hidden sm:inline">
                  Hands-on STEM
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
