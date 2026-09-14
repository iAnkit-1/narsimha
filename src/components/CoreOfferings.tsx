import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Building2, Truck, Users, GraduationCap, 
  Presentation, Trophy, ArrowRight, CheckCircle2, Sparkles 
} from "lucide-react";
import { media } from "../data/media";

interface CoreOfferingsProps {
  onPartnerClick?: () => void;
}

export const CoreOfferings: React.FC<CoreOfferingsProps> = ({ onPartnerClick }) => {
  const [activeOfferingId, setActiveOfferingId] = useState<string>("stem-lab-setup");

  const offerings = [
    {
      id: "stem-lab-setup",
      title: "STEM Lab Setup",
      tagline: "TURNKEY LAB INFRASTRUCTURE",
      shortLabel: "Lab Setup",
      description: "We design and set up fully equipped STEM and Robotics Labs in schools with the right tools, equipment, and learning resources for hands-on education.",
      benefit: "Customized spatial layout, testing stations & safety gear.",
      icon: Building2,
      image: media.highTechLab,
      accentColor: "#FF7711",
    },
    {
      id: "mobile-lab",
      title: "Mobile Lab",
      tagline: "LAB-ON-WHEELS",
      shortLabel: "Mobile Lab",
      description: "Our Mobile Lab brings STEM learning directly to schools and students, making practical learning accessible even without a permanent lab setup.",
      benefit: "Zero setup cost needed; fully equipped mobile maker station.",
      icon: Truck,
      image: media.mobileLab,
      accentColor: "#38BDF8",
    },
    {
      id: "mentor-support",
      title: "Lab Infrastructure & Mentor Support",
      tagline: "FULL-TIME MENTORS & ENGINEERS",
      shortLabel: "Mentor Support",
      description: "We provide the complete lab infrastructure along with expert mentor support to help schools run engaging, practical, and project-based learning programs.",
      benefit: "Dedicated on-campus STEM engineers & routine project guidance.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1000&q=80",
      accentColor: "#10B981",
    },
    {
      id: "fdp",
      title: "Faculty Development Programme",
      tagline: "TEACHER ENABLEMENT (FDP)",
      shortLabel: "Faculty Train",
      description: "We train and empower teachers with practical STEM, Robotics, and Innovation skills so they can confidently guide students and conduct hands-on activities.",
      benefit: "Continuous certification & structured lesson plan guides.",
      icon: GraduationCap,
      image: media.fdp,
      accentColor: "#A855F7",
    },
    {
      id: "workshops-seminars",
      title: "Workshops / Seminars",
      tagline: "INTERACTIVE BOOTCAMPS",
      shortLabel: "Workshops",
      description: "We conduct interactive workshops and seminars on STEM, Robotics, AI, Innovation, and emerging technologies to build awareness and spark curiosity.",
      benefit: "Hands-on masterclasses covering Robotics, AI & IoT trends.",
      icon: Presentation,
      image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?auto=format&fit=crop&w=1000&q=80",
      accentColor: "#F59E0B",
    },
    {
      id: "innovation-fests",
      title: "Innovation Fests",
      tagline: "COMPETITIONS & EVENTS",
      shortLabel: "Innovation Fests",
      description: "We organize innovation fests, competitions, exhibitions, and events where students can showcase their ideas, build projects, and experience real-world problem solving.",
      benefit: "Inter-school hackathons, awards & portfolio credentials.",
      icon: Trophy,
      image: media.event,
      accentColor: "#EC4899",
    },
  ];

  return (
    <section id="atl-solutions" className="w-full bg-[#080808] border-b border-[#222222] py-16 lg:py-24 relative overflow-hidden">
      
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[350px] bg-[#FF7711]/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[350px] bg-[#38BDF8]/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#141414] border border-[#FF7711]/40 mb-3.5 shadow-md">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7711]" />
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF7711] font-bold">
              MODULAR ECOSYSTEM
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-3">
            Our{" "}
            <span className="bg-gradient-to-r from-[#FF7711] via-[#FFA149] to-[#FF5500] bg-clip-text text-transparent">
              Core Offerings
            </span>
          </h2>

          <p className="text-sm sm:text-base text-[#A3A3A3] leading-relaxed">
            Everything a school needs to establish a thriving ecosystem of innovation. Hover or tap across any card to expand its capabilities.
          </p>
        </div>

        {/* Expanding Accordion Gallery Deck */}
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 h-auto lg:h-[460px] w-full mb-14">
          {offerings.map((offering) => {
            const Icon = offering.icon;
            const isExpanded = activeOfferingId === offering.id;

            return (
              <div
                key={offering.id}
                onMouseEnter={() => setActiveOfferingId(offering.id)}
                onClick={() => setActiveOfferingId(offering.id)}
                className={`relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 ease-out bg-[#111111] border shadow-2xl ${
                  isExpanded
                    ? "lg:flex-[3.5] xl:flex-[4] border-[#FF7711] shadow-[0_10px_35px_rgba(255,119,17,0.2)] h-[360px] sm:h-[400px] lg:h-full"
                    : "lg:flex-[1] border-white/10 hover:border-white/30 h-[100px] sm:h-[120px] lg:h-full opacity-85 hover:opacity-100"
                }`}
              >
                {/* Background Image */}
                <img
                  src={offering.image}
                  alt={offering.title}
                  className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
                    isExpanded
                      ? "filter brightness-[0.88] contrast-[1.05] scale-105"
                      : "filter brightness-[0.4] contrast-[1.1] grayscale-[40%]"
                  }`}
                />

                {/* Gradient Scrim */}
                <div 
                  className={`absolute inset-0 transition-opacity duration-500 ${
                    isExpanded
                      ? "bg-gradient-to-t from-black/95 via-black/45 to-transparent"
                      : "bg-gradient-to-t from-black/90 via-black/60 to-black/30"
                  }`}
                />

                {/* Collapsed Vertical State (Visible when collapsed on desktop) */}
                <div
                  className={`absolute inset-0 p-4 flex flex-col justify-end items-center text-center transition-all duration-300 pointer-events-none ${
                    isExpanded ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
                  }`}
                >
                  <div className="w-10 h-10 rounded-full bg-black/80 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-2 shadow-lg">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-mono font-bold text-white/90 tracking-tight line-clamp-1">
                    {offering.shortLabel}
                  </span>
                </div>

                {/* Expanded State: Full Content Sliding In From Bottom */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 20 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      className="absolute inset-0 p-6 sm:p-7 flex flex-col justify-end z-20 pointer-events-none"
                    >
                      {/* Top Corner Pill */}
                      <div className="absolute top-5 left-5">
                        <span className="text-[10px] font-mono px-3 py-1 rounded-full bg-black/80 border border-white/20 text-white font-bold backdrop-blur-md shadow-md">
                          CORE OFFERING
                        </span>
                      </div>

                      {/* Icon Badge */}
                      <div className="w-12 h-12 rounded-2xl bg-[#FF7711] text-black flex items-center justify-center mb-3 shadow-[0_4px_20px_rgba(255,119,17,0.4)]">
                        <Icon className="w-6 h-6" />
                      </div>

                      {/* Main Title */}
                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-black text-white tracking-tight leading-tight mb-1 drop-shadow-[0_2px_8px_rgba(0,0,0,0.95)]">
                        {offering.title}
                      </h3>

                      {/* Subtitle / Category Tag */}
                      <p className="text-xs sm:text-sm font-mono font-bold text-[#FF7711] uppercase tracking-wider mb-2.5 drop-shadow-[0_1px_4px_rgba(0,0,0,0.9)]">
                        {offering.tagline}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#E5E5E5] leading-relaxed max-w-xl mb-4 font-normal drop-shadow-[0_2px_6px_rgba(0,0,0,0.95)]">
                        {offering.description}
                      </p>

                      {/* Benefit Tag */}
                      <div className="pt-3 border-t border-white/20 flex items-center space-x-2 text-xs text-[#FFFFFF]">
                        <CheckCircle2 className="w-4 h-4 text-[#FF7711] shrink-0" />
                        <span className="font-medium drop-shadow-[0_1px_3px_rgba(0,0,0,0.9)]">
                          {offering.benefit}
                        </span>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

        {/* Modular Ecosystem Integration Callout Banner */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-[#141414] via-[#111111] to-[#141414] border border-white/15 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl">
          <div className="space-y-1.5 text-left">
            <div className="inline-flex items-center space-x-1.5 px-3 py-1 rounded-full bg-[#FF7711]/15 text-[#FF7711] border border-[#FF7711]/30 text-[11px] font-mono font-bold uppercase mb-1">
              <Sparkles className="w-3 h-3" />
              <span>END-TO-END EXECUTION</span>
            </div>
            <h4 className="text-lg sm:text-xl font-black text-white">
              Deploy individual services or the entire turnkey school ecosystem.
            </h4>
            <p className="text-xs sm:text-sm text-[#A3A3A3] max-w-2xl leading-relaxed">
              We customize our delivery model to match your school's physical space, timetable, and budget requirements.
            </p>
          </div>

          <button
            onClick={onPartnerClick}
            className="w-full sm:w-auto btn-orange-primary px-7 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center space-x-2 shrink-0 cursor-pointer shadow-lg hover:shadow-orange-glow transition-all"
          >
            <span>Discuss School Requirements</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
