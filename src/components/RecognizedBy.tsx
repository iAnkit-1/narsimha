import React from "react";
import { ShieldCheck } from "lucide-react";

interface OrganizationLogo {
  id: string;
  name: string;
  department: string;
  tag: string;
  authority: string;
  accentColor: string;
  badgeBg: string;
  logoSvg: React.ReactNode;
}

export const RecognizedBy: React.FC = () => {
  const organizations: OrganizationLogo[] = [
    {
      id: "startup-india",
      name: "STARTUP INDIA",
      department: "DPIIT Recognized",
      tag: "DPIIT / GOVT. OF INDIA",
      authority: "Department for Promotion of Industry and Internal Trade",
      accentColor: "#FF7711",
      badgeBg: "bg-[#FF7711]/15 border-[#FF7711]/30 text-[#FF7711]",
      logoSvg: (
        <svg viewBox="0 0 120 120" className="w-9 h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="56" stroke="#FF7711" strokeWidth="3" fill="#181818" />
          <path d="M60 22L72 46H48L60 22Z" fill="#FF7711" />
          <path d="M42 54H78L60 90L42 54Z" fill="#06B6D4" />
          <circle cx="60" cy="54" r="7" fill="#FFFFFF" />
        </svg>
      ),
    },
    {
      id: "startup-bihar",
      name: "STARTUP BIHAR",
      department: "Dept. of Industries",
      tag: "GOVT. OF BIHAR",
      authority: "Department of Industries, Government of Bihar",
      accentColor: "#10B981",
      badgeBg: "bg-[#10B981]/15 border-[#10B981]/30 text-[#10B981]",
      logoSvg: (
        <svg viewBox="0 0 120 120" className="w-9 h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="56" stroke="#10B981" strokeWidth="3" fill="#181818" />
          <path d="M60 25C48 35 40 50 40 68C40 82 50 92 60 95C70 92 80 82 80 68C80 50 72 35 60 25Z" fill="#10B981" fillOpacity="0.3" stroke="#10B981" strokeWidth="2.5" />
          <path d="M60 38V85M48 55C54 60 66 60 72 55M52 70C56 74 64 74 68 70" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: "aic-bihar-vidyapith",
      name: "AIC BIHAR VIDYAPITH",
      department: "Atal Incubation Centre",
      tag: "AIM / NITI AAYOG SUPPORTED",
      authority: "Atal Incubation Centre - Bihar Vidyapith",
      accentColor: "#38BDF8",
      badgeBg: "bg-[#38BDF8]/15 border-[#38BDF8]/30 text-[#38BDF8]",
      logoSvg: (
        <svg viewBox="0 0 120 120" className="w-9 h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="56" stroke="#38BDF8" strokeWidth="3" fill="#181818" />
          <rect x="35" y="42" width="50" height="42" rx="6" stroke="#38BDF8" strokeWidth="2.5" fill="#38BDF8" fillOpacity="0.2" />
          <path d="M48 64L57 73L74 52" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M60 26L78 38H42L60 26Z" fill="#38BDF8" />
        </svg>
      ),
    },
    {
      id: "atal-incubation",
      name: "ATAL INCUBATION CENTRE",
      department: "Atal Innovation Mission",
      tag: "AIM ECOSYSTEM",
      authority: "NITI Aayog Atal Innovation Mission Incubator",
      accentColor: "#F59E0B",
      badgeBg: "bg-[#F59E0B]/15 border-[#F59E0B]/30 text-[#F59E0B]",
      logoSvg: (
        <svg viewBox="0 0 120 120" className="w-9 h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="56" stroke="#F59E0B" strokeWidth="3" fill="#181818" />
          <circle cx="60" cy="60" r="28" stroke="#F59E0B" strokeWidth="2" strokeDasharray="4 4" />
          <path d="M60 30V40M60 80V90M30 60H40M80 60H90" stroke="#F59E0B" strokeWidth="3" strokeLinecap="round" />
          <path d="M52 52L68 68M68 52L52 68" stroke="#FFFFFF" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: "niti-aayog",
      name: "NITI AAYOG",
      department: "National Institution for Transforming India",
      tag: "GOVT. OF INDIA",
      authority: "Premier Policy Think Tank, Government of India",
      accentColor: "#A855F7",
      badgeBg: "bg-[#A855F7]/15 border-[#A855F7]/30 text-[#A855F7]",
      logoSvg: (
        <svg viewBox="0 0 120 120" className="w-9 h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="56" stroke="#A855F7" strokeWidth="3" fill="#181818" />
          <circle cx="60" cy="60" r="22" fill="#A855F7" fillOpacity="0.25" stroke="#A855F7" strokeWidth="2" />
          <circle cx="60" cy="60" r="6" fill="#FFFFFF" />
          <path d="M60 24V34M60 86V96M24 60H34M86 60H96M35 35L42 42M78 78L85 85M35 85L42 78M78 42L85 35" stroke="#A855F7" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      ),
    },
    {
      id: "msme",
      name: "MINISTRY OF MSME",
      department: "Micro, Small & Medium Enterprises",
      tag: "GOVT. OF INDIA",
      authority: "Ministry of MSME, Government of India",
      accentColor: "#EC4899",
      badgeBg: "bg-[#EC4899]/15 border-[#EC4899]/30 text-[#EC4899]",
      logoSvg: (
        <svg viewBox="0 0 120 120" className="w-9 h-9" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="60" cy="60" r="56" stroke="#EC4899" strokeWidth="3" fill="#181818" />
          <path d="M36 78V48L60 34L84 48V78L60 92L36 78Z" stroke="#EC4899" strokeWidth="2.5" fill="#EC4899" fillOpacity="0.2" />
          <path d="M60 48V76M46 56L74 68M46 68L74 56" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        </svg>
      ),
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
              className="group flex items-center space-x-4 px-5 sm:px-6 py-4 rounded-2xl bg-[#111111] border border-white/10 hover:border-[#FF7711]/60 transition-all duration-300 shadow-xl shrink-0 w-[290px] sm:w-[330px] cursor-pointer"
            >
              {/* Logo Emblem Icon */}
              <div className="shrink-0 transform group-hover:scale-110 transition-transform duration-300">
                {org.logoSvg}
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
