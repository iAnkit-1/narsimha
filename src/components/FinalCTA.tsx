import React from "react";
import { ArrowRight } from "lucide-react";
import { media } from "../data/media";

interface FinalCTAProps {
  onExplorePrograms: () => void;
  onPartnerWithUs: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onExplorePrograms, onPartnerWithUs }) => {
  return (
    <section className="w-full bg-[#080808] border-b border-[#272727] py-16 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Large Photographic CTA Container */}
        <div className="relative rounded-3xl overflow-hidden border border-[#272727] bg-[#111111] p-8 sm:p-12 lg:p-16 shadow-2xl">
          
          {/* Background Realistic Student Collaboration Photo */}
          <div className="absolute inset-0 z-0">
            <img
              src={media.finalCta}
              alt="Students collaborating passionately on STEM maker project"
              className="w-full h-full object-cover filter brightness-[0.28] contrast-110"
              loading="lazy"
            />
            {/* Dark gradient overlay & technical grid */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#080808] via-[#080808]/90 to-[#080808]/70" />
            <div className="absolute inset-0 tech-grid opacity-30" />
          </div>

          {/* Foreground Content */}
          <div className="relative z-10 max-w-2xl">
            <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-[#151515]/90 border border-[#272727] mb-5 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF7711] animate-pulse" />
              <span className="text-[11px] font-mono tracking-widest text-[#FF7711] font-semibold uppercase">
                TAKE THE NEXT STEP
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F1F1F1] tracking-tight leading-[1.15] mb-5">
              Give students the opportunity to build what they imagine.
            </h2>

            <p className="text-base sm:text-lg text-[#A1A1A1] leading-relaxed mb-8">
              Move beyond learning concepts and give students the opportunity to explore, create and build.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={onExplorePrograms}
                className="btn-orange-primary flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-bold tracking-wide"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onPartnerWithUs}
                className="btn-dark-secondary flex items-center space-x-2 px-6 py-3.5 rounded-xl text-sm font-semibold tracking-wide"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-4 h-4 text-[#FF7711]" />
              </button>
            </div>

            {/* Micro Details */}
            <div className="mt-10 pt-6 border-t border-[#272727]/80 flex flex-wrap items-center gap-6 text-xs font-mono text-[#707070]">
              <span className="text-[#A1A1A1]">Direct School Inquiries & Lab Visits Welcome</span>
              <span>•</span>
              <span className="text-[#FF7711]">Patna, Bihar & All India Programs</span>
            </div>
          </div>

          {/* Subtle Decorative Orange Lines in the corner */}
          <div className="absolute -bottom-10 -right-10 w-48 h-48 pointer-events-none opacity-25">
            <svg viewBox="0 0 100 100" className="w-full h-full stroke-[#FF7711]">
              <circle cx="50" cy="50" r="45" fill="none" strokeWidth="0.8" strokeDasharray="2 2" />
              <circle cx="50" cy="50" r="30" fill="none" strokeWidth="0.8" />
              <line x1="0" y1="50" x2="100" y2="50" strokeWidth="0.5" />
              <line x1="50" y1="0" x2="50" y2="100" strokeWidth="0.5" />
            </svg>
          </div>

        </div>

      </div>
    </section>
  );
};
