import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Bot, BrainCircuit, Code2, 
  Printer, Compass, Sparkles, Activity, CheckCircle2,
  Boxes, Lightbulb, Wifi
} from "lucide-react";
import { media } from "../data/media";

interface HeroProps {
  onExplorePrograms: () => void;
  onPartnerWithUs: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePrograms, onPartnerWithUs }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Rotating images for the compact Value Card
  const rotatingImages = media.heroValueCardImages || [
    { url: media.hero, tag: "High-Tech Maker Lab" }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % rotatingImages.length);
    }, 3600);
    return () => clearInterval(timer);
  }, [rotatingImages.length]);

  const skillOfferings = [
    { name: "Robotics", icon: Bot, highlight: true },
    { name: "IoT", icon: Wifi, highlight: false },
    { name: "AI/ML", icon: BrainCircuit, highlight: true },
    { name: "STEM", icon: Sparkles, highlight: false },
    { name: "ATL", icon: Activity, highlight: true },
    { name: "Coding", icon: Code2, highlight: false },
    { name: "Drone Tech", icon: Compass, highlight: false },
    { name: "AR/VR", icon: Boxes, highlight: false },
    { name: "Entrepreneurship", icon: Lightbulb, highlight: false },
    { name: "3D-Printing", icon: Printer, highlight: true },
    { name: "& Many More", icon: CheckCircle2, highlight: true },
  ];

  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[680px] bg-[#080808] border-b border-[#272727] overflow-hidden flex items-center pt-8 pb-12 lg:pt-14 lg:pb-16">
      
      {/* 1. Full-Width Background Video Player with Enhanced Brightness & Clarity */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster={media.hero}
          className="w-full h-full object-cover filter brightness-[0.88] contrast-[1.08] saturate-[1.1] scale-100 transition-all"
        >
          <source src={media.heroVideo} type="video/mp4" />
          <source src={media.heroVideoStatic} type="video/mp4" />
        </video>

        {/* Lightweight targeted vignette & top/bottom edge blend */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/45 to-black/30" />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#080808] to-transparent opacity-80" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#080808] to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        {/* Align grid items to the bottom so the Value Card aligns with the bottom level of the left column */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-end">
          
          {/* Left Column (6 cols): Primary Editorial Headline & CTAs */}
          <div className="lg:col-span-6 flex flex-col justify-end text-left">
            <div className="p-2 sm:p-4 rounded-3xl bg-black/40 backdrop-blur-[2px] w-fit">
              {/* Eyebrow badge */}
              <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#111111]/90 border border-[#FF7711]/40 w-fit mb-4 backdrop-blur-md shadow-lg shadow-black/50">
                <span className="text-xs">🚀</span>
                <span className="text-[12px] font-mono uppercase tracking-widest text-[#FF7711] font-bold">
                  Redefining STEM Education
                </span>
              </div>

              {/* Main Mixed Fonts Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-[52px] font-extrabold text-[#FFFFFF] tracking-tight leading-[1.08] mb-3.5 drop-shadow-[0_3px_12px_rgba(0,0,0,0.9)]">
                Building the{" "}
                <span className="font-serif italic font-normal text-[#FF7711] underline decoration-[#FF7711]/40 underline-offset-4">
                  Innovators
                </span>{" "}
                of Tomorrow
              </h1>

              {/* Supporting Copy */}
              <p className="text-sm sm:text-base text-[#E2E8F0] leading-relaxed mb-6 max-w-xl font-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
                We don’t just set up Atal Tinkering Labs; we create engaging ecosystems. From Robotics and AI to holistic curriculums, we prepare students for the future.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <button
                  onClick={onPartnerWithUs}
                  className="btn-orange-primary flex items-center space-x-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide shadow-xl cursor-pointer hover:shadow-orange-glow transition-all"
                >
                  <span>Setup Your ATL</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={onExplorePrograms}
                  className="btn-dark-secondary flex items-center space-x-2 px-6 py-3.5 rounded-xl text-xs sm:text-sm font-semibold tracking-wide backdrop-blur-md bg-black/70 hover:bg-black/90 border-[#333333] hover:border-[#FF7711] cursor-pointer transition-all"
                >
                  <span>View Curriculum</span>
                  <ArrowRight className="w-4 h-4 text-[#FF7711]" />
                </button>
              </div>

              {/* Micro technical coordinates / stats anchor */}
              <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/15 text-[11px] font-mono text-[#D4D4D4]">
                <div className="flex flex-col">
                  <span className="text-[#F1F1F1] font-semibold text-xs flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7711] inline-block" />
                    <span>END-TO-END</span>
                  </span>
                  <span className="text-[#A1A1A1]">ATL Ecosystem</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#F1F1F1] font-semibold text-xs flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7711] inline-block" />
                    <span>K-12 TO SENIOR</span>
                  </span>
                  <span className="text-[#A1A1A1]">Tiered Syllabi</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[#F1F1F1] font-semibold text-xs flex items-center space-x-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF7711] inline-block" />
                    <span>PATNA, BIHAR</span>
                  </span>
                  <span className="text-[#A1A1A1]">5+ Branch Centers</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column (6 cols): Value Card positioned at the bottom level */}
          <div className="lg:col-span-6 flex flex-col justify-end self-end pb-1 sm:pb-2">
            <div className="relative w-full rounded-2xl overflow-hidden border border-[#333333] shadow-2xl shadow-black/95 group hover:border-[#FF7711]/70 transition-all duration-300 backdrop-blur-md">
              
              {/* Changing Background Images Carousel Layer */}
              <div className="absolute inset-0 w-full h-full z-0 bg-[#080808]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 1.04 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0 w-full h-full"
                  >
                    <img
                      src={rotatingImages[currentImageIndex].url}
                      alt={rotatingImages[currentImageIndex].tag}
                      className="w-full h-full object-cover filter brightness-[0.55] contrast-110"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Refined gradient overlay for clear text presentation over changing photos */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/95 via-[#080808]/85 to-[#080808]/70 backdrop-blur-[1px]" />
                <div className="absolute top-0 inset-x-6 h-0.5 bg-gradient-to-r from-transparent via-[#FF7711] to-transparent z-10" />
              </div>

              {/* Foreground Text, Header & Skill Badges Placed DIRECTLY OVER the Changing Image */}
              <div className="relative z-10 p-5 sm:p-6 flex flex-col justify-between">
                
                {/* Header Row: We Offer + 100% Customizable badge */}
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div className="flex items-center space-x-1.5">
                    <span className="w-2 h-2 rounded-full bg-[#FF7711]" />
                    <span className="text-[11px] font-mono font-extrabold uppercase tracking-widest text-[#FF7711]">
                      WE OFFER
                    </span>
                  </div>

                  <div className="px-2.5 py-0.5 rounded-full bg-[#FF7711]/25 text-[#FF7711] border border-[#FF7711]/50 text-[10px] font-mono font-bold tracking-wider uppercase flex items-center space-x-1 backdrop-blur-md shadow-sm">
                    <Sparkles className="w-3 h-3" />
                    <span>100% CUSTOMIZABLE</span>
                  </div>
                </div>

                {/* Main Card Title */}
                <h3 className="text-lg sm:text-xl font-extrabold text-[#F1F1F1] tracking-tight leading-snug mb-2">
                  Essential Skills Of 21st Century
                </h3>

                {/* Active Rotating Tag Banner & Carousel Dots */}
                <div className="flex items-center justify-between mb-3.5 pb-2.5 border-b border-[#272727]/80">
                  <div className="flex items-center space-x-2">
                    <span className="px-2 py-0.5 rounded bg-[#080808]/90 text-[#FF7711] border border-[#FF7711]/40 text-[10px] font-mono font-bold uppercase backdrop-blur-sm">
                      {rotatingImages[currentImageIndex].tag}
                    </span>
                    <span className="text-[10px] font-mono text-[#A1A1A1] hidden sm:inline">
                      • Live Lab Focus
                    </span>
                  </div>

                  {/* Carousel Progress Indicators */}
                  <div className="flex items-center space-x-1">
                    {rotatingImages.map((_, idx) => (
                      <button
                        key={idx}
                        onClick={() => setCurrentImageIndex(idx)}
                        className={`h-1 rounded-full transition-all cursor-pointer ${
                          idx === currentImageIndex
                            ? "w-4 bg-[#FF7711]"
                            : "w-1 bg-[#707070]/60 hover:bg-[#A1A1A1]"
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </div>

                {/* All Specified Skill Tags Placed Directly Over Changing Images */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {skillOfferings.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={skill.name}
                        className={`flex items-center space-x-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-medium transition-all backdrop-blur-md ${
                          skill.highlight
                            ? "bg-[#151515]/95 border border-[#FF7711]/60 text-[#F1F1F1] shadow-[0_0_12px_rgba(255,119,17,0.2)]"
                            : "bg-[#0D0D0D]/90 border border-[#333333] text-[#A1A1A1] hover:text-[#F1F1F1] hover:border-[#707070]"
                        }`}
                      >
                        <Icon className={`w-3 h-3 ${skill.highlight ? "text-[#FF7711]" : "text-[#707070]"}`} />
                        <span>{skill.name}</span>
                      </div>
                    );
                  })}
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
