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
  logoSrc: string;
}

export const RecognizedBy: React.FC = () => {
  const organizations: OrganizationLogo[] = [
    {
      id: "startup-bihar",
      name: "Startup Bihar",
      logoSrc: startupBiharLogo,
    },
    {
      id: "dpiit-startup-india",
      name: "DPIIT Startup India",
      logoSrc: dpiitLogo,
    },
    {
      id: "dept-industries-bihar",
      name: "Department of Industries Bihar",
      logoSrc: deptIndustriesLogo,
    },
    {
      id: "cimp",
      name: "CIMP",
      logoSrc: cimpLogo,
    },
    {
      id: "cimp-biif",
      name: "CIMP - BIIF",
      logoSrc: cimpBiifLogo,
    },
    {
      id: "ic-iit-patna",
      name: "IC IIT Patna",
      logoSrc: iitPatnaLogo,
    },
    {
      id: "msme",
      name: "Ministry of MSME",
      logoSrc: msmeLogo,
    },
    {
      id: "aic-aim",
      name: "Atal Incubation Centre",
      logoSrc: aicLogo,
    },
    {
      id: "ecell-mce-motihari",
      name: "E-Cell MCE Motihari",
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
      <div className="relative w-full overflow-hidden py-4">
        
        {/* Left & Right Gradient Edge Fades */}
        <div className="absolute left-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-r from-[#070707] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 inset-y-0 w-16 sm:w-28 bg-gradient-to-l from-[#070707] to-transparent z-10 pointer-events-none" />

        {/* Marquee Track */}
        <div className="flex animate-marquee-scroll space-x-5 sm:space-x-7 items-center hover:[animation-play-state:paused]">
          {marqueeItems.map((org, index) => (
            <div
              key={`${org.id}-${index}`}
              className="group shrink-0 w-44 sm:w-56 h-24 sm:h-28 rounded-2xl bg-white p-3.5 sm:p-5 flex items-center justify-center shadow-lg border border-white/80 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer overflow-hidden"
              title={org.name}
            >
              <img
                src={org.logoSrc}
                alt={org.name}
                className="max-h-full max-w-full object-contain filter contrast-[1.03] group-hover:scale-105 transition-transform duration-300"
                loading="lazy"
              />
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};
