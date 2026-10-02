import React from "react";
import { ShieldCheck } from "lucide-react";

import startupBiharLogo from "../assets/recognition/1. Startup Bihar.png";
import dpiitLogo from "../assets/recognition/2. DPIIT LOGO.png";
import deptIndustriesLogo from "../assets/recognition/3. Department-of-Industries-Bihar.png";
import cimpLogo from "../assets/recognition/4. CIMP.png";
import cimpBiifLogo from "../assets/recognition/5. CIMP bIIF.png";
import iitPatnaLogo from "../assets/recognition/6. IC IIT PATNA.png";
import msmeLogo from "../assets/recognition/7. MSME.png";
import aicLogo from "../assets/recognition/8. AIC ALL.png";
import ecellMceLogo from "../assets/recognition/9. ecellmcemotihari_logo.jpeg";

interface OrganizationLogo {
  id: string;
  name: string;
  department: string;
  tag: string;
  badgeBg: string;
  logoSrc: string;
}

export const RecognizedBy: React.FC = () => {
  const organizations: OrganizationLogo[] = [
    {
      id: "startup-bihar",
      name: "STARTUP BIHAR",
      department: "Dept. of Industries, Govt. of Bihar",
      tag: "GOVT. OF BIHAR",
      badgeBg: "bg-emerald-500/15 border-emerald-500/30 text-emerald-400",
      logoSrc: startupBiharLogo,
    },
    {
      id: "dpiit-startup-india",
      name: "DPIIT • STARTUP INDIA",
      department: "Min. of Commerce & Industry, Govt. of India",
      tag: "GOVT. OF INDIA",
      badgeBg: "bg-orange-500/15 border-orange-500/30 text-orange-400",
      logoSrc: dpiitLogo,
    },
    {
      id: "dept-industries-bihar",
      name: "DEPT. OF INDUSTRIES",
      department: "Government of Bihar",
      tag: "STATE GOVT.",
      badgeBg: "bg-cyan-500/15 border-cyan-500/30 text-cyan-400",
      logoSrc: deptIndustriesLogo,
    },
    {
      id: "cimp",
      name: "CIMP",
      department: "Chandragupt Institute of Management Patna",
      tag: "ACADEMIC PARTNER",
      badgeBg: "bg-blue-500/15 border-blue-500/30 text-blue-400",
      logoSrc: cimpLogo,
    },
    {
      id: "cimp-biif",
      name: "CIMP - BIIF",
      department: "Business Incubation & Innovation Foundation",
      tag: "INCUBATION PARTNER",
      badgeBg: "bg-amber-500/15 border-amber-500/30 text-amber-400",
      logoSrc: cimpBiifLogo,
    },
    {
      id: "ic-iit-patna",
      name: "IC IIT PATNA",
      department: "Incubation Centre, IIT Patna",
      tag: "TECH INCUBATION",
      badgeBg: "bg-purple-500/15 border-purple-500/30 text-purple-400",
      logoSrc: iitPatnaLogo,
    },
    {
      id: "msme",
      name: "MINISTRY OF MSME",
      department: "Govt. of India Registered Enterprise",
      tag: "MSME REGISTERED",
      badgeBg: "bg-pink-500/15 border-pink-500/30 text-pink-400",
      logoSrc: msmeLogo,
    },
    {
      id: "aic-aim",
      name: "ATAL INCUBATION CENTRE",
      department: "Atal Innovation Mission • NITI Aayog",
      tag: "AIM / NITI AAYOG",
      badgeBg: "bg-yellow-500/15 border-yellow-500/30 text-yellow-400",
      logoSrc: aicLogo,
    },
    {
      id: "ecell-mce-motihari",
      name: "E-CELL MCE MOTIHARI",
      department: "Motihari College of Engineering",
      tag: "ECOSYSTEM PARTNER",
      badgeBg: "bg-teal-500/15 border-teal-500/30 text-teal-400",
      logoSrc: ecellMceLogo,
    },
  ];

  // Duplicate for seamless infinite ribbon moving effect
  const marqueeItems = [...organizations, ...organizations, ...organizations];

  return (
    <section className="w-full bg-[#070707] border-b border-[#222222] py-14 lg:py-18 relative overflow-hidden">
      
      {/* Background Ambience Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[250px] bg-[#FF7711]/5 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mb-8 sm:mb-10 text-center">
        
        {/* Section Header */}
        <div className="inline-flex items-center space-x-2 px-3.5 py-1.5 rounded-full bg-[#121212] border border-[#FF7711]/40 mb-3 shadow-md">
          <ShieldCheck className="w-3.5 h-3.5 text-[#FF7711]" />
          <span className="text-xs font-mono uppercase tracking-widest text-[#FF7711] font-bold">
            ACCREDITATIONS & RECOGNITION
          </span>
        </div>

        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight mb-2">
          Recognised & Supported By
        </h2>

        <p className="text-xs sm:text-sm text-[#A3A3A3] max-w-2xl mx-auto">
          Accredited and accelerated by leading central and state government bodies, incubation centers, and national innovation missions.
        </p>

      </div>

      {/* Infinite Horizontal Auto-Moving Ribbon */}
      <div className="relative w-full overflow-hidden py-3">
        
        {/* Left & Right Gradient Edge Fades */}
        <div className="absolute left-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-r from-[#070707] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-l from-[#070707] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex animate-marquee-scroll space-x-4 sm:space-x-6 hover:[animation-play-state:paused]">
          {marqueeItems.map((org, index) => (
            <div
              key={`${org.id}-${index}`}
              className="group flex items-center space-x-4 px-5 sm:px-6 py-4 rounded-2xl bg-[#111111] border border-white/10 hover:border-[#FF7711]/60 transition-all duration-300 shadow-xl shrink-0 w-[300px] sm:w-[340px] cursor-pointer"
            >
              {/* Real Official Logo Badge (White background well for perfect logo clarity) */}
              <div className="w-14 h-14 rounded-xl bg-white p-1.5 flex items-center justify-center shrink-0 shadow-md border border-white/30 group-hover:scale-105 group-hover:shadow-lg transition-transform duration-300 overflow-hidden">
                <img
                  src={org.logoSrc}
                  alt={`${org.name} official recognition logo`}
                  className="w-full h-full object-contain filter contrast-[1.02]"
                  loading="lazy"
                />
              </div>

              {/* Text Info */}
              <div className="flex flex-col min-w-0 text-left">
                <span className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded-full w-fit mb-1 border ${org.badgeBg}`}>
                  {org.tag}
                </span>

                <h3 className="text-sm font-bold text-white group-hover:text-[#FF7711] transition-colors leading-tight truncate">
                  {org.name}
                </h3>

                <p className="text-[11px] text-[#A3A3A3] font-medium leading-snug truncate mt-0.5">
                  {org.department}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
