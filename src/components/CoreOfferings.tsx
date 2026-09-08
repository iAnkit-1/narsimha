import React from "react";
import { 
  Truck, Building2, BookOpen, GraduationCap, Trophy, 
  Users, ArrowRight, CheckCircle2, Sparkles 
} from "lucide-react";
import { media } from "../data/media";

interface CoreOfferingsProps {
  onPartnerClick?: () => void;
}

export const CoreOfferings: React.FC<CoreOfferingsProps> = ({ onPartnerClick }) => {
  const offerings = [
    {
      id: "mobile-lab",
      title: "Mobile Lab / Lab-on-Wheel",
      tagline: "STEM Reach Everywhere",
      description: "Brings hands-on STEM, Robotics, AI and IoT learning directly to schools with limited infrastructure or budget, helping every student access future-ready skills through school partnerships.",
      benefit: "Zero setup cost needed; brings fully equipped mobile maker stations to school doorstep.",
      icon: Truck,
      image: media.mobileLab,
      highlight: true,
    },
    {
      id: "atl-setup",
      title: "Turnkey ATL Setup & Infrastructure",
      tagline: "End-to-End Lab Design",
      description: "Complete physical infrastructure including electronic testing benches, 3D printers, workstations, safety gear, and organized tool storage.",
      benefit: "Ready-to-use lab environment tailored to institutional campus dimensions.",
      icon: Building2,
      image: media.highTechLab,
      highlight: false,
    },
    {
      id: "curriculum",
      title: "Class-wise Curriculum & Kits",
      tagline: "NEP 2020 Aligned",
      description: "Structured progressive learning paths for Grades 1–12 with comprehensive DIY hardware kits, project workbooks, and digital assessment rubrics.",
      benefit: "Seamless integration into regular school timetables without overburdening teachers.",
      icon: BookOpen,
      image: "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=800&q=80",
      highlight: false,
    },
    {
      id: "fdp",
      title: "Faculty Development Programme (FDP)",
      tagline: "Teacher Enablement",
      description: "Comprehensive upskilling workshops and continuous certification for school teachers, ensuring long-term pedagogical sustainability.",
      benefit: "Empowers internal school faculty to fearlessly guide modern technology sessions.",
      icon: GraduationCap,
      image: media.fdp,
      highlight: false,
    },
    {
      id: "innovation-fests",
      title: "Innovation Fests - Competitions & Events",
      tagline: "National Stage Recognition",
      description: "Annual inter-school hackathons, science fairs, and 'Maker Days' to showcase student innovations on a national platform.",
      benefit: "Provides students with competitive exposure, trophies, and portfolio-worthy credentials.",
      icon: Trophy,
      image: media.event,
      highlight: false,
    },
    {
      id: "mentor-support",
      title: "Dedicated Lab Mentor Support",
      tagline: "Full-Time Technical Staff",
      description: "Qualified, on-campus STEM engineers and mentors who manage daily lab operations, maintenance, and competitive team mentorship.",
      benefit: "Relieves school administration of operational hurdles and technical maintenance.",
      icon: Users,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80",
      highlight: false,
    },
  ];

  return (
    <section id="atl-solutions" className="w-full bg-[#0D0D0D] border-b border-[#272727] py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#151515] border border-[#272727] mb-3.5">
            <Sparkles className="w-3.5 h-3.5 text-[#FF7711]" />
            <span className="text-[11px] font-mono uppercase tracking-widest text-[#FF7711] font-bold">
              MODULAR ECOSYSTEM
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F1F1F1] tracking-tight leading-tight mb-4">
            Our <span className="font-serif italic font-normal text-[#FF7711]">Core Offerings</span>
          </h2>

          <p className="text-sm sm:text-base text-[#A1A1A1] leading-relaxed">
            Everything a school needs to establish a thriving ecosystem of innovation, packaged into one seamless service.
          </p>
        </div>

        {/* 6 Modular Offerings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {offerings.map((offering) => {
            const Icon = offering.icon;
            return (
              <div
                key={offering.id}
                className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 shadow-lg ${
                  offering.highlight
                    ? "bg-[#151515] border-[#FF7711]/60 shadow-orange-glow/10"
                    : "bg-[#121212] border-[#272727] hover:border-[#FF7711]/40 hover:bg-[#161616]"
                }`}
              >
                {/* Visual Thumbnail */}
                <div className="aspect-[16/9] w-full overflow-hidden relative border-b border-[#242424]">
                  <img
                    src={offering.image}
                    alt={offering.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-black/70 backdrop-blur-md border border-white/10 text-[10px] font-mono text-[#FF7711] font-bold uppercase">
                    {offering.tagline}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-2.5 mb-3">
                      <div className="p-2 rounded-lg bg-[#1D1D1D] text-[#FF7711] border border-[#2E2E2E]">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-[#F1F1F1] group-hover:text-white leading-tight">
                        {offering.title}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#A1A1A1] leading-relaxed mb-4">
                      {offering.description}
                    </p>
                  </div>

                  {/* Benefit Callout */}
                  <div className="pt-3 border-t border-[#222222]">
                    <div className="flex items-start space-x-2 text-xs text-[#E2E8F0]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#FF7711] shrink-0 mt-0.5" />
                      <span className="font-medium">{offering.benefit}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modular Ecosystem Integration Callout */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#111111] border border-[#272727] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF7711] font-bold">
              END-TO-END EXECUTION
            </span>
            <h4 className="text-lg sm:text-xl font-bold text-[#FFFFFF]">
              Deploy individual services or the entire turnkey school ecosystem.
            </h4>
            <p className="text-xs sm:text-sm text-[#A1A1A1]">
              We customize our delivery model to match your school's physical space, timetable, and budget.
            </p>
          </div>

          <button
            onClick={onPartnerClick}
            className="btn-orange-primary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center space-x-2 shrink-0 cursor-pointer"
          >
            <span>Discuss School Requirements</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
